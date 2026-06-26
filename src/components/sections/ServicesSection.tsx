import Link from "next/link"
import type { ReactNode } from "react"
import { serviceAreas } from "@/data/services"

const icons: Record<string, ReactNode> = {
  "proje-gelistirme": (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10.5" stroke="#C8A96A" strokeWidth="1" />
      <path d="M14 7V14L18.5 17" stroke="#C8A96A" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  gayrimenkul: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 24V11L14 4L24 11V24" stroke="#C8A96A" strokeWidth="1" strokeLinejoin="round" />
      <path d="M11 24V16H17V24" stroke="#C8A96A" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  ),
  danismanlik: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10.5" stroke="#C8A96A" strokeWidth="1" />
      <path d="M3.5 14H24.5M14 3.5C16.6 6.2 18 9.8 18 14C18 18.2 16.6 21.8 14 24.5C11.4 21.8 10 18.2 10 14C10 9.8 11.4 6.2 14 3.5Z" stroke="#C8A96A" strokeWidth="1" />
    </svg>
  ),
  egitim: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 6L25 11.5L14 17L3 11.5L14 6Z" stroke="#C8A96A" strokeWidth="1" strokeLinejoin="round" />
      <path d="M8 14V20C8 20 10.5 22.5 14 22.5C17.5 22.5 20 20 20 20V14" stroke="#C8A96A" strokeWidth="1" />
    </svg>
  ),
  franchise: (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="6" r="2.8" stroke="#C8A96A" strokeWidth="1" />
      <circle cx="6" cy="22" r="2.8" stroke="#C8A96A" strokeWidth="1" />
      <circle cx="22" cy="22" r="2.8" stroke="#C8A96A" strokeWidth="1" />
      <path d="M14 8.8V14M14 14L7 19M14 14L21 19" stroke="#C8A96A" strokeWidth="1" />
    </svg>
  ),
  "yatirim-modelleri": (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 23V6M4 23H24" stroke="#C8A96A" strokeWidth="1" strokeLinecap="round" />
      <path d="M7 19L12 13L16 16.5L22 8" stroke="#C8A96A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function ServicesSection() {
  return (
    <section id="hizmetlerimiz" className="relative overflow-hidden" style={{ backgroundColor: "#0E0E0E" }}>
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14"
        style={{ paddingTop: "clamp(80px, 9vw, 120px)", paddingBottom: "clamp(80px, 9vw, 120px)" }}
      >
        {/* Başlık */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
          style={{ marginBottom: 36 }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 12 }}
            >
              HİZMET ALANLARIMIZ
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.45rem, 2.6vw, 2.2rem)",
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Hizmet Alanlarımız
            </h2>
          </div>
          <p
            className="font-sans font-light"
            style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.36)", maxWidth: 340 }}
          >
            Proje fikirlerinden yatırım modellerine, gayrimenkul üretiminden
            global iş ağlarına kadar çok disiplinli bir yapı.
          </p>
        </div>

        {/* Servis kartları — 2 sütun mobil / 6 sütun desktop */}
        <div
          className="grid grid-cols-2 lg:grid-cols-6 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
        >
          {serviceAreas.map((svc) => (
            <Link
              key={svc.id}
              href={svc.href}
              className="service-card group flex flex-col"
              style={{ backgroundColor: "#0E0E0E", textDecoration: "none", padding: "22px 20px" }}
            >
              <div style={{ marginBottom: 14 }}>{icons[svc.id]}</div>
              <h3
                className="font-sans font-medium"
                style={{ fontSize: 12, color: "#FFFFFF", letterSpacing: "0.01em", marginBottom: 8, lineHeight: 1.35 }}
              >
                {svc.title}
              </h3>
              <p
                className="font-sans font-light"
                style={{ fontSize: 11.5, lineHeight: 1.75, color: "rgba(255,255,255,0.38)", marginBottom: 16, flex: 1 }}
              >
                {svc.desc}
              </p>
              <span
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: "7px", letterSpacing: "0.18em", color: "#C8A96A", fontWeight: 500 }}
              >
                DETAYLI BİLGİ
                <svg className="service-card-arrow" width="12" height="6" viewBox="0 0 14 7" fill="none" aria-hidden="true">
                  <path d="M0 3.5H12.5M12.5 3.5L9.5 0.5M12.5 3.5L9.5 6.5" stroke="#C8A96A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
