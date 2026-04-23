'use client'

import { useState } from 'react'
import AddressAutocomplete from '@/components/AddressAutocomplete'
import styles from './DevisPage.module.css'

const SERVICE_OPTIONS = [
  { value: 'demenagement-residentiel', label: 'Déménagement résidentiel' },
  { value: 'demenagement-professionnel', label: 'Déménagement professionnel' },
  { value: 'demenagement-international', label: 'Déménagement international' },
  { value: 'emballage', label: 'Emballage' },
  { value: 'monte-meuble', label: 'Monte-meuble' },
  { value: 'garde-meuble', label: 'Garde-meuble' },
]

export default function DevisForm() {
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    email: '',
    ville_depart: '',
    cp_depart: '',
    ville_arrivee: '',
    cp_arrivee: '',
    service: 'demenagement-residentiel',
    date: '',
    message: '',
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
            <li>Réponse dans les meilleurs délais</li>
            <li>Accompagnement de A à Z</li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} id="devis-form">
          {/* Ligne 1 — Villes avec autocomplétion */}
          <div className={styles.row}>
            <AddressAutocomplete
              label="Ville de départ *"
              placeholder="Tapez une ville..."
              required
              id="ville_depart"
              onSelect={(city, postcode) => setForm(f => ({ ...f, ville_depart: city, cp_depart: postcode }))}
            />
            <AddressAutocomplete
              label="Ville d'arrivée *"
              placeholder="Tapez une ville..."
              required
              id="ville_arrivee"
              onSelect={(city, postcode) => setForm(f => ({ ...f, ville_arrivee: city, cp_arrivee: postcode }))}
            />
          </div>

          {/* Ligne 2 — Nom + Téléphone */}
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

          {/* Ligne 3 — Email + Date */}
          <div className={styles.row}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email *</label>
              <input className="form-input" type="email" name="email" id="email" required value={form.email} onChange={handleChange} placeholder="jean@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="date">Date souhaitée *</label>
              <input className="form-input" type="date" name="date" id="date" required value={form.date} onChange={handleChange} />
            </div>
          </div>

          {/* Ligne 4 — Service */}
          <div className="form-group">
            <label className="form-label" htmlFor="service">Type de service</label>
            <select className="form-input" name="service" id="service" value={form.service} onChange={handleChange}>
              {SERVICE_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Ligne 5 — Message */}
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
