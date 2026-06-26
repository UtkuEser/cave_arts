import type { Metadata } from "next"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CaveArts | İletişim",
  description:
    "Proje, yatırım, iş birliği, eğitim ve franchise süreçleri için CaveArts ile iletişime geçin.",
  openGraph: {
    title: "CaveArts | İletişim",
    description: "Doğru görüşmeyi birlikte başlatalım.",
  },
}

const interestOptions = [
  "Proje Geliştirme",
  "Gayrimenkul",
  "Uluslararası Danışmanlık",
  "Eğitim",
  "Franchise",
  "Partnerlik",
]

const contactOptions = [
  { title: "Proje Geliştirme Başvurusu", desc: "Yeni bir proje fikrini veya geliştirme talebini iletmek için." },
  { title: "Yatırım ve Gayrimenkul Görüşmesi", desc: "Yatırım modelleri ve gayrimenkul projeleri hakkında görüşmek için." },
  { title: "Franchise / Partnerlik", desc: "Franchise sistemine katılmak veya iş birliği kurmak için." },
]

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
]

const workingAreas = [
  "Proje Geliştirme",
  "Gayrimenkul",
  "CaveArts Prime",
  "Franchise",
  "Uluslararası Danışmanlık",
]

const contactInfo = [
  { label: "E-Posta", value: "info@cavearts.com", href: "mailto:info@cavearts.com" },
  { label: "Telefon", value: "+90 212 000 00 00", href: "tel:+902120000000" },
  { label: "Lokasyon", value: "İstanbul, Türkiye", href: null },
]

const processSteps = [
  {
    num: "01",
    title: "Talebiniz Alınır",
    desc: "Form üzerinden ilettiğiniz bilgiler CaveArts ekibi tarafından incelenir.",
  },
  {
    num: "02",
    title: "Uygun Alan Belirlenir",
    desc: "İlgilendiğiniz proje, yatırım modeli veya iş birliği başlığı netleştirilir.",
  },
  {
    num: "03",
    title: "Sizinle İletişime Geçilir",
    desc: "Danışman ekibimiz, süreç hakkında detaylı bilgi vermek için sizinle iletişime geçer.",
  },
]

export default function IletisimPage() {
  return (
    <>
      {/* Scoped CSS — odak, hover ve form element stilleri */}
      <style>{`
        .cav-field {
          width: 100%;
          background-color: #FFFFFF;
          border: 1px solid rgba(17,17,17,0.16);
          padding: 13px 16px;
          font-size: 14px;
          color: #111111;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-weight: 300;
          outline: none;
          transition: border-color 0.25s ease;
          border-radius: 0;
          appearance: none;
          -webkit-appearance: none;
          display: block;
        }
        .cav-field:focus {
          border-color: rgba(201,168,108,0.85);
        }
        .cav-field::placeholder {
          color: rgba(17,17,17,0.28);
        }
        .cav-field option {
          color: #111111;
          background-color: #FFFFFF;
        }
        .cav-select-wrap {
          position: relative;
        }
        .cav-select-wrap::after {
          content: '';
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid rgba(17,17,17,0.38);
          pointer-events: none;
        }
        .cav-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #111111;
          color: #F7F5F1;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 17px 44px;
          border: 1px solid #111111;
          cursor: pointer;
          transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
          border-radius: 0;
        }
        .cav-submit:hover {
          background-color: transparent;
          color: #111111;
          border-color: rgba(201,168,108,0.7);
        }
        .cav-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(17,17,17,0.18);
          color: rgba(17,17,17,0.55);
          font-family: var(--font-inter), system-ui, sans-serif;
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 13px 22px;
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease;
        }
        .cav-wa-btn:hover {
          border-color: rgba(201,168,108,0.65);
          color: #C9A86C;
        }
      `}</style>

      <Sidebar />
      <div className="lg:ml-[80px]">
        <div className="lg:hidden" style={{ height: 56 }} />

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "#080C18", minHeight: 420 }}
        >
          {/* Referans ızgarası — belge/başvuru hissi */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.032,
              backgroundImage:
                "linear-gradient(rgba(160,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(160,200,255,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* İnce yatay çizgiler — form/belge dokusu */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              opacity: 0.022,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(160,200,255,0.6) 19px, rgba(160,200,255,0.6) 20px)",
            }}
          />
          {/* Sağ kenar gold çizgisi */}
          <div
            className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 1, backgroundColor: "rgba(201,168,108,0.18)" }}
          />
          {/* Atmosferik derinlik */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(6,8,24,0.75) 0%, transparent 60%)",
            }}
          />
          {/* Geyik watermark — çok silik */}
          <div
            className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
            aria-hidden="true"
            style={{ width: 320, height: 320, opacity: 0.028 }}
          >
            <Image
              src="/İmage/logo/Geyik-Beyaz.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(64px, 8.5vw, 108px)",
              paddingBottom: "clamp(36px, 5vw, 56px)",
            }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "8.5px", letterSpacing: "0.5em", color: "#C9A86C", marginBottom: 24 }}
            >
              İLETİŞİM
            </p>
            <h1
              className="font-serif font-light"
              style={{
                fontSize: "clamp(2.4rem, 5.2vw, 5rem)",
                color: "#F7F5F1",
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                marginBottom: 36,
                maxWidth: 720,
              }}
            >
              İletişim
            </h1>
            <div style={{ width: 44, height: 1, backgroundColor: "#C9A86C", marginBottom: 28 }} />
            <p
              className="font-sans font-light"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                lineHeight: 1.88,
                color: "rgba(255,255,255,0.4)",
                maxWidth: 520,
              }}
            >
              Proje, yatırım, iş birliği, eğitim ve franchise
              süreçleri için CaveArts ile iletişime geçin.
            </p>
          </div>
        </section>

        {/* ── 2. İLETİŞİM SEÇENEKLERİ ─────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{ paddingTop: "clamp(36px, 4.5vw, 56px)", paddingBottom: "clamp(36px, 4.5vw, 56px)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid rgba(17,17,17,0.1)" }}>
              {contactOptions.map((opt, i) => (
                <div
                  key={opt.title}
                  style={{
                    borderLeft: i % 4 !== 0 ? "1px solid rgba(17,17,17,0.08)" : "none",
                    paddingTop: 24,
                    paddingBottom: 8,
                    paddingLeft: i % 4 !== 0 ? "clamp(16px, 2.5vw, 32px)" : 0,
                    paddingRight: "clamp(12px, 2vw, 24px)",
                  }}
                >
                  <h3 className="font-sans font-medium" style={{ fontSize: 13.5, color: "#111111", lineHeight: 1.35, marginBottom: 10 }}>
                    {opt.title}
                  </h3>
                  <p className="font-sans font-light" style={{ fontSize: 12, lineHeight: 1.75, color: "rgba(17,17,17,0.48)" }}>
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. ANA İLETİŞİM BÖLÜMÜ ─────────────────────────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(44px, 6vw, 76px)",
              paddingBottom: "clamp(44px, 6vw, 76px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start xl:gap-28">

              {/* Sol kolon — kurumsal bilgi paneli */}
              <div>
                <h2
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    color: "#111111",
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                    marginBottom: 20,
                  }}
                >
                  CaveArts ile
                  <br />
                  İletişime Geçin
                </h2>
                <p
                  className="font-sans font-light"
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.92,
                    color: "rgba(17,17,17,0.52)",
                    marginBottom: 40,
                  }}
                >
                  Yatırım, proje geliştirme, CaveArts Prime, franchise veya
                  danışmanlık süreçleriyle ilgili başvurularınızı bizimle
                  paylaşabilirsiniz. Ekibimiz, talebinizi değerlendirerek sizinle
                  iletişime geçecektir.
                </p>

                {/* İletişim bilgi blokları */}
                <div style={{ marginBottom: 36 }}>
                  {contactInfo.map((item, i) => (
                    <div
                      key={item.label}
                      style={{
                        borderTop: "1px solid rgba(17,17,17,0.09)",
                        paddingTop: 16,
                        paddingBottom: 16,
                        borderBottom:
                          i === contactInfo.length - 1
                            ? "1px solid rgba(17,17,17,0.09)"
                            : "none",
                      }}
                    >
                      <p
                        className="font-sans font-medium uppercase"
                        style={{
                          fontSize: "7.5px",
                          letterSpacing: "0.32em",
                          color: "rgba(17,17,17,0.38)",
                          marginBottom: 5,
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          style={{
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "14.5px",
                            color: "#111111",
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p
                          className="font-sans"
                          style={{ fontSize: "14.5px", color: "#111111", fontWeight: 400 }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Çalışma Alanları */}
                <div style={{ marginBottom: 40 }}>
                  <p
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "7.5px",
                      letterSpacing: "0.32em",
                      color: "rgba(17,17,17,0.38)",
                      marginBottom: 14,
                    }}
                  >
                    Çalışma Alanları
                  </p>
                  <div className="flex flex-col" style={{ gap: 8 }}>
                    {workingAreas.map((area) => (
                      <span
                        key={area}
                        className="font-sans font-light"
                        style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.68)", lineHeight: 1.5 }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp / Hızlı iletişim kutusu */}
                <div
                  style={{
                    border: "1px solid rgba(17,17,17,0.1)",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    padding: "clamp(20px, 3vw, 28px)",
                  }}
                >
                  <p
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "7.5px",
                      letterSpacing: "0.32em",
                      color: "rgba(17,17,17,0.35)",
                      marginBottom: 12,
                    }}
                  >
                    Hızlı Danışmanlık
                  </p>
                  <p
                    className="font-serif font-light"
                    style={{
                      fontSize: "clamp(1rem, 1.6vw, 1.18rem)",
                      color: "#111111",
                      lineHeight: 1.28,
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Yatırım Danışmanı
                    <br />
                    ile Görüşün
                  </p>
                  <p
                    className="font-sans font-light"
                    style={{
                      fontSize: "12.5px",
                      color: "rgba(17,17,17,0.48)",
                      lineHeight: 1.82,
                      marginBottom: 20,
                    }}
                  >
                    Daha hızlı bilgi almak için CaveArts danışman
                    ekibiyle doğrudan iletişime geçebilirsiniz.
                  </p>
                  <Link href="/iletisim" className="cav-wa-btn">
                    WhatsApp ile Görüş
                    <svg
                      style={{ width: 12, height: 12, flexShrink: 0 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Sosyal Medya */}
                <div style={{ marginTop: 36 }}>
                  <p
                    className="font-sans font-medium uppercase"
                    style={{ fontSize: "7.5px", letterSpacing: "0.32em", color: "rgba(17,17,17,0.38)", marginBottom: 14 }}
                  >
                    Sosyal Medya
                  </p>
                  <div className="flex items-center gap-5">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="font-sans font-medium uppercase"
                        style={{ fontSize: 10, letterSpacing: "0.16em", color: "rgba(17,17,17,0.5)", textDecoration: "none" }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sağ kolon — başvuru formu */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(17,17,17,0.07)",
                  padding: "clamp(28px, 4vw, 52px)",
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{
                    fontSize: "8.5px",
                    letterSpacing: "0.42em",
                    color: "rgba(17,17,17,0.35)",
                    marginBottom: 10,
                  }}
                >
                  Başvuru Formu
                </p>
                <h3
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                    color: "#111111",
                    lineHeight: 1.15,
                    letterSpacing: "-0.012em",
                    marginBottom: 10,
                  }}
                >
                  Talebinizi İletin
                </h3>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: "13px", color: "rgba(17,17,17,0.44)", lineHeight: 1.82, marginBottom: 36 }}
                >
                  Talebinizi iletin, CaveArts ekibi sizin için en uygun süreci
                  değerlendirsin.
                </p>
                <div
                  style={{ height: 1, backgroundColor: "rgba(17,17,17,0.07)", marginBottom: 36 }}
                />

                <form
                  action="#"
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  {/* Ad Soyad */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-sans font-medium"
                      style={{
                        display: "block",
                        fontSize: "8px",
                        letterSpacing: "0.3em",
                        color: "rgba(17,17,17,0.42)",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="cav-field"
                    />
                  </div>

                  {/* Telefon + E-posta yan yana */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="font-sans font-medium"
                        style={{
                          display: "block",
                          fontSize: "8px",
                          letterSpacing: "0.3em",
                          color: "rgba(17,17,17,0.42)",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="cav-field"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="font-sans font-medium"
                        style={{
                          display: "block",
                          fontSize: "8px",
                          letterSpacing: "0.3em",
                          color: "rgba(17,17,17,0.42)",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        E-posta
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="cav-field"
                      />
                    </div>
                  </div>

                  {/* Konu */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="font-sans font-medium"
                      style={{
                        display: "block",
                        fontSize: "8px",
                        letterSpacing: "0.3em",
                        color: "rgba(17,17,17,0.42)",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Konu
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="cav-field"
                    />
                  </div>

                  {/* Başvuru Türü */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="font-sans font-medium"
                      style={{
                        display: "block",
                        fontSize: "8px",
                        letterSpacing: "0.3em",
                        color: "rgba(17,17,17,0.42)",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Başvuru Türü
                    </label>
                    <div className="cav-select-wrap">
                      <select
                        id="interest"
                        name="interest"
                        className="cav-field"
                        defaultValue=""
                        style={{ paddingRight: 40 }}
                      >
                        <option value="" disabled>
                          Seçiniz
                        </option>
                        {interestOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-sans font-medium"
                      style={{
                        display: "block",
                        fontSize: "8px",
                        letterSpacing: "0.3em",
                        color: "rgba(17,17,17,0.42)",
                        textTransform: "uppercase",
                        marginBottom: 8,
                      }}
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="cav-field"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <div style={{ paddingTop: 8 }}>
                    <button type="submit" className="cav-submit">
                      Başvuruyu Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. BAŞVURU SÜRECİ ───────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(40px, 5.5vw, 68px)",
              paddingBottom: "clamp(40px, 5.5vw, 68px)",
            }}
          >
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)",
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                marginBottom: 32,
              }}
            >
              Başvurunuz Nasıl Değerlendirilir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.1)",
                    paddingTop: 24,
                    paddingBottom: 24,
                    paddingRight: i < processSteps.length - 1 ? "clamp(20px, 4vw, 60px)" : 0,
                    borderLeft:
                      i > 0 ? "1px solid rgba(17,17,17,0.07)" : "none",
                    paddingLeft: i > 0 ? "clamp(20px, 4vw, 60px)" : 0,
                  }}
                >
                  <p
                    className="font-sans"
                    style={{
                      fontSize: "8.5px",
                      letterSpacing: "0.22em",
                      color: "#C9A86C",
                      marginBottom: 18,
                    }}
                  >
                    {step.num}
                  </p>
                  <h3
                    className="font-sans font-medium"
                    style={{
                      fontSize: "13.5px",
                      color: "#111111",
                      marginBottom: 10,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{ fontSize: "12.5px", color: "rgba(17,17,17,0.48)", lineHeight: 1.84 }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. KAPANIŞ ──────────────────────────────────────── */}
        <section style={{ backgroundColor: "#F7F5F1" }}>
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10"
            style={{
              paddingTop: "clamp(32px, 4vw, 52px)",
              paddingBottom: "clamp(32px, 4vw, 52px)",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <div style={{ width: 36, height: 1, backgroundColor: "#C9A86C", marginBottom: 20 }} />
                <h2
                  className="font-serif font-light"
                  style={{
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                    color: "#111111",
                    lineHeight: 1.12,
                    letterSpacing: "-0.015em",
                    marginBottom: 10,
                  }}
                >
                  Doğru Proje, Doğru Süreç,
                  <br />
                  Doğru İletişim
                </h2>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.46)", lineHeight: 1.88, maxWidth: 500 }}
                >
                  CaveArts, yatırım ve proje süreçlerinde güven veren, planlı ve
                  profesyonel iletişim yapısını esas alır.
                </p>
              </div>
              <p
                className="font-sans font-medium uppercase hidden lg:block"
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.38em",
                  color: "rgba(17,17,17,0.22)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                CAVE ARTS I.P.D.C.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
