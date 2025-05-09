"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images-hp/logo-mpcluj.webp"
              alt="Mobilier Personalizat Cluj"
              width={60}
              height={40}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors hover:text-gold ${
                pathname === "/" ? "text-gold" : "text-gray-200"
              }`}
            >
              Acasa
            </Link>
            <Link
              href="/proiecte-mari"
              className={`text-lg font-medium transition-colors hover:text-gold ${
                pathname === "/proiecte-mari" ? "text-gold" : "text-gray-200"
              }`}
            >
              Proiecte B2B
            </Link>
            <Button className="bg-gold hover:bg-gold/90 text-headline">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </nav>

          <button
            className="md:hidden text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-lg font-medium py-2 transition-colors hover:text-gold ${
                  pathname === "/" ? "text-gold" : "text-gray-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Acasă
              </Link>
              <Link
                href="/proiecte-mari"
                className={`text-lg font-medium py-2 transition-colors hover:text-gold ${
                  pathname === "/proiecte-mari" ? "text-gold" : "text-gray-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Proiecte B2B
              </Link>
              <a href="tel:+40743894994" className="w-full">
                <Button className="bg-gold hover:bg-gold/90 text-headline w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
