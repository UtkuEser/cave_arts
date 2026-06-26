interface PageHeroProps {
  label: string
  title: string
  description: string
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#080C18" }}
    >
      {/* ── Mimari grid dokusu ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── İçerik ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
        style={{ paddingTop: "clamp(100px, 14vw, 160px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}
      >
        {/* Kategori etiketi */}
        <p
          className="font-sans font-medium uppercase"
          style={{
            fontSize: "8.5px",
            letterSpacing: "0.5em",
            color: "#C9A86C",
            marginBottom: 28,
          }}
        >
          {label}
        </p>

        {/* Ana başlık */}
        <h1
          className="font-serif font-light"
          style={{
            fontSize: "clamp(2.6rem, 6vw, 6rem)",
            color: "#F7F5F1",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: 40,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>

        {/* Gold ayraç */}
        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "#C9A86C",
            marginBottom: 28,
          }}
        />

        {/* Açıklama */}
        <p
          className="font-sans font-light"
          style={{
            fontSize: "clamp(13px, 1.1vw, 15px)",
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 520,
          }}
        >
          {description}
        </p>
      </div>
    </section>
  )
}
