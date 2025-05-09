import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-white pt-16 pb-8 border-t-2 border-[#D4B254]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-white/80 mb-4">
              Consultanta completa, inclusa. Fie ca ai o schita, o poza de pe
              Pinterest sau doar o idee vaga, noi o transformam in mobilier
              functional si perfect adaptat spatiului tau. Orice forma, orice
              dimensiune, orice material
            </p>
          </div>

          <div>
            <h3
              className="bg-clip-text text-transparent text-xl font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Navigare
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Acasă
                </Link>
              </li>

              <li>
                <Link
                  href="/proiecte-mari"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Proiecte B2B
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="bg-clip-text text-transparent text-xl font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Servicii
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80">Mobilier Bucatarie</li>
              <li className="text-white/80">Mobilier Living</li>
              <li className="text-white/80">Mobilier Dormitor</li>
              <li className="text-white/80">Mobilier Baie</li>
              <li className="text-white/80">Mobilier Spatii Comerciale</li>
              <li className="text-white/80">Mobilier pentru birouri</li>
            </ul>
          </div>

          <div>
            <h3
              className="bg-clip-text text-transparent text-xl font-semibold mb-6"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">0743 894 994</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">dmodulo2021@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-white/80">
                  Str. Oasului 86-90 Bl. G Ap. 1, Cluj
                </span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100066768390766"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@mobilier.personal"
                className="text-white hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mobilier Personalizat Cluj.
              Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-white/60 text-sm hover:text-gold transition-colors"
              >
                Termeni și Condiții
              </Link>
              <Link
                href="#"
                className="text-white/60 text-sm hover:text-gold transition-colors"
              >
                Politica de Confidențialitate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
