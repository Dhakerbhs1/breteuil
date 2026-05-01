'use client';

import { useEffect, useState, Suspense, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';

function PayerWidget() {
    const searchParams = useSearchParams();

    // Mode B — paramètres reçus depuis un lien email CRM
    const devisIdFromUrl = searchParams.get('devis_id') || searchParams.get('devisId') || '';
    const emailFromUrl = searchParams.get('email') || '';
    const apiFromUrl = searchParams.get('api') || '';
    const autoFromUrl = searchParams.get('auto') || '';
    const hostFromUrl = searchParams.get('host') || '';

    // Mode A — formulaire de saisie manuelle
    const [email, setEmail] = useState(emailFromUrl);
    const [devisId, setDevisId] = useState(devisIdFromUrl);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Si paramètres URL présents → lancer directement le widget (Mode B)
    const hasUrlParams = !!(devisIdFromUrl || emailFromUrl);

    useEffect(() => {
        if (hasUrlParams) setSubmitted(true);
    }, [hasUrlParams]);

    useEffect(() => {
        // Charger le CSS Diday Pay dynamiquement (évite les conflits CSS globaux)
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://pay.docu.day/css/main.css';
        link.type = 'text/css';
        link.id = 'diday-pay-css';
        if (!document.getElementById('diday-pay-css')) {
            document.head.appendChild(link);
        }

        // Injecter les overrides CSS pour le widget
        const style = document.createElement('style');
        style.id = 'diday-pay-overrides';
        style.textContent = `
            .diday-pay-app .p-5 { padding: 0rem !important; }
            .diday-pay-app .mt-5, .diday-pay-app .mt-6, .diday-pay-app .mt-8, .diday-pay-app .mt-10,
            .diday-pay-app .pt-5, .diday-pay-app .pt-6, .diday-pay-app .pt-8, .diday-pay-app .pt-10 {
                margin-top: 0.5rem !important; padding-top: 0.5rem !important;
            }
            .diday-pay-app .flex, .diday-pay-app .flex-row, .diday-pay-app form .flex, .diday-pay-app form > div {
                flex-direction: column !important; width: 100% !important;
            }
            .diday-pay-app .flex > *, .diday-pay-app form .flex > *, .diday-pay-app form input, .diday-pay-app form button {
                width: 100% !important; max-width: 100% !important;
            }
            .diday-pay-app button[type="submit"], .diday-pay-app form button {
                width: 100% !important; display: block !important;
            }
            .diday-pay-app .gap-2, .diday-pay-app .gap-3, .diday-pay-app .gap-4 {
                gap: 1rem !important;
            }
            @media (min-width: 992px) {
                .diday-pay-app .col-lg-3, .diday-pay-app .col-lg-4, .diday-pay-app .col-lg-6 {
                    flex: 0 0 100% !important; max-width: 100% !important;
                }
            }
            .diday-pay-app .col-md-3, .diday-pay-app .col-md-4, .diday-pay-app .col-md-6,
            .diday-pay-app .col-sm-6, .diday-pay-app .col-sm-12 {
                flex: 0 0 100% !important; max-width: 100% !important;
            }
            .diday-pay-app .row {
                flex-direction: column !important; align-items: center !important;
            }
            .diday-pay-app .card, .diday-pay-app .card-body {
                width: 100% !important; max-width: 100% !important;
            }
        `;
        if (!document.getElementById('diday-pay-overrides')) {
            document.head.appendChild(style);
        }

        return () => {
            const existing = document.getElementById('diday-pay-css');
            if (existing) document.head.removeChild(existing);
            const overrides = document.getElementById('diday-pay-overrides');
            if (overrides) document.head.removeChild(overrides);
        };
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !devisId.trim()) {
            setError('Merci de renseigner votre email et votre numéro de devis.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setError('Adresse email invalide.');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <>
            {/* Script widget — chargé en afterInteractive pour ne pas bloquer le rendu */}
            <Script src="https://pay.docu.day/js/main.js" strategy="afterInteractive" />

            <main style={{ minHeight: '100vh', background: '#f7fafc' }}>
                {/* ═══ HERO ═══ */}
                <section style={{
                    background: 'linear-gradient(135deg, #54210e 0%, #db5702 100%)',
                    height: '260px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center' as const,
                }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💳</div>
                        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            Régler mon déménagement
                        </h1>
                        <p style={{ fontSize: '1rem', opacity: 0.85 }}>
                            Accédez à votre espace de paiement sécurisé
                        </p>
                    </div>
                </section>

                {/* ═══ CONTENU PRINCIPAL ═══ */}
                <section style={{ padding: '3rem 2rem', minHeight: '500px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                        {!submitted ? (
                            /* ═══ MODE A : Formulaire email + devis ═══ */
                            <div style={{
                                maxWidth: '480px',
                                margin: '0 auto',
                                background: 'white',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                border: '1px solid #e8e8e8',
                            }}>
                                <h2 style={{
                                    fontSize: '1.4rem',
                                    color: '#54210e',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem',
                                    textAlign: 'center' as const,
                                }}>
                                    Accéder au paiement
                                </h2>
                                <p style={{
                                    color: '#666',
                                    fontSize: '0.9rem',
                                    textAlign: 'center' as const,
                                    marginBottom: '2rem',
                                }}>
                                    Renseignez votre email et votre numéro de devis pour accéder à votre espace de paiement.
                                </p>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            fontWeight: '600',
                                            color: '#333',
                                            marginBottom: '0.4rem',
                                            fontSize: '0.9rem',
                                        }}>
                                            Adresse email *
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            placeholder="votre@email.com"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '0.85rem 1rem',
                                                border: '1.5px solid #ddd',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                boxSizing: 'border-box' as const,
                                                transition: 'border-color 0.2s',
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#db5702'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{
                                            display: 'block',
                                            fontWeight: '600',
                                            color: '#333',
                                            marginBottom: '0.4rem',
                                            fontSize: '0.9rem',
                                        }}>
                                            Numéro de devis *
                                        </label>
                                        <input
                                            type="text"
                                            value={devisId}
                                            onChange={(e) => { setDevisId(e.target.value); setError(''); }}
                                            placeholder="Ex : 2025-0042"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '0.85rem 1rem',
                                                border: '1.5px solid #ddd',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                boxSizing: 'border-box' as const,
                                                transition: 'border-color 0.2s',
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#db5702'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>

                                    {error && (
                                        <p style={{ color: '#c0392b', fontSize: '0.875rem', margin: 0 }}>
                                            ⚠️ {error}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        style={{
                                            background: 'linear-gradient(135deg, #db5702, #b34700)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '10px',
                                            padding: '1rem',
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            marginTop: '0.5rem',
                                        }}
                                    >
                                        Accéder au paiement →
                                    </button>

                                    <p style={{ textAlign: 'center' as const, color: '#888', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                                        🔒 Paiement 100% sécurisé — Vous n&apos;avez pas de numéro de devis ?{' '}
                                        <a href="#" style={{ color: '#db5702', fontWeight: '600' }}>
                                            Appelez-nous
                                        </a>
                                    </p>
                                </form>
                            </div>
                        ) : (
                            /* ═══ MODE B : Widget Diday Pay (rendu UNIQUEMENT avec paramètres) ═══ */
                            <div
                                id="diday-pay"
                                style={{ minHeight: '400px' }}
                                {...(devisId && { 'data-devis-id': devisId })}
                                {...(email && { 'data-email': email })}
                                {...(apiFromUrl && { 'data-api': apiFromUrl })}
                                {...(autoFromUrl && { 'data-auto': autoFromUrl })}
                                {...(hostFromUrl && { 'data-host': hostFromUrl })}
                            />
                        )}
                    </div>
                </section>

                {/* ═══ SECTION SÉCURITÉ ═══ */}
                <section style={{ padding: '3rem 2rem', background: 'white' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{
                            textAlign: 'center' as const,
                            fontSize: '1.5rem',
                            color: '#54210e',
                            marginBottom: '2rem',
                            fontWeight: '700',
                        }}>
                            Sécurité &amp; Confidentialité
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2rem',
                        }}>
                            {[
                                { icon: '🔐', title: 'Cryptage SSL', desc: 'Toutes les données sont cryptées' },
                                { icon: '🛡️', title: 'Paiement Sécurisé', desc: 'Conforme aux normes PCI-DSS' },
                                { icon: '🔒', title: 'Données Protégées', desc: 'Vos informations restent confidentielles' },
                            ].map((item) => (
                                <div key={item.title} style={{ textAlign: 'center' as const, padding: '1.5rem' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1rem', color: '#54210e', marginBottom: '0.4rem', fontWeight: '600' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default function PayerPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '1.2rem', color: '#666' }}>Chargement...</div>
            </div>
        }>
            <PayerWidget />
        </Suspense>
    );
}
