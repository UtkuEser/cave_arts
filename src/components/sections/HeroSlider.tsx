"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { slides } from "@/data/slider"

const INTERVAL = 6000 // ms

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((i: number) => {
    setActive(i)
    setProgressKey((k) => k + 1)
  }, [])

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
    setProgressKey((k) => k + 1)
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, INTERVAL)
  }, [next])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const handleGoTo = (i: number) => {
    goTo(i)
    startTimer() // slayt değişiminde zamanlayıcıyı sıfırla
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>

      {/* ─── Slaytlar ─── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 1 : 0,
            transition: "opacity 900ms ease-in-out",
          }}
          aria-hidden={i !== active}
        >
          {/* Arka plan — ken burns efekti */}
          <div
            key={`bg-${i}-${active === i ? active : "off"}`}
            className="absolute inset-0"
            style={{
              background: slide.gradient,
              animation: i === active ? "kenBurns 7s ease-out forwards" : "none",
            }}
          />

          {/* Koyu overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.38)" }}
          />

          {/* Minimal grid watermark */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* İçerik */}
          <div
            key={`content-${i}-${active === i ? active : "off"}`}
            className="relative z-10 h-full flex flex-col justify-center"
            style={{
              paddingLeft: "clamp(2rem, 5vw, 5rem)",
              paddingRight: "clamp(2rem, 5vw, 5rem)",
              animation: i === active ? "slideContentIn 1s ease-out 0.25s both" : "none",
            }}
          >
            {/* Kategori etiketi */}
            <p
              className="font-sans font-medium uppercase"
              style={{
                color: "#C9A86C",
                fontSize: "9px",
                letterSpacing: "0.5em",
                marginBottom: "32px",
              }}
            >
              {slide.category}
            </p>

            {/* Ana başlık */}
            <h1
              className="font-serif font-light"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2.8rem, 7vw, 9rem)",
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                marginBottom: "36px",
                maxWidth: "900px",
              }}
            >
              {slide.title}
            </h1>

            {/* Gold çizgi */}
            <div
              style={{
                width: 48,
                height: 1,
                backgroundColor: "#C9A86C",
                marginBottom: "28px",
              }}
            />

            {/* Alt metin */}
            <p
              className="font-sans font-light"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.9,
                maxWidth: "480px",
                marginBottom: "52px",
              }}
            >
              {slide.subtitle}
            </p>

            {/* CTA */}
            <Link
              href={slide.href}
              className="btn-outline-white self-start"
            >
              {slide.cta}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      ))}

      {/* ─── Slayt numaraları — sağ alt ─── */}
      <div
        className="absolute z-20"
        style={{ bottom: 40, right: 40 }}
      >
        {/* Progress çizgisi */}
        <div
          style={{
            width: 160,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.12)",
            marginBottom: 16,
            overflow: "hidden",
          }}
        >
          <div
            key={progressKey}
            style={{
              height: "100%",
              backgroundColor: "rgba(255,255,255,0.5)",
              animation: `slideProgress ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>

        {/* Numara satırı */}
        <div className="flex items-baseline gap-3">
          {/* Aktif numara */}
          <span
            className="font-sans font-medium"
            style={{ color: "#FFFFFF", fontSize: "13px", letterSpacing: "0.12em" }}
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          {/* Ayraç */}
          <span
            className="select-none"
            style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}
          >
            —
          </span>

          {/* Pasif numaralar — orijinal sırada, aktifi atla */}
          {slides.map((_, i) =>
            i !== active ? (
              <button
                key={i}
                onClick={() => handleGoTo(i)}
                className="font-sans transition-colors duration-300"
                style={{
                  color: "rgba(255,255,255,0.32)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.32)")
                }
                aria-label={`Slayt ${i + 1}`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ) : null
          )}
        </div>
      </div>

      {/* ─── Sol alt: slayt konusu ─── */}
      <div
        className="absolute z-20 hidden lg:block"
        style={{ bottom: 40, left: 40 }}
      >
        <p
          className="font-sans font-medium uppercase"
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: "8px",
            letterSpacing: "0.4em",
          }}
        >
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  )
}
