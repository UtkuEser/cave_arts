import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const scopeItems = [
  {
    num: "01",
    title: "Yatırımcı İlişkileri",
    description:
      "Projelerin doğru yatırımcı profiliyle buluşması için iletişim ve sunum yapısı geliştirilir.",
  },
  {
    num: "02",
    title: "Uluslararası Pazar Analizi",
    description:
      "Hedef pazarlar, yatırım beklentileri ve bölgesel fırsatlar stratejik olarak değerlendirilir.",
  },
  {
    num: "03",
    title: "Proje Sunum Stratejisi",
    description:
      "Projeler, uluslararası yatırımcıların anlayabileceği net, güven veren ve profesyonel bir yapıyla sunulur.",
  },
  {
    num: "04",
    title: "İş Ortaklığı Modeli",
    description:
      "Projeye uygun yerel ve uluslararası iş birlikleri için sürdürülebilir ortaklık modelleri oluşturulur.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Analiz",
    desc: "Proje, hedef pazar ve yatırımcı profili birlikte değerlendirilir.",
  },
  {
    num: "02",
    title: "Strateji",
    desc: "Uluslararası sunum dili, yatırım hikayesi ve iş modeli kurgulanır.",
  },
  {
    num: "03",
    title: "Sunum",
    desc: "Proje, yatırımcılar ve iş ortakları için profesyonel bir yapı içinde hazırlanır.",
  },
  {
    num: "04",
    title: "Bağlantı",
    desc: "Doğru yatırımcı, pazar ve iş ortaklığı kanallarıyla temas süreci yönetilir.",
  },
]

const highlights = [
  {
    label: "Global Bakış",
    desc: "Yerel projelerin uluslararası yatırım ekosistemine uyumu değerlendirilir.",
  },
  {
    label: "Stratejik Sunum",
    desc: "Projenin yatırımcıya güven veren bir dil ve yapı ile aktarılması sağlanır.",
  },
  {
    label: "Güvenilir Bağlantı",
    desc: "Doğru yatırımcı ve iş ortaklığı kanallarına profesyonel bir köprü kurulur.",
  },
]

export default function UluslararasiDanismanlikPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#06091A", minHeight: 560 }}
        >
          {/* Network node dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.07,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.7) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Coordinate / major grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.022,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
            }}
          />
          {/* Route lines — 45° + −45° crossing */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.028,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 87px, rgba(160,200,255,0.6) 87px, rgba(160,200,255,0.6) 88px), repeating-linear-gradient(-45deg, transparent, transparent 87px, rgba(160,200,255,0.6) 87px, rgba(160,200,255,0.6) 88px)",
            }}
          />
          {/* Atmospheric depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(6,20,60,0.6) 0%, transparent 65%), linear-gradient(180deg, rgba(6,9,26,0) 0%, rgba(6,9,26,0.3) 100%)",
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
              ULUSLARARASI DANIŞMANLIK
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 6rem)",
                color: "#F7F5F1",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                marginBottom: 44,
                maxWidth: 860,
              }}
            >
              Uluslararası
              <br />
              Danışmanlık
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
              CaveArts, yerel projeleri uluslararası vizyonla değerlendirir, yatırım
              ve proje süreçlerinde stratejik danışmanlık sağlar.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL GİRİŞ ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F5F1" }}>
          {/* Watermark — right, slightly smaller than proje-gelistirme */}
          <div
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 400, height: 400 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain", opacity: 0.038, filter: "invert(1)" }}
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
                  fontSize: "clamp(2rem, 4.2vw, 3.8rem)",
                  color: "#111111",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                }}
              >
                Yerelden Globale
                <br />
                Uzanan Proje
                <br />
                Vizyonu
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
                  CaveArts, yerel projeleri yalnızca bulunduğu lokasyonla sınırlı
                  değerlendirmez. Pazar potansiyeli, yatırımcı profili, uluslararası
                  beklentiler ve stratejik konumlandırma üzerinden projelerin daha
                  geniş bir değer alanına taşınmasını hedefler.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. DANIŞMANLIK KAPSAMI — Editorial list ─────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10 lg:gap-20 items-start">
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
                  DANIŞMANLIK
                  <br />
                  KAPSAMI
                </p>
              </div>

              {/* Right: editorial index list */}
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

        {/* ── 4. GLOBAL BAĞLANTI BANTI ────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#050B1A" }}
        >
          {/* Network dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.06,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.6) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          {/* Route lines — crossing */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.025,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 99px, rgba(160,200,255,0.5) 99px, rgba(160,200,255,0.5) 100px), repeating-linear-gradient(-45deg, transparent, transparent 99px, rgba(160,200,255,0.5) 99px, rgba(160,200,255,0.5) 100px)",
            }}
          />
          {/* Depth gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(5,11,26,0.5) 0%, transparent 70%)",
            }}
          />
          {/* Geyik watermark — centered */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="relative hidden lg:block" style={{ width: 420, height: 420 }}>
              <Image
                src="/İmage/logo/Geyik-Beyaz.png"
                alt=""
                fill
                style={{ objectFit: "contain", opacity: 0.035 }}
              />
            </div>
          </div>

          {/* Centered quote */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div
              className="text-center"
              style={{ maxWidth: 620, paddingLeft: 24, paddingRight: 24 }}
            >
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.32rem)",
                  color: "rgba(247,245,241,0.5)",
                  letterSpacing: "0.005em",
                  lineHeight: 1.72,
                }}
              >
                Yerel potansiyeli, uluslararası bakış açısıyla
                <br />
                daha güçlü bir yatırım hikayesine dönüştürürüz.
              </p>
              <div
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: "#C9A86C",
                  margin: "28px auto 0",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 5. STRATEJİK DANIŞMANLIK SÜRECİ ────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            {/* Centered title */}
            <h2
              className="font-serif font-light text-center mx-auto"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 56,
                maxWidth: 560,
              }}
            >
              Danışmanlık Süreci Nasıl İlerler?
            </h2>

            {/* Full-width connecting timeline line */}
            <div
              className="hidden lg:block"
              style={{
                height: 1,
                backgroundColor: "rgba(17,17,17,0.1)",
                marginBottom: -1,
              }}
            />

            {/* 4 steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.1)",
                    paddingTop: 28,
                    paddingBottom: 28,
                    paddingRight:
                      i < processSteps.length - 1 ? "clamp(20px, 3.5vw, 48px)" : 0,
                  }}
                >
                  <p
                    className="font-sans"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.22em",
                      color: "#C9A86C",
                      marginBottom: 20,
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

        {/* ── 6. KOYU STATEMENT ───────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#0B1228" }}
        >
          {/* Network dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.04,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Geyik watermark — bottom right */}
          <div
            className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 400, height: 400, opacity: 0.036 }}
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
            style={{
              paddingTop: "clamp(72px, 10vw, 128px)",
              paddingBottom: "clamp(72px, 10vw, 128px)",
            }}
          >
            {/* Top block: heading + description */}
            <div
              className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24"
              style={{ marginBottom: 64 }}
            >
              <h2
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1.7rem, 3.2vw, 3rem)",
                  color: "#F7F5F1",
                  lineHeight: 1.1,
                  letterSpacing: "-0.022em",
                }}
              >
                Projeleri Uluslararası
                <br />
                Değer Alanına Taşırız
              </h2>
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.9,
                  color: "rgba(247,245,241,0.34)",
                  alignSelf: "end",
                }}
              >
                CaveArts için uluslararası danışmanlık; yalnızca bağlantı kurmak
                değil, projenin yatırımcıya doğru dil, doğru strateji ve doğru güven
                yapısıyla sunulmasını sağlamaktır.
              </p>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.06)",
                marginBottom: 48,
              }}
            />

            {/* 3 highlight columns — no gold line, number prefixed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    borderLeft:
                      i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 44px)" : 0,
                    paddingRight:
                      i < highlights.length - 1
                        ? "clamp(20px, 3vw, 44px)"
                        : 0,
                  }}
                >
                  <p
                    className="font-sans font-medium"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.38em",
                      color: "rgba(201,168,108,0.45)",
                      marginBottom: 14,
                      textTransform: "uppercase",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "14px",
                      color: "#F7F5F1",
                      marginBottom: 10,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "13px",
                      color: "rgba(247,245,241,0.34)",
                      lineHeight: 1.85,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{
              paddingTop: "clamp(72px, 9vw, 112px)",
              paddingBottom: "clamp(72px, 9vw, 112px)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 1,
                backgroundColor: "#C9A86C",
                margin: "0 auto",
                marginBottom: 32,
              }}
            />
            <h2
              className="font-serif font-light mx-auto"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                maxWidth: 560,
                marginBottom: 20,
              }}
            >
              Uluslararası Proje Danışmanlığı Alın
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(17,17,17,0.44)",
                maxWidth: 440,
                marginBottom: 44,
              }}
            >
              CaveArts ekibi, projenizin uluslararası yatırımcı perspektifiyle
              değerlendirilmesi ve doğru stratejiyle sunulması için sizinle
              iletişime geçebilir.
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
                  whiteSpace: "nowrap",
                }}
              >
                İletişime Geç
              </Link>
              <Link
                href="/projelerimiz"
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
                  whiteSpace: "nowrap",
                }}
              >
                Projeleri İncele
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
