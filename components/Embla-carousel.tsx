"use client";

import React, {
  useCallback,
  useEffect,
  useState,
  ComponentPropsWithRef,
} from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Define carousel options
const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  dragFree: false,
  containScroll: "trimSnaps",
};

// Image paths in the public folder
const IMAGES = [
  "/caruselimg/image00033.jpeg",
  "/caruselimg/image00034.jpeg",
  "/caruselimg/image00035.jpeg",
  "/caruselimg/image00037.jpeg",
  "/caruselimg/image00039.jpeg",
  "/caruselimg/image00041.jpeg",
  "/caruselimg/image00045.jpeg",
  "/caruselimg/image00050.jpeg",
  "/caruselimg/image00051.jpeg",
  "/caruselimg/image00060.jpeg",
  "/caruselimg/image00064.jpeg",
  "/caruselimg/image00069.jpeg",
  "/caruselimg/image00071.jpeg",
  "/caruselimg/image00078.jpeg",
  // Add more images as needed
];

// Custom hook for previous and next buttons
const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// Custom hook for dot buttons
const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Custom hook for autoplay
const useAutoplay = (emblaApi: EmblaCarouselType | undefined) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    // Set up autoplay interval
    const autoplayInterval = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0); // Reset to first slide if at the end
      } else {
        emblaApi.scrollNext();
      }
    }, 5000); // 5 seconds interval

    // Clean up interval on unmount or when autoplay is stopped
    return () => clearInterval(autoplayInterval);
  }, [emblaApi, isPlaying]);

  const toggleAutoplay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return { isPlaying, toggleAutoplay };
};

// Button components
type PropType = ComponentPropsWithRef<"button">;

const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__dot" type="button" {...restProps}>
      {children}
    </button>
  );
};

const HelloWorldFullView = () => {
  // Initialize embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  // Initialize autoplay
  const { isPlaying } = useAutoplay(emblaApi);

  // Initialize navigation buttons
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Initialize dot indicators
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="relative py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center font-sora bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
          }}
        >
          Proiecte Recente
        </h2>
        <div
          className="mb-4 font-manrope bg-clip-text text-transparent py-5 lg:py-0 space-y-4"
          style={{
            backgroundImage:
              "radial-gradient(circle, #f1e2c5, #f2e5ca, #f3e8d0, #f5ead5, #f6eddb, #f7eedd, #f7f0e0, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2, #f8f1e2)",
          }}
        >
          <p>
            Fiecare proiect de mai jos a inceput cu o intrebare simpla: „Se
            poate face asa?" Uneori clientii vin cu o poza din Pinterest,
            alteori cu un desen rapid sau doar o idee povestita la telefon. In
            toate cazurile, punctul de plecare e acelasi:{" "}
            <strong
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              o nevoie personala
            </strong>
            .
          </p>

          <p>
            Mobila noastra nu urmeaza un sablon. Nu exista modele prestabilite,
            ci doar gustul si dorinta fiecarui client. Proiectele prezentate
            aici{" "}
            <strong
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              sunt repere, nu limite
            </strong>
            . E suficient sa ai o idee sau chiar doar o senzatie despre ce ti-ar
            placea.
          </p>

          <p>
            <strong
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, #e2c58c, #debd7c, #dab56c, #d6ad5c, #d2a54c, #d2a449, #d1a247, #d1a144, #d4a74f, #d6ac5a, #d9b264, #dbb76f)",
              }}
            >
              Noi preluam totul
            </strong>
            : masuratori, consultanta, materiale, executie. Iar rezultatul e
            mereu unic. Totul incepe cu o imagine. Sau cu un simplu „as vrea
            ceva de genul…"
          </p>
        </div>

        {/* Carousel container with navigation */}
        <div className="embla relative overflow-hidden max-w-6xl mx-auto h-[70vh] lg:h-[80vh]">
          <div className="embla__viewport h-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {IMAGES.map((src, index) => (
                <div
                  className="embla__slide flex-[0_0_100%] min-w-0 relative md:flex-[0_0_70%] lg:flex-[0_0_60%] h-full"
                  key={index}
                >
                  <div className="embla__slide__inner relative mx-2 overflow-hidden  h-full border-2 border-[#D4B254]">
                    <Image
                      src={src}
                      alt={`Mobilier personalizat proiect ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={index === 0}
                      quality={95}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="embla__dots flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-[#D4B254] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons moved below the carousel */}
        <div className="flex justify-center gap-4 mt-6">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {/* Add CSS for navigation buttons and autoplay animation */}
      <style jsx global>{`
        .embla__button {
          z-index: 1;
          color: #d4b254;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .embla__button:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: scale(1.1);
        }

        .embla__button:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .embla__button__svg {
          width: 65%;
          height: 65%;
        }

        @media (max-width: 768px) {
          .embla__button {
            width: 32px;
            height: 32px;
          }
        }

        /* Autoplay progress indicator */
        .embla::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 3%;
          width: 95%;
          height: 3px;
          background: linear-gradient(90deg, #d4b254, #f0d78a);
          animation: ${isPlaying
            ? "autoplayProgress 5s linear infinite"
            : "none"};
        }

        @keyframes autoplayProgress {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>
    </section>
  );
};

export default HelloWorldFullView;
