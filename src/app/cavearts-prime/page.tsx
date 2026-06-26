import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

const investmentModels = [
  {
    num: "01",
    title: "Arsa Payı",
    desc: "Yatırımcı, projeye yalnızca kullanım vaadiyle değil, tapu ve mülkiyet temelli bir yatırım yaklaşımıyla dahil olur.",
  },
  {
    num: "02",
    title: "Topraktan Giriş",
    desc: "Projeye erken aşamada dahil olarak planlı ve uzun vadeli değer üretimi hedeflenir.",
  },
  {
    num: "03",
    title: "Tapulu Yatırım",
    desc: "Yatırım süreci, mülkiyet ve belge yapısı üzerinden daha güven veren bir zemine oturur.",
  },
  {
    num: "04",
    title: "Taksitli Ödeme",
    desc: "Yatırımcıya, bütçesini zorlamadan sürece dahil olabileceği planlı ödeme imkanı sunulur.",
  },
]

const advantages = [
  {
    num: "01",
    title: "Hemen Tapu",
    desc: "Yatırım süreci, tapu temelli güven yapısıyla desteklenir.",
  },
  {
    num: "02",
    title: "Ara Ödeme Yok",
    desc: "Yatırımcı için süreç boyunca öngörülebilir ve planlı ödeme yapısı hedeflenir.",
  },
  {
    num: "03",
    title: "Ek Ödeme Yok",
    desc: "Belirlenen model dışında yatırımcıyı zorlayacak ek ödeme baskısı oluşturulmaz.",
  },
  {
    num: "04",
    title: "Taksitli Yatırım",
    desc: "Yatırımcı, gayrimenkul yatırımına daha ulaşılabilir ödeme planıyla dahil olabilir.",
  },
  {
    num: "05",
    title: "Profesyonel Danışmanlık",
    desc: "CaveArts danışmanları, yatırım sürecinin her adımında bilgilendirme ve takip desteği sağlar.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Proje Tanıtımı",
    desc: "Yatırımcıya proje, lokasyon, model ve süreç hakkında net bilgilendirme yapılır.",
  },
  {
    num: "02",
    title: "Model Değerlendirme",
    desc: "Yatırımcının hedefi, bütçesi ve beklentisine uygun yatırım modeli değerlendirilir.",
  },
  {
    num: "03",
    title: "Tapu ve Planlama",
    desc: "Tapu, ödeme planı ve süreç adımları şeffaf şekilde yapılandırılır.",
  },
  {
    num: "04",
    title: "Süreç Takibi",
    desc: "Yatırım süreci, danışmanlık ekibi tarafından düzenli bilgi akışıyla takip edilir.",
  },
]

const highlights = ["Tapu Temelli Güven", "Planlı Ödeme Modeli", "Profesyonel Süreç Takibi"]

export default function CaveArtsPrimePage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#07091C", minHeight: 560 }}
        >
          {/* Parsel/kadastro 45° diamond grid — sitede özgün */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(45deg, rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(-45deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          {/* Ortogonal koordinat çizgileri — masterplan hissi */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.018,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "84px 84px",
            }}
          />
          {/* Yatay kadastro survey çizgileri — gold */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.032,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 83px, rgba(201,168,108,0.6) 83px, rgba(201,168,108,0.6) 84px)",
            }}
          />
          {/* Atmosferik derinlik */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 55% 50%, rgba(10,14,36,0.65) 0%, transparent 60%), linear-gradient(145deg, rgba(7,9,28,0.15) 0%, rgba(4,6,16,0.4) 100%)",
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
              CAVEARTS PRIME
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
              CaveArts Prime
            </h1>
            <div style={{ width: 48, height: 1, backgroundColor: "#C9A86C", marginBottom: 30 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.44)",
                maxWidth: 520,
              }}
            >
              CaveArts Prime, gayrimenkul yatırımını arsa payı, tapulu yatırım ve
              taksitli ödeme modelleriyle daha planlı, ulaşılabilir ve güvenilir hale
              getiren CaveArts markasıdır.
            </p>
          </div>
        </section>

        {/* ── 2. EDITORIAL GİRİŞ ──────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
          {/* Watermark — sağ-orta */}
          <div
            className="absolute right-[-30px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 420, height: 420 }}
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
                Gayrimenkul
                <br />
                Yatırımında Planlı
                <br />
                ve Güven Veren Model
              </h2>
              <div style={{ paddingTop: "clamp(0px, 1.5vw, 16px)" }}>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", marginBottom: 36 }}
                >
                  CaveArts Prime, yatırımcıların gayrimenkule daha planlı, şeffaf ve
                  sürdürülebilir bir modelle dahil olmasını hedefler. Arsa payı,
                  topraktan satış, tapulu yatırım ve taksitli ödeme yapılarıyla
                  yatırım süreci daha erişilebilir ve takip edilebilir hale getirilir.
                </p>
                <div style={{ width: 40, height: 1, backgroundColor: "#C9A86C" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PRİME YATIRIM MODELİ — Büyük fontlu satır listesi */}
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
              Prime Yatırım Modeli
            </h2>

            {/* [num | title (büyük) | desc] — diğer listelerden daha büyük title */}
            {investmentModels.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr]"
                style={{
                  borderTop: "1px solid rgba(17,17,17,0.08)",
                  paddingTop: 32,
                  paddingBottom: 32,
                  gap: "6px 28px",
                  alignItems: "center",
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: "8.5px",
                    letterSpacing: "0.2em",
                    color: "#C9A86C",
                    display: "block",
                    paddingTop: 3,
                  }}
                >
                  {item.num}
                </span>
                <h3
                  className="font-sans font-semibold"
                  style={{
                    fontSize: "16.5px",
                    color: "#111111",
                    letterSpacing: "0.005em",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
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
            <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
          </div>
        </section>

        {/* ── 4. YATIRIMCI AVANTAJLARI — Sol etiket + 5-madde list */}
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
                  YATIRIMCI
                  <br />
                  AVANTAJLARI
                </p>
              </div>

              {/* Right: 5-madde editorial list */}
              <div>
                {advantages.map((item) => (
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
          style={{ height: "clamp(380px, 36vw, 520px)", backgroundColor: "#0D0A20" }}
        >
          {/* Diamond parsel grid — hero'yla temayı devam ettir */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(45deg, rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(-45deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Yatay survey çizgileri */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.02,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(201,168,108,0.5) 47px, rgba(201,168,108,0.5) 48px)",
            }}
          />
          {/* Depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 65% 45%, rgba(8,6,20,0.65) 0%, transparent 62%)",
            }}
          />
          {/* Geyik watermark — orta-sol, fark için */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 320, height: 320, opacity: 0.036 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Sağa hizalı içerik — watermark sol'da olduğu için */}
          <div className="relative z-10 h-full flex items-center justify-end">
            <div
              style={{
                maxWidth: 580,
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
                  textAlign: "right",
                }}
              >
                Yatırımı yalnızca bugünkü fırsatla değil,
                <br />
                gelecekte üreteceği değerle birlikte
                <br />
                değerlendiririz.
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

        {/* ── 6. YATIRIM SÜRECİ ───────────────────────────────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 9vw, 112px)",
              paddingBottom: "clamp(64px, 9vw, 112px)",
            }}
          >
            {/* Ortalanmış başlık — uluslararasi'ya benzer ama farklı bg/içerik */}
            <h2
              className="font-serif font-light text-center mx-auto"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: 56,
                maxWidth: 500,
              }}
            >
              CaveArts Prime Yatırım Süreci
            </h2>
            {/* Tam genişlik bağlantı çizgisi */}
            <div
              className="hidden lg:block"
              style={{ height: 1, backgroundColor: "rgba(17,17,17,0.09)", marginBottom: -1 }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.09)",
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
          style={{ backgroundColor: "#080918" }}
        >
          {/* Diamond parsel grid — sayfayla temasal süreklilik */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.035,
              backgroundImage:
                "linear-gradient(45deg, rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(-45deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* Geyik watermark — sağ-orta */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 400, height: 400, opacity: 0.032 }}
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
            {/* Tam genişlik heading — franchise'dan farklı olarak 2-kolonlu değil tek blok */}
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                color: "#F7F5F1",
                lineHeight: 1.1,
                letterSpacing: "-0.022em",
                maxWidth: 680,
                marginBottom: 24,
              }}
            >
              CaveArts Prime Yatırımı
              <br />
              Daha Planlı Hale Getirir
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
              CaveArts Prime, gayrimenkul yatırımını yalnızca satış süreci olarak
              değil; doğru proje, doğru ödeme modeli, tapu temelli güven ve
              profesyonel danışmanlık yapısıyla yönetilen bir yatırım sistemi olarak
              ele alır.
            </p>

            {/* Divider */}
            <div
              style={{ height: 1, backgroundColor: "rgba(255,255,255,0.055)", marginBottom: 40 }}
            />

            {/* 3 highlight — ince divider, etiket-only (egitim'deki gibi minimal) */}
            <div className="flex flex-col sm:flex-row gap-0">
              {highlights.map((label, i) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.055)" : "none",
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

        {/* ── 8. CTA — Ortalanmış, beyaz zemin ───────────────── */}
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
                maxWidth: 580,
                marginBottom: 20,
              }}
            >
              CaveArts Prime Yatırım Modelini
              <br />
              Birlikte Değerlendirelim
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
              CaveArts danışmanları, hedefinize ve bütçenize uygun yatırım modeli
              hakkında sizi bilgilendirmek için iletişime geçebilir.
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
                Yatırım Danışmanı ile Görüş
              </Link>
              <Link
                href="/projelerimiz"
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
