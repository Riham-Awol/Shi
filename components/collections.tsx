export default function Collections() {
  return (
    <section id="collections" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-widest uppercase">Featured</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 text-foreground text-balance">
            Seasonal Collections
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl aspect-square mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-display text-primary/30">ሺ</div>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {i === 1 && "Spring Elegance"}
                {i === 2 && "Summer Radiance"}
                {i === 3 && "Autumn Luxe"}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Discover the essence of the season with our curated collection.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
