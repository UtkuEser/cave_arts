import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const areas = [
  {
    num: "01",
    title: "Konut Projeleri",
    description:
      "Yaşam kalitesi, lokasyon ve yatırım değeri odağında geliştirilen konut projeleri.",
  },
  {
    num: "02",
    title: "Arsa ve Arazi Yatırımları",
    description:
      "Gelişim potansiyeli taşıyan bölgelerde uzun vadeli değer üretmeye yönelik arsa ve arazi fırsatları.",
  },
  {
    num: "03",
    title: "Otel ve Turizm Projeleri",
    description:
      "Turizm potansiyeli yüksek lokasyonlarda konaklama ve yatırım odaklı proje yapıları.",
  },
  {
    num: "04",
    title: "Ticari Gayrimenkul",
    description:
      "İş, hizmet ve yatırım ihtiyaçlarına yönelik ticari alanlar ve karma kullanım projeleri.",
  },
]

const principles = [
  {
    title: "Stratejik Lokasyon",
    desc: "Gayrimenkul değeri, bulunduğu lokasyonun bugünkü ve gelecekteki potansiyeliyle birlikte değerlendirilir.",
  },
  {
    title: "Yatırım Modeli",
    desc: "Her proje, yatırımcının beklentisi ve projenin yapısına uygun modelle ele alınır.",
  },
  {
    title: "Süreç Yönetimi",
    desc: "Danışmanlık, bilgilendirme ve takip süreçleri profesyonel bir yapı içinde yürütülür.",
  },
]

const highlights = ["Lokasyon Analizi", "Proje Potansiyeli", "Yatırım Perspektifi"]

export default function GayrimenkulPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#080C18", minHeight: 560 }}
        >
          {/* Blueprint major grid — shifted scale for variety */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Sub-grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.016,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Atmospheric gradient — origin left for this page */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(8,20,55,0.7) 0%, transparent 55%), linear-gradient(160deg, rgba(12,20,42,0.3) 0%, rgba(8,12,24,0) 100%)",
            }}
          />
          {/* Lokasyon çizgileri — diagonal soft lines */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.045,
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent, transparent 59px, rgba(201,168,108,0.6) 59px, rgba(201,168,108,0.6) 60px)",
            }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(110px, 14vw, 168px)",
              paddingBottom: "clamp(68px, 9vw, 108px)",
            }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.5em",
                color: "#C9A86C",
                marginBottom: 28,
              }}
            >
              GAYRİMENKUL
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6.4rem)",
                color: "#F7F5F1",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                marginBottom: 44,
                maxWidth: 860,
              }}
            >
              Gayrimenkul
            </h1>
            <div style={{ width: 48, height: 1, backgroundColor: "#C9A86C", marginBottom: 30 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 500,
              }}
            >
              CaveArts, konut, arsa, otel ve ticari gayrimenkul alanlarında yatırım
              odaklı profesyonel çözümler sunar.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL GİRİŞ ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
          {/* Faint geyik watermark — left side for variation */}
          <div
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 460, height: 460 }}
          >
            <Image
              src="/İmage/logo/Geyik-Siyah.png"
              alt=""
              fill
              style={{ objectFit: "contain", opacity: 0.025 }}
            />
          </div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(80px, 11vw, 136px)",
              paddingBottom: "clamp(80px, 11vw, 136px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-28 items-start">
              <h2
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(2rem, 4.4vw, 4rem)",
                  color: "#111111",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Gayrimenkulde
                <br />
                Değer Odaklı
                <br />
                Yaklaşım
              </h2>
              <div style={{ paddingTop: "clamp(0px, 1.5vw, 16px)" }}>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.95,
                    color: "#4A4845",
                    marginBottom: 36,
                  }}
                >
                  CaveArts, gayrimenkulü yalnızca alım satım süreci olarak değil; doğru
                  lokasyon, doğru model ve doğru yatırım perspektifiyle ele alınması
                  gereken stratejik bir değer alanı olarak görür. Her proje, yatırım
                  potansiyeli, kullanım senaryosu, pazar konumu ve uzun vadeli değer
                  üretimiyle birlikte değerlendirilir.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. GAYRİMENKUL ALANLARI — Portfolio index ───────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            <div
              className="flex flex-col lg:flex-row lg:items-end justify-between"
              style={{ marginBottom: 48 }}
            >
              <h2
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                  color: "#111111",
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                }}
              >
                Gayrimenkul Alanları
              </h2>
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "12.5px",
                  color: "rgba(17,17,17,0.38)",
                  letterSpacing: "0.02em",
                  marginTop: 8,
                }}
              >
                Portföy kategorileri
              </p>
            </div>

            {/* Editorial portfolio list — 3-column per row on desktop */}
            {areas.map((area) => (
              <div
                key={area.num}
                className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr]"
                style={{
                  borderTop: "1px solid rgba(17,17,17,0.07)",
                  paddingTop: 28,
                  paddingBottom: 28,
                  gap: "6px 28px",
                  alignItems: "baseline",
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: "8.5px",
                    letterSpacing: "0.2em",
                    color: "#C9A86C",
                    display: "block",
                    paddingTop: 4,
                  }}
                >
                  {area.num}
                </span>
                <h3
                  className="font-sans font-medium"
                  style={{
                    fontSize: "15px",
                    color: "#111111",
                    letterSpacing: "0.01em",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "13px",
                    color: "rgba(17,17,17,0.46)",
                    lineHeight: 1.75,
                  }}
                >
                  {area.description}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)" }} />
          </div>
        </section>

        {/* ── 4. GÖRSEL / LOKASYON BANTI ──────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#0C1628" }}
        >
          {/* City grid — warmer tint than proje-gelistirme */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.05,
              backgroundImage:
                "linear-gradient(rgba(180,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(180,215,255,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Diagonal lokasyon çizgileri */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.022,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 47px, rgba(201,168,108,0.8) 47px, rgba(201,168,108,0.8) 48px)",
            }}
          />
          {/* Depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 65% 45%, rgba(8,16,40,0.65) 0%, transparent 58%)",
            }}
          />
          {/* Geyik watermark — right */}
          <div
            className="absolute right-6 bottom-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 340, height: 340, opacity: 0.04 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.32rem)",
                  color: "rgba(247,245,241,0.5)",
                  letterSpacing: "0.005em",
                  maxWidth: 560,
                  lineHeight: 1.72,
                }}
              >
                Doğru lokasyon, doğru model ve doğru süreç;
                <br />
                gayrimenkulde kalıcı değerin temelidir.
              </p>
              <div
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: "#C9A86C",
                  marginTop: 28,
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 5. YATIRIMCIYA YAKLAŞIM — 3 prensip ────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)",
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 60,
                maxWidth: 600,
              }}
            >
              Doğru Proje, Doğru Yatırımcı,
              <br className="hidden lg:block" />
              Doğru Süreç
            </h2>

            {/* 3 columns with vertical dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {principles.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(17,17,17,0.08)" : "none",
                    borderTop: i > 0 ? "none" : "none",
                    paddingLeft: i > 0 ? "clamp(24px, 3.5vw, 52px)" : 0,
                    paddingRight:
                      i < principles.length - 1
                        ? "clamp(24px, 3.5vw, 52px)"
                        : 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <p
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.4em",
                      color: "rgba(17,17,17,0.28)",
                      marginBottom: 20,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "14.5px",
                      color: "#111111",
                      marginBottom: 12,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "13px",
                      color: "rgba(17,17,17,0.46)",
                      lineHeight: 1.82,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. KOYU STATEMENT ───────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#0A1020" }}
        >
          {/* Blueprint grid — slightly different scale */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.038,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* Geyik watermark — centered */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="relative hidden lg:block" style={{ width: 500, height: 500 }}>
              <Image
                src="/İmage/logo/Geyik-Beyaz.png"
                alt=""
                fill
                style={{ objectFit: "contain", opacity: 0.032 }}
              />
            </div>
          </div>

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{
              paddingTop: "clamp(80px, 11vw, 140px)",
              paddingBottom: "clamp(80px, 11vw, 140px)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 1,
                backgroundColor: "#C9A86C",
                margin: "0 auto",
                marginBottom: 40,
                opacity: 0.6,
              }}
            />
            <h2
              className="font-serif font-light mx-auto"
              style={{
                fontSize: "clamp(1.7rem, 3.4vw, 3.2rem)",
                color: "#F7F5F1",
                lineHeight: 1.12,
                letterSpacing: "-0.022em",
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              Gayrimenkulü Değer Üreten Bir
              <br className="hidden lg:block" />
              Yatırım Alanı Olarak Ele Alırız
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(247,245,241,0.36)",
                maxWidth: 480,
                marginBottom: 52,
              }}
            >
              CaveArts için gayrimenkul; yalnızca fiziksel bir varlık değil, doğru
              stratejiyle geliştirildiğinde uzun vadeli değer üreten bir yatırım
              yapısıdır.
            </p>

            {/* Highlight tags */}
            <div
              className="flex flex-wrap items-center justify-center"
              style={{ gap: "0 0" }}
            >
              {highlights.map((label, i) => (
                <span key={label} className="flex items-center">
                  <span
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.35em",
                      color: "rgba(247,245,241,0.28)",
                    }}
                  >
                    {label}
                  </span>
                  {i < highlights.length - 1 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 24,
                        height: 1,
                        backgroundColor: "rgba(201,168,108,0.3)",
                        margin: "0 20px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(72px, 9vw, 112px)",
              paddingBottom: "clamp(72px, 9vw, 112px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <div style={{ width: 36, height: 1, backgroundColor: "#C9A86C", marginBottom: 28 }} />
                <h2
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                    color: "#111111",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    maxWidth: 540,
                    marginBottom: 20,
                  }}
                >
                  Gayrimenkul Projelerini Birlikte Değerlendirelim
                </h2>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "rgba(17,17,17,0.44)",
                    maxWidth: 440,
                  }}
                >
                  CaveArts ekibi, gayrimenkul yatırımı ve proje portföyü hakkında
                  size uygun modeli değerlendirmek için iletişime geçebilir.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/projelerimiz"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#111111",
                    color: "#F7F5F1",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    padding: "16px 36px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Projeleri İncele
                </Link>
                <Link
                  href="/iletisim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(17,17,17,0.2)",
                    color: "rgba(17,17,17,0.6)",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    padding: "16px 36px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
