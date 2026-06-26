import Image from "next/image"
import { team } from "@/data/team"

export default function TeamSection() {
  return (
    <section className="relative" style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="max-w-7xl mx-auto px-8 lg:px-14"
        style={{ paddingTop: "clamp(68px, 8vw, 100px)", paddingBottom: "clamp(68px, 8vw, 100px)" }}
      >
        {/* Başlık */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{ marginBottom: 44 }}
        >
          <div>
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.5em", color: "rgba(17,17,17,0.3)", marginBottom: 22 }}
            >
              EKİBİMİZ
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
                color: "#0E0E0E",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              CaveArts Ekibi
            </h2>
          </div>
          <p
            className="font-sans font-light"
            style={{ fontSize: 15, lineHeight: 1.95, color: "#4A4845", maxWidth: 420 }}
          >
            Projelerin fikir aşamasından yatırımcıyla buluşmasına kadar
            süreci yöneten çok disiplinli bir ekip.
          </p>
        </div>

        {/* Ekip grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {team.map((member) => (
            <div key={member.id} className="team-card group">
              {/* Fotoğraf / Monogram alanı */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3 / 4", marginBottom: 18 }}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="team-card-photo"
                  />
                ) : (
                  <div
                    className="team-card-photo absolute inset-0 flex items-center justify-center"
                    style={{
                      background: "radial-gradient(ellipse 80% 70% at 50% 50%, #222222 0%, #111111 100%)",
                    }}
                  >
                    {/* Yatay orta çizgi */}
                    <div
                      style={{
                        position: "absolute",
                        left: "18%",
                        right: "18%",
                        top: "50%",
                        height: 1,
                        backgroundColor: "rgba(200,169,106,0.1)",
                      }}
                    />
                    {/* İnisyaller */}
                    <span
                      className="font-serif font-light"
                      style={{
                        fontSize: "clamp(2.8rem, 5.5vw, 3.8rem)",
                        color: "rgba(200,169,106,0.68)",
                        letterSpacing: "0.1em",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Sol üst köşe */}
                <div style={{ position: "absolute", top: 14, left: 14, width: 20, height: 1, backgroundColor: "#C8A96A", opacity: 0.65 }} />
                <div style={{ position: "absolute", top: 14, left: 14, width: 1, height: 20, backgroundColor: "#C8A96A", opacity: 0.65 }} />
                {/* Sağ alt köşe */}
                <div style={{ position: "absolute", bottom: 14, right: 14, width: 20, height: 1, backgroundColor: "#C8A96A", opacity: 0.32 }} />
                <div style={{ position: "absolute", bottom: 14, right: 14, width: 1, height: 20, backgroundColor: "#C8A96A", opacity: 0.32 }} />
              </div>

              {/* Bilgi */}
              <h3
                className="font-sans font-medium"
                style={{ fontSize: 15, color: "#0E0E0E", letterSpacing: "0.01em", marginBottom: 8 }}
              >
                {member.name}
              </h3>
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: 9, letterSpacing: "0.16em", color: "#C8A96A", marginBottom: 14 }}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
