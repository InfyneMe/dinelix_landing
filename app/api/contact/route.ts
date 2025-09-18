import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  // Configure SMTP (example: Gmail App Password)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'infynetech@gmail.com', // e.g. your Gmail
      pass: 'rgemqqfvjesiwgjj', // Gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: `infynetech@gmail.com`,
      to: 'solution@infyne.in',
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Message from DineLix Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
