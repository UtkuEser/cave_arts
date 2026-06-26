import { stats } from "@/data/stats"

export default function StatsSection() {
  return (
    <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-14" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <p
          className="font-sans font-medium uppercase text-center"
          style={{ fontSize: "8px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)", marginBottom: 24 }}
        >
          RAKAMLARLA CAVEARTS
        </p>
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(17,17,17,0.08)",
            borderBottom: "1px solid rgba(17,17,17,0.08)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                i % 2 === 0 ? "border-r border-black/[0.08]" : ""
              } ${i !== stats.length - 1 ? "lg:border-r" : "lg:border-r-0"} lg:border-black/[0.08]`}
              style={{
                paddingTop: 32,
                paddingBottom: 32,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <p
                className="font-serif font-normal"
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  color: "#0E0E0E",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </p>
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: "8.5px", letterSpacing: "0.2em", color: "rgba(17,17,17,0.42)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
