interface EditorialIntroProps {
  eyebrow?: string
  title: string
  text?: string
  bg?: string
}

export default function EditorialIntro({ eyebrow, title, text, bg = "#F7F5F1" }: EditorialIntroProps) {
  return (
    <section style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
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
        {text ? (
          <div className="lg:grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.75rem,3.5vw,3rem)",
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h2>
            <p
              className="font-sans font-light mt-8 lg:mt-0"
              style={{
                fontSize: "15px",
                lineHeight: 1.95,
                color: "#4A4845",
              }}
            >
              {text}
            </p>
          </div>
        ) : (
          <h2
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.75rem,3.5vw,3rem)",
              color: "#111111",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              maxWidth: 600,
            }}
          >
            {title}
          </h2>
        )}
      </div>
    </section>
  )
}
