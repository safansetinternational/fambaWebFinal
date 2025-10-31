"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg">
              <img
                src="/famba logo.jpg"
                className="w-64 mx-auto rounded-3xl shadow-2xl"
                alt="Famba247 Logo"
              />
            </div>

            {/* Text section */}
            <div className="flex flex-col leading-tight">
              <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)]">
                <span className="text-primary">FAMBA</span>
                <span className="text-secondary">247</span>
              </div>
              <span className="text-sm text-yellow-500 font-medium">
                More than a Ride
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-yellow-500">
            <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors">
              Services
            </Link>
            {/* <Link href="/how-it-works" className="text-lg font-medium hover:text-primary transition-colors">
              How It Works
            </Link> */}
            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>



          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              {/* <Link
                href="/how-it-works"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link> */}
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="lg">
                  Become a Driver
                </Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
