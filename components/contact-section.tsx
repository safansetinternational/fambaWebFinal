import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
            We're Always <span className="text-primary">On</span> — Just Like Our Rides
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have a question, suggestion, or partnership idea? The Famba247 team would love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Customer Support */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-4">Customer Support</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Need help with the app, payments, or your account? We're available 24/7.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+263 7 XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@famba247.co.zw</span>
              </div>
            </div>
          </Card>

          {/* Join as Driver */}
          <Card className="p-8 border-2 hover:border-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Phone className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-4">Join as a Driver</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ready to start earning with Famba247? Fill out the registration form or visit us.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+263 7 XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>drivers@famba247.co.zw</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Register Now</Button>
          </Card>

          {/* Partnerships */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-4">Business & Partnerships</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's build Zimbabwe's mobility future together.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>partnerships@famba247.co.zw</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Office Location */}
        <Card className="p-8 border-2">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">Our Office</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold text-foreground">Harare HQ</p>
                <p>1 Lancaster Ave, Belvedere, Harare</p>
                <p>Open: Monday–Sunday, 8 AM–5 PM</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold font-[family-name:var(--font-poppins)] mb-4">Stay Connected</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">www.famba247.com</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
