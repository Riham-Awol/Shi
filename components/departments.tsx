import DepartmentCard from "./department-card"

const departments = [
  {
    id: "wears",
    name: "Shi Wears",
    subtitle: "Clothing Line",
    description:
      "Discover our curated collection of contemporary and classic pieces designed to elevate your wardrobe with timeless elegance.",
    color: "from-amber-50 to-orange-50",
    textColor: "text-amber-900",
    accent: "bg-amber-200",
  },
  {
    id: "beauty",
    name: "Shi Beauty",
    subtitle: "Makeup & Skincare",
    description:
      "Enhance your natural beauty with our premium makeup and skincare line, crafted with the finest ingredients.",
    color: "from-rose-50 to-pink-50",
    textColor: "text-rose-900",
    accent: "bg-rose-200",
  },
  {
    id: "scents",
    name: "Shi Scents",
    subtitle: "Luxury Perfume",
    description:
      "Indulge in our signature fragrances, each carefully composed to capture the essence of sophistication and allure.",
    color: "from-purple-50 to-violet-50",
    textColor: "text-purple-900",
    accent: "bg-purple-200",
  },
  {
    id: "jewelry",
    name: "Shi Jewelry",
    subtitle: "Jewelry & Accessories",
    description:
      "Adorn yourself with exquisite pieces that blend artistry and craftsmanship, designed for those who appreciate fine details.",
    color: "from-slate-50 to-zinc-50",
    textColor: "text-slate-900",
    accent: "bg-slate-300",
  },
]

export default function Departments() {
  return (
    <section id="departments" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-widest uppercase">Our Collections</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mt-2 text-foreground text-balance">
            Four Departments of Excellence
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Each department is meticulously crafted to offer the finest selection of luxury items across fashion,
            beauty, fragrance, and jewelry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} {...dept} />
          ))}
        </div>
      </div>
    </section>
  )
}
