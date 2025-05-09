import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Mobilier Personalizat Cluj | Mobilă la Comandă de Lux",
  description:
    "Creăm mobilier personalizat de lux pentru case și proiecte de amploare. Materiale premium, design exclusivist și execuție impecabilă pentru clienții exigenți.",
  keywords: ["mobilier personalizat", "mobilă la comandă", "mobilier de lux", "mobilier cluj", "proiecte mobilier"],
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#EEEEE6",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
