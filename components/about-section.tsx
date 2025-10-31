import { Card } from "@/components/ui/card"
import { Users, Target, Lightbulb, Handshake, Globe } from "lucide-react"
import MyVideo from "@/components/ui/video"
import { MapPin, DollarSign, CheckCircle, Car, TrendingUp, Award } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Trust First",
    description: "Every trip is built on safety, transparency, and respect.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "We uplift drivers and give riders freedom of choice.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We keep improving, because great journeys never stop.",
  },
  {
    icon: Target,
    title: "Community",
    description: "We're stronger together — riders, drivers, and everyone in between.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We move with care for our people, cities, and planet.",
  },
]




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


export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6 text-balance">
              More Than <span className="text-primary">a Ride</span>...
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
              <p>
                At Famba247, we believe moving from one place to another should be more than just a trip — it should be
                an experience.
              </p>
              <p>
                Born out of the need for reliable, safe, and affordable transport, we're here to connect people, places,
                and possibilities across Zimbabwe — one ride at a time.
              </p>
              <p>
                We're not just another ride-hailing app. We're a community-driven mobility platform built for the
                everyday Zimbabwean — from the commuter heading to work, to the parent sending groceries home, to the
                driver building a better tomorrow behind the wheel.
              </p>
              <p className="font-semibold text-foreground">
                Our mission is simple: To make mobility seamless, empowering, and accessible — 24/7.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
              {/* <img
                src="/zimbabwe-community-people-together.jpg"
                alt="Famba247 Community"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
              /> */}
              <MyVideo/>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-10 text-center">
            Our <span className="text-secondary">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold font-[family-name:var(--font-poppins)] mb-2">{value.title}</h4>
                    <p className="sm:text-lg text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
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
                      <p className="text-muted-foreground leading-relaxed sm:text-lg">{step.description}</p>
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
                      <p className="text-muted-foreground leading-relaxed sm:text-lg">{step.description}</p>
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
