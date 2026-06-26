"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { Insight } from "@/data/insights"

export default function NewsExplorer({ items }: { items: Insight[] }) {
  const categories = useMemo(() => ["Tümü", ...Array.from(new Set(items.map((i) => i.category)))], [items])
  const [active, setActive] = useState("Tümü")

  const filtered = active === "Tümü" ? items : items.filter((i) => i.category === active)

  return (
    <div>
      {/* Kategori filtresi */}
      <div className="flex flex-wrap gap-x-8 gap-y-3" style={{ marginBottom: 44 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-sans font-medium uppercase transition-opacity duration-200"
            style={{
              fontSize: 9.5,
              letterSpacing: "0.16em",
              color: active === cat ? "#0E0E0E" : "rgba(17,17,17,0.38)",
              borderBottom: active === cat ? "1px solid #C8A96A" : "1px solid transparent",
              paddingBottom: 6,
              background: "none",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Haber grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filtered.map((item) => (
          <Link key={item.id} href={item.href} className="insight-card group flex flex-col" style={{ textDecoration: "none" }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3", marginBottom: 24 }}>
              <div className="insight-card-img absolute inset-0" style={{ background: item.cardGradient }} aria-hidden="true">
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: 0.04,
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>
              <div className="absolute top-5 left-5">
                <span className="font-sans font-medium uppercase" style={{ fontSize: "7.5px", letterSpacing: "0.24em", color: "#C8A96A" }}>
                  {item.category}
                </span>
              </div>
            </div>

            <p className="font-sans font-light" style={{ fontSize: 10.5, letterSpacing: "0.06em", color: "rgba(17,17,17,0.4)", marginBottom: 10 }}>
              {item.date}
            </p>
            <h3
              className="font-serif font-light"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", color: "#0E0E0E", lineHeight: 1.28, marginBottom: 12 }}
            >
              {item.title}
            </h3>
            <p className="font-sans font-light" style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(17,17,17,0.5)", marginBottom: 18, flex: 1 }}>
              {item.excerpt}
            </p>
            <span
              className="insight-card-link inline-flex items-center gap-2"
              style={{ fontSize: 9.5, letterSpacing: "0.18em", color: "#0E0E0E", fontWeight: 500, borderBottom: "1px solid rgba(17,17,17,0.2)", paddingBottom: 3, alignSelf: "flex-start" }}
            >
              DEVAMINI OKU
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
