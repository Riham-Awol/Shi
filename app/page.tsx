import Header from "@/components/header"
import Hero from "@/components/hero"
import Departments from "@/components/departments"
import Collections from "@/components/collections"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Departments />
      <Collections />

      {/* Why Shi Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-body text-sm tracking-widest uppercase">The Shi Difference</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 text-foreground text-balance">
              Why Choose Shi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-background rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-display font-bold text-primary mb-4">01</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Curated Excellence</h3>
              <p className="text-muted-foreground font-body">
                Every piece is carefully selected by our team of luxury experts to ensure uncompromising quality and
                style.
              </p>
            </div>

            <div className="group p-8 bg-background rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-display font-bold text-primary mb-4">02</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Sustainable Luxury</h3>
              <p className="text-muted-foreground font-body">
                We are committed to ethical production practices and environmentally conscious materials in all our
                collections.
              </p>
            </div>

            <div className="group p-8 bg-background rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-display font-bold text-primary mb-4">03</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Personalized Service</h3>
              <p className="text-muted-foreground font-body">
                Access personal styling consultations and exclusive customer support to help you find your perfect
                pieces.
              </p>
            </div>

            <div className="group p-8 bg-background rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl font-display font-bold text-primary mb-4">04</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Premium Experience</h3>
              <p className="text-muted-foreground font-body">
                From packaging to delivery, every touchpoint is designed to deliver a luxury experience that exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-body text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold mt-4 text-foreground text-balance mb-6">
                Founded on Passion
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-4 leading-relaxed">
                Shi was born from a vision to redefine luxury fashion. In a world saturated with mass production, we
                believed there was room for a brand that truly valued quality, craftsmanship, and authentic beauty.
              </p>
              <p className="text-lg text-muted-foreground font-body mb-4 leading-relaxed">
                Each department represents a different facet of personal expression. Whether through our carefully
                curated clothing, transformative beauty products, captivating fragrances, or exquisite jewelry, Shi is
                dedicated to helping you discover and celebrate your unique essence.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Today, Shi stands as a beacon of luxury for those who refuse to compromise on quality and seek meaning
                in their purchases. We invite you to be part of our journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="text-8xl font-display font-bold text-primary/30 mb-4">ሺ</div>
                <p className="text-muted-foreground font-body text-lg">Luxury Redefined</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-balance">Discover Your Essence</h2>
          <p className="text-lg font-body mb-8 max-w-2xl mx-auto opacity-90">
            Explore our four luxurious departments and find pieces that resonate with your unique style and personality.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:shadow-lg transition-all font-body font-medium font-bold">
            Start Exploring <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
