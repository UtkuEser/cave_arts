"use client"

import { useState } from "react"

const fieldStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(17,17,17,0.15)",
  padding: "12px 0",
  fontSize: "14px",
  color: "#111111",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  outline: "none",
  transition: "border-color 0.3s",
  appearance: "none",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "8px",
  letterSpacing: "0.3em",
  color: "rgba(17,17,17,0.4)",
  fontWeight: 500,
  textTransform: "uppercase",
  marginBottom: 4,
  fontFamily: "var(--font-inter), system-ui, sans-serif",
}

const selectOptions = [
  "Proje Geliştirme",
  "Gayrimenkul",
  "Uluslararası Danışmanlık",
  "Eğitim",
  "Franchise",
  "CaveArts Prime",
  "Projeler",
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          style={fieldStyle}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" style={labelStyle}>
          İlgi Alanı
        </label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          style={fieldStyle}
        >
          <option value="" disabled>
            Seçiniz
          </option>
          {selectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          style={{ ...fieldStyle, resize: "none" }}
        />
      </div>

      <div>
        <button
          type="submit"
          className="font-sans font-semibold uppercase"
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#111111",
            color: "#F7F5F1",
            fontSize: "10px",
            letterSpacing: "0.2em",
            padding: "16px 36px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
            alignSelf: "flex-start",
          }}
        >
          Gönder
        </button>
      </div>
    </form>
  )
}
