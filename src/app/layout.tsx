import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CaveArts I.P.D.C. | Uluslararası Proje Geliştirme Şirketi",
  description:
    "CaveArts; proje geliştirme, gayrimenkul, uluslararası danışmanlık, eğitim, franchise sistemleri ve yatırım modellerini tek bir uluslararası vizyon altında birleştiren premium proje geliştirme şirketidir.",
  keywords: [
    "CaveArts",
    "proje geliştirme",
    "uluslararası danışmanlık",
    "franchise sistemleri",
    "yatırım modelleri",
    "gayrimenkul",
  ],
  openGraph: {
    title: "CaveArts I.P.D.C. | Fikirleri Gerçeğe Dönüştürüyoruz",
    description: "Proje geliştirme, yatırım ve danışmanlık ekosistemini geleceğe değer katan sistemlere dönüştürüyoruz.",
    type: "website",
    locale: "tr_TR",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
