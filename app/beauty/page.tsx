import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function BeautyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-rose-900 text-balance mb-6">Shi Beauty</h1>
          <p className="text-xl text-rose-800 max-w-3xl font-body mb-8">
            Enhance your natural radiance with our premium makeup and skincare line. Formulated with the finest
            ingredients, designed to nourish, protect, and beautify your skin.
          </p>
          <button className="inline-flex items-center gap-2 bg-rose-900 text-rose-50 px-8 py-3 rounded-lg hover:bg-rose-800 transition-colors font-body font-medium">
            Shop Collection <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 text-balance">
            Our Product Lines
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-rose-900 mb-2">Makeup Essentials</h3>
              <p className="text-rose-800 font-body mb-4 leading-relaxed">
                A complete range of makeup products from foundations and concealers to eyeshadows and lipsticks. Each
                formula is designed to blend seamlessly and provide long-lasting color.
              </p>
              <button className="inline-flex items-center gap-2 text-rose-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-rose-900 mb-2">Skincare Luxury</h3>
              <p className="text-rose-800 font-body mb-4 leading-relaxed">
                Innovative skincare treatments infused with natural extracts and advanced technology. Our serums,
                moisturizers, and masks target every skin concern with precision.
              </p>
              <button className="inline-flex items-center gap-2 text-rose-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-rose-900 mb-2">Tools & Brushes</h3>
              <p className="text-rose-800 font-body mb-4 leading-relaxed">
                Professional-grade makeup brushes and beauty tools. Crafted with precision, these tools help you achieve
                flawless application every single time.
              </p>
              <button className="inline-flex items-center gap-2 text-rose-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Additional Collections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-rose-900 mb-2">Advanced Treatments</h3>
              <p className="text-rose-800 font-body mb-4 leading-relaxed">
                Professional-strength treatments and serums for targeted skincare concerns. These intensive formulas
                deliver visible results with continued use.
              </p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-rose-900 mb-2">Lip & Eye Specialists</h3>
              <p className="text-rose-800 font-body mb-4 leading-relaxed">
                Dedicated lip and eye care products designed for the delicate areas that need extra attention.
                Hydrating, nourishing, and absolutely luxurious.
              </p>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-rose-50 rounded-2xl p-12 md:p-16 mb-16">
            <h2 className="text-4xl font-display font-bold text-rose-900 mb-6">Our Commitment to Beauty</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-rose-900 mb-2">Clean Ingredients</h3>
                  <p className="text-rose-800 font-body leading-relaxed">
                    We believe beauty should be pure. All our products are free from harmful chemicals, parabens, and
                    synthetic fillers. Just natural goodness for your skin.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-rose-900 mb-2">Dermatologist Tested</h3>
                  <p className="text-rose-800 font-body leading-relaxed">
                    Every formula is rigorously tested by dermatologists to ensure safety and efficacy. Suitable for all
                    skin types, including sensitive skin.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-rose-900 mb-2">Cruelty-Free</h3>
                  <p className="text-rose-800 font-body leading-relaxed">
                    We are proudly cruelty-free and never test on animals. Our commitment to ethical beauty practices
                    extends throughout our entire supply chain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-rose-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-rose-900 mb-2">Expert Guidance</h3>
                  <p className="text-rose-800 font-body leading-relaxed">
                    Get personalized recommendations from our beauty experts. Whether you're a makeup novice or pro,
                    we're here to help you glow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skin Type Guide */}
          <div className="bg-white rounded-2xl p-12 md:p-16 border border-rose-200">
            <h2 className="text-4xl font-display font-bold text-rose-900 mb-6">Find Your Perfect Match</h2>
            <p className="text-rose-800 font-body mb-8">
              Every skin type deserves personalized care. Our comprehensive guide helps you find products specially
              formulated for your unique skin needs.
            </p>
            <button className="inline-flex items-center gap-2 bg-rose-900 text-rose-50 px-8 py-3 rounded-lg hover:bg-rose-800 transition-colors font-body font-medium">
              Take Skin Quiz <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
