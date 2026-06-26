import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ height: "100svh", minHeight: "700px", backgroundColor: "#0E0E0E" }}
    >
      {/* ── Zemin radyal geçiş ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #1A1A1A 0%, #0E0E0E 68%, #0E0E0E 100%)",
        }}
      />

      {/* ── İnce mimari grid dokusu ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.022,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      {/* ── Dikey ışık çizgisi ── */}
      <div
        className="absolute pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          transform: "translateX(-50%)",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(200,169,106,0.32) 32%, rgba(200,169,106,0.32) 68%, transparent 100%)",
        }}
      />

      {/* ── Mat altın halo ── */}
      <div
        className="hero-glow absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "14%",
          left: "50%",
          width: "min(64vw, 640px)",
          height: "min(64vw, 640px)",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,106,0.15) 0%, rgba(200,169,106,0.04) 45%, transparent 72%)",
          filter: "blur(2px)",
        }}
      />

      {/* ── Amblem halkası ── */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        aria-hidden="true"
        style={{
          top: "14%",
          left: "50%",
          width: "min(40vw, 400px)",
          height: "min(40vw, 400px)",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          border: "1px solid rgba(200,169,106,0.15)",
        }}
      />

      {/* ── İçerik ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ paddingLeft: "clamp(1.5rem, 5vw, 5rem)", paddingRight: "clamp(1.5rem, 5vw, 5rem)" }}
      >
        {/* Geyik amblemi */}
        <div
          className="hero-antler relative flex items-center justify-center"
          style={{
            width: "clamp(130px, 17vw, 200px)",
            height: "clamp(122px, 16vw, 188px)",
            marginBottom: "clamp(52px, 6vw, 80px)",
          }}
        >
          <Image
            src="/İmage/logo/Geyik-Beyaz.png"
            alt="CaveArts"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Üst küçük metin */}
        <p
          className="font-sans font-medium uppercase"
          style={{
            color: "#C8A96A",
            fontSize: "10px",
            letterSpacing: "0.5em",
            marginBottom: "44px",
          }}
        >
          IDEAS. PROJECTS. LEGACY.
        </p>

        {/* Ana başlık */}
        <h1
          className="font-serif font-light"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2.2rem, 5.4vw, 5.2rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            maxWidth: "880px",
            marginBottom: "48px",
          }}
        >
          Fikirleri Gerçeğe Dönüştürüyoruz.
        </h1>

        {/* Gold çizgi */}
        <div style={{ width: 44, height: 1, backgroundColor: "#C8A96A", marginBottom: "44px" }} />

        {/* Alt metin */}
        <p
          className="font-sans font-light"
          style={{
            color: "rgba(255,255,255,0.48)",
            fontSize: "clamp(14px, 1.15vw, 16px)",
            lineHeight: 2.0,
            maxWidth: "520px",
            marginBottom: "80px",
          }}
        >
          CaveArts, proje geliştirme, yatırım, gayrimenkul ve danışmanlık
          ekosistemini geleceğe değer katan sistemlere dönüştürür.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/projelerimiz" className="btn-matte-gold">
            Projelerimizi Keşfedin
          </Link>
          <Link href="/iletisim" className="btn-outline-white">
            Bizimle Çalışın
          </Link>
        </div>
      </div>

      {/* ── Scroll ipucu ── */}
      <div
        className="absolute z-10 hidden lg:flex flex-col items-center"
        style={{ bottom: 40, left: "50%", transform: "translateX(-50%)", gap: 14 }}
        aria-hidden="true"
      >
        <span
          className="font-sans font-medium uppercase"
          style={{ color: "rgba(255,255,255,0.25)", fontSize: "8px", letterSpacing: "0.4em" }}
        >
          SCROLL
        </span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, rgba(255,255,255,0.3), transparent)" }} />
      </div>
    </section>
  )
}
