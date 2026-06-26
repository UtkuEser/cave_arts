import Image from "next/image"
import Link from "next/link"

interface PageCTAProps {
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function PageCTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#080C18" }}>
      <Image
        src="/İmage/logo/Geyik-Beyaz.png"
        alt=""
        fill
        style={{ objectFit: "contain", opacity: 0.04 }}
        aria-hidden="true"
      />
      <div
        className="relative z-10 text-center"
        style={{
          padding:
            "clamp(36px,4.5vw,56px) clamp(24px,6vw,80px)",
        }}
      >
        <div
          style={{
            width: 32,
            height: 1,
            backgroundColor: "#C9A86C",
            margin: "0 auto",
            marginBottom: 20,
          }}
        />
        <h2
          className="font-serif font-light mx-auto"
          style={{
            fontSize: "clamp(1.45rem,2.6vw,2.3rem)",
            color: "#F7F5F1",
            lineHeight: 1.1,
            maxWidth: 680,
            marginBottom: description ? 16 : 28,
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="font-sans font-light mx-auto"
            style={{
              fontSize: "14px",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.4)",
              maxWidth: 480,
              marginBottom: 28,
            }}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "#F7F5F1",
              color: "#111111",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "10px",
              letterSpacing: "0.2em",
              padding: "16px 36px",
              textDecoration: "none",
              transition: "background-color 0.3s",
            }}
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-outline-white">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
