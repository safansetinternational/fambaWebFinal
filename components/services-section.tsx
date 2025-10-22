import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Briefcase, Package, Building2 } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Rides for Every Need",
    description:
      "Whether it's a quick trip across town, a daily commute, or a night out — Famba247 gets you there smoothly. You choose your price, your driver, and your comfort level.",
    features: ["Real-time trip tracking", "Flexible price offers", "Safe, verified drivers", "24/7 availability"],
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Drive & Earn",
    description:
      "Turn your car into a source of income. As a Famba247 Driver, you're not just earning — you're part of a growing movement of empowered local drivers.",
    features: [
      "Fair commission rates",
      "Freedom to drive when you want",
      "Ratings that reflect your service",
      "24/7 support and transparency",
    ],
    color: "secondary",
  },
  {
    icon: Package,
    title: "Famba Deliveries",
    description:
      "Soon, you'll be able to use Famba247 to send parcels, groceries, or small items across town — quickly and securely.",
    features: ["Home deliveries", "Small businesses", "Local errands"],
    badge: "Coming Soon",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Corporate & Fleet Solutions",
    description:
      "Custom solutions for companies, NGOs, and organizations that move teams or goods daily. We handle the logistics — you focus on your work.",
    features: ["Business transport", "Fleet management", "Custom solutions"],
    color: "secondary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            More Than a Ride… We Move With You.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-${service.color}/10 flex items-center justify-center flex-shrink-0`}
                >
                  <service.icon className={`h-7 w-7 text-${service.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-poppins)]">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {index === 1 && (
                <Button variant="outline" className="w-full bg-transparent">
                  Become a Driver
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
