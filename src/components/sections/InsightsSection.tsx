import Link from "next/link"
import { insights } from "@/data/insights"

export default function InsightsSection() {
  return (
    <section id="haberler" className="relative" style={{ backgroundColor: "#F4F4F4", borderTop: "1px solid rgba(17,17,17,0.07)" }}>
      <div
        className="max-w-7xl mx-auto px-8 lg:px-14"
        style={{ paddingTop: "clamp(68px, 8vw, 100px)", paddingBottom: "clamp(68px, 8vw, 100px)" }}
      >
        {/* Başlık */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{ marginBottom: 48 }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)", marginBottom: 22 }}
            >
              HABERLER
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
                color: "#0E0E0E",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              CaveArts'tan Haberler
            </h2>
            <p
              className="font-sans font-light"
              style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 480, marginTop: 22 }}
            >
              CaveArts ekosisteminden proje geliştirme, yatırım, gayrimenkul
              ve global iş birliklerine dair güncel haberler.
            </p>
          </div>
          <Link
            href="/haberler"
            className="hidden lg:inline-flex items-center gap-3 font-sans font-medium uppercase shrink-0 transition-opacity duration-200 hover:opacity-50"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#0E0E0E", textDecoration: "none" }}
          >
            <span>Tüm Haberler</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden="true">
              <path d="M0 4H18M18 4L15 1M18 4L15 7" stroke="#0E0E0E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Makale kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {insights.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="insight-card group flex flex-col"
              style={{ textDecoration: "none" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", marginBottom: 18 }}>
                <div
                  className="insight-card-img absolute inset-0"
                  style={{ background: item.cardGradient }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      opacity: 0.04,
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />
                </div>
                <div className="absolute top-5 left-5">
                  <span
                    className="font-sans font-medium uppercase"
                    style={{ fontSize: "7.5px", letterSpacing: "0.24em", color: "#C8A96A" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <p
                className="font-sans font-light"
                style={{ fontSize: 10.5, letterSpacing: "0.06em", color: "rgba(17,17,17,0.38)", marginBottom: 12 }}
              >
                {item.date}
              </p>
              <h3
                className="font-serif font-normal"
                style={{
                  fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                  color: "#0E0E0E",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 14,
                }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans font-light"
                style={{ fontSize: 13.5, lineHeight: 1.85, color: "rgba(17,17,17,0.48)", marginBottom: 22, flex: 1 }}
              >
                {item.excerpt}
              </p>
              <span
                className="insight-card-link inline-flex items-center gap-2"
                style={{
                  fontSize: 9.5,
                  letterSpacing: "0.18em",
                  color: "#0E0E0E",
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(17,17,17,0.18)",
                  paddingBottom: 3,
                  alignSelf: "flex-start",
                }}
              >
                DEVAMINI OKU
              </span>
            </Link>
          ))}
        </div>

        {/* Mobilde "Tüm Haberler" */}
        <div className="lg:hidden flex justify-center" style={{ marginTop: 36 }}>
          <Link
            href="/haberler"
            className="inline-flex items-center gap-3 font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-50"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#0E0E0E", textDecoration: "none" }}
          >
            <span>Tüm Haberler</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden="true">
              <path d="M0 4H18M18 4L15 1M18 4L15 7" stroke="#0E0E0E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
