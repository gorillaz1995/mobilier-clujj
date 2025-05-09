import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Load Inter font for backward compatibility
const inter = Inter({ subsets: ["latin", "latin-ext"] });

// Load Manrope font with variable weight support for tailwindcss
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  // Enable variable font features with weight range
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Load Sora font with variable weight support for tailwindcss
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  // Enable variable font features with weight range
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mobilier Personalizat Cluj | Mobilă la Comandă de Lux",
  description:
    "Creăm mobilier personalizat de lux pentru case și proiecte de amploare. Materiale premium, design exclusivist și execuție impecabilă pentru clienții exigenți.",
  keywords: [
    "mobilier personalizat",
    "mobilă la comandă",
    "mobilier de lux",
    "mobilier cluj",
    "proiecte mobilier",
  ],
  generator: "v0.dev",
};

export const viewport: Viewport = {
  themeColor: "#EEEEE6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${inter.className} ${manrope.variable} ${sora.variable} bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
