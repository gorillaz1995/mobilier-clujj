"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight } from "lucide-react"
import BentoGrid from "@/components/bento-grid"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/living-1.png"
            alt="Mobilier personalizat de lux"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-headline mb-6">
              Mobilier Personalizat <span className="gold-accent">de Lux</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8">
              Creăm piese unice, adaptate perfect stilului și nevoilor dumneavoastră. Materiale premium, design
              exclusivist și execuție impecabilă.
            </p>
            <Button size="lg" className="gold-button text-background hover:text-background/90">
              <PhoneCall className="mr-2 h-5 w-5" />
              Contactați-ne acum
            </Button>
          </motion.div>
        </div>
      </section>

      {/* First Bento Grid */}
      <section className="py-20 px-4 md:px-6">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creații Personalizate pentru Fiecare Spațiu</h2>
            <p className="text-lg text-muted">
              Fiecare piesă de mobilier este concepută pentru a se integra perfect în spațiul dumneavoastră, reflectând
              personalitatea și stilul de viață al clientului.
            </p>
          </motion.div>

          <BentoGrid />
        </div>
      </section>

      {/* Second Bento Grid */}
      <section className="py-20 px-4 md:px-6 bg-gold/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Materiale Premium și Atenție la Detalii</h2>
            <p className="text-lg text-muted">
              Utilizăm doar cele mai bune materiale și acordăm o atenție deosebită fiecărui detaliu, pentru a crea piese
              de mobilier care rezistă testului timpului.
            </p>
          </motion.div>

          <BentoGrid variant="second" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-headline text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Transformăm Viziunea Dumneavoastră în Realitate</h2>
            <p className="text-xl mb-10 text-white/80">
              Indiferent de complexitatea proiectului, echipa noastră de experți vă stă la dispoziție pentru a crea
              mobilierul perfect pentru casa sau afacerea dumneavoastră.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-headline">
                Solicitați o ofertă
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Vizualizați portofoliul
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
