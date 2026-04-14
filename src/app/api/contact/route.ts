import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 }
      );
    }

    // Honeypot check
    if (result.data.honeypot) {
      // Silently accept but don't process (bot submission)
      return NextResponse.json({ success: true });
    }

    const { name, organization, email, subject, message } = result.data;

    await resend.emails.send({
      from: "UTCLA Contact Form <contact@utcla.org>",
      to: "utcla@proton.me",
      replyTo: email,
      subject: `[UTCLA Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        organization ? `Organisation: ${organization}` : null,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
