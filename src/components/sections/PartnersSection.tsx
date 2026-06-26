"use client"

import { useState } from "react"
import { partners } from "@/data/partners"

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    /* Logo dosyası yoksa ya da yüklenemezse: sade text fallback */
    return (
      <span className="partner-logo-fallback">
        {name}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      onError={() => setFailed(true)}
      className="partner-logo"
      style={{
        maxWidth: 150,
        maxHeight: 48,
        width: "auto",
        height: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  )
}

export default function PartnersSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#111317" }}
    >
      <div
        aria-hidden="true"
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,108,0.2), transparent)",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-8 lg:px-14"
        style={{
          paddingTop: "clamp(48px, 5.5vw, 72px)",
          paddingBottom: "clamp(48px, 5.5vw, 72px)",
        }}
      >
        {/* Başlık */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
          style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 10 }}
            >
              İŞ ORTAKLARI
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.25rem, 2.2vw, 1.85rem)",
                color: "rgba(255,255,255,0.88)",
                lineHeight: 1.1,
                letterSpacing: "-0.018em",
              }}
            >
              Partnerlerimiz
            </h2>
          </div>
          <p
            className="font-sans font-light"
            style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.28)", maxWidth: 320 }}
          >
            CaveArts, güçlü markalar ve çözüm ortaklarıyla projelere çok yönlü değer kazandırır.
          </p>
        </div>

        {/* Logo bandı */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partner-cell"
            >
              <PartnerLogo name={partner.name} logo={partner.logo} />
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Alt not */}
        <p
          className="font-sans font-light text-center"
          style={{ fontSize: "9px", letterSpacing: "0.08em", color: "rgba(255,255,255,0.16)", marginTop: 20 }}
        >
          İş ortaklığı için{" "}
          <a
            href="/iletisim"
            style={{
              color: "rgba(255,255,255,0.3)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
            }}
          >
            iletişime geçin
          </a>
          .
        </p>
      </div>

      <style>{`
        /* ── Hücre ── */
        .partner-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: clamp(22px, 3vw, 32px) clamp(18px, 2.5vw, 28px);
          min-height: 96px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          border-right: 1px solid rgba(255,255,255,0.05);
          transition: background-color 0.3s ease;
          cursor: default;
        }

        /* Border: mobil 2 sütun */
        .partner-cell:nth-child(2n)       { border-right: none; }
        .partner-cell:nth-last-child(-n+2) { border-bottom: none; }

        /* Border: desktop 4 sütun */
        @media (min-width: 640px) {
          .partner-cell:nth-child(2n)        { border-right: 1px solid rgba(255,255,255,0.05); }
          .partner-cell:nth-last-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.05); }
          .partner-cell:nth-child(4n)        { border-right: none; }
          .partner-cell:nth-last-child(-n+4) { border-bottom: none; }
        }

        /* ── Logo — default: monokrom, muted ── */
        .partner-logo {
          filter: grayscale(1) invert(1);
          opacity: 0.5;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }

        /* ── Logo — hover / focus: orijinal renkler ── */
        .partner-cell:hover .partner-logo,
        .partner-cell:focus-within .partner-logo {
          filter: none;
          opacity: 1;
        }

        /* ── Hücre hover arka plan: çok hafif ── */
        .partner-cell:hover { background-color: rgba(255,255,255,0.02); }

        /* ── Ortak adı ── */
        .partner-name {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          text-align: center;
          line-height: 1.4;
          transition: color 0.3s ease;
          word-break: break-word;
          max-width: 140px;
        }

        .partner-cell:hover .partner-name,
        .partner-cell:focus-within .partner-name {
          color: rgba(255,255,255,0.55);
        }

        /* ── Fallback text (logo yüklenemezse) ── */
        .partner-logo-fallback {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: clamp(9px, 1vw, 11px);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          text-align: center;
          line-height: 1.5;
          max-width: 140px;
          word-break: break-word;
          transition: color 0.3s ease;
        }
        .partner-cell:hover .partner-logo-fallback { color: rgba(255,255,255,0.7); }
      `}</style>
    </section>
  )
}
