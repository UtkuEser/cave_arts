export interface ServiceArea {
  id: string
  num: string
  title: string
  desc: string
  href: string
}

export const serviceAreas: ServiceArea[] = [
  {
    id: "proje-gelistirme",
    num: "01",
    title: "Proje Geliştirme",
    desc: "Fikrin ortaya çıktığı andan yatırımcıyla buluştuğu ana kadar bütün süreci stratejik olarak kurar ve yönetiriz.",
    href: "/proje-gelistirme",
  },
  {
    id: "gayrimenkul",
    num: "02",
    title: "Gayrimenkul",
    desc: "Konut, ticari ve turizm alanlarında değer üreten gayrimenkul projelerini uluslararası standartlarla geliştiririz.",
    href: "/gayrimenkul",
  },
  {
    id: "danismanlik",
    num: "03",
    title: "Uluslararası Danışmanlık",
    desc: "Yerel projeleri global vizyonla değerlendirir, pazara giriş ve büyüme stratejilerinde danışmanlık sağlarız.",
    href: "/uluslararasi-danismanlik",
  },
  {
    id: "egitim",
    num: "04",
    title: "Eğitim",
    desc: "Proje geliştirme, yatırım ve satış disiplinlerinde profesyonel bilgi aktaran kurumsal eğitim modelleri kurarız.",
    href: "/egitim",
  },
  {
    id: "franchise",
    num: "05",
    title: "Franchise Sistemleri",
    desc: "CaveArts vizyonunu yeni pazarlara taşıyan, sistemli ve sürdürülebilir franchise yapıları tasarlarız.",
    href: "/franchise",
  },
  {
    id: "yatirim-modelleri",
    num: "06",
    title: "Yatırım Modelleri",
    desc: "Yatırımcı ve proje arasında doğru dengeyi kuran, şeffaf ve esnek yatırım modelleri geliştiririz.",
    href: "/cavearts-prime",
  },
]
