export function CommunitySection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-8 text-balance">
            More Than Just <span className="text-primary">a Ride</span>
          </h2>

          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80">
            <p>FAMBA 247 isn't just about moving people — it's about connecting communities.</p>
            <p className="text-xl sm:text-2xl font-semibold text-foreground">
              Every ride supports local drivers, creates jobs, and keeps money circulating right here in Zimbabwe.
            </p>
            <p>We're not just changing how people travel; we're changing how people live, earn, and connect.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Local & Proud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">Fair</div>
              <div className="text-muted-foreground">Pricing Always</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
