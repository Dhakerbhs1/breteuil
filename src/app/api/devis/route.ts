import { NextResponse } from "next/server";
import { sendLeadToCRM, formatPhone, formatDateInput } from "@/lib/crm";
import { sendLeadNotification } from "@/lib/email";

const SERVICE_LABELS: Record<string, string> = {
  "demenagement-residentiel": "Déménagement résidentiel",
  "demenagement-professionnel": "Déménagement professionnel",
  "demenagement-international": "Déménagement international",
  "emballage": "Emballage professionnel",
  "monte-meuble": "Monte-meuble",
  "garde-meuble": "Garde-meuble",
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const serviceLabel = SERVICE_LABELS[data.service] || data.service || "Devis";

    // Vérification des champs obligatoires
    if (!data.nom || !data.telephone) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // CRM possible si on a villes + date
    const canCRM = !!(data.ville_depart && data.ville_arrivee && data.date);

    // Email — toujours envoyé
    const emailPromise = sendLeadNotification({
      source: "Devis",
      nom: data.nom || "",
      telephone: data.telephone || "",
      email: data.email || "",
      service: serviceLabel,
      ville_depart: data.ville_depart || "",
      cp_depart: data.cp_depart || "",
      ville_arrivee: data.ville_arrivee || "",
      cp_arrivee: data.cp_arrivee || "",
      date: data.date || "",
      message: data.message || "",
    });

    if (canCRM) {
      // CRM + Email en parallèle
      const crmPromise = sendLeadToCRM({
        nom_cli: data.nom || "",
        tel_cli: formatPhone(data.telephone || ""),
        email_cli: data.email || "",
        date_depart: formatDateInput(data.date || ""),
        cp_depart: data.cp_depart || "",
        ville_depart: data.ville_depart || "",
        cp_arrivee: data.cp_arrivee || "",
        ville_arrivee: data.ville_arrivee || "",
        reference: Math.floor(Date.now() / 1000),
        source: "breteuil",
        commentaire_depart: data.message || undefined,
      });

      const results = await Promise.allSettled([emailPromise, crmPromise]);
      console.log("[DEVIS] Résultats:", results.map((r) => r.status));
    } else {
      // Email seul (pas assez de données pour le CRM)
      await emailPromise;
      console.log("[DEVIS] Email seul envoyé (pas de CRM — champs manquants)");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DEVIS] Erreur:", err);
    return NextResponse.json(
      { error: "Erreur lors du traitement" },
      { status: 500 }
    );
  }
}
