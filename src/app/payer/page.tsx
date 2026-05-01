'use client';

import { useEffect } from 'react';

export default function PayerPage() {

  useEffect(() => {
    // Charger le CSS Diday Pay
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

    // Charger le JS Diday Pay
    const oldScript = document.getElementById('diday-pay-js');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.src = 'https://pay.docu.day/js/main.js';
    script.id = 'diday-pay-js';
    document.body.appendChild(script);

    // Cleanup au démontage
    return () => {
      const css = document.getElementById('diday-pay-css');
      if (css) css.remove();
      const js = document.getElementById('diday-pay-js');
      if (js) js.remove();
      const overrides = document.getElementById('diday-pay-overrides');
      if (overrides) overrides.remove();
      document.querySelectorAll('[data-diday]').forEach(el => el.remove());
    };
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: '#f7fafc' }}>
      {/* ═══ HERO ═══ */}
      <section style={{
        background: 'linear-gradient(135deg, #54210e 0%, #db5702 100%)',
        padding: '5rem 1.5rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center' as const,
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.15)', borderRadius: '20px',
            padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 600,
            marginBottom: '1rem', backdropFilter: 'blur(4px)',
          }}>
            🔒 Paiement sécurisé
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: '700', marginBottom: '0.5rem' }}>
            Régler mon déménagement
          </h1>
          <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '420px', margin: '0 auto' }}>
            Accédez à votre espace de paiement sécurisé
          </p>
        </div>
      </section>

      {/* ═══ WIDGET DIDAY PAY ═══ */}
      <section style={{ padding: '3rem 1.5rem', minHeight: '400px' }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          border: '1px solid #e8e8e8',
        }}>
          <div id="diday-pay" style={{ minHeight: '300px' }}></div>
        </div>
      </section>

      {/* ═══ RÉASSURANCE ═══ */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { icon: '🔐', title: 'Cryptage SSL', desc: 'Connexion chiffrée de bout en bout' },
              { icon: '🛡️', title: 'PCI-DSS', desc: 'Conforme aux normes bancaires' },
              { icon: '💳', title: 'CB & Virement', desc: 'Visa, Mastercard, virement bancaire' },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: 'center' as const, padding: '1.25rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '0.95rem', color: '#54210e', marginBottom: '0.25rem', fontWeight: '600' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AIDE ═══ */}
      <section style={{ padding: '2rem 1.5rem 3rem', textAlign: 'center' as const }}>
        <p style={{ color: '#888', fontSize: '0.85rem', maxWidth: '460px', margin: '0 auto' }}>
          Besoin d&apos;aide ? Contactez-nous à{' '}
          <a href="mailto:contact@breteuil-demenagement.fr" style={{ color: '#db5702', fontWeight: 600 }}>
            contact@breteuil-demenagement.fr
          </a>
        </p>
      </section>
    </main>
  );
}
