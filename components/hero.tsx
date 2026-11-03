"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in" style={{ animationDuration: "1s" }}>
          <span className="text-primary font-body text-sm tracking-widest uppercase">Luxury Redefined</span>
        </div>

        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-balance mb-6 text-foreground animate-fade-in"
          style={{ animationDuration: "1.2s", animationDelay: "0.2s" }}
        >
          Elevate Your
          <br />
          <span className="text-primary">Essence</span>
        </h1>

        <p
          className="text-lg sm:text-xl font-body text-muted-foreground max-w-2xl mx-auto mb-8 text-balance animate-fade-in"
          style={{ animationDuration: "1.4s", animationDelay: "0.4s" }}
        >
          Discover four exquisite departments of luxury fashion. From timeless clothing to radiant beauty and statement
          jewelry, Shi curates experiences that define your style.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDuration: "1.6s", animationDelay: "0.6s" }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Explore Collections
          </button>
          <button className="px-8 py-3 border border-primary text-primary font-body font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
