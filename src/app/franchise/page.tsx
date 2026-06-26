import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const audiences = [
  {
    num: "01",
    title: "Bölgesel Gayrimenkul Girişimcileri",
    desc: "Kendi bölgesinde güçlü bir gayrimenkul ve proje geliştirme markasıyla büyümek isteyen girişimciler.",
  },
  {
    num: "02",
    title: "Satış Organizasyonu Kurmak İsteyenler",
    desc: "Proje satışı, yatırımcı iletişimi ve saha organizasyonu tarafında sistemli yapı kurmak isteyen ekipler.",
  },
  {
    num: "03",
    title: "Yerel Proje Geliştiriciler",
    desc: "Yerel projelerini daha güçlü marka, sunum ve satış yapısıyla konumlandırmak isteyen proje sahipleri.",
  },
  {
    num: "04",
    title: "Kurumsal Büyüme Arayan Ekipler",
    desc: "Standart süreç, eğitim ve marka diliyle daha profesyonel bir organizasyon yapısı kurmak isteyen ekipler.",
  },
]

const scopeItems = [
  {
    num: "01",
    title: "Marka ve Konumlandırma",
    desc: "CaveArts marka dili, kurumsal duruşu ve proje geliştirme yaklaşımı lokasyona uygun şekilde konumlandırılır.",
  },
  {
    num: "02",
    title: "Satış ve Danışmanlık Sistemi",
    desc: "Gayrimenkul, yatırım ve proje satış süreçleri için standart iletişim ve danışmanlık yapısı kurulur.",
  },
  {
    num: "03",
    title: "Eğitim ve Ekip Gelişimi",
    desc: "Franchise ekibinin CaveArts sistemini doğru temsil edebilmesi için eğitim süreçleri planlanır.",
  },
  {
    num: "04",
    title: "Operasyon ve Süreç Yönetimi",
    desc: "Başvuru, yatırımcı ilişkileri, proje takibi ve satış organizasyonu süreçleri standartlaştırılır.",
  },
  {
    num: "05",
    title: "Bölgesel Büyüme Stratejisi",
    desc: "Her lokasyon, kendi potansiyeli ve pazar yapısı doğrultusunda sürdürülebilir büyüme planıyla ele alınır.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Ön Görüşme",
    desc: "Bölge, ekip yapısı, hedefler ve franchise uygunluğu değerlendirilir.",
  },
  {
    num: "02",
    title: "Model Planlama",
    desc: "Lokasyona uygun iş modeli, operasyon yapısı ve büyüme planı oluşturulur.",
  },
  {
    num: "03",
    title: "Eğitim ve Kurulum",
    desc: "Ekip, CaveArts marka dili, satış sistemi ve süreç yönetimi konusunda hazırlanır.",
  },
  {
    num: "04",
    title: "Operasyon Takibi",
    desc: "Franchise yapısının sürdürülebilirliği, süreç uyumu ve gelişim alanları düzenli olarak takip edilir.",
  },
]

const highlights = ["Standart Marka Dili", "Sistemli Operasyon", "Sürdürülebilir Büyüme"]

export default function FranchisePage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#080B18", minHeight: 560 }}
        >
          {/* Network node dots — franchise lokasyon ağı hissi */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.09,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.9) 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* City grid — lokasyon haritası hissi */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.022,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
          {/* Tek yön bağlantı çizgileri — 45° sadece (uluslararasi'nın çift yönünden farklı) */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.032,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 59px, rgba(160,200,255,0.5) 59px, rgba(160,200,255,0.5) 60px)",
            }}
          />
          {/* Depth gradient — sağ üstten soldan geliyor */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 25% 60%, rgba(6,10,28,0.72) 0%, transparent 58%), linear-gradient(120deg, rgba(8,11,24,0.2) 0%, rgba(5,8,18,0.45) 100%)",
            }}
          />
          {/* Gold node accent — merkezden yayılan çok ince çizgiler */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.028,
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 119px, rgba(201,168,108,0.6) 119px, rgba(201,168,108,0.6) 120px)",
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
              FRANCHISE
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
              Franchise
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
              CaveArts, marka sistemini farklı lokasyonlara taşıyan, sürdürülebilir
              ve sistemli büyüme modeli oluşturur.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL GİRİŞ ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F5F1" }}>
          {/* Watermark — orta-sol, farklı pozisyon */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 440, height: 440 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain", opacity: 0.03, filter: "invert(1)" }}
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
                  fontSize: "clamp(1.9rem, 3.8vw, 3.5rem)",
                  color: "#111111",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                CaveArts Vizyonunu
                <br />
                Farklı Lokasyonlara
                <br />
                Taşıyan Sistem
              </h2>
              <div style={{ paddingTop: "clamp(0px, 1.5vw, 16px)" }}>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", marginBottom: 36 }}
                >
                  CaveArts franchise yapısı, markanın proje geliştirme, gayrimenkul,
                  danışmanlık ve satış organizasyonu yaklaşımını farklı lokasyonlarda
                  sürdürülebilir şekilde büyütmeyi hedefler. Bu yapı, yalnızca isim
                  kullanımından ibaret değil; süreç, eğitim, temsil, danışmanlık ve
                  operasyon standartlarını kapsayan kontrollü bir büyüme modelidir.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. KİMLER İÇİN? — [num+title | desc] tam genişlik ─ */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            {/* İki kolonlu section header */}
            <div
              className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-24 items-end"
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
                Franchise Modeli Kimler İçin?
              </h2>
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "13px",
                  color: "rgba(17,17,17,0.42)",
                  lineHeight: 1.75,
                }}
              >
                Kendi bölgesinde CaveArts sistemini büyütmek isteyen bireyler,
                şirketler ve gayrimenkul profesyonellerine açık bir büyüme modeli.
              </p>
            </div>

            {/* Tam genişlik satır listesi — [num+title kolonu | desc kolonu] */}
            {audiences.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]"
                style={{
                  borderTop: "1px solid rgba(17,17,17,0.07)",
                  paddingTop: 28,
                  paddingBottom: 28,
                  gap: "8px 40px",
                  alignItems: "baseline",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-sans font-medium flex-shrink-0"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.2em",
                      color: "#C9A86C",
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "15px",
                      color: "#111111",
                      letterSpacing: "0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "13px",
                    color: "rgba(17,17,17,0.5)",
                    lineHeight: 1.78,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)" }} />
          </div>
        </section>

        {/* ── 4. FRANCHISE KAPSAMI — 5 madde (sitede özgün) ───── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
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
                  FRANCHISE
                  <br />
                  KAPSAMI
                </p>
              </div>

              {/* Right: editorial list — 5 madde */}
              <div>
                {scopeItems.map((item) => (
                  <div
                    key={item.num}
                    style={{
                      borderTop: "1px solid rgba(17,17,17,0.07)",
                      paddingTop: 24,
                      paddingBottom: 24,
                      display: "grid",
                      gridTemplateColumns: "40px 1fr 20px",
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
                          color: "rgba(17,17,17,0.48)",
                          lineHeight: 1.78,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      style={{
                        display: "block",
                        width: 14,
                        height: 1,
                        backgroundColor: "rgba(17,17,17,0.14)",
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

        {/* ── 5. GÖRSEL / STATEMENT BANTI ─────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#080D1A" }}
        >
          {/* Network node dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.065,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.7) 1.5px, transparent 1.5px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Bağlantı çizgileri */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.025,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 55px, rgba(160,200,255,0.5) 55px, rgba(160,200,255,0.5) 56px)",
            }}
          />
          {/* Depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(5,9,22,0.65) 0%, transparent 58%)",
            }}
          />
          {/* Geyik watermark — sağ, farklı boyut */}
          <div
            className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 300, height: 300, opacity: 0.038 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Sol hizalı alıntı */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1rem, 1.75vw, 1.32rem)",
                  color: "rgba(247,245,241,0.52)",
                  letterSpacing: "0.005em",
                  maxWidth: 600,
                  lineHeight: 1.72,
                }}
              >
                CaveArts franchise modeli, markayı farklı lokasyonlara taşırken
                <br />
                aynı kalite, aynı süreç ve aynı güven duygusunu korumayı hedefler.
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

        {/* ── 6. FRANCHISE SÜRECİ — Yatay timeline ───────────── */}
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
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 56,
              }}
            >
              Franchise Süreci Nasıl İlerler?
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
          style={{ backgroundColor: "#090D1E" }}
        >
          {/* Node dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.044,
              backgroundImage:
                "radial-gradient(circle, rgba(160,200,255,0.6) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
            }}
          />
          {/* Geyik watermark — sol alt */}
          <div
            className="absolute left-0 bottom-0 pointer-events-none hidden lg:block"
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
            {/* Tam genişlik büyük başlık */}
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                color: "#F7F5F1",
                lineHeight: 1.1,
                letterSpacing: "-0.022em",
                maxWidth: 700,
                marginBottom: 24,
              }}
            >
              Kontrollü Büyüyen, Standartları
              <br />
              Koruyan Bir Marka Sistemi
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
              CaveArts franchise yapısı, büyümeyi yalnızca yeni lokasyon açmak olarak
              görmez. Her yeni noktada marka algısının, danışmanlık kalitesinin, satış
              dilinin ve süreç yönetiminin aynı standartta korunmasını hedefler.
            </p>

            {/* 3 kolon — gold üst çizgi vurgusuyla (egitim'deki minimal etiketlerden farklı) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {highlights.map((label, i) => (
                <div
                  key={label}
                  style={{
                    borderTop: "1px solid rgba(201,168,108,0.25)",
                    borderRight:
                      i < highlights.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    paddingTop: 24,
                    paddingRight: i < highlights.length - 1 ? "clamp(20px, 3vw, 44px)" : 0,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 44px)" : 0,
                  }}
                >
                  <span
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.35em",
                      color: "rgba(247,245,241,0.3)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA — İki kolonlu (sol text / sağ butonlar) ──── */}
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
                    maxWidth: 560,
                    marginBottom: 20,
                  }}
                >
                  CaveArts Franchise Yapısını
                  <br />
                  Birlikte Değerlendirelim
                </h2>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "rgba(17,17,17,0.46)",
                    maxWidth: 440,
                  }}
                >
                  CaveArts ekibi, bölgenize, ekip yapınıza ve hedeflerinize uygun
                  franchise modelini değerlendirmek için sizinle iletişime geçebilir.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/iletisim"
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
                  Franchise Başvurusu Yap
                </Link>
                <Link
                  href="/iletisim"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
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
