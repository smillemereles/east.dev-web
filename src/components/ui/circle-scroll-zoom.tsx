import React, { useEffect, useRef } from "react";
import scrollVideoAsset from "@/assets/scroll-cinematic.mp4.asset.json";

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
 * En vez de usar el pin de ScrollTrigger (que en iOS Safari salta con la barra
 * de URL), usamos `position: sticky` nativo + un listener de scroll en rAF.
 * Todo se anima con `transform: scale()` compositado por GPU.
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
  const stickyRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    const circle = circleRef.current;
    const inner = innerRef.current;
    if (!container || !sticky || !circle || !inner) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let target = 0;
    let current = 0;
    let raf = 0;

    const render = (p: number) => {
      const vw = sticky.clientWidth || window.innerWidth;
      const vh = sticky.clientHeight || window.innerHeight;
      const isMobile = vw < 640;
      const endZoom = isMobile ? 1.06 : 1.14;

      const s0 = Math.max(40, Math.min(vw, vh) * 0.11);
      const maxR = Math.hypot(vw, vh) * 0.75;
      const r = s0 + Math.pow(p, 2) * (maxR - s0);
      const s = r / (BASE_DIAMETER / 2);
      const zoom = (1 + (endZoom - 1) * p) / s;

      const fade = Math.min(1, p / 0.08) * Math.min(1, (1 - p) / 0.06 + 0.4);
      circle.style.opacity = String(Math.max(0, Math.min(1, fade)));
      circle.style.transform = `translate3d(-50%, -50%, 0) scale(${s})`;
      inner.style.transform = `translate3d(-50%, -50%, 0) scale(${zoom})`;
      if (textRef.current) {
        textRef.current.style.opacity = String(Math.max(0, 1 - p * 2.2));
        textRef.current.style.transform = `translate3d(0, ${-40 * p}px, 0)`;
      }
    };

    const computeTarget = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - sticky.clientHeight;
      if (scrollable <= 0) return 0;
      return Math.min(1, Math.max(0, -rect.top / scrollable));
    };

    const tick = () => {
      // Suavizado (lerp) para que el scroll con inercia de iOS no se vea a saltos
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.001) current = target;
      render(current);
      raf = 0;
      if (current !== target) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = computeTarget();
      if (reduced) {
        current = target;
        render(current);
        return;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      target = computeTarget();
      current = target;
      render(current);
    };

    // El video solo reproduce cuando la sección está en pantalla
    const v = videoRef.current;
    const tryPlay = () => {
      if (!v || v.paused === false) return;
      void v.play().catch(() => {});
    };

    v?.addEventListener("loadedmetadata", tryPlay);
    v?.addEventListener("canplay", tryPlay);
    v?.addEventListener("pause", tryPlay);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v) return;
        if (entry.isIntersecting) {
          void v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(sticky);

    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      v?.removeEventListener("loadedmetadata", tryPlay);
      v?.removeEventListener("canplay", tryPlay);
      v?.removeEventListener("pause", tryPlay);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`circle-scroll-zoom relative w-full bg-navy-dark h-[240svh] sm:h-[320svh] ${className}`}
      aria-label="Transición cinematográfica"
    >
      <style>{`
        .circle-scroll-zoom video::-webkit-media-controls,
        .circle-scroll-zoom video::-webkit-media-controls-enclosure,
        .circle-scroll-zoom video::-webkit-media-controls-panel,
        .circle-scroll-zoom video::-webkit-media-controls-overlay-play-button,
        .circle-scroll-zoom video::-webkit-media-controls-play-button,
        .circle-scroll-zoom video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none;
          pointer-events: none;
        }
        .circle-scroll-zoom video {
          pointer-events: none;
        }
      `}</style>
      <div
        ref={stickyRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-navy-dark"
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
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-full"
          style={{
            width: BASE_DIAMETER,
            height: BASE_DIAMETER,
            transform: "translate3d(-50%, -50%, 0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            // Fix de Safari/iOS: fuerza el recorte redondeado durante el scale
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            isolation: "isolate",
          }}
        >
          {/* Interior del tamaño del viewport, contra-escalado */}
          <div
            ref={innerRef}
            className="absolute left-1/2 top-1/2"
            style={{
              width: "100vw",
              height: "100svh",
              transform: "translate3d(-50%, -50%, 0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
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
