import Link from "next/link"

export default function ManifestoSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F8F7F5", borderTop: "1px solid rgba(17,17,17,0.06)" }}
    >
      <div
        className="max-w-7xl mx-auto px-8 lg:px-14"
        style={{
          paddingTop: "clamp(64px, 8vw, 104px)",
          paddingBottom: "clamp(64px, 8vw, 104px)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

          {/* ── Sol: Metin (%40) ── */}
          <div className="w-full lg:w-[40%] flex flex-col">

            {/* Etiket */}
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8px", letterSpacing: "0.52em", color: "#C8A96A", marginBottom: 18 }}
            >
              MANİFESTO
            </p>

            {/* Gold ayraç */}
            <div style={{ width: 32, height: 1, backgroundColor: "#C8A96A", opacity: 0.55, marginBottom: 26 }} />

            {/* Ana başlık */}
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.7rem)",
                color: "#0E0E0E",
                lineHeight: 1.15,
                letterSpacing: "-0.022em",
                marginBottom: 28,
                maxWidth: 380,
              }}
            >
              Değer Üreten<br />
              Projeler Geliştiriyoruz.
            </h2>

            {/* Açıklama — 2 paragraf */}
            <p
              className="font-sans font-light"
              style={{
                fontSize: 14,
                lineHeight: 1.92,
                color: "#5A5754",
                maxWidth: 420,
                marginBottom: 18,
              }}
            >
              CaveArts, insanların yaşamlarına değer katan projeler geliştirmek amacıyla
              kurulmuş, uluslararası vizyonlu bir proje geliştirme şirketidir.
            </p>
            <p
              className="font-sans font-light"
              style={{
                fontSize: 14,
                lineHeight: 1.92,
                color: "#5A5754",
                maxWidth: 420,
                marginBottom: 44,
              }}
            >
              Gayrimenkulden eğitime, danışmanlıktan franchise sistemlerine kadar
              geniş bir alanda, sürdürülebilir çözümler üretiyor; her projeyi bir
              sanat eseri yaklaşımıyla hayata geçiriyoruz.
            </p>

            {/* CTA */}
            <Link
              href="/cavearts"
              className="btn-outline-dark"
              style={{ alignSelf: "flex-start", textDecoration: "none" }}
            >
              HAKKIMIZDA
              <svg width="15" height="8" viewBox="0 0 15 8" fill="none" aria-hidden="true">
                <path
                  d="M0 4H13.5M13.5 4L10.5 1M13.5 4L10.5 7"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* ── Sağ: Görsel (%60) ── */}
          <div className="w-full lg:w-[60%]">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "16 / 10", borderRadius: "2px" }}
            >
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src="/video/cavearts-intro-video.mp4"
                poster="/İmage/video_kapak.jpg"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
