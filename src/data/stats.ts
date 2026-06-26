// Rakamlarla CaveArts — şimdilik mock veri.
// Gerçek rakamlar netleştiğinde sadece bu dizi güncellenmeli.
export interface Stat {
  id: string
  value: string
  label: string
}

export const stats: Stat[] = [
  { id: "countries", value: "5+", label: "Ülkede Faaliyet" },
  { id: "projects", value: "20+", label: "Tamamlanan Proje" },
  { id: "partners", value: "50+", label: "İş Ortağı" },
  { id: "clients", value: "1000+", label: "Mutlu Müşteri" },
]
