import type { Metadata } from "next"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import ProjectCategoryNav from "@/components/sections/ProjectCategoryNav"

export const metadata: Metadata = {
  title: "Türkiye Projeleri | CaveArts Projelerimiz",
  description:
    "Türkiye'deki güçlü lokasyonlar, yatırım modelleri ve proje geliştirme fırsatları CaveArts yaklaşımıyla ele alınır.",
}

const sehirler = [
  { sehir: "İstanbul", detay: "Boğaz hattı, Anadolu yakası ve şehir dönüşüm projelerinde stratejik konumlar." },
  { sehir: "İzmir", detay: "Ege kıyısı, Çeşme ve Urla aksında değer üreten konut ve turizm projeleri." },
  { sehir: "Ankara", detay: "Başkentin prestijli lokasyonlarında karma kullanım ve konut projeleri." },
  { sehir: "Antalya", detay: "Turizm ve konut sentezini bir arada sunan Lara, Belek ve çevre aksları." },
]


export default function TurkiyeProjelerPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#09100F", minHeight: 420 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.03,
              backgroundImage:
                "linear-gradient(rgba(160,220,190,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,220,190,1) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse at 42% 52%, rgba(6,12,10,0.82) 0%, transparent 65%)" }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(68px, 9vw, 112px)", paddingBottom: "clamp(44px, 6vw, 64px)" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 24 }}
            >
              YURTİÇİ PORTFÖY
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
              Türkiye Projeleri
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
              Türkiye&apos;deki güçlü lokasyonlar, yatırım modelleri ve proje geliştirme
              fırsatları CaveArts yaklaşımıyla ele alınır.
            </p>
          </div>
        </section>

        {/* Kategori navigasyonu */}
        <ProjectCategoryNav />

        {/* Şehirler */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(52px, 7vw, 88px)", paddingBottom: "clamp(44px, 6vw, 64px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", color: "#111111", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 40 }}
            >
              Faaliyet Lokasyonları
            </h2>
            <div className="flex flex-col">
              {sehirler.map((s, i) => (
                <div
                  key={s.sehir}
                  className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-16"
                  style={{ borderTop: "1px solid rgba(17,17,17,0.08)", paddingTop: 24, paddingBottom: 24 }}
                >
                  <p
                    className="font-sans font-medium uppercase shrink-0"
                    style={{ fontSize: "8.5px", letterSpacing: "0.32em", color: "#C9A86C", minWidth: 120, paddingTop: 2 }}
                  >
                    {String(i + 1).padStart(2, "0")} — {s.sehir}
                  </p>
                  <p className="font-sans font-light" style={{ fontSize: 13.5, color: "rgba(17,17,17,0.52)", lineHeight: 1.78 }}>
                    {s.detay}
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
              Size Uygun Projeyi<br />Birlikte Bulalım
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(247,245,241,0.38)", maxWidth: 400, marginBottom: 40 }}
            >
              Türkiye&apos;deki proje fırsatları hakkında bilgi almak için danışmanlarımızla görüşün.
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
