"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface BentoGridProps {
  variant?: "first" | "second"
}

export default function BentoGrid({ variant = "first" }: BentoGridProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const firstGridItems = [
    {
      title: "Bucătării Personalizate",
      description: "Spații funcționale și elegante, adaptate perfect stilului dumneavoastră de viață.",
      image: "/images/kitchen-1.png",
      large: true,
    },
    {
      title: "Livinguri de Lux",
      description: "Mobilier care îmbină confortul cu estetica, pentru momente de relaxare perfecte.",
      image: "/images/living-1.png",
    },
    {
      title: "Soluții de Depozitare",
      description: "Sisteme inteligente care maximizează spațiul și păstrează ordinea.",
      image: "/images/storage.png",
    },
    {
      title: "Finisaje Premium",
      description: "Materiale de cea mai înaltă calitate și atenție la fiecare detaliu.",
      image: "/images/kitchen-2.png",
    },
    {
      title: "Design Integrat",
      description: "Soluții complete care transformă spațiul într-un ansamblu armonios.",
      image: "/images/living-2.png",
      large: true,
    },
  ]

  const secondGridItems = [
    {
      title: "Lemn Masiv",
      description: "Esențe rare și prețioase, prelucrate cu măiestrie pentru a crea piese durabile.",
      image: "/images/kitchen-3.png",
    },
    {
      title: "Iluminat Integrat",
      description: "Soluții de iluminat încorporate care creează atmosferă și funcționalitate.",
      image: "/images/living-2.png",
      large: true,
    },
    {
      title: "Accesorii Premium",
      description: "Sisteme și mecanisme de cea mai înaltă calitate pentru confort maxim.",
      image: "/images/storage.png",
    },
    {
      title: "Finisaje Metalice",
      description: "Accente metalice care adaugă eleganță și rafinament mobilierului.",
      image: "/images/kitchen-2.png",
    },
    {
      title: "Suprafețe Inovatoare",
      description: "Materiale moderne și rezistente pentru suprafețe impecabile.",
      image: "/images/kitchen-1.png",
      large: true,
    },
  ]

  const items = variant === "first" ? firstGridItems : secondGridItems

  return (
    <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={controls} className="bento-grid">
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariant} className={`bento-item group ${item.large ? "large" : ""}`}>
          <div className="relative h-full overflow-hidden rounded-xl">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-background mb-2">{item.title}</h3>
              <p className="text-background/80">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
