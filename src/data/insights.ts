export interface Insight {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
  cardGradient: string
  href: string
}

// Haberler — şimdilik mock veri, kolay değiştirilebilir data yapısında tutuldu.
// Homepage'de ilk 3 kayıt teaser olarak, /haberler sayfasında tüm liste gösterilir.
export const insights: Insight[] = [
  {
    id: "global-agi-yeni-partnerlikler",
    title: "CaveArts Global Ağını Yeni Partnerliklerle Genişletiyor",
    excerpt:
      "Yeni iş birlikleriyle CaveArts'ın uluslararası ağı büyüyor; süreç, kapsam ve hedef pazarlar hakkında bilgiler.",
    date: "Haziran 2026",
    category: "Global Ağ",
    cardGradient: "linear-gradient(145deg, #1A1A1A 0%, #262626 55%, #0E0E0E 100%)",
    href: "/haberler/global-agi-yeni-partnerlikler",
  },
  {
    id: "proje-gelistirme-yaklasimi-degisiyor",
    title: "Gayrimenkulde Proje Geliştirme Yaklaşımı Neden Değişiyor?",
    excerpt:
      "Klasik satış odaklı modelden, lokasyon ve marka değerini birlikte ele alan proje geliştirme yaklaşımına geçiş.",
    date: "Mayıs 2026",
    category: "Proje Haberleri",
    cardGradient: "linear-gradient(145deg, #181C1A 0%, #232825 55%, #0F1311 100%)",
    href: "/haberler/proje-gelistirme-yaklasimi-degisiyor",
  },
  {
    id: "franchise-surdurulebilir-buyume",
    title: "Franchise Sistemlerinde Sürdürülebilir Büyüme Modeli",
    excerpt:
      "Bir markanın franchise modeliyle yeni pazarlara sistemli ve sürdürülebilir şekilde nasıl taşınacağı.",
    date: "Mayıs 2026",
    category: "Eğitim ve Franchise",
    cardGradient: "linear-gradient(145deg, #20201E 0%, #2E2C28 55%, #15140F 100%)",
    href: "/haberler/franchise-surdurulebilir-buyume",
  },
  {
    id: "yatirim-modeli-lokasyon-rolu",
    title: "Yatırım Modeli Geliştirmede Lokasyonun Rolü",
    excerpt:
      "Doğru lokasyon analizi, yatırım modelinin sürdürülebilirliğini ve uzun vadeli değerini nasıl şekillendirir.",
    date: "Nisan 2026",
    category: "Yatırım Perspektifi",
    cardGradient: "linear-gradient(145deg, #1A1A2E 0%, #252540 55%, #121220 100%)",
    href: "/haberler/yatirim-modeli-lokasyon-rolu",
  },
  {
    id: "egitim-ile-satis-ekipleri",
    title: "Eğitim Modelleriyle Satış Ekiplerini Güçlendirmek",
    excerpt:
      "Kurumsal eğitim modellerinin satış ve danışmanlık ekiplerinin performansına olan stratejik etkisi.",
    date: "Nisan 2026",
    category: "Eğitim ve Franchise",
    cardGradient: "linear-gradient(145deg, #222E28 0%, #2E3E36 55%, #1A2820 100%)",
    href: "/haberler/egitim-ile-satis-ekipleri",
  },
  {
    id: "projeleri-uluslararasi-yatirimciya-hazirlamak",
    title: "Projeleri Uluslararası Yatırımcıya Hazırlamak",
    excerpt:
      "Bir projenin uluslararası yatırımcı standartlarına uygun şekilde konumlandırılması ve sunulması süreci.",
    date: "Mart 2026",
    category: "Yatırım Perspektifi",
    cardGradient: "linear-gradient(145deg, #2E1E16 0%, #402C20 55%, #221410 100%)",
    href: "/haberler/projeleri-uluslararasi-yatirimciya-hazirlamak",
  },
]
