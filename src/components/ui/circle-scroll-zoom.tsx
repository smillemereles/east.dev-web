import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface CircleScrollZoomProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  videoSrc: string;
  posterSrc?: string;
  className?: string;
}

/**
 * Sección de transición: un video se revela dentro de un círculo que crece
 * con el scroll hasta ocupar toda la pantalla, llevando a la siguiente sección.
 */
export function CircleScrollZoom({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  className = "",
}: CircleScrollZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }

    const ctx = gsap.context(() => {
      const startRadius = () =>
        window.innerWidth < 640 ? 90 : window.innerWidth < 1024 ? 130 : 170;

      const setRadius = (r: number) => {
        if (maskRef.current) {
          maskRef.current.style.setProperty("--r", `${r}px`);
        }
      };

      setRadius(startRadius());

      const maxRadius = () =>
        Math.hypot(window.innerWidth, window.innerHeight) * 0.75;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1.1,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const s = startRadius();
            setRadius(s + Math.pow(p, 2.1) * (maxRadius() - s));
          },
        },
      });

      tl.to(videoRef.current, { scale: 1.18, ease: "none" }, 0);
      tl.to(textRef.current, { opacity: 0, y: -40, ease: "none" }, 0);
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
        className="relative h-screen w-full overflow-hidden bg-navy-dark"
      >
        {/* Video revelado dentro del círculo */}
        <div
          ref={maskRef}
          className="absolute inset-0"
          style={
            {
              "--r": "170px",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, #000 0, #000 var(--r), transparent calc(var(--r) + 1px))",
              maskImage:
                "radial-gradient(circle at 50% 50%, #000 0, #000 var(--r), transparent calc(var(--r) + 1px))",
            } as React.CSSProperties
          }
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover will-change-transform"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/30" />
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
