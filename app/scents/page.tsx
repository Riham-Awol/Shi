import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function ScentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-purple-900 text-balance mb-6">Shi Scents</h1>
          <p className="text-xl text-purple-800 max-w-3xl font-body mb-8">
            Discover the art of fragrance. Each Shi Scents perfume is a carefully composed masterpiece, capturing the
            essence of sophistication and creating an olfactory experience that lingers beautifully.
          </p>
          <button className="inline-flex items-center gap-2 bg-purple-900 text-purple-50 px-8 py-3 rounded-lg hover:bg-purple-800 transition-colors font-body font-medium">
            Shop Collection <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 text-balance">
            Signature Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-purple-900 mb-2">Floral Euphoria</h3>
              <p className="text-purple-800 font-body mb-4 leading-relaxed">
                Our collection of delicate floral fragrances blending rose, jasmine, and exotic botanicals. Perfect for
                those who love the elegance of nature captured in a bottle.
              </p>
              <button className="inline-flex items-center gap-2 text-purple-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-purple-900 mb-2">Luxe Noir</h3>
              <p className="text-purple-800 font-body mb-4 leading-relaxed">
                Deep, mysterious scents featuring oud, amber, and spices. These fragrances make a bold statement and are
                perfect for evening elegance and special occasions.
              </p>
              <button className="inline-flex items-center gap-2 text-purple-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-purple-900 mb-2">Fresh Citrus</h3>
              <p className="text-purple-800 font-body mb-4 leading-relaxed">
                Bright and refreshing scents with citrus notes, bergamot, and herbs. Ideal for daytime wear, these
                fragrances energize and uplift your mood throughout the day.
              </p>
              <button className="inline-flex items-center gap-2 text-purple-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Additional Collections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-purple-900 mb-2">Oriental Elegance</h3>
              <p className="text-purple-800 font-body mb-4 leading-relaxed">
                Rich, sensual fragrances inspired by Eastern traditions. Featuring vanilla, musk, and precious woods,
                these scents create an unforgettable impression.
              </p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-purple-900 mb-2">Herbal & Spice</h3>
              <p className="text-purple-800 font-body mb-4 leading-relaxed">
                Warm, aromatic blends combining spices, herbs, and woody notes. Perfect for those who appreciate
                complexity and depth in their fragrances.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-purple-50 rounded-2xl p-12 md:p-16 mb-16">
            <h2 className="text-4xl font-display font-bold text-purple-900 mb-6">The Shi Scents Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-purple-900 mb-2">Master Perfumers</h3>
                  <p className="text-purple-800 font-body leading-relaxed">
                    Our fragrances are created by world-renowned perfumers with decades of expertise. Each scent is a
                    work of art, composed with the finest ingredients from around the globe.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-purple-900 mb-2">Long-Lasting Formulas</h3>
                  <p className="text-purple-800 font-body leading-relaxed">
                    Our Eau de Parfum concentrations ensure your fragrance lasts throughout the day. Experience the
                    perfect blend of longevity and sophistication.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-purple-900 mb-2">Sustainable Sourcing</h3>
                  <p className="text-purple-800 font-body leading-relaxed">
                    We source our ingredients ethically and sustainably. From organic florals to rare essences, every
                    component is chosen with care for the environment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-purple-900 mb-2">Personal Consultation</h3>
                  <p className="text-purple-800 font-body leading-relaxed">
                    Not sure which scent is right for you? Our fragrance experts can help match you with the perfect
                    perfume based on your preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fragrance Guide */}
          <div className="bg-white rounded-2xl p-12 md:p-16 border border-purple-200">
            <h2 className="text-4xl font-display font-bold text-purple-900 mb-6">Discover Your Signature Scent</h2>
            <p className="text-purple-800 font-body mb-8">
              A fragrance should tell your story. Our fragrance guide helps you explore scent families and find the
              perfect perfume to express your unique personality.
            </p>
            <button className="inline-flex items-center gap-2 bg-purple-900 text-purple-50 px-8 py-3 rounded-lg hover:bg-purple-800 transition-colors font-body font-medium">
              Explore Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
