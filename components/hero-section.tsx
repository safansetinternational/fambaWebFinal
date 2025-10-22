import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Car } from "lucide-react"
import ImageSlider from "./ui/imageslider"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/abstract-road-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available 24/7
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
              Your Journey. <br />
              <span className="text-primary">Your Way.</span> <br />
              <span className="text-secondary">Anytime, Anywhere.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0 text-pretty">
              More Than a Ride…
            </p>

            <p className="text-base sm:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              FAMBA 247 is Zimbabwe's proudly local ride-hailing app — built for our roads, our people, and our hustle.
              Whether you're catching a ride across town or earning extra income behind the wheel, we're here to make
              every trip fair, safe, and reliable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg text-bold h-12 px-8">
                <Download className="mr-2 h-5 w-5" />
                Download the App
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-pretty h-12 px-8 border-2 bg-transparent">
                <Car className="mr-2 h-5 w-5" />
                Become a Driver
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">Available on Google Play & App Store</p>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              {/* <img
                src="/modern-smartphone-with-ride-hailing-app-interface.jpg"
                alt="Famba247 App Interface"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              /> */}
              <ImageSlider/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
      </div>
    </section>
  )
}
