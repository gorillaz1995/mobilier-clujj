"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProiecteMari() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "/images/kitchen-1.png",
      title: "Mobilier pentru Școli",
      description: "Soluții durabile și funcționale pentru instituții de învățământ",
    },
    {
      image: "/images/living-1.png",
      title: "Mobilier pentru Primării",
      description: "Mobilier reprezentativ pentru instituții publice",
    },
    {
      image: "/images/kitchen-2.png",
      title: "Mobilier pentru Hoteluri",
      description: "Soluții complete pentru unități de cazare",
    },
  ]

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 image-carousel">
          <div ref={carouselRef} className="carousel-container h-full">
            {slides.map((slide, index) => (
              <div key={index} className="carousel-item h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-[0.85]"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-background/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-headline mb-6">{slide.title}</h1>
                    <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-headline mb-6">
              Proiecte <span className="gold-accent">de Amploare</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8">
              Soluții complete de mobilier pentru proiecte mari și instituții
            </p>
            <Button size="lg" className="gold-button text-background hover:text-background/90">
              <PhoneCall className="mr-2 h-5 w-5" />
              Solicitați o ofertă
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Soluții Complete pentru Proiecte Mari</h2>
            <p className="text-lg mb-8 text-muted">
              Mobilier Personalizat Cluj oferă soluții complete pentru proiecte de amploare, de la instituții publice și
              educaționale, până la hoteluri și spații comerciale. Cu o capacitate de producție extinsă și o echipă
              experimentată, suntem pregătiți să gestionăm proiecte de orice dimensiune, respectând termenele și
              bugetele stabilite.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Capacitate și Expertiză</h3>
                <p className="text-muted mb-4">
                  Fabrica noastră modernă și echipa de specialiști ne permit să gestionăm proiecte complexe și de mare
                  amploare, asigurând calitate și precizie în fiecare etapă.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Capacitate de producție extinsă</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Echipă dedicată pentru proiecte mari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Gestionare eficientă a resurselor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Respectarea termenelor și bugetelor</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Tipuri de Proiecte</h3>
                <p className="text-muted mb-4">
                  Experiența noastră acoperă o gamă largă de proiecte instituționale și comerciale, fiecare beneficiind
                  de aceeași atenție la detalii și calitate premium.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Instituții de învățământ: școli, universități</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Instituții publice: primării, consilii județene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Unități de cazare: hoteluri, pensiuni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Spații comerciale: magazine, showroom-uri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Spații corporate: birouri, săli de conferințe</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-6 bg-gold/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Procesul Nostru Eficient</h2>
            <p className="text-lg text-muted">
              Abordarea noastră structurată asigură livrarea la timp și implementarea fără probleme a proiectelor de
              amploare.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto timeline-container">
            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-content"
              >
                <h3 className="text-xl font-semibold mb-2">1. Consultare și Analiză</h3>
                <p className="text-muted">
                  Discutăm despre cerințele proiectului, analizăm specificațiile și stabilim obiectivele. Evaluăm
                  spațiile și identificăm soluțiile optime.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-content"
              >
                <h3 className="text-xl font-semibold mb-2">2. Proiectare și Planificare</h3>
                <p className="text-muted">
                  Echipa noastră de designeri creează planuri detaliate și vizualizări 3D. Stabilim un calendar clar și
                  un buget precis pentru întregul proiect.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-content"
              >
                <h3 className="text-xl font-semibold mb-2">3. Producție Eficientă</h3>
                <p className="text-muted">
                  Fabrica noastră produce toate elementele necesare cu precizie și eficiență. Controlul calității este
                  riguros în fiecare etapă a procesului.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-content"
              >
                <h3 className="text-xl font-semibold mb-2">4. Livrare și Instalare Rapidă</h3>
                <p className="text-muted">
                  Coordonăm logistica și instalarea pentru a minimiza perturbările. Echipele noastre lucrează eficient
                  pentru a respecta termenele stabilite.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-content"
              >
                <h3 className="text-xl font-semibold mb-2">5. Verificare și Suport Continuu</h3>
                <p className="text-muted">
                  Verificăm fiecare detaliu pentru a asigura satisfacția completă. Oferim suport și servicii de
                  întreținere după finalizarea proiectului.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Întrebări Frecvente</h2>
            <p className="text-lg text-muted">Răspunsuri la cele mai comune întrebări despre proiectele de amploare</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  Care este capacitatea de producție pentru proiecte mari?
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  Fabrica noastră are o capacitate de producție extinsă, putând gestiona proiecte care necesită sute de
                  piese de mobilier. Planificăm eficient resursele pentru a asigura livrarea la timp, indiferent de
                  amploarea proiectului.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Cât durează implementarea unui proiect de amploare?
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  Durata variază în funcție de complexitatea și dimensiunea proiectului. În general, pentru proiecte
                  instituționale, procesul complet durează între 4-12 săptămâni, de la consultarea inițială până la
                  instalarea finală. Oferim întotdeauna un calendar detaliat în faza de planificare.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Oferiți garanție pentru proiectele de amploare?
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  Da, toate proiectele noastre beneficiază de garanție extinsă. Pentru proiectele instituționale și
                  comerciale, oferim garanție de 5 ani pentru structură și 2 ani pentru accesorii și mecanisme. De
                  asemenea, asigurăm servicii de întreținere și suport post-implementare.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Cum gestionați bugetele pentru proiecte mari?
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  Lucrăm transparent cu bugetele stabilite. În faza de planificare, oferim o estimare detaliată a
                  costurilor, iar pe parcursul proiectului, menținem o comunicare constantă privind orice potențială
                  ajustare. Experiența noastră ne permite să optimizăm costurile fără a compromite calitatea.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Puteți gestiona proiecte în afara județului Cluj?
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  Absolut. Avem experiență în implementarea proiectelor în toată România. Echipele noastre de instalare
                  sunt mobile și coordonăm eficient logistica pentru a asigura livrarea și montajul la standardele
                  noastre înalte, indiferent de locație.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-headline text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pregătiți pentru Următorul Proiect Mare?</h2>
            <p className="text-xl mb-8 text-white/80">
              Contactați-ne pentru a discuta despre cerințele dumneavoastră și pentru a programa o consultație.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-headline">
              <PhoneCall className="mr-2 h-5 w-5" />
              Solicitați o ofertă personalizată
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
