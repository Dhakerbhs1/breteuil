// ═══════ CRM — crm-move.com ═══════
// Envoi côté serveur uniquement (API Route)

const CRM_URL = "http://api.crm-move.com/setleads_externe_website";
const SOURCE = "breteuil";

export interface CRMLeadData {
  // Obligatoires
  nom_cli: string;
  tel_cli: string;
  email_cli: string;
  date_depart: string; // DD/MM/YYYY
  cp_depart: string;
  ville_depart: string;
  cp_arrivee: string;
  ville_arrivee: string;
  reference: number;
  source: string;
  // Optionnels
  etat?: string;
  cubage?: string;
  civilite_cli?: string;
  prenom_cli?: string;
  mob_cli?: string;
  adresse_depart?: string;
  adresse2_depart?: string;
  pays_depart?: string;
  etage_depart?: string;
  ascenceur_util_depart?: string;
  commentaire_depart?: string;
  date_arrivee?: string;
  adresse_arrivee?: string;
  adresse2_arrivee?: string;
  pays_arrivee?: string;
  etage_arrivee?: string;
  ascenceur_util_arrivee?: string;
  commentaire_arrivee?: string;
}

/**
 * Formate un numéro de téléphone brut → 10 chiffres sans espaces.
 * +33 6 12 34 56 78 → 0612345678
 */
export function formatPhone(raw: string): string {
  let cleaned = raw.replace(/[\s.\-()]/g, "");
  if (cleaned.startsWith("+33")) {
    cleaned = "0" + cleaned.slice(3);
  }
  return cleaned.slice(0, 10);
}

/**
 * Convertit une date HTML (YYYY-MM-DD) → format CRM (DD/MM/YYYY).
 */
export function formatDateInput(dateStr: string): string {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  if (!y || !m || !d) return dateStr;
  return `${d}/${m}/${y}`;
}

/**
 * Envoie un lead au CRM en FormData (application/x-www-form-urlencoded).
 */
export async function sendLeadToCRM(data: Partial<CRMLeadData>): Promise<{ success: boolean; response?: Record<string, unknown> }> {
  const payload: CRMLeadData = {
    nom_cli: data.nom_cli || "",
    tel_cli: data.tel_cli || "",
    email_cli: data.email_cli || "",
    date_depart: data.date_depart || "",
    cp_depart: data.cp_depart || "",
    ville_depart: data.ville_depart || "",
    cp_arrivee: data.cp_arrivee || "",
    ville_arrivee: data.ville_arrivee || "",
    reference: data.reference || Math.floor(Date.now() / 1000),
    source: data.source || SOURCE,
    ...data,
  };

  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, String(value));
    }
  }

  console.log("[CRM] Envoi lead:", payload.nom_cli, payload.email_cli);

  const res = await fetch(CRM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });

  const json = await res.json();
  console.log("[CRM] Réponse:", JSON.stringify(json));

  return { success: json.etat === "success", response: json };
}
