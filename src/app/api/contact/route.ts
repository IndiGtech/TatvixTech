import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ensure this runs only on server
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, mobile, company, title, inquiryType, description } = body;

        // Get server-only environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPassword = process.env.SMTP_PASSWORD;
        const smtpPort = process.env.SMTP_PORT;
        const contactEmail = process.env.CONTACT_EMAIL;

        // Check if environment variables are set
        if (!smtpHost || !smtpUser || !smtpPassword) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: Number(smtpPort) || 587,
            secure: Number(smtpPort) === 465, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${smtpUser}>`, // Sender address (must be authenticated user usually)
            replyTo: email,
            to: contactEmail || smtpUser, // Receiver address
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
