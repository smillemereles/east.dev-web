import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollVideoAsset from "@/assets/scroll-cinematic.mp4.asset.json";

gsap.registerPlugin(ScrollTrigger);

export interface CircleScrollZoomProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  videoSrc?: string;
  className?: string;
}

// Diámetro base del círculo en px; la animación solo escala con transform (GPU)
const BASE_DIAMETER = 240;

/**
 * Sección de transición: un video se revela dentro de un círculo que crece con
 * el scroll, sobre un fondo con el logo de east.dev difuminado.
 *
 * El círculo se anima con `transform: scale()` (compositado por GPU) en lugar
 * de una máscara radial repintada por frame, lo que lo hace fluido en móviles.
 */
export function CircleScrollZoom({
  title,
  subtitle,
  imageSrc,
  imageAlt = "east.dev",
  videoSrc = scrollVideoAsset.url,
  className = "",
}: CircleScrollZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
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
      const maxRadius = () => Math.hypot(vw(), vh()) * 0.8;

      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const endZoom = isMobile ? 1.08 : 1.16;

      const render = (p: number) => {
        if (!circleRef.current || !innerRef.current) return;
        const s0 = startRadius();
        const r = s0 + Math.pow(p, 2.1) * (maxRadius() - s0);
        const s = r / (BASE_DIAMETER / 2);
        // El video se contra-escala para mantenerse fijo, con un leve zoom final
        const zoom = (1 + (endZoom - 1) * p) / s;
        gsap.set(circleRef.current, { scale: s });
        gsap.set(innerRef.current, { scale: zoom });
      };

      gsap.set([circleRef.current, innerRef.current], {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center center",
        force3D: true,
      });
      render(0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: isMobile ? "+=140%" : "+=220%",
          scrub: isMobile ? 0.5 : 1.1,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => render(0),
          onUpdate: (self) => render(self.progress),
        },
      });

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
        {/* Fondo: logo east.dev difuminado */}
        <img
          className="absolute inset-0 h-full w-full object-contain p-10 blur-[40px] opacity-40"
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          decoding="async"
        />

        {/* Círculo escalado por GPU que revela el video */}
        <div
          ref={circleRef}
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-full will-change-transform"
          style={{
            width: BASE_DIAMETER,
            height: BASE_DIAMETER,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Interior del tamaño del viewport, contra-escalado */}
          <div
            ref={innerRef}
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{
              width: "100vw",
              height: "100svh",
              transform: "translate(-50%, -50%)",
            }}
          >
            <video
              className="h-full w-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-navy-dark/20" />
          </div>
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
