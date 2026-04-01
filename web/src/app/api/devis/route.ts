import { NextResponse } from 'next/server'

const SERVICE_LABELS: Record<string, string> = {
  'demenagement-residentiel': 'Déménagement résidentiel',
  'demenagement-professionnel': 'Déménagement professionnel',
  'demenagement-international': 'Déménagement international',
  'emballage': 'Emballage professionnel',
  'monte-meuble': 'Monte-meuble',
  'garde-meuble': 'Garde-meuble',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nom, telephone, email, depart, arrivee, service, date, message } = body

    if (!nom || !telephone || !depart || !arrivee) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    const serviceLabel = SERVICE_LABELS[service] || service

    // TODO: integrate with actual email service (Resend) and CRM (Bigin)
    // For now, log the submission
    console.log('📬 Nouvelle demande de devis:', {
      nom,
      telephone,
      email,
      depart,
      arrivee,
      service: serviceLabel,
      date,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur API devis:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
