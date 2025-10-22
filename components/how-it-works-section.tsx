import { Card } from "@/components/ui/card"
import { MapPin, DollarSign, CheckCircle, Car, TrendingUp, Award } from "lucide-react"

const riderSteps = [
  {
    icon: MapPin,
    step: "1",
    title: "Enter Destination",
    description: "Open the app and enter your destination.",
  },
  {
    icon: DollarSign,
    step: "2",
    title: "Set Your Price",
    description: "Set your price — yes, you decide!",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Enjoy the Ride",
    description: "Confirm your driver and enjoy the ride.",
  },
]

const driverSteps = [
  {
    icon: Car,
    step: "1",
    title: "Accept Trips",
    description: "Accept the trips that suit you.",
  },
  {
    icon: TrendingUp,
    step: "2",
    title: "Drive & Earn",
    description: "Drive, earn, and grow your income.",
  },
  {
    icon: Award,
    step: "3",
    title: "Get Rewards",
    description: "Get rewards and bonuses for consistent service.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
            How It <span className="text-secondary">Works</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* For Riders */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-8 text-primary">
              For Riders
            </h3>
            <div className="space-y-6">
              {riderSteps.map((step, index) => (
                <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h4 className="text-lg font-semibold font-[family-name:var(--font-poppins)]">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* For Drivers */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-8 text-secondary">
              For Drivers
            </h3>
            <div className="space-y-6">
              {driverSteps.map((step, index) => (
                <Card key={index} className="p-6 border-2 hover:border-secondary/50 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-secondary" />
                        <h4 className="text-lg font-semibold font-[family-name:var(--font-poppins)]">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
