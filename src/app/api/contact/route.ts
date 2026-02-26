import { NextResponse } from "next/server";

const ERROR_CODES = {
  MISSING_FIELDS: "MISSING_REQUIRED_FIELDS",
  INVALID_REQUEST: "INVALID_REQUEST",
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: ERROR_CODES.MISSING_FIELDS },
        { status: 400 }
      );
    }

    // TODO: Wire to peakengage.com backend API when endpoint is identified
    console.log("Contact form submission:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: ERROR_CODES.INVALID_REQUEST },
      { status: 400 }
    );
  }
}
