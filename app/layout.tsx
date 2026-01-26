import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { InstallBanner } from "@/components/install-banner"
import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Kemangi Catering - Layanan Catering Terbaik di Demak",
  description:
    "Kemangi Catering menyediakan layanan catering berkualitas dengan menu tradisional dan modern. Pesan sekarang melalui WhatsApp untuk acara Anda. Katering Pasir - Mijen - Demak",
  generator: "v0.app",
  metadataBase: new URL("https://kemangi.my.id"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kemangi Catering",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Kemangi Catering - Layanan Catering Terbaik",
    description: "Layanan catering profesional dengan menu pilihan lengkap",
    type: "website",
    locale: "id_ID",
  },
  alternates: {
    canonical: "https://kemangi.my.id",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon-192.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#faf6f1" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kemangi Catering",
              description: "Layanan catering berkualitas dengan menu tradisional Indonesia",
              telephone: "+62 813-2774-6081",
              url: "https://kemangi.my.id",
              areaServed: "ID",
            }),
          }}
        />
      </head>
      <body className={`${urbanist.className} font-sans antialiased`}>
        <InstallBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
