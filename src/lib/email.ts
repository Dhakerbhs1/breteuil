// ═══════ EMAIL — Resend API ═══════
// Envoi côté serveur uniquement (API Route)

const RESEND_API_KEY = "re_dbpMYQvr_DARW4M2goStTX4wWRfZ9US1o";
const FROM = "hello@kontesh.com";
const TO = "contact@breteuil-demenagement.fr";
const BCC = "dhaker.bhsalah@gmail.com";

interface LeadEmailData {
  source: string;
  nom: string;
  telephone: string;
  email: string;
  service?: string;
  ville_depart?: string;
  cp_depart?: string;
  ville_arrivee?: string;
  cp_arrivee?: string;
  date?: string;
  message?: string;
}

/**
 * Génère un tableau HTML propre à partir des données du lead.
 */
function buildEmailHTML(data: LeadEmailData): string {
  const rows: [string, string][] = [];

  rows.push(["Source", data.source]);
  rows.push(["Nom", data.nom]);
  rows.push(["Téléphone", data.telephone]);
  rows.push(["Email", data.email]);
  if (data.service) rows.push(["Service", data.service]);
  if (data.ville_depart) rows.push(["Ville de départ", `${data.ville_depart}${data.cp_depart ? ` (${data.cp_depart})` : ""}`]);
  if (data.ville_arrivee) rows.push(["Ville d'arrivée", `${data.ville_arrivee}${data.cp_arrivee ? ` (${data.cp_arrivee})` : ""}`]);
  if (data.date) rows.push(["Date souhaitée", data.date]);
  if (data.message) rows.push(["Message", data.message]);

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;font-weight:600;border-bottom:1px solid #eee;color:#333;white-space:nowrap;">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #eee;color:#555;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:'Inter',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="background:#54210e;padding:24px 28px;">
        <h1 style="color:#db5702;font-size:18px;margin:0;">🚚 Nouveau lead — Breteuil Déménagement</h1>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${tableRows}
        </table>
        <div style="margin-top:24px;padding:16px;background:#fef7f2;border-radius:8px;font-size:13px;color:#666;">
          <p style="margin:0;">Ce lead a été envoyé depuis le site <strong>breteuil-demenagement.fr</strong>.</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Envoie une notification email via Resend API (fetch direct, pas de SDK).
 */
export async function sendLeadNotification(data: LeadEmailData): Promise<{ success: boolean }> {
  const subject = `🚚 Nouveau lead ${data.source} — ${data.nom}`;
  const html = buildEmailHTML(data);

  console.log("[EMAIL] Envoi:", data.nom, data.email, "→", TO);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      bcc: [BCC],
      subject,
      html,
    }),
  });

  const json = await res.json();
  console.log("[EMAIL] Réponse:", JSON.stringify(json));

  return { success: res.ok };
}
