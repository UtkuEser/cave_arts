import type { Metadata } from "next"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import StatsSection from "@/components/sections/StatsSection"
import ManifestoSection from "@/components/sections/ManifestoSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProjectShowcaseSection from "@/components/sections/ProjectShowcaseSection"
import GlobalNetworkSection from "@/components/sections/GlobalNetworkSection"
import PartnersSection from "@/components/sections/PartnersSection"
import TeamSection from "@/components/sections/TeamSection"
import InsightsSection from "@/components/sections/InsightsSection"

export const metadata: Metadata = {
  title: "CaveArts | Proje Geliştirme ve Yatırım Sistemleri",
  description:
    "CaveArts; proje geliştirme, gayrimenkul, uluslararası danışmanlık, eğitim, franchise sistemleri ve yatırım modellerini tek bir uluslararası vizyon altında birleştiren premium proje geliştirme şirketidir.",
  openGraph: {
    title: "CaveArts | Proje Geliştirme ve Yatırım Sistemleri",
    description: "Fikirleri gerçeğe dönüştüren uluslararası proje geliştirme ve yatırım sistemleri.",
  },
}

export default function HomePage() {
  return (
    <>
      <Sidebar />

      {/* Sidebar genişliği kadar sol boşluk — desktop'ta 80px */}
      <div className="lg:ml-[80px]">
        {/* Mobil top bar için üst boşluk */}
        <div className="lg:hidden" style={{ height: 56 }} />

        <main>
          <Hero />
          <StatsSection />
          <ManifestoSection />
          <ServicesSection />
          <ProjectShowcaseSection />
          <GlobalNetworkSection />
          <PartnersSection />
          <TeamSection />
          <InsightsSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
