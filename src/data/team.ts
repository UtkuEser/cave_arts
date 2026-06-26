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
    name: "İsim Doldurulacak",
    title: "Pozisyon Doldurulacak",
    bio: "",
    initials: "—",
  },
  {
    id: "coo",
    name: "İsim Doldurulacak",
    title: "Pozisyon Doldurulacak",
    bio: "",
    initials: "—",
  },
  {
    id: "uluslararasi-direktor",
    name: "İsim Doldurulacak",
    title: "Pozisyon Doldurulacak",
    bio: "",
    initials: "—",
  },
  {
    id: "yatirim-direktor",
    name: "İsim Doldurulacak",
    title: "Pozisyon Doldurulacak",
    bio: "",
    initials: "—",
  },
]
