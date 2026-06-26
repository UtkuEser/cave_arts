import type { Metadata } from "next"
import Link from "next/link"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import PageHero from "@/components/sections/PageHero"
import NewsExplorer from "@/components/sections/NewsExplorer"
import { insights } from "@/data/insights"

export const metadata: Metadata = {
  title: "CaveArts | CaveArts'tan Haberler",
  description:
    "CaveArts ekosisteminden proje geliştirme, yatırım, gayrimenkul, global ağ ve iş birliklerine dair güncel haberler.",
  openGraph: {
    title: "CaveArts | CaveArts'tan Haberler",
    description: "Proje geliştirme, yatırım ve global ağa dair güncel haberler.",
  },
}

export default function HaberlerPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        <PageHero
          label="HABERLER"
          title="CaveArts'tan Haberler"
          description="CaveArts ekosisteminden proje geliştirme, yatırım, gayrimenkul, global ağ ve iş birliklerine dair güncel haberler."
        />

        {/* ── Öne çıkan haber ── */}
        <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(36px, 4.5vw, 56px)", paddingBottom: "clamp(36px, 4.5vw, 56px)" }}
          >
            <Link
              href={featured.href}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              style={{ textDecoration: "none" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 11" }}>
                <div className="insight-card-img absolute inset-0" style={{ background: featured.cardGradient }} aria-hidden="true">
                  <div
                    className="absolute inset-0"
                    style={{
                      opacity: 0.05,
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />
                </div>
                <div className="absolute top-6 left-6">
                  <span className="font-sans font-medium uppercase" style={{ fontSize: 8, letterSpacing: "0.26em", color: "#C8A96A" }}>
                    {featured.category}
                  </span>
                </div>
              </div>
              <div>
                <p className="font-sans font-medium uppercase" style={{ fontSize: 8.5, letterSpacing: "0.4em", color: "rgba(14,14,14,0.32)", marginBottom: 18 }}>
                  ÖNE ÇIKAN HABER · {featured.date}
                </p>
                <h2
                  className="font-serif font-light"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.7rem)", color: "#0E0E0E", lineHeight: 1.16, letterSpacing: "-0.012em", marginBottom: 20 }}
                >
                  {featured.title}
                </h2>
                <p className="font-sans font-light" style={{ fontSize: 14.5, lineHeight: 1.9, color: "#4A4845", marginBottom: 28, maxWidth: 480 }}>
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 transition-opacity duration-200 group-hover:opacity-50"
                  style={{ fontSize: 9.5, letterSpacing: "0.18em", color: "#0E0E0E", fontWeight: 500, borderBottom: "1px solid rgba(17,17,17,0.2)", paddingBottom: 4 }}
                >
                  DEVAMINI OKU
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Haber grid + kategori filtresi ── */}
        <section className="relative" style={{ backgroundColor: "#F4F4F4" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(44px, 5.5vw, 68px)" }}
          >
            <NewsExplorer items={rest} />
          </div>
        </section>

        {/* ── Bülten CTA ── */}
        <section className="relative" style={{ backgroundColor: "#0E0E0E" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{ paddingTop: "clamp(44px, 5.5vw, 68px)", paddingBottom: "clamp(44px, 5.5vw, 68px)" }}
          >
            <div style={{ width: 36, height: 1, backgroundColor: "#C8A96A", margin: "0 auto 28px" }} />
            <h2
              className="font-serif font-light mx-auto"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)", color: "#FFFFFF", lineHeight: 1.18, letterSpacing: "-0.012em", maxWidth: 560, marginBottom: 36 }}
            >
              CaveArts Haberlerinden Haberdar Olun
            </h2>
            <form
              className="flex flex-col sm:flex-row mx-auto"
              style={{ maxWidth: 420, gap: 0 }}
              action="#"
            >
              <input
                type="email"
                placeholder="E-posta adresiniz"
                required
                className="flex-1 min-w-0 font-sans"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRight: "none",
                  color: "#FFFFFF",
                  fontSize: 13,
                  padding: "14px 18px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="font-sans font-semibold uppercase"
                style={{
                  backgroundColor: "#C8A96A",
                  color: "#0E0E0E",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  padding: "14px 28px",
                  whiteSpace: "nowrap",
                  border: "1px solid #C8A96A",
                }}
              >
                Abone Ol
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
