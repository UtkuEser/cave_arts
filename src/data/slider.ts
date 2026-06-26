export interface Slide {
  id: number
  title: string
  category: string
  subtitle: string
  cta: string
  href: string
  gradient: string
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "PROJE GELİŞTİRME",
    category: "CAVEARTS I.P.D.C.",
    subtitle:
      "Prestijli ve değer katan projeleri fikir aşamasından yatırımcıyla buluşma sürecine kadar profesyonel şekilde geliştiriyoruz.",
    cta: "Detaylı Bilgi",
    href: "/proje-gelistirme",
    gradient: "linear-gradient(155deg, #18202E 0%, #243048 60%, #111A28 100%)",
  },
  {
    id: 2,
    title: "GAYRİMENKUL",
    category: "CAVEARTS I.P.D.C.",
    subtitle:
      "Konut, arsa, otel ve ticari gayrimenkul alanlarında yatırım odaklı profesyonel çözümler sunuyoruz.",
    cta: "Projeleri İncele",
    href: "/gayrimenkul",
    gradient: "linear-gradient(155deg, #201A10 0%, #302418 60%, #181208 100%)",
  },
  {
    id: 3,
    title: "ULUSLARARASI DANIŞMANLIK",
    category: "CAVEARTS I.P.D.C.",
    subtitle:
      "Yerel projeleri uluslararası vizyonla değerlendiriyor, yatırım ve proje süreçlerinde stratejik danışmanlık sağlıyoruz.",
    cta: "Danışmanlık Al",
    href: "/danismanlik",
    gradient: "linear-gradient(155deg, #0E1C28 0%, #182838 60%, #0A1418 100%)",
  },
  {
    id: 4,
    title: "EĞİTİM",
    category: "CAVEARTS I.P.D.C.",
    subtitle:
      "Gayrimenkul, satış, proje geliştirme ve yatırım süreçlerinde profesyonel bilgi aktarımı sağlayan eğitim yapıları geliştiriyoruz.",
    cta: "Eğitimleri İncele",
    href: "/egitim",
    gradient: "linear-gradient(155deg, #1C1C1C 0%, #2A2A2A 60%, #141414 100%)",
  },
  {
    id: 5,
    title: "FRANCHISE",
    category: "CAVEARTS I.P.D.C.",
    subtitle:
      "CaveArts vizyonunu farklı lokasyonlara taşıyan, güçlü marka yapısı ve sistemli büyüme modeliyle franchise süreçleri oluşturuyoruz.",
    cta: "Başvuru Yap",
    href: "/franchise",
    gradient: "linear-gradient(155deg, #141E14 0%, #1E2C1E 60%, #0E160E 100%)",
  },
]
