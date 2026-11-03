import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function WearsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-amber-900 text-balance mb-6">Shi Wears</h1>
          <p className="text-xl text-amber-800 max-w-3xl font-body mb-8">
            Elevate your wardrobe with our curated collection of contemporary and classic pieces. From everyday
            essentials to statement pieces, every item is designed with precision and elegance.
          </p>
          <button className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-body font-medium">
            Shop Collection <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 text-balance">
            Featured Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-2">Everyday Elegance</h3>
              <p className="text-amber-800 font-body mb-4 leading-relaxed">
                Timeless pieces designed for your daily wardrobe. From tailored blazers to comfortable yet sophisticated
                basics, these items transition seamlessly from day to night.
              </p>
              <button className="inline-flex items-center gap-2 text-amber-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-2">Statement Pieces</h3>
              <p className="text-amber-800 font-body mb-4 leading-relaxed">
                Bold, eye-catching designs that make an impression. These curated pieces are meant to be conversation
                starters and showcase your unique style.
              </p>
              <button className="inline-flex items-center gap-2 text-amber-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-2">Seasonal Collections</h3>
              <p className="text-amber-800 font-body mb-4 leading-relaxed">
                Fresh arrivals every season. Our rotating collections feature the latest trends and seasonal styles,
                keeping your wardrobe current and exciting.
              </p>
              <button className="inline-flex items-center gap-2 text-amber-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-2">Luxury Activewear</h3>
              <p className="text-amber-800 font-body mb-4 leading-relaxed">
                High-performance fabrics meet sophisticated design. Our activewear collection proves that comfort and
                elegance are not mutually exclusive, perfect for the modern luxury lifestyle.
              </p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-2">Evening Wear</h3>
              <p className="text-amber-800 font-body mb-4 leading-relaxed">
                Make a lasting impression with our exquisite evening collection. Each piece is crafted to turn heads and
                make you feel absolutely stunning at any formal occasion.
              </p>
            </div>
          </div>

          {/* Why Choose Shi Wears */}
          <div className="bg-amber-50 rounded-2xl p-12 md:p-16 mb-16">
            <h2 className="text-4xl font-display font-bold text-amber-900 mb-6">Why Choose Shi Wears?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-amber-900 mb-2">Premium Quality Materials</h3>
                  <p className="text-amber-800 font-body leading-relaxed">
                    Every piece is crafted from the finest materials, ensuring durability, comfort, and timeless style.
                    We partner with the best artisans and manufacturers worldwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-amber-900 mb-2">Ethical Production</h3>
                  <p className="text-amber-800 font-body leading-relaxed">
                    We believe in sustainable fashion. Our production processes are environmentally conscious and our
                    factories adhere to the highest ethical standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-amber-900 mb-2">Expert Curation</h3>
                  <p className="text-amber-800 font-body leading-relaxed">
                    Our fashion experts handpick every item for quality, design, and relevance. Each piece must meet our
                    strict standards before it reaches your closet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-amber-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-amber-900 mb-2">Personal Styling</h3>
                  <p className="text-amber-800 font-body leading-relaxed">
                    Access to personal styling consultations. Our team is here to help you find pieces that complement
                    your style and fit your lifestyle perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Size & Fit Guide */}
          <div className="bg-white rounded-2xl p-12 md:p-16 border border-amber-200">
            <h2 className="text-4xl font-display font-bold text-amber-900 mb-6">Size & Fit Guide</h2>
            <p className="text-amber-800 font-body mb-8">
              We believe that perfect fit is essential to luxury. Our detailed size guides ensure you find your ideal
              fit, and our hassle-free returns policy means you can shop with confidence.
            </p>
            <button className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-body font-medium">
              View Size Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
