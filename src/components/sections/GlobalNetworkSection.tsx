import { countries } from "@/data/countries"

// Equirectangular projection: x = (lon+180)/360*1000, y = (90-lat)/180*500
const COUNTRY_COORDS: Record<string, { x: number; y: number }> = {
  turkiye: { x: 581, y: 136 },  // Istanbul  (29°E 41°N)
  kktc:    { x: 592, y: 153 },  // Nicosia   (33°E 35°N)
  rusya:   { x: 603, y: 94  },  // Moscow    (37°E 56°N)
}

export default function GlobalNetworkSection() {
  return (
    <section
      id="global-agimiz"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(17,17,17,0.07)" }}
    >
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14"
        style={{ paddingTop: "clamp(60px, 7vw, 92px)", paddingBottom: "clamp(60px, 7vw, 92px)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Sol: Başlık + Ülke listesi ── */}
          <div className="flex flex-col justify-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)", marginBottom: 24 }}
            >
              GLOBAL AĞIMIZ
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                color: "#0E0E0E",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Global Ağımız
            </h2>
            <p
              className="font-sans font-light"
              style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 400, marginBottom: 32 }}
            >
              CaveArts, yerel potansiyeli uluslararası vizyon ve güçlü iş
              birlikleriyle büyütür.
            </p>

            <div>
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="country-row flex items-center justify-between"
                  style={{ padding: "14px 4px" }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="country-dot shrink-0"
                      style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "rgba(14,14,14,0.45)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="font-sans font-medium"
                        style={{ fontSize: 14, color: "#0E0E0E", letterSpacing: "0.01em" }}
                      >
                        {country.name}
                      </p>
                      <p
                        className="font-sans font-light"
                        style={{ fontSize: 11, color: "rgba(17,17,17,0.38)", marginTop: 3 }}
                      >
                        {country.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="font-sans font-medium uppercase shrink-0"
                    style={{ fontSize: 8, letterSpacing: "0.18em", color: "#C8A96A" }}
                  >
                    {country.statusLabel}
                  </span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.08)" }} />
              <p
                className="font-sans font-light"
                style={{ fontSize: 11, color: "rgba(17,17,17,0.28)", marginTop: 18, letterSpacing: "0.02em" }}
              >
                + Yeni ülkeler yakında ağımıza katılacak.
              </p>
            </div>
          </div>

          {/* ── Sağ: Dünya haritası ── */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full" style={{ maxWidth: 560 }}>
              <svg
                viewBox="0 0 1000 500"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "auto", display: "block" }}
                aria-hidden="true"
              >
                {/* ── Enlem / boylam çizgileri ── */}
                {[-60, -30, 0, 30, 60].map((lat) => {
                  const y = (90 - lat) / 180 * 500
                  return <line key={`lat-${lat}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(17,17,17,0.06)" strokeWidth="0.5" />
                })}
                {[-120, -60, 0, 60, 120].map((lon) => {
                  const x = (lon + 180) / 360 * 1000
                  return <line key={`lon-${lon}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(17,17,17,0.06)" strokeWidth="0.5" />
                })}

                {/* ── Kıtalar — basitleştirilmiş hatlar ── */}

                {/* Grönland */}
                <path
                  d="M 248,22 L 296,14 L 328,28 L 320,54 L 288,64 L 252,54 Z"
                  fill="rgba(17,17,17,0.04)" stroke="rgba(17,17,17,0.14)" strokeWidth="0.7" strokeLinejoin="round"
                />
                {/* Kuzey Amerika */}
                <path
                  d="M 48,58 L 90,42 L 155,38 L 210,52 L 250,80 L 258,120 L 248,160 L 225,192 L 198,204 L 168,196 L 140,184 L 110,168 L 78,152 L 52,130 L 46,110 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Güney Amerika */}
                <path
                  d="M 200,206 L 240,198 L 266,218 L 278,256 L 272,302 L 256,342 L 230,372 L 204,374 L 180,358 L 163,323 L 158,286 L 158,253 L 166,224 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Avrupa */}
                <path
                  d="M 418,78 L 438,56 L 458,48 L 487,54 L 506,70 L 513,88 L 503,104 L 518,116 L 500,129 L 477,133 L 452,132 L 430,138 L 418,128 L 410,112 L 413,95 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* İskandinavya */}
                <path
                  d="M 438,56 L 456,38 L 478,32 L 493,42 L 489,61 L 468,70 L 448,66 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Afrika */}
                <path
                  d="M 406,140 L 448,132 L 483,128 L 520,126 L 547,140 L 554,165 L 550,203 L 536,244 L 520,278 L 502,308 L 480,320 L 458,318 L 432,302 L 412,272 L 398,244 L 390,206 L 390,170 L 398,150 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Arap Yarımadası */}
                <path
                  d="M 548,150 L 580,144 L 606,155 L 608,180 L 590,200 L 562,202 L 546,183 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Asya (ana gövde) */}
                <path
                  d="M 512,90 L 550,72 L 610,58 L 670,52 L 740,58 L 810,68 L 862,86 L 877,106 L 861,124 L 825,134 L 781,142 L 741,152 L 701,164 L 661,174 L 625,176 L 591,170 L 569,160 L 548,150 L 548,132 L 540,116 L 518,110 L 514,96 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Hint Alt Kıtası */}
                <path
                  d="M 627,176 L 663,170 L 685,184 L 682,214 L 661,230 L 635,230 L 616,212 L 616,190 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Güneydoğu Asya */}
                <path
                  d="M 709,168 L 752,162 L 781,174 L 781,200 L 755,214 L 721,212 L 701,200 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Japonya */}
                <path
                  d="M 828,104 L 843,94 L 855,104 L 848,122 L 830,124 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />
                {/* Avustralya */}
                <path
                  d="M 749,274 L 801,264 L 849,274 L 869,294 L 865,324 L 848,344 L 817,354 L 784,344 L 751,326 L 731,304 L 733,284 Z"
                  fill="rgba(17,17,17,0.05)" stroke="rgba(17,17,17,0.15)" strokeWidth="0.8" strokeLinejoin="round"
                />

                {/* ── Aktif ülke işaretçileri ── */}
                {countries.map((country) => {
                  const coord = COUNTRY_COORDS[country.id]
                  if (!coord) return null
                  const isActive = country.statusLabel === "Aktif"
                  const r = isActive ? 4.5 : 3.5
                  const opacity = isActive ? 0.92 : 0.55
                  return (
                    <g key={country.id}>
                      {/* Dış halka */}
                      <circle cx={coord.x} cy={coord.y} r={r * 2.8} fill="none" stroke="#C8A96A" strokeWidth="0.6" opacity={isActive ? 0.22 : 0.14} />
                      {/* İç halka */}
                      <circle cx={coord.x} cy={coord.y} r={r * 1.7} fill="none" stroke="#C8A96A" strokeWidth="0.7" opacity={isActive ? 0.38 : 0.22} />
                      {/* Merkez nokta */}
                      <circle cx={coord.x} cy={coord.y} r={r} fill="#C8A96A" opacity={opacity} />
                    </g>
                  )
                })}

                {/* ── Türkiye–KKTC bağlantı çizgisi ── */}
                <line
                  x1={COUNTRY_COORDS.turkiye?.x} y1={COUNTRY_COORDS.turkiye?.y}
                  x2={COUNTRY_COORDS.kktc?.x} y2={COUNTRY_COORDS.kktc?.y}
                  stroke="rgba(200,169,106,0.28)" strokeWidth="0.7" strokeDasharray="3 3"
                />
                {/* ── Türkiye–Rusya bağlantı çizgisi ── */}
                <line
                  x1={COUNTRY_COORDS.turkiye?.x} y1={COUNTRY_COORDS.turkiye?.y}
                  x2={COUNTRY_COORDS.rusya?.x} y2={COUNTRY_COORDS.rusya?.y}
                  stroke="rgba(200,169,106,0.18)" strokeWidth="0.6" strokeDasharray="3 3"
                />
              </svg>

              {/* Harita alt notu */}
              <div className="flex items-center gap-7 mt-5" style={{ paddingLeft: 2 }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C8A96A" }} />
                  <span className="font-sans font-medium uppercase" style={{ fontSize: "8px", letterSpacing: "0.14em", color: "rgba(17,17,17,0.4)" }}>
                    Aktif Pazar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C8A96A", opacity: 0.45 }} />
                  <span className="font-sans font-medium uppercase" style={{ fontSize: "8px", letterSpacing: "0.14em", color: "rgba(17,17,17,0.4)" }}>
                    Partnerlik
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
