"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Siap Memesan?</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Hubungi kami sekarang via WhatsApp untuk informasi lebih lanjut dan pemesanan
        </p>

        <div className="space-y-4">
          <a
            href="https://wa.me/6281327746081?text=Halo%20Kemangi%20Catering%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20catering%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat di WhatsApp
            </Button>
          </a>

          <div className="text-sm text-foreground/60">
            <p>Jam operasional: Senin - Minggu, 09:00 - 21:00</p>
            <p>Respon cepat dalam 15 menit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
