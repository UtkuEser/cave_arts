"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "HAKKIMIZDA", href: "/hakkimizda" },
  { label: "CAVEARTS PRIME", href: "/cavearts-prime" },
  { label: "PROJELER", href: "/projeler" },
  { label: "YATIRIM MODELİ", href: "/yatirim-modeli" },
  { label: "SÜREÇ", href: "/surec" },
  { label: "BLOG", href: "/blog" },
  { label: "İLETİŞİM", href: "/iletisim" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F5F1]/96 backdrop-blur-md border-b border-[#D8D2C8]/80 shadow-[0_2px_24px_rgba(0,0,0,0.05)]"
          : "bg-[#F7F5F1]/88 backdrop-blur-sm border-b border-[#D8D2C8]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-[18px] font-light tracking-[0.25em]"
                style={{ color: "#111111" }}
              >
                CAVEARTS
              </span>
              <span
                className="font-sans text-[8px] tracking-[0.5em] font-medium mt-[4px]"
                style={{ color: "#C9A86C" }}
              >
                I.P.D.C.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — lang + CTA */}
          <div className="hidden xl:flex items-center gap-7">
            <div
              className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] font-medium"
              style={{ color: "rgba(17,17,17,0.32)" }}
            >
              <button
                className="transition-colors duration-200"
                style={{ color: "inherit" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(17,17,17,0.32)")}
              >
                TR
              </button>
              <span style={{ color: "rgba(17,17,17,0.2)" }}>/</span>
              <button
                className="transition-colors duration-200"
                style={{ color: "inherit" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(17,17,17,0.32)")}
              >
                EN
              </button>
            </div>
            <Link href="/iletisim" className="btn-outline-dark">
              YATIRIM DANIŞMANI İLE GÖRÜŞ
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-1 transition-colors duration-200"
            style={{ color: "rgba(17,17,17,0.55)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="xl:hidden border-t"
          style={{ backgroundColor: "#F7F5F1", borderColor: "rgba(216,210,200,0.7)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] tracking-[0.2em] font-medium transition-colors duration-200"
                style={{ color: "rgba(17,17,17,0.45)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="pt-5 border-t"
              style={{ borderColor: "rgba(216,210,200,0.6)" }}
            >
              <Link
                href="/iletisim"
                className="inline-block font-sans text-[10px] tracking-[0.18em] font-medium px-6 py-3"
                style={{ border: "1px solid rgba(17,17,17,0.22)", color: "#111111" }}
                onClick={() => setMenuOpen(false)}
              >
                YATIRIM DANIŞMANI İLE GÖRÜŞ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
