import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Nexus Event and IT Solutions | Premium Event Planning & Production Services",
  description:
    "Leading event planning and IT solutions company in Nepal. 20+ successful events, 50+ Production projects, and cutting-edge web development services.",
  keywords: "event planning Nepal, Production services, web development, IT solutions, Makwanpur",
  authors: [{ name: "Nexus Event and IT Solutions" }],
  creator: "Nexus Event and IT Solutions",
  publisher: "Nexus Event and IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusevent.com.np",
    title: "Nexus Event and IT Solutions",
    description: "Premium Event Planning & Production Services in Nepal",
    siteName: "Nexus Event and IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Event and IT Solutions",
    description: "Premium Event Planning & Production Services in Nepal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-background">
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}