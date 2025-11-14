import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config for Outlook, Yahoo, etc.
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // where YOU receive the message
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <h2>New Message from your Portfolio Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
