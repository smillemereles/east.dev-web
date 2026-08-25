import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollVideo from "@/assets/scroll-cinematic.mp4";

gsap.registerPlugin(ScrollTrigger);

export interface CircleScrollZoomProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  videoSrc?: string;
  className?: string;
}

/**
 * Sección de transición: un video se revela dentro de un círculo que crece con
 * el scroll, sobre un fondo con el logo de east.dev difuminado.
 */
export function CircleScrollZoom({
  title,
  subtitle,
  imageSrc,
  imageAlt = "east.dev",
  videoSrc = scrollVideo,
  className = "",
}: CircleScrollZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Evita que la barra de URL móvil dispare refreshes y saltos del pin
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const vw = () => pinRef.current?.clientWidth || window.innerWidth;
      const vh = () => pinRef.current?.clientHeight || window.innerHeight;

      // Radio inicial proporcional al lado menor: se ve bien en cualquier pantalla
      const startRadius = () => Math.max(70, Math.min(vw(), vh()) * 0.22);

      const setRadius = (r: number) => {
        if (maskRef.current) {
          maskRef.current.style.setProperty("--r", `${r}px`);
        }
      };

      setRadius(startRadius());

      const maxRadius = () => Math.hypot(vw(), vh()) * 0.8;

      const isMobile = window.matchMedia("(max-width: 640px)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=140%" : "+=220%",
          scrub: isMobile ? 0.6 : 1.1,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => setRadius(startRadius()),
          onUpdate: (self) => {
            const p = self.progress;
            const s = startRadius();
            setRadius(s + Math.pow(p, 2.1) * (maxRadius() - s));
          },
        },
      });

      tl.to(imageRef.current, { scale: isMobile ? 1.1 : 1.18, ease: "none" }, 0);
      tl.to(textRef.current, { opacity: 0, y: -40, ease: "none" }, 0);

      const onOrientation = () => ScrollTrigger.refresh();
      window.addEventListener("orientationchange", onOrientation);
      return () => window.removeEventListener("orientationchange", onOrientation);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-navy-dark ${className}`}
      aria-label="Transición cinematográfica"
    >
      <div
        ref={pinRef}
        className="relative h-[100svh] w-full overflow-hidden bg-navy-dark"
      >
        {/* Imagen de fondo revelada dentro del círculo */}
        <div
          ref={maskRef}
          className="absolute inset-0 will-change-[mask-image]"
          style={
            {
              "--r": "170px",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, #000 0, #000 var(--r), transparent calc(var(--r) + 1px))",
              maskImage:
                "radial-gradient(circle at 50% 50%, #000 0, #000 var(--r), transparent calc(var(--r) + 1px))",
              WebkitTransform: "translateZ(0)",
            } as React.CSSProperties
          }
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover will-change-transform blur-[40px] opacity-50"
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            decoding="async"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-navy-dark/20" />
        </div>

        {/* Texto */}
        <div
          ref={textRef}
          className="pointer-events-none absolute inset-x-0 bottom-16 z-10 px-6 text-center sm:bottom-20"
        >
          {title && (
            <h2 className="font-display text-3xl font-bold leading-tight text-snow sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-sm text-mist/80 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CircleScrollZoom;
