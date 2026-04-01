'use client'

import { useState } from 'react'
import styles from './DevisPage.module.css'

export default function DevisPage() {
  const [form, setForm] = useState({
    nom: '', telephone: '', email: '',
    depart: '', arrivee: '', service: 'demenagement-residentiel',
    date: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h2>Demande envoyée</h2>
          <p>Merci ! Un conseiller vous rappellera dans les plus brefs délais.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.label}>Devis gratuit</span>
          <h1>Demandez votre<br /><em>devis personnalisé</em></h1>
          <p className={styles.infoDesc}>
            Remplissez ce formulaire, un conseiller vous rappelle rapidement
            pour évaluer votre projet et construire un devis adapté.
          </p>
          <ul className={styles.infoList}>
            <li>Devis gratuit et sans engagement</li>
            <li>Réponse rapide</li>
            <li>Accompagnement de A à Z</li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} id="devis-form">
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="nom">Nom complet *</label>
              <input className="form-input" type="text" name="nom" id="nom" required value={form.nom} onChange={handleChange} placeholder="Jean Dupont" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="telephone">Téléphone *</label>
              <input className="form-input" type="tel" name="telephone" id="telephone" required value={form.telephone} onChange={handleChange} placeholder="06 12 34 56 78" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="email" name="email" id="email" value={form.email} onChange={handleChange} placeholder="jean@email.com" />
          </div>
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="depart">Ville de départ *</label>
              <input className="form-input" type="text" name="depart" id="depart" required value={form.depart} onChange={handleChange} placeholder="Paris" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="arrivee">Ville d&apos;arrivée *</label>
              <input className="form-input" type="text" name="arrivee" id="arrivee" required value={form.arrivee} onChange={handleChange} placeholder="Lyon" />
            </div>
          </div>
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="service">Type de service</label>
              <select className="form-input" name="service" id="service" value={form.service} onChange={handleChange}>
                <option value="demenagement-residentiel">Déménagement résidentiel</option>
                <option value="demenagement-professionnel">Déménagement professionnel</option>
                <option value="demenagement-international">Déménagement international</option>
                <option value="emballage">Emballage</option>
                <option value="monte-meuble">Monte-meuble</option>
                <option value="garde-meuble">Garde-meuble</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="date">Date souhaitée</label>
              <input className="form-input" type="date" name="date" id="date" value={form.date} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message (optionnel)</label>
            <textarea className="form-textarea" name="message" id="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet..." />
          </div>
          <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%' }} disabled={status === 'loading'} id="devis-submit">
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
          {status === 'error' && (
            <p className={styles.error}>Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.</p>
          )}
        </form>
      </div>
    </div>
  )
}
