import { Check, Clock, Shield, DollarSign, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Check,
    title: "Fair Fares",
    description: "You suggest your price, drivers respond. It's that simple.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 service because your life doesn't wait.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Every ride is GPS-tracked and every driver verified.",
  },
  {
    icon: DollarSign,
    title: "Driver-Friendly",
    description: "Keep more of your earnings with our low commission rates.",
  },
  {
    icon: Heart,
    title: "Proudly Local",
    description: "Built by Zimbabweans, for Zimbabweans.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
            Why Choose <span className="text-primary">FAMBA 247</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Forget complicated pricing and endless waiting. With FAMBA, everything's simple, transparent, and
            community-driven.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
