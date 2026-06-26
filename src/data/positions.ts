export interface OpenPosition {
  id: string
  title: string
  location: string
  type: string
  desc: string
}

// Açık pozisyonlar — şimdilik kurumsal placeholder, kolay değiştirilebilir data yapısı.
export const openPositions: OpenPosition[] = [
  {
    id: "proje-gelistirme-danismani",
    title: "Proje Geliştirme Danışmanı",
    location: "İstanbul",
    type: "Tam Zamanlı",
    desc: "Proje geliştirme süreçlerinde lokasyon analizi, konumlandırma ve yatırımcı sunumu konularında görev alır.",
  },
  {
    id: "gayrimenkul-yatirim-danismani",
    title: "Gayrimenkul Yatırım Danışmanı",
    location: "İstanbul / Esnek",
    type: "Tam Zamanlı",
    desc: "Yatırımcılara gayrimenkul ve yatırım modelleri konusunda danışmanlık sağlar, süreç yönetimini destekler.",
  },
  {
    id: "franchise-gelistirme-uzmani",
    title: "Franchise Geliştirme Uzmanı",
    location: "İstanbul",
    type: "Tam Zamanlı",
    desc: "Yeni franchise bölgelerinin değerlendirilmesi ve sistemin yeni lokasyonlara taşınması sürecini yürütür.",
  },
  {
    id: "egitim-organizasyon-sorumlusu",
    title: "Eğitim Organizasyon Sorumlusu",
    location: "İstanbul",
    type: "Tam Zamanlı",
    desc: "Satış, danışmanlık ve franchise ekipleri için kurumsal eğitim programlarının planlanmasından sorumludur.",
  },
]
