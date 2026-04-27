import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Here you would integrate with Resend or your email service
    // For now, we'll simulate a successful submission
    console.log('Contact form submission:', { name, email, phone, message });

    // In production, replace this with actual email sending via Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@movemj.com',
    //   to: 'contact@movemj.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone || 'Not provided'}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
