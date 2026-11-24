import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body || {};

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    await db.subscriber.upsert({
      where: { email: email.trim().toLowerCase() },
      update: {},
      create: { email: email.trim().toLowerCase() },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("subscribe error:", err);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }
}
