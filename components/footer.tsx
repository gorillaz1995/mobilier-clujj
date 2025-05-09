import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-headline text-white pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Mobilier Personalizat Cluj"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-4">
              Creăm mobilier personalizat de lux pentru case și proiecte de amploare. Materiale premium, design
              exclusivist și execuție impecabilă.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Navigare</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/portofoliu" className="text-white/80 hover:text-gold transition-colors">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link href="/proiecte-mari" className="text-white/80 hover:text-gold transition-colors">
                  Proiecte Mari
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-gold transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Servicii</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Mobilier Bucătărie</li>
              <li className="text-white/80">Mobilier Living</li>
              <li className="text-white/80">Mobilier Dormitor</li>
              <li className="text-white/80">Mobilier Baie</li>
              <li className="text-white/80">Mobilier Comercial</li>
              <li className="text-white/80">Mobilier Instituțional</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">+40 700 000 000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">contact@mobilier-cluj.ro</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">Str. Fabricii 123, Cluj-Napoca, România</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mobilier Personalizat Cluj. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/60 text-sm hover:text-gold transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="#" className="text-white/60 text-sm hover:text-gold transition-colors">
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
