import Image from "next/image"
import Link from "next/link"
import type { FeaturedProject } from "@/data/projects"

export default function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      href={project.href}
      className="project-card group flex flex-col"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(216,210,200,0.5)",
        textDecoration: "none",
        overflow: "hidden",
      }}
    >
      {/* ── Görsel alan ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="project-card-img absolute inset-0"
            style={{ background: project.cardGradient }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0"
              style={{
                opacity: 0.04,
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>
        )}

        {/* Durum etiketi */}
        <div className="absolute top-4 right-4">
          <span
            className="font-sans font-medium uppercase"
            style={{
              fontSize: "7px",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.7)",
              backgroundColor: "rgba(0,0,0,0.38)",
              padding: "4px 10px",
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* ── Bilgi alanı ── */}
      <div style={{ padding: "28px 28px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Kategori */}
        <p
          className="font-sans font-medium uppercase"
          style={{ fontSize: "8px", letterSpacing: "0.22em", color: "#C8A96A", marginBottom: 14 }}
        >
          {project.type}
        </p>

        {/* Başlık */}
        <h3
          className="font-serif font-normal"
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
            color: "#111111",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>

        {/* Lokasyon */}
        <p
          className="font-sans font-light"
          style={{
            fontSize: "10.5px",
            letterSpacing: "0.04em",
            color: "rgba(17,17,17,0.4)",
            marginBottom: 18,
          }}
        >
          {project.location}
        </p>

        {/* Kısa açıklama */}
        {project.description && (
          <p
            className="font-sans font-light"
            style={{
              fontSize: 13,
              lineHeight: 1.85,
              color: "rgba(17,17,17,0.5)",
              marginBottom: 22,
              flex: 1,
            }}
          >
            {project.description}
          </p>
        )}

        {/* Ayraç */}
        <div style={{ height: 1, backgroundColor: "rgba(216,210,200,0.55)", marginBottom: 20 }} />

        {/* Detay link */}
        <span className="project-link inline-flex items-center">
          Detayı Gör
          <svg width="14" height="6" viewBox="0 0 14 6" fill="none" aria-hidden="true" style={{ marginLeft: 10 }}>
            <path d="M0 3H12.5M12.5 3L10 0.5M12.5 3L10 5.5" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
