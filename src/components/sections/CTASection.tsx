import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  return (
    <section
      id="kariyer"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      {/* ── Geyik watermark ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/İmage/logo/Geyik-Beyaz.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "center", opacity: 0.04 }}
        />
      </div>

      {/* ── Mimari grid dokusu ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.018,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── İçerik ── */}
      <div
        className="relative z-10"
        style={{ padding: "clamp(28px, 3vw, 40px) clamp(24px, 6vw, 80px)" }}
      >
        <div
          className="flex flex-col items-center text-center mx-auto"
          style={{ maxWidth: "680px" }}
        >
          {/* Gold ayraç */}
          <div style={{ width: 28, height: 1, backgroundColor: "#C8A96A", marginBottom: 18 }} />

          {/* Ana başlık */}
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 1.9rem)",
              color: "#FFFFFF",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            CaveArts Ekosisteminde Yer Alın
          </h2>

          {/* Alt metin */}
          <p
            className="font-sans font-light"
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.36)",
              maxWidth: 420,
              marginBottom: 22,
            }}
          >
            Birlikte değer üretmek ve geleceğin projelerinde yer almak için
            başvurunuzu iletebilirsiniz.
          </p>

          {/* Buton */}
          <Link
            href="/kariyer"
            className="font-sans font-semibold uppercase"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#C8A96A",
              color: "#0E0E0E",
              fontSize: "9px",
              letterSpacing: "0.2em",
              padding: "12px 28px",
              textDecoration: "none",
              transition: "background-color 0.3s",
              whiteSpace: "nowrap",
              marginBottom: 18,
            }}
          >
            Hemen Başvur
            <svg width="12" height="7" viewBox="0 0 14 8" fill="none" aria-hidden="true">
              <path d="M0 4H13M13 4L10 1M13 4L10 7" stroke="#0E0E0E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Alt küçük not */}
          <p
            className="font-sans font-light uppercase"
            style={{
              fontSize: "7px",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.14)",
            }}
          >
            CaveArts I.P.D.C. — Uluslararası Proje Geliştirme Şirketi
          </p>
        </div>
      </div>
    </section>
  )
}
