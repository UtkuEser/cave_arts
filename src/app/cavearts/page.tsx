import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import PageCTA from "@/components/sections/PageCTA"
import { team } from "@/data/team"

export const metadata: Metadata = {
  title: "CaveArts | Marka Hikayesi ve Vizyon",
  description:
    "CaveArts'ın neden var olduğunu, neyi temsil ettiğini ve hangi vizyonla çalıştığını anlatan kurumsal kimlik sayfası.",
  openGraph: {
    title: "CaveArts | Marka Hikayesi ve Vizyon",
    description: "Fikirden sisteme uzanan bir yapı: CaveArts'ın hikayesi, vizyonu ve yaklaşımı.",
  },
}

const visionPoints = [
  { num: "01", title: "Proje Geliştirme", desc: "Fikirleri stratejik, yatırım değeri taşıyan projelere dönüştürürüz." },
  { num: "02", title: "Yatırım Perspektifi", desc: "Her kararı, uzun vadeli yatırım değeri perspektifiyle ele alırız." },
  { num: "03", title: "Uluslararası Ağ", desc: "Yerel projeleri global iş birlikleri ve partnerlerle büyütürüz." },
]

const approachPoints = [
  { num: "01", title: "Lokasyon", desc: "Bölgenin gelişim potansiyeli ve yatırım değeri analiz edilir." },
  { num: "02", title: "Marka Değeri", desc: "Proje, güçlü bir marka kimliği ve konumlandırmayla geliştirilir." },
  { num: "03", title: "Satış Organizasyonu", desc: "Profesyonel ve şeffaf bir satış yapısı kurulur." },
  { num: "04", title: "Yatırım Modeli", desc: "Yatırımcı ile proje arasında doğru denge sağlanır." },
  { num: "05", title: "Sürdürülebilir Büyüme", desc: "Her sistem, uzun vadeli ve tekrarlanabilir şekilde tasarlanır." },
]

export default function CaveArtsPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO — açık zemin, silik geyik, ince gold çizgiler ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="absolute pointer-events-none select-none hidden md:block"
            aria-hidden="true"
            style={{ top: "-6%", right: "-4%", width: "min(46vw, 560px)", height: "min(46vw, 560px)", opacity: 0.045 }}
          >
            <Image src="/İmage/logo/Geyik-Siyah.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>
          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(68px, 9vw, 112px)", paddingBottom: "clamp(44px, 6vw, 84px)" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C8A96A", marginBottom: 26 }}
            >
              CAVEARTS I.P.D.C.
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                color: "#0E0E0E",
                lineHeight: 0.94,
                letterSpacing: "-0.02em",
                marginBottom: 32,
              }}
            >
              CaveArts
            </h1>
            <div style={{ width: 48, height: 1, backgroundColor: "#C8A96A", marginBottom: 28 }} />
            <p
              className="font-sans font-light"
              style={{ fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.9, color: "#4A4845", maxWidth: 560 }}
            >
              Projeleri, yatırım modellerini ve iş sistemlerini uluslararası
              vizyonla geliştiren stratejik yapı.
            </p>
          </div>
        </section>

        {/* ── 2. HİKAYEMİZ — sol başlık, sağ metin + manifesto cümleleri ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(52px, 6.5vw, 84px)", paddingBottom: "clamp(52px, 6.5vw, 84px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
              <h2
                className="font-serif font-light"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)", color: "#0E0E0E", lineHeight: 1.12, letterSpacing: "-0.015em" }}
              >
                Fikirden Sisteme
                <br />
                Uzanan Bir Yapı
              </h2>
              <div>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", marginBottom: 36 }}
                >
                  CaveArts, yalnızca projelerin satışını değil; fikir aşamasından
                  marka konumlandırmasına, yatırım modelinden global iş
                  birliklerine kadar uzanan bütünsel bir geliştirme yaklaşımını
                  temsil eder.
                </p>
                <div style={{ borderTop: "1px solid rgba(14,14,14,0.12)", paddingTop: 24 }}>
                  <p
                    className="font-serif font-light italic"
                    style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", color: "rgba(14,14,14,0.65)", lineHeight: 1.6 }}
                  >
                    Bir proje yalnızca inşa edilmez; konumlandırılır, anlatılır
                    ve büyütülür.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. VİZYONUMUZ — 3 vurgu, yatay bölmeli ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(48px, 6vw, 76px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                color: "#0E0E0E",
                lineHeight: 1.15,
                letterSpacing: "-0.012em",
                marginBottom: 36,
                maxWidth: 680,
              }}
            >
              Yerel Potansiyeli Global Ölçekte Değerlendirmek
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {visionPoints.map((v, i) => (
                <div
                  key={v.num}
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    paddingTop: 28,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 44px)" : 0,
                    paddingRight: i < visionPoints.length - 1 ? "clamp(20px, 3vw, 44px)" : 0,
                  }}
                >
                  <p className="font-sans font-medium" style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#C8A96A", marginBottom: 18 }}>
                    {v.num}
                  </p>
                  <h3 className="font-sans font-medium" style={{ fontSize: 15, color: "#0E0E0E", marginBottom: 12 }}>
                    {v.title}
                  </h3>
                  <p className="font-sans font-light" style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(14,14,14,0.5)" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. YAKLAŞIMIMIZ — editorial liste, kart değil ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-5xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(48px, 6vw, 76px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", color: "#0E0E0E", lineHeight: 1.15, letterSpacing: "-0.012em", marginBottom: 32 }}
            >
              Her Projeyi Bir Sistem Olarak Ele Alırız
            </h2>
            <div>
              {approachPoints.map((a) => (
                <div
                  key={a.num}
                  className="flex items-baseline gap-8"
                  style={{ borderTop: "1px solid rgba(14,14,14,0.1)", padding: "22px 0" }}
                >
                  <span className="font-sans font-medium shrink-0" style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#C8A96A", minWidth: 22 }}>
                    {a.num}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8" style={{ flex: 1 }}>
                    <h3 className="font-sans font-medium" style={{ fontSize: 14.5, color: "#0E0E0E", minWidth: 180, marginBottom: 6 }}>
                      {a.title}
                    </h3>
                    <p className="font-sans font-light" style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(14,14,14,0.5)" }}>
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }} />
            </div>
          </div>
        </section>

        {/* ── 5. GEYİK SEMBOLÜNÜN ANLAMI — editorial, two-column ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#0E0E0E" }}>
          {/* Watermark — sağda, çok silik */}
          <div
            className="absolute pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ top: "50%", right: "-1%", transform: "translateY(-50%)", width: "clamp(200px, 18vw, 280px)", height: "clamp(200px, 18vw, 280px)", opacity: 0.032 }}
          >
            <Image src="/İmage/logo/Geyik-Beyaz.png" alt="" fill style={{ objectFit: "contain" }} />
          </div>

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-6 lg:gap-14 items-start">

              {/* Sol: küçük etiket */}
              <div style={{ paddingTop: 4 }}>
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: "8px", letterSpacing: "0.42em", color: "rgba(200,169,106,0.6)", lineHeight: 1.9 }}
                >
                  CAVEARTS
                  <br />
                  SEMBOLÜ
                </p>
              </div>

              {/* Sağ: gold çizgi + statement + açıklama */}
              <div>
                <div style={{ width: 36, height: 1, backgroundColor: "#C8A96A", marginBottom: 26 }} />
                <h2
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)",
                    color: "#F7F5F1",
                    lineHeight: 1.22,
                    letterSpacing: "-0.012em",
                    marginBottom: 18,
                    maxWidth: 560,
                  }}
                >
                  Geyik; liderliği, vizyonu ve köklü duruşu temsil eder.
                </h2>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 14, lineHeight: 1.88, color: "rgba(247,245,241,0.38)", maxWidth: 490 }}
                >
                  CaveArts için bu sembol, projelere yalnızca bugünden değil;
                  gelecekte üreteceği değer, denge ve sürdürülebilirlik
                  perspektifiyle bakmayı ifade eder.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. CAVEARTS EKİBİ — preview ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(48px, 6vw, 76px)" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ marginBottom: 28 }}>
              <div>
                <p className="font-sans font-medium uppercase" style={{ fontSize: "9px", letterSpacing: "0.5em", color: "rgba(14,14,14,0.3)", marginBottom: 16 }}>
                  EKİBİMİZ
                </p>
                <h2 className="font-serif font-light" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                  CaveArts Ekibi
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderTop: "1px solid rgba(14,14,14,0.1)" }}>
              {team.slice(0, 3).map((member, i) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4"
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(14,14,14,0.08)" : "none",
                    paddingTop: 24,
                    paddingBottom: 8,
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 36px)" : 0,
                    paddingRight: "clamp(12px, 2vw, 24px)",
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{ width: 52, height: 52, backgroundColor: "#1A1A1A" }}
                  >
                    <span className="font-serif font-light" style={{ fontSize: 16, color: "rgba(200,169,106,0.6)" }}>
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-medium" style={{ fontSize: 13.5, color: "#0E0E0E" }}>
                      {member.name}
                    </p>
                    <p className="font-sans font-light uppercase" style={{ fontSize: 9, letterSpacing: "0.12em", color: "#C8A96A", marginTop: 3 }}>
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <PageCTA
          title="CaveArts ile Tanışın"
          description="Proje geliştirme ve yatırım süreçleriniz hakkında CaveArts ekibiyle iletişime geçin."
          primaryLabel="İletişime Geç"
          primaryHref="/iletisim"
        />

        <Footer />
      </div>
    </>
  )
}
