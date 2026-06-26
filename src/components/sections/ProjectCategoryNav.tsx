"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const categories = [
  { label: "Tüm Projeler", href: "/projelerimiz" },
  { label: "Topraktan Ev", href: "/projelerimiz/topraktan-ev" },
  { label: "Dedeman Suites & Residences", href: "/projelerimiz/dedeman-suites-residences" },
  { label: "Ağaoğlu Projeleri", href: "/projelerimiz/agaoglu-projeleri" },
  { label: "Uluslararası Projeler", href: "/projelerimiz/uluslararasi-projeler" },
  { label: "Türkiye Projeleri", href: "/projelerimiz/turkiye-projeleri" },
]

export default function ProjectCategoryNav() {
  const pathname = usePathname()

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(17,17,17,0.08)",
        backgroundColor: "#F7F5F1",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
        .proj-cat-scroll::-webkit-scrollbar { display: none; }
      `}</style>
      <nav
        className="proj-cat-scroll max-w-7xl mx-auto px-6 lg:px-10 flex items-stretch gap-0"
        style={{ minWidth: "max-content" }}
        aria-label="Proje kategorileri"
      >
        {categories.map((cat) => {
          const isActive =
            cat.href === "/projelerimiz"
              ? pathname === "/projelerimiz"
              : pathname === cat.href

          return (
            <Link
              key={cat.href}
              href={cat.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "18px 0",
                marginRight: "clamp(24px, 3.5vw, 44px)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: isActive ? 600 : 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isActive ? "#111111" : "rgba(17,17,17,0.38)",
                borderBottom: isActive
                  ? "1.5px solid #C8A96A"
                  : "1.5px solid transparent",
                whiteSpace: "nowrap",
                transition: "color 0.22s, border-color 0.22s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "rgba(17,17,17,0.75)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "rgba(17,17,17,0.38)"
                }
              }}
            >
              {cat.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
