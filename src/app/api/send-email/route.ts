import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Here you can integrate any email service like EmailJS, Nodemailer, Resend, etc.
    // Example placeholder:
    console.log("📩 Received message:", { name, email, message });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error in send-email route:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
