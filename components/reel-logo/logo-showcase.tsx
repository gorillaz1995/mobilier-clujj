"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./reel.css"; // Import the CSS file

export default function LogoShowcase() {
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Logo data with paths to public directory and website links
  const logos = [
    {
      id: 1,
      src: "/logosc/blum-logo.svg",
      alt: "Blum",
      href: "https://www.blum.com/ro/ro/",
    },
    {
      id: 2,
      src: "/logosc/gd-logo.webp",
      alt: "Global Design",
      href: "https://www.global-design.ro/en/",
    },
    {
      id: 3,
      src: "/logosc/haefele_logo.png",
      alt: "Hafele",
      href: "https://www.hafele.ro/ro/",
    },
    {
      id: 4,
      src: "/logosc/netfront-logo.svg",
      alt: "Nettfront",
      href: "https://nettfront.ro/",
    },
    {
      id: 5,
      src: "/logosc/regency-logo.png",
      alt: "Regency Company",
      href: "https://regencycompany.ro/",
    },
    {
      id: 6,
      src: "/logosc/sdk-logo.png",
      alt: "SDK Aluminiu",
      href: "https://www.sdkaluminiu.ro/",
    },
    {
      id: 7,
      src: "/logosc/blum-logo.svg",
      alt: "Blum",
      href: "https://www.blum.com/ro/ro/",
    },
    {
      id: 8,
      src: "/logosc/gd-logo.webp",
      alt: "Global Design",
      href: "https://www.global-design.ro/en/",
    },
    {
      id: 9,
      src: "/logosc/haefele_logo.png",
      alt: "Hafele",
      href: "https://www.hafele.ro/ro/",
    },
    {
      id: 10,
      src: "/logosc/netfront-logo.svg",
      alt: "Nettfront",
      href: "https://nettfront.ro/",
    },
  ];

  // Return a placeholder during SSR to prevent hydration issues
  if (!isClient) {
    return (
      <section className=" bg-integrated">
        <div className="container">
          <h2>Trusted by 69+ Clients</h2>
        </div>
      </section>
    );
  }

  // Create a duplicate set of logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-showcase bg-integrated">
      <div className="container">
        <h2 className="showcase-title font-sora">COLABORATORI</h2>

        <div className="logo-carousel-container">
          <div
            className="logo-carousel animate-scroll"
            // Add webkit-overflow-scrolling for smooth scrolling on iOS
            style={{
              WebkitOverflowScrolling: "touch",
              willChange: "transform", // Optimize for GPU acceleration
              transform: "translate3d(0,0,0)", // Force hardware acceleration
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="logo-item"
                // Ensure proper rendering on iOS
                style={{
                  WebkitTransform: "translateZ(0)",
                  transform: "translateZ(0)",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={64}
                  className="logo-image"
                  priority={index < 6} // Prioritize loading for first 6 logos
                  // Improve SVG rendering on iOS
                  style={{
                    WebkitBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    WebkitPerspective: 1000,
                    perspective: 1000,
                    maxWidth: "100%",
                    height: "auto",
                    display: "block", // Prevent inline display issues
                  }}
                  unoptimized={true} // Prevent Next.js from optimizing SVGs which can cause issues on iOS
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
