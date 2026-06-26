import type { Metadata } from "next"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import ProjectCategoryNav from "@/components/sections/ProjectCategoryNav"
import Link from "next/link"
import { featuredProjects } from "@/data/projects"

export const metadata: Metadata = {
  title: "CaveArts | Projelerimiz",
  description:
    "CaveArts, her projeyi lokasyon, yatırım modeli, marka değeri ve uzun vadeli potansiyeliyle birlikte ele alır.",
  openGraph: {
    title: "CaveArts | Projelerimiz",
    description: "Projeleri yalnızca fiziksel yapılar olarak görmeyiz.",
  },
}

const statusConfig: Record<string, { label: string; color: string; border: string; bg: string }> = {
  Satışta: {
    label: "SATIŞTA",
    color: "#3D8B68",
    border: "rgba(61,139,104,0.5)",
    bg: "rgba(61,139,104,0.1)",
  },
  "Planlama Aşaması": {
    label: "PLANLAMA",
    color: "rgba(255,255,255,0.5)",
    border: "rgba(255,255,255,0.2)",
    bg: "rgba(255,255,255,0.07)",
  },
  "Ön Talep": {
    label: "ÖN TALEP",
    color: "#C9A86C",
    border: "rgba(201,168,108,0.5)",
    bg: "rgba(201,168,108,0.1)",
  },
  Yakında: {
    label: "YAKINDA",
    color: "rgba(255,255,255,0.5)",
    border: "rgba(255,255,255,0.2)",
    bg: "rgba(255,255,255,0.07)",
  },
  "Geliştirme Aşaması": {
    label: "GELİŞTİRME",
    color: "rgba(255,255,255,0.42)",
    border: "rgba(255,255,255,0.18)",
    bg: "rgba(255,255,255,0.05)",
  },
}

const defaultStatus = {
  label: "—",
  color: "rgba(255,255,255,0.35)",
  border: "rgba(255,255,255,0.15)",
  bg: "rgba(255,255,255,0.05)",
}

export default function ProjelerimizPage() {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#07091A", minHeight: 440 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.035,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "96px 96px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 40% 50%, rgba(8,10,28,0.7) 0%, transparent 65%)",
            }}
          />

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(68px, 9vw, 112px)",
              paddingBottom: "clamp(44px, 5.5vw, 68px)",
            }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 28 }}
            >
              PROJELERİMİZ
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6.4rem)",
                color: "#F7F5F1",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                marginBottom: 36,
                maxWidth: 820,
              }}
            >
              Projelerimiz
            </h1>
            <div style={{ width: 44, height: 1, backgroundColor: "#C9A86C", marginBottom: 28 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.44)",
                maxWidth: 480,
              }}
            >
              Her proje; bulunduğu lokasyon, yatırım modeli, marka değeri ve
              uzun vadeli potansiyeliyle birlikte değerlendirilir.
            </p>
          </div>
        </section>

        {/* ── 2. KATEGORİ NAVİGASYONU ─────────────────────────── */}
        <ProjectCategoryNav />

        {/* ── 3. PROJE PORTFÖYÜ ───────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(44px, 6vw, 72px)",
              paddingBottom: "clamp(44px, 6vw, 72px)",
            }}
          >
            <div
              className="flex flex-col lg:flex-row lg:items-end justify-between"
              style={{ marginBottom: 48 }}
            >
              <div>
                <h2
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)",
                    color: "#111111",
                    lineHeight: 1.08,
                    letterSpacing: "-0.015em",
                    marginBottom: 10,
                  }}
                >
                  Tüm Projeler
                </h2>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: "13px", color: "rgba(17,17,17,0.42)", lineHeight: 1.7, maxWidth: 440 }}
                >
                  CaveArts portföyünde yer alan projeler, yatırımcıya güven veren süreç,
                  net model ve güçlü lokasyon perspektifiyle sunulur.
                </p>
              </div>
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: "8.5px", letterSpacing: "0.4em", color: "rgba(17,17,17,0.28)", marginTop: 8 }}
              >
                {featuredProjects.length} Proje
              </p>
            </div>

            {/* Proje kartları grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ backgroundColor: "rgba(17,17,17,0.07)" }}
            >
              {featuredProjects.map((project, i) => {
                const cfg = statusConfig[project.status] ?? defaultStatus
                return (
                  <Link
                    href={project.href}
                    key={project.id}
                    className="group"
                    style={{ textDecoration: "none", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF" }}
                  >
                    {/* Gradient visual */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                      <div
                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ background: project.cardGradient }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          opacity: 0.08,
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.35) 100%)" }}
                      />
                      {/* Gold corner */}
                      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: 28, height: 28 }}>
                        <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "1px", backgroundColor: "rgba(201,168,108,0.6)" }} />
                        <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "100%", backgroundColor: "rgba(201,168,108,0.6)" }} />
                      </div>
                      {/* Status badge */}
                      <div
                        className="absolute top-4 left-4"
                        style={{ padding: "4px 10px", backgroundColor: cfg.bg, border: `1px solid ${cfg.border}` }}
                      >
                        <span className="font-sans font-medium" style={{ color: cfg.color, fontSize: "8.5px", letterSpacing: "0.2em" }}>
                          {cfg.label}
                        </span>
                      </div>
                      {/* Faint number */}
                      <div
                        className="absolute bottom-3 right-4 font-serif font-light pointer-events-none"
                        style={{ color: "rgba(255,255,255,0.06)", fontSize: "64px", lineHeight: 1 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1" style={{ padding: "clamp(20px, 2.5vw, 28px)" }}>
                      <p
                        className="font-sans font-medium uppercase"
                        style={{ fontSize: "8.5px", letterSpacing: "0.32em", color: "#C9A86C", marginBottom: 8 }}
                      >
                        {project.location}
                      </p>
                      <h3
                        className="font-serif font-light"
                        style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#111111", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}
                      >
                        {project.title}
                      </h3>

                      <div style={{ height: 1, backgroundColor: "rgba(17,17,17,0.07)", marginBottom: 16 }} />

                      <dl className="grid grid-cols-3 gap-x-3 mb-5 flex-1">
                        {[
                          { label: "TİP", value: project.type },
                          { label: "MODEL", value: project.investmentModel },
                          { label: "DURUM", value: cfg.label },
                        ].map((item) => (
                          <div key={item.label}>
                            <dt className="font-sans font-medium" style={{ color: "rgba(17,17,17,0.28)", fontSize: "7.5px", letterSpacing: "0.18em", marginBottom: 4 }}>
                              {item.label}
                            </dt>
                            <dd className="font-sans font-medium" style={{ color: "#4A4845", fontSize: "10.5px", lineHeight: 1.4 }}>
                              {item.value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div style={{ height: 1, backgroundColor: "rgba(17,17,17,0.07)", marginBottom: 18 }} />

                      <span
                        className="flex items-center gap-2 font-sans font-medium uppercase transition-colors duration-200 group-hover:text-[#C9A86C]"
                        style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(17,17,17,0.5)" }}
                      >
                        PROJEYİ İNCELE
                        <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 4. CTA ──────────────────────────────────────────── */}
        <section className="relative" style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10 text-center"
            style={{
              paddingTop: "clamp(44px, 6vw, 72px)",
              paddingBottom: "clamp(44px, 6vw, 72px)",
            }}
          >
            <div style={{ width: 36, height: 1, backgroundColor: "#C9A86C", margin: "0 auto", marginBottom: 32 }} />
            <h2
              className="font-serif font-light mx-auto"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)", color: "#111111", lineHeight: 1.08, letterSpacing: "-0.02em", maxWidth: 560, marginBottom: 20 }}
            >
              Size Uygun Projeyi
              <br />
              Birlikte Değerlendirelim
            </h2>
            <p
              className="font-sans font-light mx-auto"
              style={{ fontSize: "14px", lineHeight: 1.9, color: "rgba(17,17,17,0.46)", maxWidth: 420, marginBottom: 44 }}
            >
              CaveArts danışmanları, hedefinize ve yatırım beklentinize uygun proje
              seçenekleri hakkında sizi bilgilendirmek için iletişime geçebilir.
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
                href="/cavearts-prime"
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
                CaveArts Prime&apos;ı İncele
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
