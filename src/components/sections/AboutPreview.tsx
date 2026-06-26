import Image from "next/image"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Proje Geliştirme",
    desc: "Fikirden yatırım sunumuna kadar projeleri stratejik olarak geliştirir.",
  },
  {
    num: "02",
    title: "Gayrimenkul",
    desc: "Konut, arsa, otel ve ticari alanlarda yatırım odaklı çözümler sunar.",
  },
  {
    num: "03",
    title: "Uluslararası Danışmanlık",
    desc: "Yerel projeleri global vizyonla değerlendirir ve stratejik danışmanlık sağlar.",
  },
  {
    num: "04",
    title: "Eğitim",
    desc: "Satış, yatırım ve proje geliştirme süreçlerinde profesyonel bilgi aktarımı sağlar.",
  },
  {
    num: "05",
    title: "Franchise",
    desc: "CaveArts sistemini farklı lokasyonlara taşıyan büyüme modeli oluşturur.",
  },
]

export default function AboutPreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F7F5F1" }}
    >
      {/* ── "CaveArts" watermark ── */}
      <div
        className="absolute top-0 left-0 pointer-events-none select-none w-full"
        style={{ overflow: "hidden" }}
        aria-hidden="true"
      >
        <span
          className="font-serif font-light block"
          style={{
            fontSize: "clamp(7rem, 21vw, 26rem)",
            lineHeight: 0.82,
            letterSpacing: "0.03em",
            color: "rgba(17,17,17,0.04)",
            whiteSpace: "nowrap",
            marginLeft: "-0.02em",
          }}
        >
          CaveArts
        </span>
      </div>

      {/* ── Sağ diagonal açık bant ── */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(106deg, transparent 0%, transparent 44%, rgba(238,240,244,0.42) 62%, rgba(238,240,244,0.42) 100%)",
        }}
      />

      {/* ── İçerik ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-40">

        {/* MADE IN TÜRKİYE etiketi */}
        <p
          className="font-sans font-medium uppercase mb-14 lg:mb-20"
          style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)" }}
        >
          MADE IN TÜRKİYE
        </p>

        {/* İki kolonlu grid — sol görsel sticky, sağ metin uzun */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Sol: görsel (sticky) ── */}
          <div className="lg:sticky lg:self-start" style={{ top: "6rem" }}>
            <Image
              src="/İmage/website-cavearts-mainpage.jpg"
              alt="CaveArts — Global Proje Geliştirme"
              width={1000}
              height={1061}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          {/* ── Sağ: metin ── */}
          <div style={{ maxWidth: 500 }}>

            {/* Ana başlık */}
            <h2
              className="font-sans font-normal uppercase"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.85rem)",
                letterSpacing: "0.24em",
                color: "#111111",
                marginBottom: 8,
                lineHeight: 1.3,
              }}
            >
              CAVEARTS I.P.D.C.
            </h2>

            {/* Alt küçük başlık */}
            <p
              className="font-sans font-light uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: "rgba(17,17,17,0.38)",
                marginBottom: 24,
              }}
            >
              Uluslararası Proje Geliştirme Şirketi
            </p>

            {/* İnce ayraç */}
            <div
              style={{
                width: 38,
                height: 1,
                backgroundColor: "#111111",
                marginBottom: 24,
              }}
            />

            {/* Kısa tanıtım metni */}
            <p
              className="font-sans font-light"
              style={{
                fontSize: 14,
                lineHeight: 2.0,
                color: "#4A4845",
                marginBottom: 36,
              }}
            >
              CaveArts, Türkiye'de ve uluslararası alanda proje geliştirme,
              gayrimenkul, danışmanlık, eğitim ve franchise süreçlerini tek bir
              stratejik yapı altında birleştiren uluslararası proje geliştirme
              şirketidir.
            </p>

            {/* ── CaveArts Ne Yapar? ── */}
            <p
              className="font-sans font-medium uppercase"
              style={{
                fontSize: "8px",
                letterSpacing: "0.36em",
                color: "rgba(17,17,17,0.35)",
                marginBottom: 16,
              }}
            >
              CaveArts Ne Yapar?
            </p>

            {/* Hizmet listesi */}
            <div>
              {services.map((svc) => (
                <div
                  key={svc.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.08)",
                    padding: "14px 0",
                  }}
                >
                  <div className="flex gap-5">
                    {/* Numara */}
                    <span
                      className="font-sans font-medium shrink-0"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        color: "#C9A86C",
                        paddingTop: 2,
                        minWidth: 18,
                      }}
                    >
                      {svc.num}
                    </span>

                    {/* Başlık + açıklama */}
                    <div>
                      <p
                        className="font-sans font-medium"
                        style={{
                          fontSize: "12.5px",
                          color: "#111111",
                          letterSpacing: "0.02em",
                          marginBottom: 4,
                          lineHeight: 1.3,
                        }}
                      >
                        {svc.title}
                      </p>
                      <p
                        className="font-sans font-light"
                        style={{
                          fontSize: "12px",
                          color: "rgba(17,17,17,0.48)",
                          lineHeight: 1.7,
                        }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Son çizgi */}
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
            </div>

            {/* Değerler — sadeleştirilmiş tek satır */}
            <p
              className="font-sans font-light uppercase"
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                color: "rgba(17,17,17,0.22)",
                marginTop: 24,
                marginBottom: 32,
              }}
            >
              Hız · Kalite · Güven · Vizyon
            </p>

            {/* CTA */}
            <Link href="/hakkimizda" className="btn-outline-dark">
              Detaylı Bilgi
            </Link>
          </div>
        </div>
      </div>

      {/* ── BACK TO TOP sağ kenar ── */}
      <a
        href="#"
        className="absolute hidden lg:flex flex-col items-center"
        style={{
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          gap: 14,
          textDecoration: "none",
        }}
        aria-label="Sayfa başına dön"
      >
        <div style={{ width: 1, height: 52, backgroundColor: "rgba(17,17,17,0.15)" }} />
        <span
          className="font-sans font-medium uppercase select-none"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            fontSize: "7px",
            letterSpacing: "0.32em",
            color: "rgba(17,17,17,0.28)",
          }}
        >
          BACK TO TOP
        </span>
        <div style={{ width: 1, height: 52, backgroundColor: "rgba(17,17,17,0.15)" }} />
      </a>
    </section>
  )
}
