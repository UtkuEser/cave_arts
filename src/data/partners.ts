export interface Partner {
  id: string
  name: string
  /** Public path — SVG dosyası yüklüyse kullanılır, yoksa name fallback gösterilir */
  logo: string
  category: string
  href?: string
  /** Geriye dönük uyumluluk — global-agimiz sayfası bu alanı kullanıyor */
  tier?: "partner" | "solution"
}

export const partners: Partner[] = [
  {
    id: "agaoglu",
    name: "Ağaoğlu",
    logo: "/İmage/ortaklar/agaoglu.svg",
    category: "Proje Ortağı",
  },
  {
    id: "dedeman",
    name: "Dedeman",
    logo: "/İmage/ortaklar/dedeman.svg",
    category: "Proje Ortağı",
  },
  {
    id: "evergreen",
    name: "Evergreen",
    logo: "/İmage/ortaklar/evergreen.svg",
    category: "Stratejik Ortak",
  },
  {
    id: "northernland",
    name: "Northernland",
    logo: "/İmage/ortaklar/northernland.svg",
    category: "Stratejik Ortak",
  },
  {
    id: "toki",
    name: "TOKİ",
    logo: "/İmage/ortaklar/toki.svg",
    category: "Kamu Ortağı",
  },
  {
    id: "cevre-sehircilik",
    name: "Çevre Şehircilik Bakanlığı",
    logo: "/İmage/ortaklar/cevrevesehirbakanlıgı.svg",
    category: "Kamu Ortağı",
  },
  {
    id: "sahibinden",
    name: "Sahibinden",
    logo: "/İmage/ortaklar/sahibinden.svg",
    category: "Dijital Platform",
  },
  {
    id: "onn-invest",
    name: "Onn Invest",
    logo: "/İmage/ortaklar/onn-invest.svg",
    category: "Yatırım Ortağı",
  },
]
