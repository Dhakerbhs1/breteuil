'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface AddressResult {
  city: string
  postcode: string
  label: string
}

interface Props {
  label: string
  placeholder?: string
  required?: boolean
  id: string
  onSelect: (city: string, postcode: string) => void
}

export default function AddressAutocomplete({ label, placeholder, required, id, onSelect }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<AddressResult[]>([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const search = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); return }
    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&type=municipality&limit=6`
      )
      const data = await res.json()
      const items: AddressResult[] = (data.features || []).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (f: any) => ({
          city: f.properties.city || f.properties.name || '',
          postcode: f.properties.postcode || '',
          label: f.properties.label || '',
        })
      )
      setResults(items)
      setOpen(items.length > 0)
    } catch {
      setResults([])
    }
  }, [])

  const handleChange = (value: string) => {
    setQuery(value)
    setSelected(false)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => search(value), 300)
  }

  const handleSelect = (item: AddressResult) => {
    setQuery(`${item.city} (${item.postcode})`)
    setSelected(true)
    setOpen(false)
    setResults([])
    onSelect(item.city, item.postcode)
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="form-group" ref={wrapperRef} style={{ position: 'relative' }}>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        className="form-input"
        type="text"
        id={id}
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => { if (results.length > 0 && !selected) setOpen(true) }}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
      {open && results.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'white',
          border: '1px solid var(--color-border, #ddd)',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          listStyle: 'none',
          padding: '0.25rem 0',
          margin: '4px 0 0',
          maxHeight: '220px',
          overflowY: 'auto',
        }}>
          {results.map((item, i) => (
            <li
              key={`${item.postcode}-${i}`}
              onClick={() => handleSelect(item)}
              style={{
                padding: '0.6rem 1rem',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#333',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f0eb')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <strong>{item.city}</strong>
              <span style={{ color: '#888', marginLeft: '0.5rem' }}>{item.postcode}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
