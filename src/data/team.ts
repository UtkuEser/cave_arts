// Ekibimiz — şimdilik kurumsal placeholder veri; gerçek fotoğraf/bilgiler eklendiğinde
// sadece bu dizi güncellenmeli.
export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image?: string
  initials: string
}

export const team: TeamMember[] = [
  {
    id: "kurucu-ceo",
    name: "E. Kaya",
    title: "Kurucu & CEO",
    bio: "Proje geliştirme ve uluslararası yatırım alanında 15 yılı aşan deneyimiyle CaveArts'ın stratejik vizyonunu yönetir.",
    initials: "EK",
  },
  {
    id: "coo",
    name: "M. Demir",
    title: "Genel Operasyon Direktörü",
    bio: "Proje süreçlerinin uçtan uca yönetiminden ve operasyonel mükemmellikten sorumludur.",
    initials: "MD",
  },
  {
    id: "uluslararasi-direktor",
    name: "S. Aydın",
    title: "Uluslararası İlişkiler Direktörü",
    bio: "Global ortaklıklar, yeni pazar girişleri ve uluslararası danışmanlık ağını koordine eder.",
    initials: "SA",
  },
  {
    id: "yatirim-direktor",
    name: "C. Yıldız",
    title: "Yatırım & Franchise Direktörü",
    bio: "Yatırım modellerinin tasarımı ve franchise sisteminin büyümesini yönetir.",
    initials: "CY",
  },
]
