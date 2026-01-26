"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/kemangi-catering-hero-bg.jpg"
        alt="Kemangi Catering Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative text-center max-w-2xl mx-auto z-10">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Kemangi Catering Logo"
            width={80}
            height={80}
            className="w-32 h-32 md:w-60 md:h-60"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white leading-tight">Kemangi Catering</h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 text-balance leading-relaxed">
          Rasakan cita rasa autentik Indonesia dengan layanan catering profesional kami. Menu pilihan, kualitas
          terjamin, dan harga terjangkau untuk setiap acara Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#menu" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
            >
              Lihat Menu
            </Button>
          </Link>
          <a
            href="https://wa.me/6281327746081?text=Halo%20Kemangi%20Catering%2C%20saya%20ingin%20memesan%20catering"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10 rounded-lg font-semibold bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/30">
          <div className="text-center">
            <div className="text-lg md:text-2xl font-bold text-white mb-1">10+</div>
            <div className="text-xs md:text-sm text-white/80">Menu Pilihan</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-bold text-white mb-1">1000+</div>
            <div className="text-xs md:text-sm text-white/80">Pelanggan Puas</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl font-bold text-white mb-1">4.8★</div>
            <div className="text-xs md:text-sm text-white/80">Rating Kami</div>
          </div>
        </div>
      </div>
    </section>
  )
}
