import Link from "next/link"

const advantages = [
  {
    title: "Hemen Tapu",
    text: "Yatırım süreci tapu güvenliğiyle başlar.",
  },
  {
    title: "Ara Ödeme Yok",
    text: "Proje sürecinde yatırımcıyı zorlayan ara ödeme yapısı bulunmaz.",
  },
  {
    title: "Ek Ödeme Yok",
    text: "Gizli maliyet olmayan, net ve anlaşılır ödeme modeli.",
  },
  {
    title: "Taksitli Yatırım",
    text: "Ulaşılabilir ve planlı ödeme seçenekleri.",
  },
  {
    title: "Topraktan Giriş",
    text: "Doğru lokasyonda erken aşama yatırım fırsatı.",
  },
  {
    title: "Profesyonel Danışmanlık",
    text: "Yatırımcıya uçtan uca bilgi, takip ve süreç desteği.",
  },
]

export default function PrimeSection() {
  return (
    <section className="py-32 lg:py-40" style={{ backgroundColor: "#080C18" }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

          {/* Sol */}
          <div className="lg:pt-2">
            <p
              className="font-sans font-medium"
              style={{ color: "#C9A86C", fontSize: "9px", letterSpacing: "0.45em", marginBottom: "24px" }}
            >
              CAVEARTS PRIME
            </p>

            <h2
              className="font-serif font-light"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                marginBottom: "28px",
              }}
            >
              CaveArts Prime ile Gayrimenkul Yatırımı
            </h2>

            <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A86C", marginBottom: "28px" }} />

            <p
              className="font-sans font-light"
              style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px", lineHeight: 2.0, marginBottom: "40px" }}
            >
              Arsa payı, topraktan satış, tapulu yatırım ve taksitli ödeme modelleriyle gayrimenkul yatırımlarını daha ulaşılabilir, planlı ve güvenilir hale getiren CaveArts markasıdır.
            </p>

            <Link href="/cavearts-prime" className="link-gold">
              DETAYLARI İNCELE
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Sağ — 2×3 kart grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ border: "1px solid rgba(201,168,108,0.1)" }}
          >
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="prime-card"
                style={{
                  borderRight: (i % 3 !== 2) ? "1px solid rgba(201,168,108,0.1)" : "none",
                  borderBottom: (i < 3) ? "1px solid rgba(201,168,108,0.1)" : "none",
                }}
              >
                {/* Hover üst çizgi */}
                <div className="prime-card-topline" />

                {/* Numara */}
                <p
                  className="font-sans font-medium"
                  style={{ color: "rgba(201,168,108,0.35)", fontSize: "9px", letterSpacing: "0.2em", marginBottom: "16px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>

                {/* Başlık */}
                <h3
                  className="font-serif font-light"
                  style={{ color: "rgba(255,255,255,0.82)", fontSize: "17px", letterSpacing: "0.01em", marginBottom: "10px" }}
                >
                  {adv.title}
                </h3>

                {/* Metin */}
                <p
                  className="font-sans font-light"
                  style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", lineHeight: 1.7 }}
                >
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
