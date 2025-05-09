"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhoneCall } from "lucide-react"

export default function Portofoliu() {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitchen-2.png"
            alt="Portofoliu mobilier personalizat"
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
              Portofoliul <span className="gold-accent">Nostru</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8">
              Explorați creațiile noastre și descoperiți posibilitățile nelimitate pentru mobilierul dumneavoastră
              personalizat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Povestea din Spatele Fiecărei Creații</h2>
            <p className="text-lg mb-12 text-muted">
              La Mobilier Personalizat Cluj, fiecare proiect începe cu o viziune și se transformă într-o operă de artă
              funcțională. Nu ne limităm la categorii predefinite precum bucătării sau dormitoare - abordarea noastră
              este complet personalizată, adaptată perfect nevoilor și dorințelor dumneavoastră.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Materiale Premium</h3>
                <p className="text-muted mb-4">
                  Utilizăm doar materiale de cea mai înaltă calitate, de la esențe rare de lemn la furniruri
                  exclusiviste, de la piatră naturală la metale prețioase. Puteți alege orice material vă doriți, iar
                  noi îl vom integra perfect în designul mobilierului dumneavoastră.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Lemn masiv din esențe rare și prețioase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Furniruri naturale de înaltă calitate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Piatră naturală: marmură, granit, cuarț</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Sticlă personalizată și oglinzi speciale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Accesorii metalice premium și sisteme de ultimă generație</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personalizare Nelimitată</h3>
                <p className="text-muted mb-4">
                  Nu există limite în ceea ce privește personalizarea. De la dimensiuni și forme, la culori și finisaje,
                  totul este adaptat perfect spațiului și stilului dumneavoastră. Fabrica noastră ne permite să realizăm
                  orice tip de mobilier, indiferent de complexitate.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Dimensiuni personalizate pentru orice spațiu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Paletă nelimitată de culori și finisaje</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Forme și design unic, adaptat nevoilor dumneavoastră</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Soluții de iluminat integrate și sisteme smart</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Accesorii și funcționalități personalizate</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-4 md:px-6 bg-gold/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proiecte Realizate</h2>
            <p className="text-lg text-muted">
              Fiecare proiect spune o poveste unică despre viziunea clientului și expertiza noastră. Explorați câteva
              dintre creațiile noastre recente.
            </p>
          </motion.div>

          <Tabs defaultValue="toate" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="toate">Toate</TabsTrigger>
              <TabsTrigger value="bucatarii">Bucătării</TabsTrigger>
              <TabsTrigger value="livinguri">Living</TabsTrigger>
              <TabsTrigger value="dormitoare">Dormitoare</TabsTrigger>
            </TabsList>

            <TabsContent value="toate">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    src: "/images/kitchen-1.png",
                    title: "Bucătărie Modernă",
                    desc: "Combinație de materiale premium și iluminat LED",
                  },
                  {
                    src: "/images/kitchen-2.png",
                    title: "Bucătărie de Lux",
                    desc: "Finisaje metalice și suprafețe mate",
                  },
                  {
                    src: "/images/kitchen-3.png",
                    title: "Bucătărie Funcțională",
                    desc: "Sisteme de organizare inteligente",
                  },
                  {
                    src: "/images/living-1.png",
                    title: "Living Contemporan",
                    desc: "Design minimalist cu accente de lemn",
                  },
                  {
                    src: "/images/living-2.png",
                    title: "Living Integrat",
                    desc: "Spațiu multifuncțional cu mobilier personalizat",
                  },
                  {
                    src: "/images/storage.png",
                    title: "Soluții de Depozitare",
                    desc: "Sisteme glisante și accesorii premium",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={projectItem} className="group">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="bucatarii">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    src: "/images/kitchen-1.png",
                    title: "Bucătărie Modernă",
                    desc: "Combinație de materiale premium și iluminat LED",
                  },
                  {
                    src: "/images/kitchen-2.png",
                    title: "Bucătărie de Lux",
                    desc: "Finisaje metalice și suprafețe mate",
                  },
                  {
                    src: "/images/kitchen-3.png",
                    title: "Bucătărie Funcțională",
                    desc: "Sisteme de organizare inteligente",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={projectItem} className="group">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="livinguri">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    src: "/images/living-1.png",
                    title: "Living Contemporan",
                    desc: "Design minimalist cu accente de lemn",
                  },
                  {
                    src: "/images/living-2.png",
                    title: "Living Integrat",
                    desc: "Spațiu multifuncțional cu mobilier personalizat",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={projectItem} className="group">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="dormitoare">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    src: "/images/storage.png",
                    title: "Soluții de Depozitare",
                    desc: "Sisteme glisante și accesorii premium",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={projectItem} className="group">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Procesul Nostru</h2>
            <p className="text-lg text-muted">
              De la concept la realizare, fiecare etapă este gestionată cu atenție și profesionalism.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-headline text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Consultare și Design</h3>
                <p className="text-muted">
                  Discutăm despre viziunea, nevoile și preferințele dumneavoastră. Designerii noștri creează schițe și
                  propuneri 3D pentru a vizualiza proiectul.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-headline text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Producție</h3>
                <p className="text-muted">
                  Fabrica noastră produce fiecare piesă cu precizie și atenție la detalii, utilizând tehnologii avansate
                  și meșteșugari talentați.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-headline text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Instalare și Finisare</h3>
                <p className="text-muted">
                  Echipa noastră instalează mobilierul cu maximă grijă, asigurându-se că fiecare detaliu este perfect și
                  spațiul este gata de utilizare.
                </p>
              </motion.div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pregătiți să Creați Ceva Unic?</h2>
            <p className="text-xl mb-8 text-white/80">
              Contactați-ne pentru a discuta despre proiectul dumneavoastră și pentru a programa o consultație gratuită.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-headline">
              <PhoneCall className="mr-2 h-5 w-5" />
              Contactați-ne acum
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
