import { NextResponse } from "next/server";

const EMAIL_API_URL = "https://oldwebsite.peakengage.com/api/email/";
const EMAIL_RECIPIENT = "loyalty@peakengage.com";
const EMAIL_SUBJECT = "Contact us message from Peak Engage Website";

const ERROR_CODES = {
  MISSING_FIELDS: "MISSING_REQUIRED_FIELDS",
  INVALID_REQUEST: "INVALID_REQUEST",
  EMAIL_FAILED: "EMAIL_DELIVERY_FAILED",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: ERROR_CODES.MISSING_FIELDS },
        { status: 400 }
      );
    }

    const emailBody = [
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `\nComments: ${message}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    const emailPayload = {
      tolist: [EMAIL_RECIPIENT],
      subj: EMAIL_SUBJECT,
      body: emailBody,
    };

    const emailRes = await fetch(EMAIL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailPayload),
    });

    if (!emailRes.ok) {
      console.error("Email API error:", emailRes.status, await emailRes.text());
      return NextResponse.json(
        { error: ERROR_CODES.EMAIL_FAILED },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: ERROR_CODES.INVALID_REQUEST },
      { status: 400 }
    );
  }
}
