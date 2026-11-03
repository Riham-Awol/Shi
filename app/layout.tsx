import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })
const lora = Lora({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Shi | Luxury Fashion Brand",
  description:
    "Discover Shi: Premium clothing, makeup, perfume, and jewelry. Elevate your style with our four curated departments of luxury fashion.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} font-body antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
