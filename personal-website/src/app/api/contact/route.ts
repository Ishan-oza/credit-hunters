import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    // Optional: send acknowledgement email if RESEND_API_KEY is set
    const resendKey = process.env.RESEND_API_KEY;
    const companyFrom = process.env.MAIL_FROM || "Mastersolis <no-reply@mastersolis.dev>";
    const notifyTo = process.env.NOTIFY_TO || process.env.MAIL_FROM;

    if (resendKey) {
      const resend = new Resend(resendKey);
      const subject = `Thanks for contacting Mastersolis, ${parsed.data.name}`;
      const reply = `Hi ${parsed.data.name},\n\nThanks for reaching out to Mastersolis Infotech! We received your message and will get back within 1 business day.\n\nYour message:\n${parsed.data.message}\n\n— Mastersolis Team`;

      try {
        await resend.emails.send({
          from: companyFrom!,
          to: parsed.data.email,
          subject,
          text: reply,
        });
        if (notifyTo) {
          await resend.emails.send({
            from: companyFrom!,
            to: notifyTo,
            subject: `New contact from ${parsed.data.name}`,
            text: `${parsed.data.name} <${parsed.data.email}> says:\n\n${parsed.data.message}`,
          });
        }
      } catch (e) {
        console.warn("Resend email failed", e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
