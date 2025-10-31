import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Car } from "lucide-react"
import ImageSlider from "./ui/imageslider"

export function HeroSection() {
  return (

    <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/famba.mp4"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-[family-name:var(--font-poppins)] leading-tight">
          Your Ride, <span className="text-primary">Anytime</span>, <br className="hidden md:block" />
          Anywhere.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Fast, safe, and reliable — Zimbabwe’s proudly local ride-hailing app.
        </p>
        <a
          href="#download"
          className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition"
        >
          Get the App
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-white rotate-90" />
      </div>
    </section>
  )
}
