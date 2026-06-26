// Global Ağımız — yeni ülkeler eklenebilir bir veri yapısı.
export interface CountryPresence {
  id: string
  name: string
  role: string
  description: string
  statusLabel: "Aktif" | "Gelişen Ağ" | "Partnerlik"
  status: "active" | "upcoming"
}

export const countries: CountryPresence[] = [
  {
    id: "turkiye",
    name: "Türkiye",
    role: "Merkez Ofis & Proje Geliştirme",
    description:
      "CaveArts'ın stratejik merkezi; proje geliştirme, gayrimenkul ve yatırım operasyonlarının yönetildiği ana ofis.",
    statusLabel: "Aktif",
    status: "active",
  },
  {
    id: "kktc",
    name: "KKTC",
    role: "Gayrimenkul & Yatırım",
    description:
      "Gayrimenkul ve yatırım projelerinin geliştirildiği, büyüyen bir operasyon noktası.",
    statusLabel: "Aktif",
    status: "active",
  },
  {
    id: "rusya",
    name: "Rusya",
    role: "Uluslararası Danışmanlık",
    description:
      "Uluslararası yatırımcı ilişkileri ve danışmanlık süreçlerinin yürütüldüğü stratejik partnerlik ağı.",
    statusLabel: "Partnerlik",
    status: "active",
  },
]
