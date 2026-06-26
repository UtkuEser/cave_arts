import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const audiences = [
  {
    num: "01",
    title: "Gayrimenkul Satış Ekipleri",
    desc: "Satış sürecinde doğru iletişim, güven oluşturma ve proje anlatımı için yapılandırılmış eğitim.",
  },
  {
    num: "02",
    title: "Proje Danışmanları",
    desc: "Yatırımcı ilişkileri, proje sunumu ve süreç yönetimi alanlarında profesyonel bilgi aktarımı.",
  },
  {
    num: "03",
    title: "Franchise Ekipleri",
    desc: "CaveArts sistemini farklı lokasyonlarda aynı standartla temsil edecek ekipler için kurumsal eğitim.",
  },
  {
    num: "04",
    title: "Yatırımcı İlişkileri Ekipleri",
    desc: "Yatırımcı beklentisini doğru anlama, bilgilendirme ve sürdürülebilir ilişki yönetimi eğitimi.",
  },
]

const trainingAreas = [
  {
    num: "01",
    title: "Gayrimenkul Satış Eğitimi",
    desc: "Satış süreci, müşteri ilişkileri, ihtiyaç analizi ve güven odaklı kapanış teknikleri.",
  },
  {
    num: "02",
    title: "Proje Geliştirme Eğitimi",
    desc: "Lokasyon analizi, fizibilite, yatırım modeli ve proje konumlandırma süreçleri.",
  },
  {
    num: "03",
    title: "Yatırımcı İletişimi",
    desc: "Yatırımcı profili, sunum hazırlama, güven inşası ve doğru bilgilendirme dili.",
  },
  {
    num: "04",
    title: "Franchise ve Ekip Eğitimi",
    desc: "CaveArts sistemiyle büyüyen ekipler için kurumsal standart, süreç ve temsil eğitimi.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "İhtiyaç Analizi",
    desc: "Ekip yapısı, satış süreci ve bilgi eksikleri değerlendirilir.",
  },
  {
    num: "02",
    title: "Eğitim Planı",
    desc: "Proje, ekip ve hedeflere uygun eğitim içeriği oluşturulur.",
  },
  {
    num: "03",
    title: "Uygulama",
    desc: "Eğitimler saha gerçekliği, sunum dili ve süreç yönetimi üzerinden aktarılır.",
  },
  {
    num: "04",
    title: "Takip",
    desc: "Eğitim sonrası gelişim, uygulama kalitesi ve süreç uyumu takip edilir.",
  },
]

const highlights = ["Teoriden Sahaya", "Güven Odaklı Satış Dili", "Standart Ekip Yapısı"]

export default function EgitimPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#0A0D1C", minHeight: 560 }}
        >
          {/* Graph-paper major grid — sunum/strateji hissi */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.038,
              backgroundImage:
                "linear-gradient(rgba(200,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,215,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* Fine sub-grid — graph paper dokusu */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.015,
              backgroundImage:
                "linear-gradient(rgba(200,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,215,255,1) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
          {/* Warm depth gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 60% 45%, rgba(14,18,48,0.65) 0%, transparent 60%), linear-gradient(160deg, rgba(10,13,28,0.2) 0%, rgba(6,8,20,0.5) 100%)",
            }}
          />
          {/* Horizontal rule accent — sunum/slayt hissi */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.03,
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent, transparent 71px, rgba(201,168,108,0.7) 71px, rgba(201,168,108,0.7) 72px)",
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
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 28 }}
            >
              EĞİTİM
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6.4rem)",
                color: "#F7F5F1",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                marginBottom: 44,
                maxWidth: 820,
              }}
            >
              Eğitim
            </h1>
            <div style={{ width: 48, height: 1, backgroundColor: "#C9A86C", marginBottom: 30 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.44)",
                maxWidth: 500,
              }}
            >
              CaveArts, gayrimenkul, satış, yatırım ve proje geliştirme süreçlerinde
              profesyonel bilgi aktarımı sağlayan eğitim yapıları geliştirir.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL GİRİŞ ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
          {/* Faint watermark — alt konumda, farklı yerleşim */}
          <div
            className="absolute right-10 bottom-0 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 380, height: 380 }}
          >
            <Image
              src="/İmage/logo/Geyik-Siyah.png"
              alt=""
              fill
              style={{ objectFit: "contain", opacity: 0.022 }}
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
                Bilgiyle Güçlenen
                <br />
                Proje ve Satış
                <br />
                Yapıları
              </h2>
              <div style={{ paddingTop: "clamp(0px, 1.5vw, 16px)" }}>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", marginBottom: 36 }}
                >
                  CaveArts, gayrimenkul ve proje geliştirme süreçlerinde yalnızca
                  operasyonel yapı kurmaz; ekiplerin, danışmanların ve iş ortaklarının
                  doğru bilgiyle hareket edebilmesi için eğitim sistemleri de
                  geliştirir.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. KİMLER İÇİN? — 2×2 grid (sitede özgün) ─────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
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
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 48,
              }}
            >
              Kimler İçin?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {audiences.map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.08)",
                    borderRight:
                      i % 2 === 0 ? "1px solid rgba(17,17,17,0.08)" : "none",
                    paddingTop: 28,
                    paddingBottom: 28,
                    paddingRight: i % 2 === 0 ? "clamp(20px, 4vw, 56px)" : 0,
                    paddingLeft: i % 2 === 1 ? "clamp(20px, 4vw, 56px)" : 0,
                  }}
                >
                  <p
                    className="font-sans font-medium"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.2em",
                      color: "#C9A86C",
                      marginBottom: 14,
                    }}
                  >
                    {item.num}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "14.5px",
                      color: "#111111",
                      marginBottom: 10,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "13px",
                      color: "rgba(17,17,17,0.5)",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
              {/* Alt border kapama */}
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)", gridColumn: "1 / -1" }} />
            </div>
          </div>
        </section>

        {/* ── 4. EĞİTİM ALANLARI — Editorial index list ───────── */}
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
                  EĞİTİM
                  <br />
                  ALANLARI
                </p>
              </div>

              {/* Right: editorial list */}
              <div>
                {trainingAreas.map((item) => (
                  <div
                    key={item.num}
                    className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr]"
                    style={{
                      borderTop: "1px solid rgba(17,17,17,0.07)",
                      paddingTop: 26,
                      paddingBottom: 26,
                      gap: "6px 24px",
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
                      {item.num}
                    </span>
                    <h3
                      className="font-sans font-medium"
                      style={{ fontSize: "14.5px", color: "#111111", letterSpacing: "0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-sans font-light"
                      style={{ fontSize: "13px", color: "rgba(17,17,17,0.48)", lineHeight: 1.75 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. GÖRSEL / STATEMENT BANTI — sağa hizalı alıntı ── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#0C1020" }}
        >
          {/* Graph paper grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.042,
              backgroundImage:
                "linear-gradient(rgba(200,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,215,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Fine sub-grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.014,
              backgroundImage:
                "linear-gradient(rgba(200,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,215,255,1) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
          {/* Depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 20% 55%, rgba(8,12,28,0.7) 0%, transparent 60%)",
            }}
          />
          {/* Geyik watermark — sol alt */}
          <div
            className="absolute left-8 bottom-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 340, height: 340, opacity: 0.038 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Sağa hizalı alıntı */}
          <div className="relative z-10 h-full flex items-center justify-end">
            <div
              className="text-right"
              style={{
                maxWidth: 560,
                paddingLeft: 24,
                paddingRight: "clamp(24px, 5vw, 64px)",
              }}
            >
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.32rem)",
                  color: "rgba(247,245,241,0.52)",
                  letterSpacing: "0.005em",
                  lineHeight: 1.72,
                }}
              >
                Bilgi, doğru sistemle aktarıldığında satış
                <br />
                gücüne ve güven veren danışmanlık
                <br />
                yapısına dönüşür.
              </p>
              <div
                style={{
                  width: 32,
                  height: 1,
                  backgroundColor: "#C9A86C",
                  marginTop: 28,
                  marginLeft: "auto",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>
        </section>

        {/* ── 6. EĞİTİM SÜRECİ — Yatay timeline ─────────────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
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
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 56,
              }}
            >
              Eğitim Süreci Nasıl İlerler?
            </h2>
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
                    style={{ fontSize: "8.5px", letterSpacing: "0.22em", color: "#C9A86C", marginBottom: 20 }}
                  >
                    {step.num}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{ fontSize: "14px", color: "#111111", marginBottom: 10, letterSpacing: "0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: "12.5px", color: "rgba(17,17,17,0.48)", lineHeight: 1.82 }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. KOYU STATEMENT ───────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#0C1020" }}
        >
          {/* Fine grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.032,
              backgroundImage:
                "linear-gradient(rgba(200,215,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,215,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Geyik watermark — sağ üst */}
          <div
            className="absolute top-0 right-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 380, height: 380, opacity: 0.034 }}
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
            {/* Büyük başlık + metin — tam genişlik üst blok */}
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                color: "#F7F5F1",
                lineHeight: 1.1,
                letterSpacing: "-0.022em",
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              Saha Deneyimiyle Desteklenen
              <br />
              Kurumsal Eğitim
            </h2>
            <p
              className="font-sans font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(247,245,241,0.36)",
                maxWidth: 580,
                marginBottom: 56,
              }}
            >
              CaveArts eğitim yapıları, teorik bilgiyi saha deneyimiyle birleştirerek
              ekiplerin projeyi daha doğru anlatmasını, yatırımcıyla daha güvenli
              iletişim kurmasını ve süreçleri standart bir yapıda yönetmesini sağlar.
            </p>

            {/* Tam genişlik divider */}
            <div
              style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: 40 }}
            />

            {/* 3 minimal highlight etiketi — açıklamasız */}
            <div className="flex flex-col sm:flex-row gap-0">
              {highlights.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center"
                  style={{
                    flex: 1,
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 40px)" : 0,
                    paddingRight: i < highlights.length - 1 ? "clamp(20px, 3vw, 40px)" : 0,
                    paddingTop: 4,
                    paddingBottom: 4,
                  }}
                >
                  <span
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.35em",
                      color: "rgba(247,245,241,0.32)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA ──────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
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
              Ekipleriniz İçin Eğitim Modeli Oluşturalım
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{
                fontSize: "14px",
                lineHeight: 1.9,
                color: "rgba(17,17,17,0.46)",
                maxWidth: 440,
                marginBottom: 44,
              }}
            >
              CaveArts ekibi, satış, yatırım ve proje geliştirme süreçlerinize uygun
              eğitim yapısını değerlendirmek için sizinle iletişime geçebilir.
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
                href="/cavearts-prime"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  border: "1px solid rgba(17,17,17,0.2)",
                  color: "rgba(17,17,17,0.62)",
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
                CaveArts Prime'ı İncele
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
