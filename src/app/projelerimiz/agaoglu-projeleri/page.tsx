import type { Metadata } from "next"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import ProjectCategoryNav from "@/components/sections/ProjectCategoryNav"

export const metadata: Metadata = {
  title: "Ağaoğlu Projeleri | CaveArts Projelerimiz",
  description:
    "CaveArts, güçlü marka iş birlikleriyle geliştirilen projeleri yatırımcı ve kullanıcı perspektifiyle konumlandırır.",
}

const ozellikler = [
  {
    baslik: "Güçlü Marka İş Birliği",
    aciklama: "Ağaoğlu'nun köklü deneyimi ve CaveArts'ın proje geliştirme vizyonu bir arada çalışır.",
  },
  {
    baslik: "Kalite Güvencesi",
    aciklama: "Onlarca yıllık inşaat deneyimi ve kalite standartlarıyla teslim edilen projeler.",
  },
  {
    baslik: "Yatırımcı Odaklı Model",
    aciklama: "Her proje, yatırımcının uzun vadeli kazancını merkeze alan bir model çerçevesinde geliştirilir.",
  },
  {
    baslik: "Stratejik Lokasyon",
    aciklama: "Ağaoğlu projeleri, değer artışı yüksek stratejik lokasyonlarda konumlanır.",
  },
]

export default function AgaogluProjelerPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#080C18", minHeight: 420 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.032,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "92px 92px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse at 38% 52%, rgba(6,8,18,0.78) 0%, transparent 65%)" }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(68px, 9vw, 112px)", paddingBottom: "clamp(44px, 6vw, 64px)" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 24 }}
            >
              MARKA İŞ BİRLİĞİ
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)",
                color: "#F7F5F1",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                marginBottom: 32,
                maxWidth: 760,
              }}
            >
              Ağaoğlu Projeleri
            </h1>
            <div style={{ width: 44, height: 1, backgroundColor: "#C9A86C", marginBottom: 24 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.95,
                color: "rgba(255,255,255,0.42)",
                maxWidth: 480,
              }}
            >
              CaveArts, güçlü marka iş birlikleriyle geliştirilen projeleri yatırımcı
              ve kullanıcı perspektifiyle konumlandırır.
            </p>
          </div>
        </section>

        {/* Kategori navigasyonu */}
        <ProjectCategoryNav />

        {/* Özellikler */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(52px, 7vw, 88px)", paddingBottom: "clamp(52px, 7vw, 88px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", color: "#111111", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 56 }}
            >
              Proje Değerleri
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {ozellikler.map((item, i) => (
                <div
                  key={item.baslik}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.1)",
                    paddingTop: 28,
                    paddingBottom: 28,
                    paddingRight: i < ozellikler.length - 1 ? "clamp(16px, 3vw, 40px)" : 0,
                  }}
                >
                  <p className="font-sans" style={{ fontSize: "8.5px", letterSpacing: "0.22em", color: "#C9A86C", marginBottom: 16 }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-sans font-medium" style={{ fontSize: 14, color: "#111111", marginBottom: 10 }}>
                    {item.baslik}
                  </h3>
                  <p className="font-sans font-light" style={{ fontSize: 12.5, color: "rgba(17,17,17,0.48)", lineHeight: 1.82 }}>
                    {item.aciklama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#111317" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{ paddingTop: "clamp(44px, 6vw, 72px)", paddingBottom: "clamp(44px, 6vw, 72px)" }}
          >
            <div style={{ width: 36, height: 1, backgroundColor: "#C9A86C", margin: "0 auto 32px" }} />
            <h2
              className="font-serif font-light mx-auto"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: "#F7F5F1", letterSpacing: "-0.02em", maxWidth: 520, marginBottom: 20, lineHeight: 1.1 }}
            >
              Projeyi Birlikte Değerlendirelim
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(247,245,241,0.38)", maxWidth: 400, marginBottom: 40 }}
            >
              Ağaoğlu projeleri hakkında detaylı bilgi almak için danışmanlarımızla iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="btn-matte-gold">Yatırım Danışmanı ile Görüş</Link>
              <Link href="/projelerimiz" className="btn-outline-white">Tüm Projeleri İncele</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
