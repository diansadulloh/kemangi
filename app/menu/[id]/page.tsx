"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const menuItems = {
  "1": {
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Reguler",
    price: 25000,
    image: "/ayam-bakar.webp",
    description:
      "Paket Nasi Ayam Kampung Bakar: nasi hangat dengan ayam kampung bakar berbumbu khas, dipanggang hingga harum dan gurih, disajikan bersama sambal dan lalapan segar.",
    details: [
      "Nasi nok kecil",
      "Ayam kampung bakar",
      "Sambal terasi",
      "Sambal ijo",
      "Lalapan",
    ],
    rating: 4.8,
    reviews: 127,
    servings: "/ porsi",
  },
  "2": {
    name: "Nasi Semur Ayam",
    category: "Paket Reguler",
    price: 20000,
    image: "/semur-ayam.webp",
    description:
      "Nasi hangat disajikan dengan semur ayam empuk berbumbu rempah khas, dimasak perlahan hingga meresap sempurna. Perpaduan rasa manis gurih yang sederhana, hangat, dan selalu bikin rindu.",
    details: [
      "Nasi nok kecil",
      "Ayam semur",
      "Sambal goreng",
      "Mie/bihun",
    ],
    rating: 4.9,
    reviews: 89,
    servings: "/ porsi",
  },
  "3": {
    name: "Nasi Daging Rendang",
    category: "Paket Reguler",
    price: 25000,
    image: "/daging-rendang.webp",
    description:
      "Nasi hangat dengan daging rendang empuk yang dimasak lama bersama rempah pilihan. Cita rasa gurih, pedas, dan kaya bumbu khas Daerah yang menggugah selera.",
    details: [
      "Nasi nok kecil",
      "Rendang daging",
      "Capcay",
      "Sambal goreng",
    ],
    rating: 5.0,
    reviews: 203,
    servings: "/ porsi",
  },
  "4": {
    name: "Nasi Fried Chicken",
    category: "Paket Reguler",
    price: 10000,
    image: "/fried-chicken.webp",
    description:
      "Nasi hangat disajikan dengan fried chicken renyah di luar dan juicy di dalam. Gurih, lezat, dan pas dinikmati kapan saja.",
    details: [
      "Nasi nok kecil",
      "Fried chicken",
      "Sambal geprek",
      "Lalapan",
    ],
    rating: 4.7,
    reviews: 95,
    servings: "/porsi",
  },
  "5": {
    name: "Nasi Ayam Bakar",
    category: "Paket Reguler",
    price: 12000,
    image: "/ayam-bakar.webp",
    description: "Paket Nasi Ayam Kampung Bakar: nasi hangat dengan ayam kampung bakar berbumbu khas, dipanggang hingga harum dan gurih, disajikan bersama sambal dan lalapan segar.",
    details: [
      "Nasi nok kecil",
      "Ayam bakar",
      "Sambal Trasi",
      "Lalapan",
    ],
    rating: 4.6,
    reviews: 78,
    servings: "/ porsi",
  },
  "6": {
    name: "Nasi Ayam Goreng",
    category: "Paket Reguler",
    price: 10000,
    image: "/ayam-goreng.webp",
    description:
      "Nasi hangat dengan ayam goreng keemasan yang renyah di luar dan empuk di dalam. Rasa gurih sederhana yang selalu jadi favorit.",
    details: [
      "Nasi nok kecil",
      "Ayam goreng",
      "Sambal Trasi",
      "Lalapan",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "/ porsi",
  },
  "7": {
    name: "Nasi Ayam Kampung Bakar",
    category: "Paket Premium",
    price: 30000,
    image: "/ayam-bakar.webp",
    description: "Paket Nasi Ayam Kampung Bakar: nasi hangat dengan ayam kampung bakar berbumbu khas, dipanggang hingga harum dan gurih, disajikan bersama sambal dan lalapan segar.",
    details: [
      "Nasi porsi besar",
      "Ayam kampung bakar",
      "Sambal trasi",
      "Sambal ijo",
      "Lalapan",
    ],
    rating: 4.6,
    reviews: 78,
    servings: "/ porsi",
  },
  "8": {
    name: "Nasi Semur Ayam",
    category: "Paket Premium",
    price: 25000,
    image: "/semur-ayam.webp",
    description:
      "Perkedel kentang goreng dengan rasa bawang yang kuat dan tekstur dalam yang lembut, sempurna sebagai pendamping.",
    details: [
      "Nasi porsi besar",
      "Semur ayam",
      "Sambal trasi",
	  "Telur asin",
      "Sambal goreng tahu/krecek",
      "Mie/bihun",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "/ porsi",
  },
  "9": {
    name: "Nasi Ayam Goreng",
    category: "Paket Premium",
    price: 25000,
    image: "/ayam-goreng.webp",
    description:
      "Nasi hangat dengan ayam goreng keemasan yang renyah di luar dan empuk di dalam. Rasa gurih sederhana yang selalu jadi favorit.",
    details: [
      "Nasi porsi besar",
      "Ayam goreng",
      "Telur",
      "Sambal",
      "Lalapan",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "/ porsi",
  },
  "10": {
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 30000,
    image: "/daging-rendang.webp",
    description:
      "Nasi hangat dengan daging rendang empuk yang dimasak lama bersama rempah pilihan. Cita rasa gurih, pedas, dan kaya bumbu khas Daerah yang menggugah selera.",
    details: [
      "Nasi porsi besar",
      "Rendang daging",
      "Telur asin",
      "Sambal goreng tahu/krecek",
      "Mie/bihun",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "2-3 orang",
  },
  "11": {
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 32000,
    image: "/semur-ayam.webp",
    description:
      "Nasi hangat dengan daging rendang empuk yang dimasak lama bersama rempah pilihan. Cita rasa gurih, pedas, dan kaya bumbu khas Daerah yang menggugah selera.",
    details: [
      "Nasi porsi besar",
      "Rendang daging",
      "Telur asin",
	  "Acar",
      "Sambal goreng/krecek",
      "Mie",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "2-3 orang",
  },
  "12": {
    name: "Nasi Daging Rendang",
    category: "Paket Premium",
    price: 34000,
    image: "/daging-rendang.webp",
    description:
      "Nasi hangat dengan daging rendang empuk yang dimasak lama bersama rempah pilihan. Cita rasa gurih, pedas, dan kaya bumbu khas Daerah yang menggugah selera.",
    details: [
      "Nasi porsi besar",
      "Rendang daging",
      "Telur asin",
	  "Acar",
      "Sambal goreng tahu/krecek",
      "Mie/bihun",
	  "Gereh",
	  "Sundreng",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "2-3 orang",
  },
  "13": {
    name: "Nasi Punar",
    category: "Paket Spesial",
    price: 35000,
    image: "/nasi-punar.webp",
    description:
      "Nasi punar pulen berwarna kuning keemasan dengan aroma rempah yang harum. Gurih, hangat, dan cocok dipadukan dengan berbagai lauk pilihan.",
    details: [
      "Nasi + Ketan",
      "Mamahan punar + pecelan iwak",
      "Lepet/kupat",
      "3 Jajan",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "/ porsi",
  },
  "14": {
    name: "Ingkung Ayam",
    category: "Paket Spesial",
    price: 0,
    image: "/ingkung-ayam.webp",
    description:
      "Perkedel kentang goreng dengan rasa bawang yang kuat dan tekstur dalam yang lembut, sempurna sebagai pendamping.",
    details: [
      "Ingkung Ayam Besar = 250.000",
      "Ingkung Ayam Sedang = 200.000",
      "Ingkung Ayam Kecil/babon = 150.000",
      "Ingkung Ayam",
      "Paket sambal goreng 20 porsi = 20.000",
    ],
    rating: 4.5,
    reviews: 156,
    servings: "-",
  },
}

export default function MenuDetail() {
  const params = useParams()
  const id = params.id as string
  const item = menuItems[id as keyof typeof menuItems]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Menu tidak ditemukan</h1>
          <Link href="/">
            <Button variant="outline">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-background pb-20">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 px-4 py-3 border-b border-border">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <Link href="/#menu" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Kembali</span>
          </Link>
          <h1 className="text-lg font-bold text-foreground truncate flex-1">{item.name}</h1>
          <a
            href={`https://wa.me/6281327746081?text=Saya%20ingin%20memesan%20${encodeURIComponent(item.name)}%20(%20${item.price}%20)%20untuk%201%20porsi`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Pesan
            </Button>
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6">
        <div className="mb-6">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full aspect-video object-cover rounded-lg mb-6"
          />

          <div className="mb-6">
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              {item.category}
            </span>

            <h1 className="text-3xl font-bold text-foreground mb-3">{item.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-foreground/60">
                {item.rating} ({item.reviews} review)
              </span>
            </div>

            <p className="text-foreground/70 leading-relaxed mb-6">{item.description}</p>

            <div className="bg-primary/5 rounded-lg p-4 mb-6">
              <div className="text-sm text-foreground/60 mb-2">Harga</div>
              <div className="text-4xl font-bold text-primary">Rp {item.price.toLocaleString("id-ID")}</div>
              <div className="text-sm text-foreground/60 mt-2">{item.servings}</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Detail Menu</h2>
            <ul className="space-y-3">
              {item.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground/80">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
		  
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
		  
            <h2 className="text-xl font-bold text-foreground mb-4">Ulasan Pelanggan</h2>
            <Card className="p-6 bg-card border-border mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-foreground">Budi Santoso</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Sangat lezat dan porsinya besar. Pelayanan cepat, saya merekomendasikan!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
