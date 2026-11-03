import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-display font-bold mb-2">ሺ</div>
            <h3 className="text-xl font-display font-bold mb-4">SHI</h3>
            <p className="font-body text-sm text-primary-foreground/80">
              Luxury fashion redefined. Four departments of exquisite style.
            </p>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Departments</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Shi Wears
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shi Beauty
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shi Scents
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shi Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-primary-foreground/80">© 2026 Shi. All rights reserved.</p>
          <div className="flex gap-6 font-body text-sm mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
