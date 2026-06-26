import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const scopeItems = [
  {
    num: "01",
    title: "Lokasyon ve Pazar Analizi",
    description:
      "Projenin bulunduğu bölge, hedef kitle ve yatırım potansiyeli analiz edilir.",
  },
  {
    num: "02",
    title: "Proje Konumlandırma",
    description:
      "Projenin pazardaki yeri, hedef yatırımcı profili ve marka dili belirlenir.",
  },
  {
    num: "03",
    title: "Yatırım Modeli Geliştirme",
    description:
      "Projeye uygun ödeme, satış ve yatırım modeli stratejik olarak kurgulanır.",
  },
  {
    num: "04",
    title: "Satış ve Sunum Stratejisi",
    description:
      "Projenin yatırımcıya ve pazara doğru şekilde sunulması için iletişim yapısı oluşturulur.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Analiz",
    desc: "Lokasyon, pazar ve yatırım hedefleri değerlendirilir.",
  },
  {
    num: "02",
    title: "Planlama",
    desc: "Proje modeli, hedef kitle ve satış stratejisi oluşturulur.",
  },
  {
    num: "03",
    title: "Konumlandırma",
    desc: "Projenin marka dili, değer önerisi ve yatırım hikayesi netleştirilir.",
  },
  {
    num: "04",
    title: "Yönetim",
    desc: "Satış, danışmanlık ve süreç takibi profesyonel şekilde yürütülür.",
  },
]

const differentiators = [
  {
    title: "Stratejik Bakış",
    desc: "Projeyi yalnızca bugünkü durumu ile değil, uzun vadeli değer potansiyeliyle ele alır.",
  },
  {
    title: "Kurumsal Sunum",
    desc: "Projenin yatırımcıya güven veren, net ve profesyonel bir yapı ile aktarılmasını sağlar.",
  },
  {
    title: "Sürdürülebilir Değer",
    desc: "Lokasyon, marka ve süreç yönetimiyle projenin kalıcı değer üretmesini hedefler.",
  },
]

export default function ProjeGelistirmePage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#080C18", minHeight: 580 }}
        >
          {/* Blueprint major grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.045,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Blueprint minor sub-grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.018,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          {/* Atmospheric depth gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 75% 55%, rgba(14,30,70,0.65) 0%, transparent 60%), linear-gradient(135deg, rgba(8,12,24,0) 0%, rgba(12,20,42,0.4) 100%)",
            }}
          />
          {/* Gold horizontal accent — right side */}
          <div
            className="absolute top-0 right-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              width: "38%",
              height: "100%",
              opacity: 0.055,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(201,168,108,1) 47px, rgba(201,168,108,1) 48px)",
            }}
          />

          {/* Content */}
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
              PROJE GELİŞTİRME
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
              Proje Geliştirme
            </h1>
            <div
              style={{ width: 48, height: 1, backgroundColor: "#C9A86C", marginBottom: 30 }}
            />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 500,
              }}
            >
              CaveArts, projeleri fikir aşamasından yatırımcıyla buluşma sürecine
              kadar stratejik bir yapı içinde geliştirir.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL MANIFESTO ─────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F5F1" }}>
          {/* Faint geyik watermark */}
          <div
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 500, height: 500 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain", opacity: 0.042, filter: "invert(1)" }}
            />
          </div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(80px, 11vw, 140px)", paddingBottom: "clamp(80px, 11vw, 140px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-28 items-start">
              <h2
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(2.2rem, 4.8vw, 4.4rem)",
                  color: "#111111",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                }}
              >
                Fikirden Projeye,
                <br />
                Projeden Değere
              </h2>
              <div style={{ paddingTop: "clamp(0px, 1.5vw, 18px)" }}>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: 15,
                    lineHeight: 1.95,
                    color: "#4A4845",
                    marginBottom: 36,
                  }}
                >
                  CaveArts, proje geliştirme süreçlerini yalnızca mimari veya satış
                  odaklı değerlendirmez. Lokasyon, pazar potansiyeli, yatırım modeli,
                  marka değeri ve satış organizasyonunu birlikte ele alarak projelerin
                  sürdürülebilir değer üretmesini hedefler.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. SCOPE — Editorial index list ────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(64px, 9vw, 112px)", paddingBottom: "clamp(64px, 9vw, 112px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10 lg:gap-20 items-start">
              {/* Left: narrow label */}
              <div style={{ paddingTop: 16 }}>
                <p
                  className="font-sans font-medium uppercase"
                  style={{
                    fontSize: "8.5px",
                    letterSpacing: "0.48em",
                    color: "rgba(17,17,17,0.28)",
                    lineHeight: 2,
                  }}
                >
                  PROJE GELİŞTİRME
                  <br />
                  KAPSAMI
                </p>
              </div>

              {/* Right: numbered editorial list */}
              <div>
                {scopeItems.map((item) => (
                  <div
                    key={item.num}
                    style={{
                      borderTop: "1px solid rgba(17,17,17,0.07)",
                      paddingTop: 26,
                      paddingBottom: 26,
                      display: "grid",
                      gridTemplateColumns: "40px 1fr 24px",
                      gap: "0 18px",
                      alignItems: "start",
                    }}
                  >
                    <span
                      className="font-sans font-medium"
                      style={{
                        fontSize: "8.5px",
                        letterSpacing: "0.2em",
                        color: "#C9A86C",
                        paddingTop: 4,
                        display: "block",
                      }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3
                        className="font-sans font-medium"
                        style={{
                          fontSize: "14.5px",
                          color: "#111111",
                          marginBottom: 7,
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
                          lineHeight: 1.78,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <span
                      style={{
                        display: "block",
                        width: 16,
                        height: 1,
                        backgroundColor: "rgba(17,17,17,0.15)",
                        marginTop: 10,
                      }}
                    />
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. VISUAL INTERLUDE ─────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#080E1E" }}
        >
          {/* Blueprint major grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.05,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
          {/* Sub-grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.02,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "13px 13px",
            }}
          />
          {/* Depth gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 25% 55%, rgba(6,10,24,0.75) 0%, transparent 60%)",
            }}
          />
          {/* Geyik watermark */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 380, height: 380, opacity: 0.04 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Quote */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.32rem)",
                  color: "rgba(247,245,241,0.52)",
                  letterSpacing: "0.005em",
                  maxWidth: 540,
                  lineHeight: 1.7,
                }}
              >
                Projeyi yalnızca bugünüyle değil,
                <br />
                gelecekte üreteceği değerle ele alırız.
              </p>
              <div
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: "#C9A86C",
                  marginTop: 28,
                  opacity: 0.55,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 5. PROCESS — Minimal horizontal timeline ────────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(64px, 9vw, 112px)", paddingBottom: "clamp(64px, 9vw, 112px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 60,
              }}
            >
              Proje Nasıl Geliştirilir?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.11)",
                    paddingTop: 30,
                    paddingBottom: 30,
                    paddingRight:
                      i < processSteps.length - 1
                        ? "clamp(20px, 3.5vw, 52px)"
                        : 0,
                  }}
                >
                  <p
                    className="font-sans"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.22em",
                      color: "#C9A86C",
                      marginBottom: 22,
                    }}
                  >
                    {step.num}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "14px",
                      color: "#111111",
                      marginBottom: 10,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "12.5px",
                      color: "rgba(17,17,17,0.44)",
                      lineHeight: 1.82,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CAVEARTS FARKI — Dark statement section ─────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#111317" }}
        >
          {/* Geyik watermark */}
          <div
            className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 420, height: 420, opacity: 0.038 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.5em",
                color: "rgba(201,168,108,0.45)",
                marginBottom: 48,
              }}
            >
              DEĞER
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.7rem, 3.2vw, 3rem)",
                color: "#F7F5F1",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 64,
                maxWidth: 520,
              }}
            >
              CaveArts Projeye
              <br />
              Nasıl Değer Katar?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    borderRight:
                      i < differentiators.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    paddingTop: 32,
                    paddingBottom: 32,
                    paddingRight: i < differentiators.length - 1 ? "clamp(20px, 3vw, 44px)" : 0,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 44px)" : 0,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 1,
                      backgroundColor: "#C9A86C",
                      marginBottom: 22,
                      opacity: 0.65,
                    }}
                  />
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "14px",
                      color: "#F7F5F1",
                      marginBottom: 12,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "13px",
                      color: "rgba(247,245,241,0.36)",
                      lineHeight: 1.88,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA — Light, restrained ──────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{ paddingTop: "clamp(72px, 9vw, 112px)", paddingBottom: "clamp(72px, 9vw, 112px)" }}
          >
            <div
              style={{
                width: 40,
                height: 1,
                backgroundColor: "#C9A86C",
                margin: "0 auto 36px",
              }}
            />
            <h2
              className="font-serif font-light mx-auto"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "#111111",
                lineHeight: 1.08,
                maxWidth: 600,
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Projenizi CaveArts ile Geliştirin
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(17,17,17,0.44)",
                maxWidth: 460,
                marginBottom: 48,
              }}
            >
              Fikir aşamasındaki veya mevcut projenizi yatırımcıya hazır, güçlü ve
              profesyonel bir yapıya dönüştürmek için CaveArts ekibiyle iletişime
              geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/iletisim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#111111",
                  color: "#F7F5F1",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  padding: "16px 36px",
                  textDecoration: "none",
                }}
              >
                İletişime Geç
              </Link>
              <Link
                href="/iletisim"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid rgba(17,17,17,0.2)",
                  color: "rgba(17,17,17,0.6)",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  padding: "16px 36px",
                  textDecoration: "none",
                }}
              >
                Yatırım Danışmanı ile Görüş
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
