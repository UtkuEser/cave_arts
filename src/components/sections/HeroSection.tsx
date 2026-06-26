import Link from "next/link"

function AntlerMark({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M 100 280 L 100 190" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Left main branch */}
      <path d="M 100 190 Q 82 163, 62 112" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left upper tines */}
      <path d="M 62 112 L 32 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 58 L 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 32 58 L 44 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Left mid tine */}
      <path d="M 62 112 L 74 68" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 74 68 L 62 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Left lower tine */}
      <path d="M 82 152 L 52 128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right main branch (mirror) */}
      <path d="M 100 190 Q 118 163, 138 112" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right upper tines */}
      <path d="M 138 112 L 168 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 168 58 L 182 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 168 58 L 156 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Right mid tine */}
      <path d="M 138 112 L 126 68" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 126 68 L 138 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Right lower tine */}
      <path d="M 118 152 L 148 128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#F7F5F1" }}
    >
      {/* ─── Çok silik antler watermark — tam background ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AntlerMark
          className="absolute"
          style={{
            width: "480px",
            height: "640px",
            right: "5%",
            top: "50%",
            transform: "translateY(-48%)",
            color: "#111111",
            opacity: 0.028,
          }}
        />
      </div>

      {/* ─── Çok ince mimari çizgiler ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.012 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden="true"
        >
          <line x1="760" y1="0" x2="1440" y2="900" stroke="#111111" strokeWidth="1" />
          <line x1="960" y1="0" x2="1440" y2="560" stroke="#111111" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ─── İçerik ─── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 w-full items-center">

          {/* ── Sol: metin ── */}
          <div>
            {/* Etiket */}
            <p
              className="font-sans font-medium fade-up"
              style={{ color: "#C9A86C", fontSize: "10px", letterSpacing: "0.45em", marginBottom: "52px" }}
            >
              CAVEARTS I.P.D.C.
            </p>

            {/* Başlık */}
            <div className="fade-up fade-up-d1" style={{ marginBottom: "40px" }}>
              <h1
                className="font-serif font-light block"
                style={{
                  color: "#111111",
                  fontSize: "clamp(3.6rem, 7.5vw, 8.5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.9,
                }}
              >
                DEĞER ÜRETEN
              </h1>
              <h1
                className="font-serif font-light block"
                style={{
                  color: "#111111",
                  fontSize: "clamp(3.6rem, 7.5vw, 8.5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.9,
                  opacity: 0.28,
                }}
              >
                PROJELER
              </h1>
            </div>

            {/* Gold çizgi */}
            <div
              className="fade-up fade-up-d2"
              style={{ width: "48px", height: "1px", backgroundColor: "#C9A86C", marginBottom: "36px" }}
            />

            {/* Açıklama */}
            <p
              className="font-sans font-light fade-up fade-up-d2"
              style={{
                color: "#4A4845",
                fontSize: "15px",
                lineHeight: 1.95,
                maxWidth: "460px",
                marginBottom: "56px",
              }}
            >
              CaveArts, gayrimenkul ve yatırım projelerini uluslararası vizyonla geliştiren, doğru lokasyon ve güvenilir yatırım modelleriyle projelere değer kazandıran proje geliştirme şirketidir.
            </p>

            {/* CTA butonları */}
            <div className="flex flex-wrap items-center gap-4 fade-up fade-up-d3">
              <Link href="/projeler" className="btn-dark">
                PROJELERİ İNCELE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/iletisim" className="btn-outline-gold">
                YATIRIM DANIŞMANI İLE GÖRÜŞ
              </Link>
            </div>
          </div>

          {/* ── Sağ: mimari görsel panel ── */}
          <div className="relative hidden lg:block">
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#EDEBE8",
                maxHeight: "600px",
              }}
            >
              {/* Antler panelin içinde */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: 0.12, color: "#111111" }}
              >
                <AntlerMark className="w-[52%] h-auto" />
              </div>

              {/* Çok ince mimari grid */}
              <div
                className="absolute inset-0"
                style={{
                  opacity: 0.06,
                  backgroundImage:
                    "linear-gradient(rgba(17,17,17,1) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,1) 1px, transparent 1px)",
                  backgroundSize: "55px 55px",
                }}
              />

              {/* Alt silinme */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "35%",
                  background: "linear-gradient(to bottom, transparent, rgba(237,235,232,0.55))",
                }}
              />

              {/* Gold köşe aksanları */}
              <div className="absolute top-0 right-0" style={{ width: "40px", height: "40px" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "1px", backgroundColor: "rgba(201,168,108,0.65)" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "100%", backgroundColor: "rgba(201,168,108,0.65)" }} />
              </div>
              <div className="absolute bottom-0 left-0" style={{ width: "40px", height: "40px" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "1px", backgroundColor: "rgba(201,168,108,0.65)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "1px", height: "100%", backgroundColor: "rgba(201,168,108,0.65)" }} />
              </div>

              {/* Sol kenar gold çizgi */}
              <div
                className="absolute top-0 left-0 bottom-0"
                style={{ width: "1px", background: "linear-gradient(to bottom, transparent, rgba(201,168,108,0.3) 40%, rgba(201,168,108,0.3) 60%, transparent)" }}
              />

              {/* Alt etiket */}
              <div
                className="absolute bottom-7 right-7"
                style={{ opacity: 0.35 }}
              >
                <p
                  className="font-sans font-medium"
                  style={{ color: "#111111", fontSize: "8px", letterSpacing: "0.45em" }}
                >
                  ULUSLARARASI PROJE GELİŞTİRME
                </p>
              </div>
            </div>

            {/* Ofsete alınmış süsleme çerçevesi */}
            <div
              className="absolute -z-10"
              style={{
                bottom: "-12px",
                right: "-12px",
                width: "100%",
                height: "100%",
                border: "1px solid rgba(201,168,108,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── Scroll göstergesi ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none">
        <span
          className="font-sans font-medium"
          style={{ color: "rgba(17,17,17,0.2)", fontSize: "8px", letterSpacing: "0.35em" }}
        >
          KEŞFET
        </span>
        <div
          className="animate-bounce"
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, rgba(201,168,108,0.5), transparent)",
          }}
        />
      </div>
    </section>
  )
}
