interface InfoGridItem {
  title: string
  description?: string
}

interface InfoGridProps {
  eyebrow?: string
  items: InfoGridItem[]
  cols?: 3 | 4 | 6
  bg?: string
}

const colsClass: Record<3 | 4 | 6, string> = {
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  3: "grid-cols-1 md:grid-cols-3 gap-8",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
}

export default function InfoGrid({ eyebrow, items, cols = 4, bg = "#FFFFFF" }: InfoGridProps) {
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
        <div className={`grid ${colsClass[cols]}`}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(17,17,17,0.1)",
                paddingTop: 24,
              }}
            >
              <p
                className="font-sans font-medium"
                style={{
                  fontSize: "9px",
                  color: "#C9A86C",
                  letterSpacing: "0.22em",
                  marginBottom: 12,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                className="font-sans font-medium"
                style={{
                  fontSize: "13.5px",
                  color: "#111111",
                  lineHeight: 1.3,
                  marginBottom: item.description ? 8 : 0,
                }}
              >
                {item.title}
              </p>
              {item.description && (
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "12px",
                    color: "rgba(17,17,17,0.48)",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
