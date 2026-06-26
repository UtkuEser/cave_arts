"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function BrandVideoSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const closeModal = () => {
    setModalOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [modalOpen])

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(480px, 52vw, 620px)" }}
    >
      {/* ── Kapak görseli ── */}
      <Image
        src="/İmage/video_kapak.jpg?v=2"
        alt="CaveArts tanıtım videosu"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        unoptimized
      />

      {/* ── Çok hafif koyu overlay ── */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
      />

      {/* ── Ortalanmış play butonu ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => setModalOpen(true)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          aria-label="Videoyu izle"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: `1px solid ${btnHover ? "#C9A86C" : "rgba(255,255,255,0.55)"}`,
            backgroundColor: btnHover
              ? "rgba(201,168,108,0.1)"
              : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: btnHover ? "scale(1.1)" : "scale(1)",
            transition:
              "border-color 0.4s ease, background-color 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            cursor: "pointer",
          }}
        >
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            aria-hidden="true"
            style={{ marginLeft: 3 }}
          >
            <path d="M0 0L17 9.5L0 19V0Z" fill="rgba(255,255,255,0.9)" />
          </svg>
        </button>
      </div>

      {/* ── BACK TO TOP sağ kenar ── */}
      <a
        href="#"
        className="absolute hidden lg:flex flex-col items-center"
        style={{
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          gap: 14,
          textDecoration: "none",
        }}
        aria-label="Sayfa başına dön"
      >
        <div style={{ width: 1, height: 52, backgroundColor: "rgba(255,255,255,0.15)" }} />
        <span
          className="font-sans font-medium uppercase select-none"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            fontSize: "7px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          BACK TO TOP
        </span>
        <div style={{ width: 1, height: 52, backgroundColor: "rgba(255,255,255,0.15)" }} />
      </a>

      {/* ── Video modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9999, backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            aria-label="Kapat"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.22)",
              backgroundColor: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="14" y2="14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="14" y1="2" x2="2" y2="14" stroke="rgba(255,255,255,0.8)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90vw",
              maxWidth: 1100,
              aspectRatio: "16 / 9",
              boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
              backgroundColor: "#000",
            }}
          >
            <video
              ref={videoRef}
              src="/video/cavearts-intro-video.mp4"
              controls
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
