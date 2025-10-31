import { Check, Clock, Shield, DollarSign, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// ---------- WHY CHOOSE SECTION ----------
export function WhyChooseSection() {
  const features = [
    { icon: Check, title: "Fair Fares", description: "You suggest your price — drivers respond. Simple and transparent." },
    { icon: Clock, title: "Always Available", description: "24/7 service because your life doesn’t wait." },
    { icon: Shield, title: "Safe & Secure", description: "Every ride is GPS-tracked and every driver verified." },
    { icon: DollarSign, title: "Driver-Friendly", description: "Low commissions mean drivers keep more earnings." },
    { icon: Heart, title: "Proudly Local", description: "Built by Zimbabweans, for Zimbabweans." },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Why Choose <span className="text-primary">FAMBA 247</span>?
          </h2>
          <p className="sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Forget complicated pricing and endless waiting. With FAMBA, everything’s simple, transparent, and community-driven.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-6 hover:shadow-lg border border-transparent hover:border-primary/30 transition-all">
              <CardContent className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground sm:text-lg leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
