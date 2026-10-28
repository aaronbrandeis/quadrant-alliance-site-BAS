/**
 * Contact form endpoint.
 *
 * Receives a submission, validates it, and emails it on via Resend. Called
 * from src/components/ContactForm.tsx.
 *
 * Configuration lives entirely in environment variables so the destination
 * can change without a code edit. See .env.example.
 *
 *   RESEND_API_KEY  secret, from resend.com
 *   CONTACT_TO      where submissions land. Comma-separate for several.
 *   CONTACT_FROM    the sending address. Must be on a domain verified in
 *                   Resend, otherwise Resend rejects the send.
 *
 * If RESEND_API_KEY is absent this route returns a 503 and the form shows a
 * visible error with a fallback address. It never reports success for a
 * message it did not actually send.
 */

const MAX = { name: 200, company: 200, contact: 200, message: 5000 };

type Payload = {
  name?: unknown;
  company?: unknown;
  contact?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

function clean(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot. Hidden from people, irresistible to bots. Accept and discard
  // so the bot sees success and does not retry.
  if (clean(body.website, 100) !== "") {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const company = clean(body.company, MAX.company);
  const contact = clean(body.contact, MAX.contact);
  const message = clean(body.message, MAX.message);

  if (!name || !company || !contact) {
    return Response.json(
      { error: "Name, company, and contact details are all required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM;

  if (!apiKey || to.length === 0 || !from) {
    console.error(
      "Contact form not configured. Missing:",
      [
        !apiKey && "RESEND_API_KEY",
        to.length === 0 && "CONTACT_TO",
        !from && "CONTACT_FROM",
      ]
        .filter(Boolean)
        .join(", "),
    );
    return Response.json(
      { error: "The form is not configured yet." },
      { status: 503 },
    );
  }

  const lines = [
    `Name:     ${name}`,
    `Company:  ${company}`,
    `Contact:  ${contact}`,
    "",
    message || "(no message)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Website enquiry: ${company}`,
        text: lines,
        // So hitting reply goes to the person, not to the sending address.
        reply_to: contact.includes("@") ? contact : undefined,
      }),
    });

    if (!res.ok) {
      console.error("Resend rejected the send:", res.status, await res.text());
      return Response.json(
        { error: "We could not send that just now." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Contact send failed:", err);
    return Response.json(
      { error: "We could not send that just now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
