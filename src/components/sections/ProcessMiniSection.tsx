interface ProcessStep {
  num: string
  title: string
  desc?: string
}

interface ProcessMiniSectionProps {
  eyebrow?: string
  steps: ProcessStep[]
  bg?: string
}

export default function ProcessMiniSection({ eyebrow, steps, bg = "#F7F5F1" }: ProcessMiniSectionProps) {
  return (
    <section style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {eyebrow && (
          <p
            className="font-sans font-medium uppercase"
            style={{
              fontSize: "8.5px",
              letterSpacing: "0.5em",
              color: "rgba(17,17,17,0.3)",
              marginBottom: 32,
            }}
          >
            {eyebrow}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(17,17,17,0.1)",
                paddingTop: 28,
                paddingRight: i < steps.length - 1 ? "clamp(20px,3vw,40px)" : 0,
                paddingLeft: i > 0 ? "clamp(20px,3vw,40px)" : 0,
              }}
            >
              <p
                className="font-sans font-medium"
                style={{
                  fontSize: "9px",
                  color: "#C9A86C",
                  letterSpacing: "0.22em",
                  marginBottom: 18,
                }}
              >
                {step.num}
              </p>
              <p
                className="font-sans font-medium"
                style={{
                  fontSize: "14.5px",
                  color: "#111111",
                  letterSpacing: "0.02em",
                  marginBottom: step.desc ? 8 : 0,
                }}
              >
                {step.title}
              </p>
              {step.desc && (
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "12.5px",
                    color: "rgba(17,17,17,0.48)",
                    lineHeight: 1.8,
                  }}
                >
                  {step.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
