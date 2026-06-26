import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import PageCTA from "@/components/sections/PageCTA"

export const metadata: Metadata = {
  title: "CaveArts | Hizmetlerimiz",
  description:
    "CaveArts, proje geliştirme, gayrimenkul, uluslararası danışmanlık, eğitim, franchise ve yatırım modellerini tek stratejik yapı altında geliştirir.",
  openGraph: {
    title: "CaveArts | Hizmetlerimiz",
    description: "Tek bir hizmet değil, çok disiplinli bir geliştirme yapısı.",
  },
}

const services = [
  {
    num: "01",
    title: "Proje Geliştirme",
    desc: "Fikir aşamasından yatırımcıyla buluşma sürecine kadar projelerin konumlandırma, marka değeri, satış stratejisi ve süreç yapısı geliştirilir.",
    href: "/proje-gelistirme",
  },
  {
    num: "02",
    title: "Gayrimenkul",
    desc: "Konut, ticari alan, arsa, turizm ve karma kullanım projeleri yatırım değeri ve lokasyon potansiyeliyle birlikte değerlendirilir.",
    href: "/gayrimenkul",
  },
  {
    num: "03",
    title: "Uluslararası Danışmanlık",
    desc: "Yerel projeler global yatırımcı perspektifiyle yeniden konumlandırılır; pazar, sunum ve iş birliği stratejileri geliştirilir.",
    href: "/uluslararasi-danismanlik",
  },
  {
    num: "04",
    title: "Eğitim",
    desc: "Satış ekipleri, danışmanlar, franchise ekipleri ve yatırımcı ilişkileri yapıları için kurumsal eğitim modelleri geliştirilir.",
    href: "/egitim",
  },
  {
    num: "05",
    title: "Franchise Sistemleri",
    desc: "CaveArts vizyonunu farklı lokasyonlara taşıyan, sürdürülebilir ve sistemli franchise yapıları tasarlanır.",
    href: "/franchise",
  },
  {
    num: "06",
    title: "Yatırım Modelleri",
    desc: "Yatırımcı ile proje arasında doğru dengeyi kuran, şeffaf, sürdürülebilir ve uygulanabilir yatırım modelleri geliştirilir.",
    href: "/cavearts-prime",
  },
]

const valuePoints = [
  "Doğru Konumlandırma",
  "Güçlü Sunum",
  "Sürdürülebilir Değer",
]

export default function HizmetlerimizPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#1A1A1A", minHeight: 420 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.03,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "84px 84px",
            }}
          />
          <div
            className="absolute pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ top: "50%", right: "2%", transform: "translateY(-50%)", width: 340, height: 340, opacity: 0.05 }}
          >
            <Image src="/İmage/logo/Geyik-Beyaz.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(64px, 8.5vw, 108px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 26 }}>
              HİZMET ALANLARIMIZ
            </p>
            <h1
              className="font-serif font-light"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.6rem)", color: "#FFFFFF", lineHeight: 0.96, letterSpacing: "-0.02em", marginBottom: 32, maxWidth: 760 }}
            >
              Hizmetlerimiz
            </h1>
            <div style={{ width: 40, height: 1, backgroundColor: "#C8A96A", marginBottom: 26 }} />
            <p className="font-sans font-light" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.9, color: "rgba(255,255,255,0.5)", maxWidth: 540 }}>
              CaveArts, proje geliştirme, gayrimenkul, danışmanlık, eğitim,
              franchise ve yatırım modellerini tek stratejik yapı altında
              geliştirir.
            </p>
          </div>
        </section>

        {/* ── 2. GİRİŞ ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">
              <h2
                className="font-serif font-light"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.8rem)", color: "#0E0E0E", lineHeight: 1.14, letterSpacing: "-0.014em" }}
              >
                Tek Bir Hizmet Değil,
                <br />
                Çok Disiplinli Bir
                <br />
                Geliştirme Yapısı
              </h2>
              <p className="font-sans font-light" style={{ fontSize: 14.5, lineHeight: 1.95, color: "#4A4845", alignSelf: "end" }}>
                CaveArts, projeleri yalnızca satış veya yatırım fırsatı olarak değil;
                lokasyon, marka değeri, yatırım modeli, eğitim, danışmanlık, satış
                organizasyonu ve global iş birlikleriyle birlikte ele alır. Bu yaklaşım,
                her hizmet alanının aynı hedefe hizmet etmesini sağlar: sürdürülebilir
                değer üretmek.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. HİZMET ALANLARI ── */}
        <section className="relative" style={{ backgroundColor: "#F8F7F5", borderTop: "1px solid rgba(14,14,14,0.06)" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(48px, 6vw, 76px)" }}
          >
            {/* Başlık */}
            <div
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
              style={{ marginBottom: 48 }}
            >
              <div>
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: "8px", letterSpacing: "0.5em", color: "rgba(14,14,14,0.38)", marginBottom: 12 }}
                >
                  HİZMET ALANLARIMIZ
                </p>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-0.014em" }}
                >
                  Hizmet Alanlarımız
                </h2>
              </div>
              <p
                className="font-sans font-light"
                style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(14,14,14,0.48)", maxWidth: 340 }}
              >
                CaveArts, farklı uzmanlık alanlarını tek bir proje geliştirme
                vizyonu altında birleştirir.
              </p>
            </div>

            {/* 3×2 eşit grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {services.map((svc, i) => (
                <Link
                  key={svc.num}
                  href={svc.href}
                  className="group flex flex-col"
                  style={{
                    textDecoration: "none",
                    padding: "clamp(24px, 3vw, 36px) clamp(0px, 2vw, 28px) clamp(24px, 3vw, 36px) 0",
                    borderBottom: i < 3 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    borderLeft: i % 3 !== 0 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    paddingLeft: i % 3 !== 0 ? "clamp(20px, 2.5vw, 32px)" : 0,
                  }}
                >
                  {/* Numara + gold çizgi */}
                  <div className="flex items-center gap-3" style={{ marginBottom: 18 }}>
                    <span
                      className="font-sans font-medium"
                      style={{ fontSize: "8.5px", letterSpacing: "0.22em", color: "#C8A96A" }}
                    >
                      {svc.num}
                    </span>
                    <div style={{ flex: 1, height: 1, backgroundColor: "#C8A96A", opacity: 0.25 }} />
                  </div>

                  {/* Başlık */}
                  <h3
                    className="font-sans font-medium"
                    style={{ fontSize: 15, color: "#0E0E0E", letterSpacing: "0.01em", marginBottom: 12, lineHeight: 1.3 }}
                  >
                    {svc.title}
                  </h3>

                  {/* Açıklama */}
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(14,14,14,0.5)", marginBottom: 20, flex: 1 }}
                  >
                    {svc.desc}
                  </p>

                  {/* Link */}
                  <span
                    className="inline-flex items-center gap-2 transition-opacity duration-200 group-hover:opacity-50"
                    style={{ fontSize: "8.5px", letterSpacing: "0.18em", color: "#0E0E0E", fontWeight: 500 }}
                  >
                    DETAYLI BİLGİ
                    <svg width="13" height="7" viewBox="0 0 14 7" fill="none" aria-hidden="true">
                      <path d="M0 3.5H12.5M12.5 3.5L9.5 0.5M12.5 3.5L9.5 6.5" stroke="#0E0E0E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. DEĞER BÖLÜMÜ ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#111317" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.022,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 72px)", paddingBottom: "clamp(44px, 5.5vw, 72px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start" style={{ marginBottom: 40 }}>
              <h2
                className="font-serif font-light"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", color: "#F7F5F1", lineHeight: 1.18, letterSpacing: "-0.012em" }}
              >
                Her Hizmet Aynı Hedefe
                <br />
                Bağlanır: Değer Üretmek
              </h2>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, lineHeight: 1.92, color: "rgba(247,245,241,0.44)", alignSelf: "end" }}
              >
                CaveArts için hizmet alanları birbirinden kopuk başlıklar değildir.
                Proje geliştirme, gayrimenkul, eğitim, franchise, danışmanlık ve yatırım
                modeli çalışmaları; projenin daha doğru konumlanması, daha güçlü
                sunulması ve uzun vadede değer üretmesi için birlikte değerlendirilir.
              </p>
            </div>

            {/* 3 vurgu */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {valuePoints.map((point, i) => (
                <div
                  key={point}
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    paddingTop: 20,
                    paddingBottom: 4,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 40px)" : 0,
                    paddingRight: i < valuePoints.length - 1 ? "clamp(20px, 3vw, 40px)" : 0,
                  }}
                >
                  <span
                    className="font-sans font-medium uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.32em", color: "rgba(247,245,241,0.32)" }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA ── */}
        <PageCTA
          title="Projeniz İçin Doğru Hizmet Yapısını Birlikte Belirleyelim"
          description="Proje, yatırım, gayrimenkul, eğitim veya franchise süreçleriniz için CaveArts ekibiyle iletişime geçebilirsiniz."
          primaryLabel="İletişime Geç"
          primaryHref="/iletisim"
        />

        <Footer />
      </div>
    </>
  )
}
