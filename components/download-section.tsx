"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Star, Download } from "lucide-react"
import Image from "next/image"

// ---------- DOWNLOAD SECTION ----------
export function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-28 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Get the <span className="text-primary">FAMBA 247</span> App
          </h2>
          <p className="sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Download now and start your ride instantly. Available on Google Play and the App Store.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-6">
            {[
              { icon: Smartphone, title: "Easy Booking", desc: "Book rides in just a few taps." },
              { icon: Star, title: "Rate Your Ride", desc: "Help us maintain quality service." },
              { icon: Download, title: "Real-Time Tracking", desc: "Know exactly where your ride is." },
            ].map((f, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold sm:text-lg">{f.title}</h3>
                    <p className="sm:text-lg text-muted-foreground">{f.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Image */}
          <div className="text-center">
            <div className="relative inline-block">
              <Image
                src="/get_started.png"
                alt="Famba App Screenshot"
                width={280}
                height={800}
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 scale-110" />
            </div>

            {/* Store Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <Image src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="App Store" width={150} height={45} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <Image src="/GetItOnGooglePlay_Badge_Web_color_English-01.svg" alt="Google Play" width={150} height={45} />
              </a>
            </div>
          </div>

          {/* Right Details */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Famba 247?</h3>
            <p className="text-muted-foreground mb-6 sm:text-lg">
              Join thousands of Zimbabweans who trust FAMBA 247 for reliable and affordable rides.
            </p>
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold mb-3 sm:text-lg">App Features:</h4>
              <ul className="space-y-2 text-sm">
                {["Instant booking", "Multiple payment options", "Ride history & receipts", "Emergency contact"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center sm:text-lg">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 " />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
