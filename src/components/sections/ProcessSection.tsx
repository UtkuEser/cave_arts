const steps = [
  {
    num: "01",
    title: "Analiz",
    desc: "Lokasyon, pazar, yatırım potansiyeli ve proje hedefleri değerlendirilir.",
  },
  {
    num: "02",
    title: "Planlama",
    desc: "Proje geliştirme modeli, satış stratejisi ve yatırımcı iletişimi yapılandırılır.",
  },
  {
    num: "03",
    title: "Sunum",
    desc: "Proje; yatırımcılar, iş ortakları ve hedef pazar için profesyonel şekilde sunulur.",
  },
  {
    num: "04",
    title: "Yönetim",
    desc: "Satış, danışmanlık, tapu ve süreç takibi kontrollü şekilde yürütülür.",
  },
]

export default function ProcessSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F7F5F1" }}
    >
      {/* ── Üst ince ayraç ── */}
      <div style={{ height: 1, backgroundColor: "rgba(216,210,200,0.5)" }} />

      {/* ── Çok silik "Süreç" watermark ── */}
      <div
        className="absolute top-0 left-0 pointer-events-none select-none w-full"
        style={{ overflow: "hidden" }}
        aria-hidden="true"
      >
        <span
          className="font-serif font-light block"
          style={{
            fontSize: "clamp(6rem, 17vw, 22rem)",
            lineHeight: 0.82,
            letterSpacing: "0.03em",
            color: "rgba(17,17,17,0.026)",
            whiteSpace: "nowrap",
            marginLeft: "-0.02em",
          }}
        >
          Süreç
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">

        {/* Başlık bloğu */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{ marginBottom: 64 }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{
                fontSize: "8.5px",
                letterSpacing: "0.5em",
                color: "rgba(17,17,17,0.3)",
                marginBottom: 16,
              }}
            >
              SÜREÇ
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#111111",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              Süreç Nasıl İlerler?
            </h2>
            <p
              className="font-sans font-light"
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "#4A4845",
                maxWidth: 520,
              }}
            >
              CaveArts, proje geliştirme ve yatırım süreçlerini analizden planlamaya,
              sunumdan yönetim aşamasına kadar disiplinli ve şeffaf bir yapıyla ele alır.
            </p>
          </div>
        </div>

        {/* 4 adım grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                borderTop: "1px solid rgba(17,17,17,0.1)",
                paddingTop: 28,
                paddingRight: i < steps.length - 1 ? "clamp(24px, 3vw, 48px)" : 0,
                paddingLeft: i > 0 ? "clamp(24px, 3vw, 48px)" : 0,
              }}
            >
              {/* Numara */}
              <p
                className="font-sans font-medium"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  color: "#C9A86C",
                  marginBottom: 18,
                }}
              >
                {step.num}
              </p>

              {/* Adım başlığı */}
              <h3
                className="font-sans font-medium"
                style={{
                  fontSize: "14.5px",
                  color: "#111111",
                  letterSpacing: "0.02em",
                  marginBottom: 12,
                  lineHeight: 1.25,
                }}
              >
                {step.title}
              </h3>

              {/* Açıklama */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "13px",
                  color: "rgba(17,17,17,0.48)",
                  lineHeight: 1.85,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
