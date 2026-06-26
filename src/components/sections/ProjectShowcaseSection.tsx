import Link from "next/link"
import ProjectCard from "@/components/ui/ProjectCard"
import { featuredProjects } from "@/data/projects"

export default function ProjectShowcaseSection() {
  const displayProjects = featuredProjects.slice(0, 3)

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      {/* ── "Projeler" watermark ── */}
      <div
        className="absolute top-0 left-0 pointer-events-none select-none w-full"
        style={{ overflow: "hidden" }}
        aria-hidden="true"
      >
        <span
          className="font-serif font-light block"
          style={{
            fontSize: "clamp(6rem, 17vw, 22rem)",
            lineHeight: 0.82,
            letterSpacing: "0.03em",
            color: "rgba(17,17,17,0.02)",
            whiteSpace: "nowrap",
          }}
        >
          Projeler
        </span>
      </div>

      {/* ── İçerik ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14"
        style={{ paddingTop: "clamp(68px, 8vw, 104px)", paddingBottom: "clamp(68px, 8vw, 104px)" }}
      >
        {/* Bölüm başlığı */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12"
          style={{ marginBottom: 48 }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)", marginBottom: 20 }}
            >
              PROJELER
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#111111",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Değer Üreten Projeler
            </h2>
            <p
              className="font-sans font-light"
              style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 520 }}
            >
              CaveArts, proje geliştirme yaklaşımıyla yatırım değerini, lokasyon
              potansiyelini ve marka algısını aynı yapı altında ele alır.
            </p>
          </div>

          <Link
            href="/projelerimiz"
            className="hidden lg:inline-flex items-center gap-3 font-sans font-medium uppercase shrink-0 transition-opacity duration-200 hover:opacity-50"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#111111", textDecoration: "none", paddingBottom: 4 }}
          >
            <span>Tüm Projeleri Görüntüle</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden="true">
              <path d="M0 4H18M18 4L15 1M18 4L15 7" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Proje kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobilde "Tüm Projeler" */}
        <div className="lg:hidden flex justify-center" style={{ marginTop: 48 }}>
          <Link
            href="/projelerimiz"
            className="inline-flex items-center gap-3 font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-50"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "#111111", textDecoration: "none" }}
          >
            <span>Tüm Projeleri Görüntüle</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden="true">
              <path d="M0 4H18M18 4L15 1M18 4L15 7" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
