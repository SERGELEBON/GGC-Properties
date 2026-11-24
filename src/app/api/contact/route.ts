import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body || {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Please write a short message." }, { status: 400 });
    }

    const saved = await db.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
        message: message.trim(),
      },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (err) {
    console.error("contact error:", err);
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
