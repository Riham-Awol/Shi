"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-4xl font-display font-bold text-primary">ሺ</div>
            <div className="hidden sm:block">
              <div className="text-xl font-display font-bold text-foreground">SHI</div>
              <div className="text-xs text-muted-foreground tracking-widest">LUXURY FASHION</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-body text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/wears" className="font-body text-sm hover:text-primary transition-colors">
              Shi Wears
            </Link>
            <Link href="/beauty" className="font-body text-sm hover:text-primary transition-colors">
              Shi Beauty
            </Link>
            <Link href="/scents" className="font-body text-sm hover:text-primary transition-colors">
              Shi Scents
            </Link>
            <Link href="/jewelry" className="font-body text-sm hover:text-primary transition-colors">
              Shi Jewelry
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-4">
            <Link href="/" className="font-body text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/wears" className="font-body text-sm hover:text-primary transition-colors">
              Shi Wears
            </Link>
            <Link href="/beauty" className="font-body text-sm hover:text-primary transition-colors">
              Shi Beauty
            </Link>
            <Link href="/scents" className="font-body text-sm hover:text-primary transition-colors">
              Shi Scents
            </Link>
            <Link href="/jewelry" className="font-body text-sm hover:text-primary transition-colors">
              Shi Jewelry
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
