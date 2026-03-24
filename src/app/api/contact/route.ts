import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmailConfig } from '@/lib/email-config.server';

// Ensure this runs only on server
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, mobile, company, title, inquiryType, description } = body;

        // Get server-only configuration
        let emailConfig;
        try {
            emailConfig = validateEmailConfig();
        } catch (error) {
            console.error("Email configuration error:", error);
            return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
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

        // Email content
        const mailOptions = {
            from: `"${name}" <${emailConfig.user}>`, // Sender address (must be authenticated user usually)
            replyTo: email,
            to: emailConfig.contactEmail || emailConfig.user, // Receiver address
            subject: `New Inquiry: ${inquiryType} from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Company: ${company}
Title: ${title}
Inquiry Type: ${inquiryType}
Description: ${description}
            `,
            html: `
<h2>New Lead Inquiry</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mobile:</strong> ${mobile}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Title:</strong> ${title}</p>
<p><strong>Inquiry Type:</strong> ${inquiryType}</p>
<h3>Description:</h3>
<p>${description}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Inquiry received" });
    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
