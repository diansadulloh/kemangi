"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const menus = [
  {
    id: 1,
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Reguler",
    price: 25000,
    image: "/ayam-bakar.webp",
    description: "Ayam Kampung Bakar",
  },
  {
    id: 2,
    name: "Nasi Semur Ayam",
    category: "Paket Reguler",
    price: 20000,
    image: "/nasi-semur-ayam.jpg",
    description: "Semur Ayam",
  },
  {
    id: 3,
    name: "Nasi Daging Rendang",
    category: "Paket Reguler",
    price: 25000,
    image: "/nasi-daging-rendang.jpg",
    description: "Daging berkualitas tinggi",
  },
  {
    id: 4,
    name: "Nasi Fried Chicken",
    category: "Paket Reguler",
    price: 10000,
    image: "/nasi-fried-chicken.jpg",
    description: "Fried Chicken",
  },
  {
    id: 5,
    name: "Nasi Ayam Bakar",
    category: "Paket Reguler",
    price: 12000,
    image: "/nasi-ayam-bakar.jpg",
    description: "Ayam Bakar",
  },
  {
    id: 6,
    name: "Nasi Ayam Goreng",
    category: "Paket Reguler",
    price: 10000,
    image: "/nasi-ayam-goreng.jpg",
    description: "Ayam Goreng",
  },
  {
    id: 7,
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Premium",
    price: 30000,
    image: "/nasi-ayam-kampung-bakar.jpg",
    description: "Ayam Kampung Bakar",
  },
  {
    id: 8,
    name: "Nasi Semur Ayam",
    category: "Paket Premium",
    price: 25000,
    image: "/nasi-semur-ayam.jpg",
    description: "Semur Ayam",
  },
  {
    id: 9,
    name: "Nasi Ayam Goreng",
    category: "Paket Premium",
    price: 25000,
    image: "/nasi-ayam-goreng.jpg",
    description: "Ayam Goreng",
  },
  {
    id: 10,
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 30000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Nasi Daging Rendang",
  },
  {
    id: 11,
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 32000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Nasi Daging Rendang",
  },
  {
    id: 12,
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 34000,
    image: "/perkedel-goreng-kentang.jpg",
    description: "Nasi Daging Rendang",
  },
  {
    id: 13,
    name: "Nasi Punar",
    category: "Paket Spesial",
    price: 35000,
    image: "/nasi-punar.jpg",
    description: "Nasi Punar",
  },
  {
    id: 14,
    name: "Ingkung Ayam",
    category: "Paket Spesial",
    price: 0,
    image: "/ingkung-ayam.jpg",
    description: "Ingkung Ayam",
  },
]

export default function MenuShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("Paket Reguler")

  // Get unique categories
  const categories = useMemo(
    () => ["Semua", ...Array.from(new Set(menus.map((m) => m.category)))],
    []
  )

  // Filter menus based on selected category
  const filteredMenus = useMemo(
    () =>
      selectedCategory === "Semua"
        ? menus
        : menus.filter((menu) => menu.category === selectedCategory),
    [selectedCategory]
  )

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Menu Kami</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Pilihan menu berkualitas tinggi dengan bahan-bahan segar dan resep tradisional
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {filteredMenus.map((menu) => (
            <div key={menu.id}>
              <Card className="h-full overflow-hidden border-0 rounded-2xl shadow-md bg-card flex flex-col">
                {/* Image on top */}
                <div className="aspect-video overflow-hidden rounded-t-2xl">
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

       {/* <div className="text-center">
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
        </div> */}
      </div>
    </section>
  )
}
