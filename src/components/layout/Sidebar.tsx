"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HamburgerIcon = () => (
  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
    <line x1="0" y1="1" x2="22" y2="1" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="0" y1="9" x2="22" y2="9" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <line x1="2" y1="2" x2="16" y2="16" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="16" y1="2" x2="2" y2="16" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    style={{
      transition: "transform 0.28s ease",
      transform: open ? "rotate(90deg)" : "rotate(0deg)",
      flexShrink: 0,
    }}
  >
    <path d="M3 2l4 3-4 3" stroke="#C9A86C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const projelerSubMenu = [
  { label: "Topraktan Ev", href: "/projelerimiz/topraktan-ev" },
  { label: "Dedeman Suites & Residences", href: "/projelerimiz/dedeman-suites-residences" },
  { label: "Ağaoğlu Projeleri", href: "/projelerimiz/agaoglu-projeleri" },
  { label: "Uluslararası Projeler", href: "/projelerimiz/uluslararasi-projeler" },
  { label: "Türkiye Projeleri", href: "/projelerimiz/turkiye-projeleri" },
]

interface NavItem {
  label: string
  href: string
  subMenu?: { label: string; href: string }[]
}

const menuLinks: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "CaveArts", href: "/cavearts" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  {
    label: "Projelerimiz",
    href: "/projelerimiz",
    subMenu: projelerSubMenu,
  },
  { label: "Global Ağımız", href: "/global-agimiz" },
  { label: "CaveArts'tan Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
]

const SIDEBAR_W = 80

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projelerOpen, setProjelerOpen] = useState(false)
  const pathname = usePathname()

  // Alt menü — aktif route'daysa başlangıçta aç
  useEffect(() => {
    if (pathname.startsWith("/projelerimiz")) setProjelerOpen(true)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        .cav-nav-link {
          position: relative;
        }
        .cav-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1.5px;
          height: 0;
          background-color: #C9A86C;
          transition: height 0.28s ease-out;
        }
        .cav-nav-link:hover::before {
          height: 14px;
        }
        .cav-sub-link {
          position: relative;
        }
        .cav-sub-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 0;
          background-color: #C9A86C;
          transition: height 0.22s ease-out;
        }
        .cav-sub-link:hover::before {
          height: 10px;
        }
      `}</style>

      {/* ─── Desktop sidebar ─── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 bottom-0 z-50 flex-col items-center"
        style={{
          width: SIDEBAR_W,
          backgroundColor: "#F7F5F1",
          borderRight: "1px solid rgba(216,210,200,0.65)",
        }}
      >
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="mt-8 flex items-center justify-center transition-opacity duration-200 hover:opacity-50"
          style={{ width: 44, height: 44 }}
          aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/İmage/logo/Geyik-Siyah.png"
            alt="CaveArts"
            width={56}
            height={52}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <Link
          href="/iletisim"
          className="w-full flex items-center justify-center transition-opacity duration-200 hover:opacity-60"
          style={{ backgroundColor: "#EEF0F4", height: 148 }}
          aria-label="Make an enquiry"
        >
          <span
            className="font-sans font-medium uppercase select-none"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              fontSize: "7.5px",
              letterSpacing: "0.34em",
              color: "#111111",
            }}
          >
            MAKE AN ENQUIRY
          </span>
        </Link>
      </aside>

      {/* ─── Mobile top bar ─── */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5"
        style={{
          height: 56,
          backgroundColor: "rgba(247,245,241,0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(216,210,200,0.6)",
        }}
      >
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 transition-opacity hover:opacity-50"
          aria-label="Menü"
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <Image
          src="/İmage/logo/Geyik-Siyah.png"
          alt="CaveArts"
          width={28}
          height={26}
          style={{ objectFit: "contain" }}
        />
        <div style={{ width: 34 }} />
      </div>

      {/* ─── Overlay ─── */}
      <div
        className="fixed inset-0 z-40"
        style={{
          backgroundColor: "rgba(17,17,17,0.22)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 400ms ease",
        }}
        onClick={close}
        aria-hidden="true"
      />

      {/* ─── Menü paneli ─── */}
      <div
        className="fixed top-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden"
        style={{
          width: "min(360px, 88vw)",
          backgroundColor: "#F7F5F1",
          borderRight: "1px solid rgba(216,210,200,0.55)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 560ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full overflow-y-auto pl-5 pr-5 lg:pl-[100px] lg:pr-7">
          {/* Navigasyon alanı */}
          <div className="flex-1 flex flex-col justify-center py-10 lg:py-14">
            {/* Gold aksanı çizgi */}
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "#C9A86C",
                marginBottom: 32,
                opacity: 0.85,
              }}
            />

            {/* Navigasyon linkleri */}
            <nav className="flex flex-col">
              {menuLinks.map((link, i) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                const hasSub = !!link.subMenu
                const isSubOpen = hasSub && link.href === "/projelerimiz" && projelerOpen

                return (
                  <div key={link.href}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={close}
                        className="cav-nav-link group flex items-center gap-4 pl-3 flex-1 transition-colors duration-300 ease-out"
                        style={{ paddingTop: 7, paddingBottom: 7 }}
                      >
                        {/* Numara */}
                        <span
                          className="font-sans font-medium shrink-0 tabular-nums"
                          style={{
                            color: "#C9A86C",
                            fontSize: "8px",
                            letterSpacing: "0.14em",
                            minWidth: 18,
                            opacity: 0.7,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Başlık */}
                        <span
                          className="font-sans font-light group-hover:text-[#C9A86C] transition-colors duration-300"
                          style={{
                            color: isActive ? "#C9A86C" : "#1A1917",
                            fontSize: "clamp(1.05rem, 4vw, 1.38rem)",
                            letterSpacing: "-0.015em",
                            lineHeight: 1.3,
                          }}
                        >
                          {link.label}
                        </span>
                      </Link>

                      {/* Alt menü toggle butonu */}
                      {hasSub && (
                        <button
                          onClick={() =>
                            link.href === "/projelerimiz" && setProjelerOpen((v) => !v)
                          }
                          className="p-2 transition-opacity hover:opacity-70"
                          aria-label="Alt menüyü aç/kapat"
                          style={{ flexShrink: 0 }}
                        >
                          <ChevronIcon open={isSubOpen} />
                        </button>
                      )}
                    </div>

                    {/* Alt menü — Projelerimiz */}
                    {hasSub && link.href === "/projelerimiz" && (
                      <div
                        style={{
                          maxHeight: isSubOpen ? 320 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <div
                          className="flex flex-col"
                          style={{
                            paddingLeft: "clamp(28px, 4vw, 40px)",
                            paddingTop: 4,
                            paddingBottom: 8,
                            borderLeft: "1px solid rgba(201,168,108,0.2)",
                            marginLeft: "calc(clamp(28px, 4vw, 40px) - 1px)",
                          }}
                        >
                          {projelerSubMenu.map((sub) => {
                            const subActive = pathname === sub.href
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={close}
                                className="cav-sub-link pl-3 transition-colors duration-200"
                                style={{ paddingTop: 6, paddingBottom: 6 }}
                              >
                                <span
                                  className="font-sans font-light"
                                  style={{
                                    fontSize: "clamp(0.75rem, 2.8vw, 0.875rem)",
                                    color: subActive ? "#C9A86C" : "rgba(26,25,23,0.55)",
                                    letterSpacing: "-0.005em",
                                    lineHeight: 1.4,
                                    transition: "color 0.2s",
                                  }}
                                >
                                  {sub.label}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Alt bölüm */}
          <div
            style={{
              borderTop: "1px solid rgba(17,17,17,0.07)",
              paddingTop: 16,
              paddingBottom: 24,
            }}
          >
            {/* Dil seçimi */}
            <div className="flex items-center gap-3 mb-5">
              <button
                className="font-sans font-medium transition-opacity hover:opacity-60"
                style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#111111" }}
              >
                TR
              </button>
              <span style={{ color: "#D8D2C8", fontSize: "9px" }}>/</span>
              <button
                className="font-sans font-medium transition-colors duration-200 hover:text-[#111111]"
                style={{ fontSize: "9px", letterSpacing: "0.2em", color: "#8C8A86" }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
