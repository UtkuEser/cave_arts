import type { Metadata } from "next"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import ProjectCategoryNav from "@/components/sections/ProjectCategoryNav"

export const metadata: Metadata = {
  title: "Uluslararası Projeler | CaveArts Projelerimiz",
  description:
    "Yerel potansiyeli global yatırımcı beklentileriyle buluşturan projeler, uluslararası ağ ve danışmanlık yaklaşımıyla değerlendirilir.",
}

const ozellikler = [
  {
    baslik: "Global Ağ",
    aciklama: "5+ ülkede kurulu iş ortaklığı ağı ile uluslararası proje geliştirme ve danışmanlık hizmetleri sunulur.",
  },
  {
    baslik: "Çok Pazarlı Strateji",
    aciklama: "Yerel dinamikler ve global yatırımcı beklentileri bir arada değerlendirilerek en uygun strateji belirlenir.",
  },
  {
    baslik: "Uluslararası Finansal Modeller",
    aciklama: "Farklı ülkelerdeki yatırım araçları, vergi yapıları ve finansal modeller uzman ekibimizle analiz edilir.",
  },
  {
    baslik: "Kültürler Arası Danışmanlık",
    aciklama: "Proje geliştirme, pazarlama ve satış süreçleri yerel kültür ve uluslararası standartlar gözetilerek yönetilir.",
  },
]

const bolgeler = [
  { bolge: "Orta Doğu", aciklama: "BAE, Katar ve Suudi Arabistan pazarlarında proje geliştirme ve yatırım danışmanlığı." },
  { bolge: "Avrupa", aciklama: "Avrupa'daki Türk diasporası ve lokal yatırımcılara yönelik gayrimenkul çözümleri." },
  { bolge: "Kuzey Afrika", aciklama: "Gelişen pazar ekonomilerinde erken aşama proje geliştirme fırsatları." },
]

export default function UluslararasiProjelerPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#07091C", minHeight: 420 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.028,
              backgroundImage:
                "repeating-linear-gradient(30deg, transparent, transparent 95px, rgba(201,168,108,0.5) 95px, rgba(201,168,108,0.5) 96px)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(ellipse at 42% 50%, rgba(7,9,28,0.8) 0%, transparent 65%)" }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(68px, 9vw, 112px)", paddingBottom: "clamp(44px, 6vw, 64px)" }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 24 }}
            >
              GLOBAL VİZYON
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
              Uluslararası Projeler
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
              Yerel potansiyeli global yatırımcı beklentileriyle buluşturan projeler,
              uluslararası ağ ve danışmanlık yaklaşımıyla değerlendirilir.
            </p>
          </div>
        </section>

        {/* Kategori navigasyonu */}
        <ProjectCategoryNav />

        {/* Yaklaşım */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(52px, 7vw, 88px)", paddingBottom: "clamp(44px, 6vw, 64px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", color: "#111111", letterSpacing: "-0.02em", lineHeight: 1.08, marginBottom: 56 }}
            >
              Global Yaklaşımımız
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

        {/* Bölgeler */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(44px, 6vw, 72px)" }}
          >
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.3rem, 2.4vw, 2.1rem)", color: "#111111", letterSpacing: "-0.018em", lineHeight: 1.1, marginBottom: 40 }}
            >
              Faaliyet Gösterdiğimiz Bölgeler
            </h2>
            <div className="flex flex-col">
              {bolgeler.map((b, i) => (
                <div
                  key={b.bolge}
                  className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-16"
                  style={{ borderTop: "1px solid rgba(17,17,17,0.08)", paddingTop: 24, paddingBottom: 24 }}
                >
                  <p
                    className="font-sans font-medium uppercase shrink-0"
                    style={{ fontSize: "8.5px", letterSpacing: "0.32em", color: "#C9A86C", minWidth: 140, paddingTop: 2 }}
                  >
                    {String(i + 1).padStart(2, "0")} — {b.bolge}
                  </p>
                  <p className="font-sans font-light" style={{ fontSize: 13.5, color: "rgba(17,17,17,0.52)", lineHeight: 1.78 }}>
                    {b.aciklama}
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
              Global Fırsatları Birlikte Değerlendirelim
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(247,245,241,0.38)", maxWidth: 400, marginBottom: 40 }}
            >
              Uluslararası projeler ve yatırım fırsatları hakkında uzman danışmanlarımızla görüşün.
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
