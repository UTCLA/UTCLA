import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
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

    // TODO: Integrate email service (e.g., SendGrid, Resend, etc.)
    // For now, log the submission
    console.log("Contact form submission:", {
      name: result.data.name,
      organization: result.data.organization,
      email: result.data.email,
      subject: result.data.subject,
      message: result.data.message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
