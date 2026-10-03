import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmailConfig } from '@/lib/email-config.server';

// Ensure this runs only on server
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// --- Validation / sanitization helpers -------------------------------------

const MAX = {
    name: 120,
    email: 200,
    mobile: 40,
    company: 160,
    title: 120,
    inquiryType: 80,
    description: 5000,
};

// Reasonable email shape check (not a full RFC validator).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape user input before interpolating into the email HTML (prevents HTML/script injection).
function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Strip CR/LF (and trim) from any value placed into a mail header (prevents header injection).
function sanitizeHeader(value: string): string {
    return value.replace(/[\r\n]+/g, ' ').trim();
}

// --- Best-effort in-memory rate limit --------------------------------------
// NOTE: serverless instances are ephemeral and not shared, so this only throttles
// bursts hitting the same warm instance. For durable limits use a shared store
// (e.g. Upstash/Redis) — this is intentionally a lightweight first line of defence.
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = hits.get(ip);
    if (!entry || now > entry.resetAt) {
        hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
        return false;
    }
    entry.count += 1;
    return entry.count > RATE_LIMIT.max;
}

function getClientIp(request: Request): string {
    const fwd = request.headers.get('x-forwarded-for');
    if (fwd) return fwd.split(',')[0].trim();
    return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: Request) {
    try {
        const ip = getClientIp(request);
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again shortly.' },
                { status: 429 }
            );
        }

        let body: Record<string, unknown>;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ success: false, message: 'Invalid request body' }, { status: 400 });
        }

        // Honeypot: a filled botField means a bot. Pretend success, send nothing.
        if (typeof body.botField === 'string' && body.botField.trim() !== '') {
            return NextResponse.json({ success: true, message: 'Inquiry received' });
        }

        // Coerce everything to trimmed strings.
        const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
        const name = str(body.name);
        const email = str(body.email);
        const mobile = str(body.mobile);
        const company = str(body.company);
        const title = str(body.title);
        const inquiryType = str(body.inquiryType);
        const description = str(body.description);

        // Validate required fields, email format, and max lengths.
        const errors: string[] = [];
        if (!name) errors.push('Name is required');
        if (!email) errors.push('Email is required');
        else if (!EMAIL_RE.test(email)) errors.push('Email is invalid');
        if (!mobile) errors.push('Mobile is required');
        if (!inquiryType) errors.push('Inquiry type is required');

        const lengthChecks: [string, string, number][] = [
            ['name', name, MAX.name],
            ['email', email, MAX.email],
            ['mobile', mobile, MAX.mobile],
            ['company', company, MAX.company],
            ['title', title, MAX.title],
            ['inquiryType', inquiryType, MAX.inquiryType],
            ['description', description, MAX.description],
        ];
        for (const [field, value, max] of lengthChecks) {
            if (value.length > max) errors.push(`${field} exceeds ${max} characters`);
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { success: false, message: 'Validation failed', errors },
                { status: 400 }
            );
        }

        // Get server-only configuration
        let emailConfig;
        try {
            emailConfig = validateEmailConfig();
        } catch (error) {
            console.error('Email configuration error:', error);
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: emailConfig.host,
            port: Number(emailConfig.port) || 587,
            secure: Number(emailConfig.port) === 465, // true for 465, false for other ports
            auth: {
                user: emailConfig.user,
                pass: emailConfig.password,
            },
        });

        // Header-safe values (no CR/LF) for from/subject; reply-to is the validated email.
        const safeName = sanitizeHeader(name);
        const safeInquiry = sanitizeHeader(inquiryType);

        // HTML-escaped values for the email body.
        const e = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            mobile: escapeHtml(mobile),
            company: escapeHtml(company),
            title: escapeHtml(title),
            inquiryType: escapeHtml(inquiryType),
            description: escapeHtml(description).replace(/\n/g, '<br>'),
        };

        const mailOptions = {
            from: `"${safeName}" <${emailConfig.user}>`,
            replyTo: email,
            to: emailConfig.contactEmail || emailConfig.user,
            subject: `New Inquiry: ${safeInquiry} from ${safeName}`,
            text: `Name: ${name}
Email: ${email}
Mobile: ${mobile}
Company: ${company}
Title: ${title}
Inquiry Type: ${inquiryType}
Description: ${description}`,
            html: `
<h2>New Lead Inquiry</h2>
<p><strong>Name:</strong> ${e.name}</p>
<p><strong>Email:</strong> ${e.email}</p>
<p><strong>Mobile:</strong> ${e.mobile}</p>
<p><strong>Company:</strong> ${e.company}</p>
<p><strong>Title:</strong> ${e.title}</p>
<p><strong>Inquiry Type:</strong> ${e.inquiryType}</p>
<h3>Description:</h3>
<p>${e.description}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Inquiry received' });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
