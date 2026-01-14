"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menus = [
  {
    id: 1,
    name: "Paket Ayam Kampung Bakar",
    category: "Paket Standar",
    price: 45000,
    image: "/nasi-kuning-ayam-goreng-indonesia-catering.jpg",
    description: "Ayam bumbu kemangi",
  },
  {
    id: 2,
    name: "Soto Ayam Premium",
    category: "Paket Standar",
    price: 50000,
    image: "/soto-ayam-premium-indonesia.jpg",
    description: "Rendang empuk",
  },
  {
    id: 3,
    name: "Rendang Daging Padang",
    category: "Paket Premium",
    price: 65000,
    image: "/rendang-daging-padang-indonesia.jpg",
    description: "Daging berkualitas tinggi",
  },
  {
    id: 4,
    name: "Lumpia Goreng Spesial",
    category: "Appetizer",
    price: 35000,
    image: "/lumpia-goreng-spesial.jpg",
    description: "Gurih dan renyah",
  },
  {
    id: 5,
    name: "Gado-gado Jakarta",
    category: "Sayuran",
    price: 40000,
    image: "/gado-gado-jakarta-tradisional.jpg",
    description: "Saus kacang kental",
  },
  {
    id: 6,
    name: "Perkedel Goreng",
    category: "Appetizer",
    price: 25000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Kentang goreng bawang",
  },
]

export default function MenuShowcase() {
  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Menu Kami</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Menu berkualitas tinggi dengan bahan-bahan segar
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {menus.map((menu) => (
            <div key={menu.id}>
              <Card className="h-full overflow-hidden border-0 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-card flex flex-col">
                {/* Image on top */}
                <div className="aspect-square bg-muted overflow-hidden">
                  <img
                    src={menu.image || "/placeholder.svg?height=200&width=200"}
                    alt={menu.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content section */}
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-bold text-sm text-foreground line-clamp-2 mb-1">{menu.name}</h3>

                  <p className="text-xs text-foreground/60 mb-3">{menu.description}</p>
                  <div className="mb-3 flex-1">
                    <span className="text-xl font-bold text-primary">Rp {(menu.price / 1000).toFixed(0)}.000</span>
                  </div>

                  <Link href={`/menu/${menu.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold h-10">
                      Lihat
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/6281234567890?text=Saya%20tertarik%20memesan%20catering%20Kemangi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
            >
              Lihat Semua Menu
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
