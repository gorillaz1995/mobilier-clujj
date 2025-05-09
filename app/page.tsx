"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";
import HelloWorldFullView from "@/components/Embla-carousel";
import Animatedfurniture from "@/components/Animatedfurniture";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Initial check
      setIsMobile(window.innerWidth < 768);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={
              isMobile
                ? "/images-hp/hero-clujj.webp"
                : "/images-hp/hero-image.webp"
            }
            alt="Mobilier personalizat de lux"
            fill
            className={`object-cover ${
              isMobile ? "brightness-[1]" : "brightness-[0.9]"
            } md:w-full w-[40%] mx-auto`}
            priority
            quality={90}
            sizes="(max-width: 768px) 90vw, 100vw"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-9xl text-headline mb-6 font-sora font-extralight pb-5">
              <span className="inline-block px-2 py-1  ">
                Mobilier Personalizat
              </span>{" "}
              <span className="font-manrope font-bold text-2xl lg:text-4xl block pt-4 px-2 py-1 backdrop-blur-[2px] bg-[#D4B254]/2  mt-2">
                Visele dumneavoastra prind contur in mainile noastre.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-black mb-8 font-sora font-medium">
              <span className="inline-block px-2 py-1 backdrop-blur-[2px] bg-[#D4B254]/30">
                Masuram, proiectam, executam si montam rapid orice piesa de
                mobilier – exact cum doriti.
              </span>
              <span className="inline-block px-2 py-1 backdrop-blur-[2px] bg-[#D4B254]/30">
                Aveti o idee? Un telefon si ne apucam de treaba.
              </span>
            </p>
            <a href="tel:+40743894994">
              <Button
                size="lg"
                className="gold-button text-background hover:text-background/90"
                style={{
                  background:
                    "linear-gradient(45deg, #D4B254, #f0d78a, #D4B254)",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 3s ease-in-out infinite",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(212, 178, 84, 0.5)",
                }}
              >
                <style jsx global>{`
                  @keyframes shimmer {
                    0% {
                      background-position: 0% 50%;
                    }
                    50% {
                      background-position: 100% 50%;
                    }
                    100% {
                      background-position: 0% 50%;
                    }
                  }
                  .gold-button::after {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 20%;
                    height: 200%;
                    background: rgba(255, 255, 255, 0.2);
                    transform: rotate(30deg);
                    animation: shine 4s infinite linear;
                  }
                  @keyframes shine {
                    0% {
                      transform: translateX(-100%) rotate(30deg);
                    }
                    100% {
                      transform: translateX(500%) rotate(30deg);
                    }
                  }
                `}</style>
                <PhoneCall className="mr-2 h-5 w-5" />
                Contactati-ne acum
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-6 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center font-sora bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Cine suntem?
            </h2>
            <div className="space-y-6 font-manrope">
              {/* First paragraph */}
              <p
                className="text-lg bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                }}
              >
                Suntem o echipa stabila si implicata din Cluj, cu propria
                fabrica si experienta in livrarea proiectelor de mobilier la
                cheie. Stim ritmul orasului si cat de valoros este timpul
                dumneavoastra – de aceea raspundem prompt, discutam concret si
                oferim estimari reale in doar cateva minute.
              </p>

              {/* Second paragraph */}
              <p
                className="text-lg bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                }}
              >
                Lucram deseori cu clienti care vor solutii rapide si clare, fara
                batai de cap. Ne ocupam de tot: masuratori, proiectare,
                materiale, executie, montaj. Uneori primim o poza, alteori doar
                o idee in doua cuvinte – si stim sa transformam asta in mobilier
                perfect integrat in spatiul si stilul fiecaruia.
              </p>

              {/* Third paragraph */}
              <p
                className="text-lg bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                }}
              >
                Pentru noi, fiecare piesa spune o poveste despre incredere,
                atentie si seriozitate. Restul e treaba noastra.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <HelloWorldFullView />

      {/* Story Section */}
      <section className="pb-20 pt-40 px-4 md:px-6 ">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center font-sora bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Povestea din Spatele Fiecărei Creații
            </h2>
            <p
              className="mb-4 font-manrope bg-clip-text text-transparent py-5 lg:py-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
              }}
            >
              La Mobilier Personalizat Cluj, fiecare proiect începe cu o viziune
              și se transformă într-o operă de artă funcțională. Nu ne limităm
              la categorii predefinite precum bucătării sau dormitoare -
              abordarea noastră este complet personalizată, adaptată perfect
              nevoilor și dorințelor dumneavoastră.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-8  font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
                  }}
                >
                  Materiale Premium
                </h3>
                <p
                  className="mb-4 font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                  }}
                >
                  Utilizăm doar materiale de cea mai înaltă calitate, de la
                  esențe rare de lemn la furniruri exclusiviste, de la piatră
                  naturală la metale prețioase. Puteți alege orice material vă
                  doriți, iar noi îl vom integra perfect în designul
                  mobilierului dumneavoastră.
                </p>
                <ul className="space-y-2 text-muted font-manrope">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Lemn masiv din esențe rare și prețioase
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Furniruri naturale de înaltă calitate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      {" "}
                      Piatră naturală: marmură, granit, cuarț
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Sticlă personalizată și oglinzi speciale
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Accesorii metalice premium și sisteme de ultimă generație
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-8  font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
                  }}
                >
                  Personalizare Nelimitată
                </h3>
                <p
                  className="mb-4 font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                  }}
                >
                  Nu există limite în ceea ce privește personalizarea. De la
                  dimensiuni și forme, la culori și finisaje, totul este adaptat
                  perfect spațiului și stilului dumneavoastră. Fabrica noastră
                  ne permite să realizăm orice tip de mobilier, indiferent de
                  complexitate.
                </p>
                <ul className="space-y-2 text-muted font-manrope">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Dimensiuni personalizate pentru orice spațiu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Paletă nelimitată de culori și finisaje
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Forme și design unic, adaptat nevoilor dumneavoastră
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Soluții de iluminat integrate și sisteme smart
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span
                      className="mb-4 font-manrope bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
                      }}
                    >
                      Accesorii și funcționalități personalizate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 font-sora bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Procesul Nostru Eficient
            </h2>
            <p
              className="text-lg mb-4 font-manrope bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
              }}
            >
              Abordarea noastră structurată asigură livrarea la timp și
              implementarea fără probleme a proiectelor de amploare.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto timeline-container relative">
            <style jsx global>{`
              .timeline-container::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
                width: 2px;
                background: linear-gradient(to bottom, #d4b254, #f0d78a);
                transform: translateX(-50%);
              }

              @media (max-width: 768px) {
                .timeline-container::before {
                  left: 20px;
                }
              }

              .timeline-item {
                position: relative;
                margin-bottom: 3rem;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
              }

              .timeline-item::after {
                content: "";
                position: absolute;
                top: 1.5rem;
                left: 50%;
                width: 16px;
                height: 16px;
                background: #d4b254;
                border-radius: 50%;
                transform: translateX(-50%);
                box-shadow: 0 0 10px rgba(212, 178, 84, 0.5);
              }

              @media (max-width: 768px) {
                .timeline-item::after {
                  left: 20px;
                }

                .timeline-item .timeline-content {
                  margin-left: 2.5rem !important;
                }
              }
            `}</style>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="timeline-content bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[#D4B254]/20 hover:border-[#D4B254]/50 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
                  }}
                >
                  1. Consultare și Analiză
                </h3>
                <p
                  className="font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #333333, #444444, #555555)",
                  }}
                >
                  Discutăm despre cerințele proiectului, analizăm specificațiile
                  și stabilim obiectivele. Evaluăm spațiile și identificăm
                  soluțiile optime.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="timeline-content ml-auto bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[#D4B254]/20 hover:border-[#D4B254]/50 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
                  }}
                >
                  2. Proiectare și Planificare
                </h3>
                <p
                  className="font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #333333, #444444, #555555)",
                  }}
                >
                  Echipa noastră de designeri creează planuri detaliate și
                  vizualizări 3D. Stabilim un calendar clar și un buget precis
                  pentru întregul proiect.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="timeline-content bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[#D4B254]/20 hover:border-[#D4B254]/50 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
                  }}
                >
                  3. Producție Eficientă
                </h3>
                <p
                  className="font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #333333, #444444, #555555)",
                  }}
                >
                  Fabrica noastră produce toate elementele necesare cu precizie
                  și eficiență. Controlul calității este riguros în fiecare
                  etapă a procesului.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="timeline-content ml-auto bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[#D4B254]/20 hover:border-[#D4B254]/50 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
                  }}
                >
                  4. Livrare și Instalare Rapidă
                </h3>
                <p
                  className="font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #333333, #444444, #555555)",
                  }}
                >
                  Coordonăm logistica și instalarea pentru a minimiza
                  perturbările. Echipele noastre lucrează eficient pentru a
                  respecta termenele stabilite.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="timeline-content bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[#D4B254]/20 hover:border-[#D4B254]/50 transition-all duration-300"
              >
                <h3
                  className="text-xl font-semibold mb-2 font-sora bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
                  }}
                >
                  5. Verificare și Suport Continuu
                </h3>
                <p
                  className="font-manrope bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #333333, #444444, #555555)",
                  }}
                >
                  Verificăm fiecare detaliu pentru a asigura satisfacția
                  completă. Oferim suport și servicii de întreținere după
                  finalizarea proiectului.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Animatedfurniture />

      {/* Final CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #d2a54c, #d2a449, #d1a247, #d1a144)",
              }}
            >
              Aveti un proiect in minte?
            </h2>
            <p className="text-xl mb-10 text-white/80">
              Trimiteti-ne o poza cu ce va doriti sa faceti. In 5 minute aveti
              un pret estimativ pentru proiectul dumneavoastra!
            </p>
            <div className="justify-center">
              <a href="tel:+40743894994">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-headline"
                >
                  Solicitați o ofertă
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
