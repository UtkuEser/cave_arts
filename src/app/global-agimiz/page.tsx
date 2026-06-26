import type { Metadata } from "next"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import PageCTA from "@/components/sections/PageCTA"
import { countries } from "@/data/countries"
import { partners } from "@/data/partners"

export const metadata: Metadata = {
  title: "CaveArts | Global Ağımız",
  description:
    "CaveArts, yerel projeleri uluslararası vizyon, güçlü partnerlikler ve stratejik iş ağlarıyla büyütür.",
  openGraph: {
    title: "CaveArts | Global Ağımız",
    description: "Yerel potansiyeli global ölçekte konumlandırıyoruz.",
  },
}

const statusColor: Record<string, string> = {
  Aktif: "#3D8B68",
  "Gelişen Ağ": "#C8A96A",
  Partnerlik: "#C8A96A",
}

export default function GlobalAgimizPage() {
  const networkPartners = partners.filter((p) => p.tier === "partner")
  const solutionPartners = partners.filter((p) => p.tier === "solution")

  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO — koyu lacivert, network node hissi ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#080C18", minHeight: 480 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.06,
              backgroundImage: "radial-gradient(rgba(200,169,106,0.8) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 60% 70% at 75% 30%, rgba(200,169,106,0.07) 0%, transparent 70%)",
            }}
          />
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(64px, 8.5vw, 108px)", paddingBottom: "clamp(40px, 5vw, 60px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 26 }}>
              GLOBAL AĞIMIZ
            </p>
            <h1
              className="font-serif font-light"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.6rem)", color: "#F7F5F1", lineHeight: 0.96, letterSpacing: "-0.02em", marginBottom: 32, maxWidth: 760 }}
            >
              Global Ağımız
            </h1>
            <div style={{ width: 44, height: 1, backgroundColor: "#C8A96A", marginBottom: 26 }} />
            <p className="font-sans font-light" style={{ fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.9, color: "rgba(255,255,255,0.45)", maxWidth: 540 }}>
              CaveArts, yerel projeleri uluslararası vizyon, güçlü
              partnerlikler ve stratejik iş ağlarıyla büyütür.
            </p>
          </div>
        </section>

        {/* ── 2. GLOBAL YAKLAŞIM ── */}
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
                Yerel Potansiyeli
                <br />
                Global Ölçekte
                <br />
                Konumlandırıyoruz
              </h2>
              <p className="font-sans font-light" style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 480, alignSelf: "end" }}>
                CaveArts, projeleri yalnızca bulunduğu pazarla sınırlı
                değerlendirmez; yatırımcı profili, uluslararası beklentiler,
                partner ağları ve iş birliği modelleriyle birlikte ele alır.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. ÜLKELER — zengin kartlar ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{
              opacity: 0.5,
              backgroundImage: "radial-gradient(rgba(17,17,17,0.07) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 0%, transparent 80%)",
            }}
          />
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(48px, 6vw, 76px)" }}
          >
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-0.012em", marginBottom: 32 }}>
              Faaliyet Gösterdiğimiz Ülkeler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {countries.map((country, i) => (
                <div
                  key={country.id}
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    paddingTop: 28,
                    paddingBottom: 8,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 40px)" : 0,
                    paddingRight: i < countries.length - 1 ? "clamp(20px, 3vw, 40px)" : 0,
                  }}
                >
                  <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
                    <h3 className="font-serif font-light" style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: "#0E0E0E" }}>
                      {country.name}
                    </h3>
                    <span
                      className="font-sans font-medium uppercase"
                      style={{ fontSize: 8, letterSpacing: "0.16em", color: statusColor[country.statusLabel] ?? "#C8A96A" }}
                    >
                      {country.statusLabel}
                    </span>
                  </div>
                  <p className="font-sans font-medium uppercase" style={{ fontSize: 9.5, letterSpacing: "0.16em", color: "#C8A96A", marginBottom: 14 }}>
                    {country.role}
                  </p>
                  <p className="font-sans font-light" style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(14,14,14,0.52)" }}>
                    {country.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. ŞUBELER ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(44px, 5.5vw, 68px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "rgba(14,14,14,0.3)", marginBottom: 24 }}>
              ŞUBELER
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div style={{ borderTop: "1px solid rgba(14,14,14,0.1)", paddingTop: 24 }}>
                <h3 className="font-serif font-light" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", color: "#0E0E0E", marginBottom: 14 }}>
                  Merkez Ofis
                </h3>
                <p className="font-sans font-light" style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(14,14,14,0.52)" }}>
                  İstanbul, Türkiye — CaveArts'ın proje geliştirme, yatırım ve
                  uluslararası danışmanlık operasyonlarının yönetildiği
                  stratejik merkez.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(14,14,14,0.1)", paddingTop: 24 }}>
                <h3 className="font-serif font-light" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", color: "#0E0E0E", marginBottom: 14 }}>
                  Gelişen Operasyon Noktaları
                </h3>
                <p className="font-sans font-light" style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(14,14,14,0.52)" }}>
                  KKTC ve Rusya'daki ağımız, yeni iş birlikleri ve yatırım
                  projeleriyle sürekli büyüyen bir yapıdır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PARTNERLER — koyu zemin, logo wall ── */}
        <section className="relative" style={{ backgroundColor: "#1A1A1A" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(36px, 4.5vw, 52px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 18 }}>
              PARTNERLER
            </p>
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", color: "#FFFFFF", marginBottom: 24 }}>
              Güçlü Markalarla İş Birliği
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              {networkPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: "#1A1A1A", padding: "32px 20px", minHeight: 110 }}
                >
                  <p className="font-sans font-medium" style={{ fontSize: 11, letterSpacing: "0.04em", color: "#FFFFFF", marginBottom: 6 }}>
                    {partner.name}
                  </p>
                  <p className="font-sans font-light uppercase" style={{ fontSize: 7.5, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)" }}>
                    {partner.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. ÇÖZÜM ORTAKLARI — daha hafif liste ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(36px, 4.5vw, 56px)", paddingBottom: "clamp(36px, 4.5vw, 56px)" }}
          >
            <p className="font-sans font-medium uppercase" style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "rgba(14,14,14,0.3)", marginBottom: 18 }}>
              ÇÖZÜM ORTAKLARI
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-4" style={{ borderTop: "1px solid rgba(14,14,14,0.1)", paddingTop: 28 }}>
              {solutionPartners.map((partner) => (
                <div key={partner.id}>
                  <p className="font-sans font-medium" style={{ fontSize: 13.5, color: "#0E0E0E" }}>
                    {partner.name}
                  </p>
                  <p className="font-sans font-light uppercase" style={{ fontSize: 9, letterSpacing: "0.14em", color: "rgba(14,14,14,0.4)", marginTop: 4 }}>
                    {partner.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="CaveArts Global Ağına Katılın"
          description="Yeni pazarlara açılma, partnerlik veya iş birliği süreçleri hakkında bizimle iletişime geçin."
          primaryLabel="İş Birliği İçin İletişime Geç"
          primaryHref="/iletisim"
        />

        <Footer />
      </div>
    </>
  )
}
