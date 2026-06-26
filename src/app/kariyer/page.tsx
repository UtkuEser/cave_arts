import type { Metadata } from "next"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import { openPositions } from "@/data/positions"

export const metadata: Metadata = {
  title: "CaveArts | Kariyer",
  description:
    "CaveArts ekosisteminde değer üretmek, projeleri geliştirmek ve geleceğin yatırım sistemlerinde yer almak isteyen profesyoneller için.",
  openGraph: {
    title: "CaveArts | Kariyer",
    description: "Bir işten fazlası, bir ekosistemin parçası olmak.",
  },
}

const profiles = [
  "Proje Geliştirme Uzmanları",
  "Gayrimenkul Danışmanları",
  "Satış ve Yatırım Danışmanları",
  "Eğitim ve Organizasyon Uzmanları",
  "Franchise Geliştirme Temsilcileri",
  "Pazarlama ve Marka İletişimi Uzmanları",
]

const applicationSteps = [
  { num: "01", title: "Başvuru", desc: "Başvurunuzu ilgili pozisyon veya genel başvuru olarak iletirsiniz." },
  { num: "02", title: "Ön Görüşme", desc: "CaveArts ekibi, profilinizi ve beklentilerinizi değerlendirir." },
  { num: "03", title: "Değerlendirme", desc: "Uygun alan ve pozisyon birlikte netleştirilir." },
  { num: "04", title: "Ekosisteme Katılım", desc: "Süreç tamamlandığında CaveArts ekosistemine dahil olursunuz." },
]

export default function KariyerPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO — koyu ama sıcak ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#1A1A1A", minHeight: 480 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse 60% 60% at 70% 25%, rgba(200,169,106,0.1) 0%, transparent 70%)" }}
          />
          {/* Soyut ekip ağı — bağlantılı node noktaları */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.5,
              backgroundImage: "radial-gradient(rgba(200,169,106,0.5) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage: "radial-gradient(ellipse 55% 75% at 80% 40%, black 0%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 55% 75% at 80% 40%, black 0%, transparent 75%)",
            }}
          />
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(64px, 8.5vw, 108px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 26 }}>
              KARİYER
            </p>
            <h1
              className="font-serif font-light"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.6rem)", color: "#FFFFFF", lineHeight: 0.96, letterSpacing: "-0.02em", marginBottom: 32, maxWidth: 760 }}
            >
              Kariyer
            </h1>
            <div style={{ width: 44, height: 1, backgroundColor: "#C8A96A", marginBottom: 26 }} />
            <p className="font-sans font-light" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.9, color: "rgba(255,255,255,0.5)", maxWidth: 540 }}>
              CaveArts ekosisteminde değer üretmek, projeleri geliştirmek ve
              geleceğin yatırım sistemlerinde yer almak isteyen profesyoneller
              için.
            </p>
          </div>
        </section>

        {/* ── 2. CAVEARTS'TA ÇALIŞMAK ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(36px, 4.5vw, 56px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">
              <h2
                className="font-serif font-light"
                style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)", color: "#0E0E0E", lineHeight: 1.14, letterSpacing: "-0.012em" }}
              >
                Bir İşten Fazlası,
                <br />
                Bir Ekosistemin
                <br />
                Parçası Olmak
              </h2>
              <p className="font-sans font-light" style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 480, alignSelf: "end" }}>
                CaveArts, proje geliştirme, yatırım, gayrimenkul, danışmanlık,
                eğitim ve franchise alanlarını bir araya getiren çok
                disiplinli bir yapıdır. Bu yapıda yer alan her profesyonel,
                yalnızca bir görevi değil, daha büyük bir sistemin gelişimini
                destekler.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. ARADIĞIMIZ PROFİLLER ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(36px, 4.5vw, 56px)", paddingBottom: "clamp(36px, 4.5vw, 56px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "rgba(14,14,14,0.3)", marginBottom: 28 }}>
              ARADIĞIMIZ PROFİLLER
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {profiles.map((profile, i) => (
                <div
                  key={profile}
                  className="flex items-center gap-4"
                  style={{
                    borderLeft: i % 3 !== 0 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    padding: "22px clamp(0px, 2vw, 28px)",
                  }}
                >
                  <span style={{ width: 5, height: 5, backgroundColor: "#C8A96A", flexShrink: 0 }} aria-hidden="true" />
                  <span className="font-sans font-medium" style={{ fontSize: 13.5, color: "#0E0E0E", lineHeight: 1.4 }}>
                    {profile}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. AÇIK POZİSYONLAR ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(44px, 5.5vw, 68px)" }}
          >
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-0.012em", marginBottom: 28 }}>
              Açık Pozisyonlar
            </h2>
            <div>
              {openPositions.map((pos) => (
                <div
                  key={pos.id}
                  className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10"
                  style={{ borderTop: "1px solid rgba(14,14,14,0.1)", padding: "26px 0" }}
                >
                  <div style={{ flex: 1 }}>
                    <h3 className="font-sans font-medium" style={{ fontSize: 15, color: "#0E0E0E", marginBottom: 8 }}>
                      {pos.title}
                    </h3>
                    <p className="font-sans font-light" style={{ fontSize: 12.5, lineHeight: 1.8, color: "rgba(14,14,14,0.5)", maxWidth: 560, marginBottom: 10 }}>
                      {pos.desc}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="font-sans font-medium uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "#C8A96A" }}>
                        {pos.location}
                      </span>
                      <span style={{ width: 1, height: 10, backgroundColor: "rgba(14,14,14,0.15)" }} aria-hidden="true" />
                      <span className="font-sans font-medium uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,14,0.4)" }}>
                        {pos.type}
                      </span>
                    </div>
                  </div>
                  <Link href="/iletisim" className="btn-outline-dark shrink-0">
                    Başvur
                  </Link>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }} />
            </div>
          </div>
        </section>

        {/* ── 5. BAŞVURU SÜRECİ ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(44px, 5.5vw, 68px)" }}
          >
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-0.015em", marginBottom: 48 }}>
              Başvuru Süreci
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {applicationSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    borderTop: "1px solid rgba(14,14,14,0.1)",
                    paddingTop: 24,
                    paddingBottom: 8,
                    paddingRight: i < applicationSteps.length - 1 ? "clamp(16px, 3vw, 40px)" : 0,
                  }}
                >
                  <p className="font-sans" style={{ fontSize: "8.5px", letterSpacing: "0.22em", color: "#C8A96A", marginBottom: 18 }}>
                    {step.num}
                  </p>
                  <h3 className="font-sans font-medium" style={{ fontSize: 13.5, color: "#0E0E0E", marginBottom: 10 }}>
                    {step.title}
                  </h3>
                  <p className="font-sans font-light" style={{ fontSize: 12.5, lineHeight: 1.82, color: "rgba(14,14,14,0.5)" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#0E0E0E" }}>
          <div
            className="relative z-10 flex flex-col items-center text-center"
            style={{ padding: "clamp(36px, 4.5vw, 64px) clamp(24px, 6vw, 80px)" }}
          >
            <div style={{ width: 32, height: 1, backgroundColor: "#C8A96A", marginBottom: 20 }} />
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.4rem)", color: "#FFFFFF", lineHeight: 1.12, letterSpacing: "-0.01em", maxWidth: 680, marginBottom: 24 }}
            >
              CaveArts Ekosisteminde Yer Alın
            </h2>
            <p className="font-sans font-light" style={{ fontSize: 14.5, lineHeight: 1.95, color: "rgba(255,255,255,0.42)", maxWidth: 480, marginBottom: 28 }}>
              Birlikte değer üretmek ve geleceğin projelerinde yer almak için
              başvurunuzu iletebilirsiniz.
            </p>
            <Link href="/iletisim" className="btn-matte-gold">
              Başvuru Yap
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
