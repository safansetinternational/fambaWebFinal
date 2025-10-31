
import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/famba logo.jpg"
                alt="Famba247 Logo"
                className="w-12 h-12 rounded-xl shadow-lg"
              />
              <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)]">
                <span className="text-primary">FAMBA</span>
                <span className="text-secondary">247</span>
              </h2>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md ">
              Zimbabwe’s proudly local ride-hailing app — built for our roads,
              our people, and our hustle. Safe, fast, and always on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>1 Lancaster Ave, Belvedere, Harare</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+263 778 179 409</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@famba247.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581816032731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-primary">Famba247</span>.
            All rights reserved. Built with pride in Zimbabwe 🇿🇼
          </p>
        </div>
      </div>
    </footer>
  )
}

