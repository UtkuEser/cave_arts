import Link from "next/link"
import { featuredProjects, FeaturedProject } from "@/data/projects"

type ProjectCard = FeaturedProject & {
  description?: string
  deed?: string
  payment?: string
}

const statusConfig: Record<string, { color: string; border: string; bg: string; label: string }> = {
  Satışta: {
    color: "#3D8B68",
    border: "rgba(61,139,104,0.5)",
    bg: "rgba(61,139,104,0.1)",
    label: "SATIŞTA",
  },
  "Ön Satış": {
    color: "#C9A86C",
    border: "rgba(201,168,108,0.5)",
    bg: "rgba(201,168,108,0.1)",
    label: "ÖN SATIŞ",
  },
  Yakında: {
    color: "rgba(255,255,255,0.45)",
    border: "rgba(255,255,255,0.2)",
    bg: "rgba(255,255,255,0.06)",
    label: "YAKINDA",
  },
}

export default function FeaturedProjects() {
  return (
    <section className="py-32 lg:py-40" style={{ backgroundColor: "#F7F5F1" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Bölüm başlığı */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <p
              className="font-sans font-medium"
              style={{ color: "#C9A86C", fontSize: "10px", letterSpacing: "0.45em", marginBottom: "18px" }}
            >
              PROJE PORTFÖYÜ
            </p>
            <h2
              className="font-serif font-light"
              style={{
                color: "#111111",
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1.0,
              }}
            >
              Öne Çıkan Projeler
            </h2>
          </div>

          <Link href="/projeler" className="link-dark self-start lg:self-auto">
            TÜM PROJELERİ GÖRÜNTÜLE
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(17,17,17,0.07)" }}>
          {(featuredProjects as ProjectCard[]).map((project, i) => (
            <article
              key={i}
              className="project-card flex flex-col"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Görsel alan */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <div
                  className="project-card-img absolute inset-0"
                  style={{ background: project.cardGradient }}
                />

                {/* Alt vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)" }}
                />

                {/* Köşe aksanı */}
                <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "32px", height: "32px" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "1px", backgroundColor: "rgba(201,168,108,0.55)" }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "100%", backgroundColor: "rgba(201,168,108,0.55)" }} />
                </div>

                {/* Durum rozeti */}
                {(() => {
                  const cfg = statusConfig[project.status]
                  return (
                    <div
                      className="absolute top-4 left-4"
                      style={{
                        padding: "4px 10px",
                        backgroundColor: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                      }}
                    >
                      <span
                        className="font-sans font-medium"
                        style={{ color: cfg.color, fontSize: "9px", letterSpacing: "0.2em" }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                  )
                })()}

                {/* Proje numarası */}
                <div
                  className="absolute bottom-4 right-5 font-serif font-light pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.07)", fontSize: "68px", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Kart içeriği */}
              <div className="flex flex-col flex-1 p-6">
                <p
                  className="font-sans font-medium"
                  style={{ color: "#C9A86C", fontSize: "9px", letterSpacing: "0.3em", marginBottom: "8px" }}
                >
                  {project.location.toUpperCase()}
                </p>

                <h3
                  className="font-serif font-light"
                  style={{ color: "#111111", fontSize: "22px", lineHeight: 1.2, marginBottom: "12px" }}
                >
                  {project.title}
                </h3>

                <p
                  className="font-sans font-light flex-1"
                  style={{ color: "#8C8A86", fontSize: "13px", lineHeight: 1.75, marginBottom: "20px" }}
                >
                  {project.description}
                </p>

                <div style={{ height: "1px", backgroundColor: "rgba(17,17,17,0.07)", marginBottom: "18px" }} />

                {/* Bilgi tablosu — sadece 3 alan, sade */}
                <dl className="grid grid-cols-3 gap-x-3 gap-y-0 mb-6">
                  {[
                    { label: "TİP", value: project.type },
                    { label: "TAPU", value: project.deed },
                    { label: "ÖDEME", value: project.payment },
                  ].map((item, j) => (
                    <div key={j}>
                      <dt
                        className="font-sans font-medium"
                        style={{ color: "#C4C2BE", fontSize: "8px", letterSpacing: "0.15em", marginBottom: "3px" }}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className="font-sans font-medium"
                        style={{ color: "#4A4845", fontSize: "11px" }}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link href={project.href} className="project-link self-start">
                  PROJEYİ İNCELE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
