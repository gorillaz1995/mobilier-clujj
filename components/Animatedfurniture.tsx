"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Animatedfurniture() {
  const [animationStep, setAnimationStep] = useState(0);

  // Auto-advance the animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // SVG variants for each furniture piece
  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Micro-animation variants
  const microAnimationVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
    wiggle: {
      rotate: [-1, 1, -1],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  };

  return (
    <main className="flex  flex-col items-center">
      <section className="w-full bg-gradient-to-r from-gold/80 to-gold py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extralight text-headline text-center mb-8 font-sora">
            De la concept la realitate
          </h1>

          <div className="relative h-[400px] w-full bg-background/20 rounded-xl backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px]">
              {/* Lines */}
              {animationStep === 0 && (
                <motion.svg
                  viewBox="0 0 300 300"
                  className="w-full h-full"
                  initial="initial"
                  animate="visible"
                >
                  <motion.line
                    x1="50"
                    y1="50"
                    x2="250"
                    y2="50"
                    stroke="white"
                    strokeWidth="4"
                    variants={lineVariants}
                  />
                  <motion.line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="250"
                    stroke="white"
                    strokeWidth="4"
                    variants={lineVariants}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.line
                    x1="250"
                    y1="50"
                    x2="250"
                    y2="250"
                    stroke="white"
                    strokeWidth="4"
                    variants={lineVariants}
                    transition={{ delay: 0.4 }}
                  />
                  <motion.line
                    x1="50"
                    y1="250"
                    x2="250"
                    y2="250"
                    stroke="white"
                    strokeWidth="4"
                    variants={lineVariants}
                    transition={{ delay: 0.6 }}
                  />
                  <motion.line
                    x1="100"
                    y1="100"
                    x2="200"
                    y2="100"
                    stroke="white"
                    strokeWidth="3"
                    variants={lineVariants}
                    transition={{ delay: 0.8 }}
                  />
                  <motion.line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="200"
                    stroke="white"
                    strokeWidth="3"
                    variants={lineVariants}
                    transition={{ delay: 1.0 }}
                  />
                  <motion.line
                    x1="200"
                    y1="100"
                    x2="200"
                    y2="200"
                    stroke="white"
                    strokeWidth="3"
                    variants={lineVariants}
                    transition={{ delay: 1.2 }}
                  />
                  <motion.line
                    x1="100"
                    y1="200"
                    x2="200"
                    y2="200"
                    stroke="white"
                    strokeWidth="3"
                    variants={lineVariants}
                    transition={{ delay: 1.4 }}
                  />
                </motion.svg>
              )}

              {/* Drawer */}
              {animationStep === 1 && (
                <motion.svg
                  viewBox="0 0 300 300"
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Drawer body */}
                  <motion.rect
                    x="50"
                    y="100"
                    width="200"
                    height="150"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Drawer top */}
                  <motion.rect
                    x="50"
                    y="80"
                    width="200"
                    height="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />

                  {/* Drawer legs */}
                  <motion.line
                    x1="70"
                    y1="250"
                    x2="70"
                    y2="270"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                  <motion.line
                    x1="230"
                    y1="250"
                    x2="230"
                    y2="270"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />

                  {/* Drawer handles */}
                  <motion.circle
                    cx="150"
                    cy="175"
                    r="8"
                    fill="white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                      transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                  />

                  {/* Drawer divisions */}
                  <motion.line
                    x1="50"
                    y1="175"
                    x2="250"
                    y2="175"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.svg>
              )}

              {/* Drawer opening/sliding */}
              {animationStep === 2 && (
                <motion.svg
                  viewBox="0 0 300 300"
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Drawer body */}
                  <motion.rect
                    x="50"
                    y="100"
                    width="200"
                    height="150"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                  />

                  {/* Drawer top */}
                  <motion.rect
                    x="50"
                    y="80"
                    width="200"
                    height="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                  />

                  {/* Drawer legs */}
                  <motion.line
                    x1="70"
                    y1="250"
                    x2="70"
                    y2="270"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <motion.line
                    x1="230"
                    y1="250"
                    x2="230"
                    y2="270"
                    stroke="white"
                    strokeWidth="4"
                  />

                  {/* Drawer divisions */}
                  <motion.line
                    x1="50"
                    y1="175"
                    x2="250"
                    y2="175"
                    stroke="white"
                    strokeWidth="2"
                    opacity={0.7}
                  />

                  {/* Drawer opening animation */}
                  <motion.rect
                    x="50"
                    y="100"
                    width="200"
                    height="75"
                    fill="rgba(255, 255, 255, 0.1)"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ x: 0 }}
                    animate={{ x: 100 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: 1,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Drawer handle */}
                  <motion.circle
                    cx="150"
                    cy="137"
                    r="8"
                    fill="white"
                    initial={{ x: 0 }}
                    animate={{ x: 100 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: 1,
                      repeatType: "reverse",
                    }}
                    variants={{
                      wiggle: {
                        rotate: [0, 10, -10, 10, 0],
                        transition: {
                          duration: 0.5,
                          repeat: 1,
                          repeatType: "reverse",
                        },
                      },
                    }}
                    whileInView="wiggle"
                  />
                </motion.svg>
              )}

              {/* Chair */}
              {animationStep === 3 && (
                <motion.svg
                  viewBox="0 0 300 300"
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Chair seat */}
                  <motion.rect
                    x="75"
                    y="180"
                    width="150"
                    height="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Chair back */}
                  <motion.rect
                    x="75"
                    y="80"
                    width="150"
                    height="100"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />

                  {/* Chair legs */}
                  <motion.line
                    x1="85"
                    y1="200"
                    x2="85"
                    y2="250"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                  <motion.line
                    x1="215"
                    y1="200"
                    x2="215"
                    y2="250"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />

                  {/* Chair back details */}
                  <motion.line
                    x1="100"
                    y1="90"
                    x2="100"
                    y2="170"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                  <motion.line
                    x1="125"
                    y1="90"
                    x2="125"
                    y2="170"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  />
                  <motion.line
                    x1="150"
                    y1="90"
                    x2="150"
                    y2="170"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                  <motion.line
                    x1="175"
                    y1="90"
                    x2="175"
                    y2="170"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  />
                  <motion.line
                    x1="200"
                    y1="90"
                    x2="200"
                    y2="170"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 0.7, pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  />
                </motion.svg>
              )}

              {/* Wardrobe */}
              {animationStep === 0 && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <motion.svg viewBox="0 0 300 300" className="w-full h-full">
                    {/* Wardrobe body */}
                    <motion.rect
                      x="50"
                      y="50"
                      width="200"
                      height="220"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ duration: 1 }}
                    />

                    {/* Wardrobe doors division */}
                    <motion.line
                      x1="150"
                      y1="50"
                      x2="150"
                      y2="270"
                      stroke="white"
                      strokeWidth="4"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Wardrobe handles */}
                    <motion.circle
                      cx="135"
                      cy="160"
                      r="5"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    <motion.circle
                      cx="165"
                      cy="160"
                      r="5"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />

                    {/* Wardrobe top decoration */}
                    <motion.path
                      d="M 30 50 L 50 30 L 250 30 L 270 50"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                    />
                  </motion.svg>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Animatedfurniture;
