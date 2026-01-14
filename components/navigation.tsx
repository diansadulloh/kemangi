"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-primary">Kemangi</div>

          <div className="hidden md:flex items-center gap-6">
            <a href="/#menu" className="text-foreground hover:text-primary transition">
              Menu
            </a>
            <a href="/#features" className="text-foreground hover:text-primary transition">
              Tentang
            </a>
            <a href="/#cta" className="text-foreground hover:text-primary transition">
              Kontak
            </a>
            <a href="https://wa.me/6281327746081" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="/#menu" className="block py-2 text-foreground hover:text-primary">
              Menu
            </a>
            <a href="/#features" className="block py-2 text-foreground hover:text-primary">
              Tentang
            </a>
            <a href="/#cta" className="block py-2 text-foreground hover:text-primary">
              Kontak
            </a>
            <a href="https://wa.me/6281327746081" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Hubungi Kami
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
