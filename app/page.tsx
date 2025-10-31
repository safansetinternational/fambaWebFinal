import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CommunitySection } from "@/components/community-section"
import { ContactSection } from "@/components/contact-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "react-day-picker"

export default function Home() {
  return (
      <>
       <HeroSection />
      <WhyChooseSection />
      <section id="download"><DownloadSection /></section>
    </>
  )
}