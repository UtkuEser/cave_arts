import Link from "next/link"

const footerLinks = {
  kurumsal: [
    { label: "CaveArts", href: "/cavearts" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Global Ağımız", href: "/global-agimiz" },
  ],
  yatirim: [
    { label: "CaveArts Prime", href: "/cavearts-prime" },
    { label: "Projelerimiz", href: "/projelerimiz" },
    { label: "CaveArts'tan Haberler", href: "/haberler" },
    { label: "Başvuru Yap", href: "/iletisim" },
  ],
  yasal: [
    { label: "KVKK", href: "/kvkk" },
    { label: "Gizlilik Politikası", href: "/gizlilik" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060A14" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,108,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-8 lg:px-14 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-white text-[17px] font-light tracking-[0.25em]">
                CAVEARTS
              </span>
              <span
                className="font-sans text-[7.5px] tracking-[0.5em] font-medium mt-[4px]"
                style={{ color: "#C9A86C" }}
              >
                I.P.D.C.
              </span>
            </div>
            <p
              className="font-sans font-light text-[12px] leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              Proje geliştirme, gayrimenkul, danışmanlık, eğitim, franchise ve yatırım
              ekosistemini tek bir uluslararası vizyon altında birleştiren proje
              geliştirme şirketi.
            </p>
            <div className="flex items-center gap-4">
              {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
                <a key={s} href="#" className="footer-social">{s.toUpperCase()}</a>
              ))}
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <p
              className="font-sans font-medium mb-4"
              style={{ color: "#C9A86C", fontSize: "9px", letterSpacing: "0.35em" }}
            >
              KURUMSAL
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yatırım */}
          <div>
            <p
              className="font-sans font-medium mb-4"
              style={{ color: "#C9A86C", fontSize: "9px", letterSpacing: "0.35em" }}
            >
              YATIRIM
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.yatirim.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-sans font-medium mb-4"
              style={{ color: "#C9A86C", fontSize: "9px", letterSpacing: "0.35em" }}
            >
              İLETİŞİM
            </p>
            <div className="flex flex-col gap-2.5 mb-5">
              <a href="mailto:info@cavearts.com" className="footer-link">info@cavearts.com</a>
              <a href="tel:+902120000000" className="footer-link">+90 212 000 00 00</a>
              <p
                className="font-sans font-light text-[12px]"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                İstanbul, Türkiye
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <p
                className="font-sans text-[9.5px] mb-2.5"
                style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.05em" }}
              >
                Yatırım fırsatlarından haberdar olun
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 min-w-0 bg-white/[0.04] font-sans text-[11px] px-3 py-2 outline-none"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRight: "none",
                    color: "rgba(255,255,255,0.65)",
                  }}
                />
                <button
                  className="font-sans text-[9px] tracking-[0.15em] px-3 py-2 transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: "rgba(201,168,108,0.12)",
                    border: "1px solid rgba(201,168,108,0.28)",
                    color: "#C9A86C",
                  }}
                >
                  EKLE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="font-sans text-[10px]"
            style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.05em" }}
          >
            © 2024 CaveArts I.P.D.C. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            {footerLinks.yasal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[10px] transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                {link.label}
              </Link>
            ))}
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 1,
                height: 10,
                backgroundColor: "rgba(255,255,255,0.1)",
                flexShrink: 0,
              }}
            />
            <Link
              href="/"
              className="font-sans text-[10px] uppercase font-medium transition-colors duration-300 ease-out text-[#8C8A86] hover:text-[#C9A86C] active:text-[#C9A86C] focus-visible:text-[#C9A86C] focus-visible:outline-none focus-visible:underline"
              style={{ letterSpacing: "0.04em" }}
            >
              <span className="opacity-60">by</span>
              <span className="ml-1 tracking-[0.28em]">EEK</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
