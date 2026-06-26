export interface FeaturedProject {
  id: string
  title: string
  location: string
  type: string
  description: string
  investmentModel: string
  status: string
  image?: string
  href: string
  cardGradient: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "cavearts-prime-izmir",
    title: "CaveArts Prime İzmir",
    location: "İzmir / Çeşme",
    type: "Konut Projesi",
    description: "Ege'nin özel lokasyonunda değer üreten, lokasyon potansiyelini ve marka algısını bir araya getiren premium bir proje geliştirme çalışması.",
    investmentModel: "Taksitli Yatırım",
    status: "Aktif",
    href: "/projelerimiz/cavearts-prime-izmir",
    cardGradient: "linear-gradient(145deg, #253535 0%, #304545 55%, #1E2A2A 100%)",
  },
  {
    id: "cavearts-prime-istanbul",
    title: "CaveArts Prime İstanbul",
    location: "İstanbul / Beykoz",
    type: "Villa Projesi",
    description: "Boğaz silüetine hâkim, doğa içinde villa yaşamını stratejik proje geliştirme vizyonuyla bir araya getirir.",
    investmentModel: "Taksitli Yatırım",
    status: "Aktif",
    href: "/projelerimiz/cavearts-prime-istanbul",
    cardGradient: "linear-gradient(145deg, #2A2825 0%, #383530 55%, #201E1A 100%)",
  },
  {
    id: "cavearts-prime-ege",
    title: "CaveArts Prime Ege",
    location: "Aydın / Kuşadası",
    type: "Konut Projesi",
    description: "Ege kıyısında lokasyon ve marka değerini birleştiren, uzun vadeli proje geliştirme vizyonuyla şekillenen bir yapı.",
    investmentModel: "Topraktan Giriş",
    status: "Planlama",
    href: "/projelerimiz/cavearts-prime-ege",
    cardGradient: "linear-gradient(145deg, #222E28 0%, #2E3E36 55%, #1A2820 100%)",
  },
  {
    id: "cavearts-prime-ankara",
    title: "CaveArts Prime Ankara",
    location: "Ankara / İncek",
    type: "Karma Proje",
    description: "Ankara'nın prestijli lokasyonunda çok fonksiyonlu kullanım alanlarıyla değer üreten karma bir geliştirme projesi.",
    investmentModel: "Arsa Payı",
    status: "Geliştirme",
    href: "/projelerimiz/cavearts-prime-ankara",
    cardGradient: "linear-gradient(145deg, #1E2438 0%, #2A3050 55%, #161C2E 100%)",
  },
  {
    id: "cavearts-prime-antalya",
    title: "CaveArts Prime Antalya",
    location: "Antalya / Lara",
    type: "Turizm & Konut",
    description: "Turizm ve konut sentezini global yatırımcı standartlarıyla bir araya getiren stratejik konumdaki proje.",
    investmentModel: "Topraktan Giriş",
    status: "Yakında",
    href: "/projelerimiz/cavearts-prime-antalya",
    cardGradient: "linear-gradient(145deg, #2E1E16 0%, #402C20 55%, #221410 100%)",
  },
  {
    id: "cavearts-prime-global",
    title: "CaveArts Prime Global",
    location: "Uluslararası",
    type: "Yatırım Danışmanlığı",
    description: "Sınır ötesi proje geliştirme ve danışmanlık ekosistemini bir araya getiren uluslararası platform.",
    investmentModel: "Stratejik Ortaklık",
    status: "Geliştirme",
    href: "/projelerimiz/cavearts-prime-global",
    cardGradient: "linear-gradient(145deg, #1A1A2E 0%, #252540 55%, #121220 100%)",
  },
]
