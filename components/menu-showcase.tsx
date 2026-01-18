"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const menus = [
  {
    id: 1,
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Standar",
    price: 25000,
    image: "/nasi-kuning-ayam-goreng-indonesia-catering.jpg",
    description: "Ayam Kampung Bakar",
  },
  {
    id: 2,
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Premium",
    price: 30000,
    image: "/soto-ayam-premium-indonesia.jpg",
    description: "Ayam Goreng",
  },
  {
    id: 3,
    name: "Nasi Daging Rendang",
    category: "Paket Standar",
    price: 25000,
    image: "/rendang-daging-padang-indonesia.jpg",
    description: "Daging berkualitas tinggi",
  },
  {
    id: 4,
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 32000,
    image: "/lumpia-goreng-spesial.jpg",
    description: "Gurih dan renyah",
  },
  {
    id: 5,
    name: "Nasi Daging Rendang",
    category: "Paket Premium+",
    price: 34000,
    image: "/gado-gado-jakarta-tradisional.jpg",
    description: "Fried Chicken",
  },
  {
    id: 6,
    name: "Nasi Ayam Goreng",
    category: "Paket Ekonomis",
    price: 10000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Nasi Punar",
  },
  {
    id: 7,
    name: "Nasi Ayam Goreng",
    category: "Paket Standar",
    price: 25000,
    image: "/gado-gado-jakarta-tradisional.jpg",
    description: "Fried Chicken",
  },
  {
    id: 8,
    name: "Nasi Ayam Bakar",
    category: "Paket Ekonomis",
    price: 12000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Nasi Punar",
  },
  {
    id: 9,
    name: "Paket Fried Chicken",
    category: "Paket Ekonomis",
    price: 10000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Fried Chicken",
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
              <Card className="h-full overflow-hidden border-0 rounded-2xl shadow-md bg-card flex flex-col">
                {/* Image on top */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={menu.image || "/placeholder.svg?height=200&width=200"}
                    alt={menu.name}
                    width={300}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content section */}
                <div className="p-3 flex flex-col flex-1">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2 w-fit">
                    {menu.category}
                  </span>
                  <h3 className="font-bold text-sm text-foreground line-clamp-2 mb-1">{menu.name}</h3>
                  {/* <p className="text-xs text-foreground/60 mb-3">{menu.description}</p> */}
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
            href="https://wa.me/6281327746081?text=Saya%20tertarik%20memesan%20catering%20Kemangi"
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
