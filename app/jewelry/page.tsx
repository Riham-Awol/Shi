import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function JewelryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-display font-bold text-slate-900 text-balance mb-6">Shi Jewelry</h1>
          <p className="text-xl text-slate-800 max-w-3xl font-body mb-8">
            Adorn yourself with exquisite pieces that blend timeless artistry with impeccable craftsmanship. Each
            jewelry item from Shi is a statement of elegance and refinement.
          </p>
          <button className="inline-flex items-center gap-2 bg-slate-900 text-slate-50 px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-body font-medium">
            Shop Collection <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 text-balance">
            Jewelry Collections
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-zinc-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Fine Jewelry</h3>
              <p className="text-slate-800 font-body mb-4 leading-relaxed">
                Investment-quality pieces crafted from precious metals and gemstones. Each ring, necklace, and bracelet
                is designed to become a cherished heirloom.
              </p>
              <button className="inline-flex items-center gap-2 text-slate-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-zinc-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Contemporary Pieces</h3>
              <p className="text-slate-800 font-body mb-4 leading-relaxed">
                Modern designs that celebrate individuality. Our contemporary collection features bold shapes, mixed
                metals, and innovative designs for the fashion-forward.
              </p>
              <button className="inline-flex items-center gap-2 text-slate-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-zinc-100 h-80 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Accessories & More</h3>
              <p className="text-slate-800 font-body mb-4 leading-relaxed">
                Complete your look with our curated selection of accessories. From anklets and bracelets to scarves and
                belts, every piece complements your style.
              </p>
              <button className="inline-flex items-center gap-2 text-slate-900 font-body font-medium hover:gap-3 transition-all">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Additional Collections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-zinc-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Engagement & Bridal</h3>
              <p className="text-slate-800 font-body mb-4 leading-relaxed">
                Celebrate your most precious moments with our bespoke engagement and bridal collections. Custom design
                services available for truly one-of-a-kind pieces.
              </p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-slate-100 to-zinc-100 h-96 rounded-xl mb-6 group-hover:shadow-lg transition-shadow"></div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Statement Pieces</h3>
              <p className="text-slate-800 font-body mb-4 leading-relaxed">
                Bold, eye-catching designs that make a powerful statement. These pieces are meant to be noticed and
                admired by all who see them.
              </p>
            </div>
          </div>

          {/* Excellence Section */}
          <div className="bg-slate-50 rounded-2xl p-12 md:p-16 mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Shi Jewelry Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Master Craftsmanship</h3>
                  <p className="text-slate-800 font-body leading-relaxed">
                    Our jewelry artisans are trained in traditional techniques passed down through generations. Every
                    detail is meticulously crafted to perfection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Precious Materials</h3>
                  <p className="text-slate-800 font-body leading-relaxed">
                    We source only the finest materials including 18K gold, platinum, and ethically sourced gemstones.
                    Quality is non-negotiable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Custom Design Services</h3>
                  <p className="text-slate-800 font-body leading-relaxed">
                    Create something uniquely yours with our custom design services. Work with our artisans to bring
                    your vision to life.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Lifetime Guarantee</h3>
                  <p className="text-slate-800 font-body leading-relaxed">
                    Every piece comes with a lifetime guarantee. We stand behind the quality and durability of our
                    jewelry for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gemstone & Care Guide */}
          <div className="bg-white rounded-2xl p-12 md:p-16 border border-slate-200">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Gemstone & Care Guide</h2>
            <p className="text-slate-800 font-body mb-8">
              Learn about precious gemstones, metals, and proper jewelry care to ensure your pieces remain beautiful and
              valuable for a lifetime.
            </p>
            <button className="inline-flex items-center gap-2 bg-slate-900 text-slate-50 px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-body font-medium">
              View Guide <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
