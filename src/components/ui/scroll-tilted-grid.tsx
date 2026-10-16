"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  cubicBezier,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export const DEFAULT_GRID_IMAGES: readonly string[] = [];

const easeIntoFocus = cubicBezier(0.22, 1, 0.36, 1);
const easeOutOfFocus = cubicBezier(0, 0, 0.58, 1);
const focusEase: [typeof easeIntoFocus, typeof easeOutOfFocus] = [
  easeIntoFocus,
  easeOutOfFocus,
];

export type MaxWidthToken =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "none";

export type GapToken = 4 | 6 | 8 | 10 | 12 | 14;

const MAX_WIDTH_CLASS: Record<MaxWidthToken, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  none: "",
};

const GAP_CLASS: Record<GapToken, string> = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  14: "gap-14",
};

type Side = "L" | "R";

type TileConfig = {
  aspectRatio: string;
  perspective: number;
  maxTilt: number;
  maxBlur: number;
  rounded: string;
};

type WorkCaption = {
  title?: string;
  type?: string;
  description?: string;
};

function TileCaption({ title, type, description }: WorkCaption) {
  if (!title && !type && !description) return null;

  return (
    <figcaption className="absolute inset-x-0 bottom-0 bg-background/95 p-4 text-foreground opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100 motion-reduce:transition-none">
      {type ? (
        <span className="mb-2 inline-block rounded border border-electric/30 bg-electric/10 px-2 py-1 text-xs font-medium text-electric">
          {type}
        </span>
      ) : null}
      {title ? <h3 className="break-words text-base font-semibold leading-snug">{title}</h3> : null}
      {description ? <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">{description}</p> : null}
    </figcaption>
  );
}

function Tile({
  src,
  alt,
  title,
  type,
  description,
  imagePlaceholder,
  side,
  config,
}: {
  src: string;
  alt: string;
  imagePlaceholder?: string;
  side: Side;
  config: TileConfig;
} & WorkCaption) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const reduce = useReducedMotion();
  const sign = side === "L" ? -1 : 1;
  const { aspectRatio, perspective, maxTilt, maxBlur, rounded } = config;

  const blur = useTransform(p, [0, 0.5, 1], [maxBlur, 0, maxBlur], { ease: focusEase });
  const bright = useTransform(p, [0, 0.5, 1], [0, 1, 0], { ease: focusEase });
  const contrast = useTransform(p, [0, 0.5, 1], [4, 1, 4], { ease: focusEase });

  const ty = useTransform(p, [0, 0.5, 1], ["60%", "0%", "-60%"], { ease: focusEase });
  const tz = useTransform(p, [0, 0.5, 1], [300, 0, 300], { ease: focusEase });
  const rx = useTransform(p, [0, 0.5, 1], [maxTilt, 0, -maxTilt], { ease: focusEase });

  const tx = useTransform(
    p,
    [0, 0.5, 1],
    [`${sign * 20}%`, "0%", `${sign * 20}%`],
    { ease: focusEase },
  );
  const rot = useTransform(p, [0, 0.5, 1], [-sign * 5, 0, sign * 5], { ease: focusEase });
  const sk = useTransform(p, [0, 0.5, 1], [sign * 10, 0, -sign * 10], { ease: focusEase });

  const innerSY = useTransform(p, [0, 0.5, 1], [1.4, 1, 1.4], { ease: focusEase });

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright}) contrast(${contrast})`;
  const hasCaption = Boolean(title || type || description);
  const tileClassName = "group relative overflow-hidden bg-card/30 border border-border/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const content = (
    <>
      {src ? (
        <motion.img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" style={reduce ? undefined : { filter }} />
      ) : (
        <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">{imagePlaceholder}</div>
      )}
      <TileCaption title={title} type={type} description={description} />
    </>
  );

  if (reduce) {
    return (
      <figure
        ref={ref}
        tabIndex={hasCaption ? 0 : undefined}
        className={tileClassName}
        style={{ aspectRatio, borderRadius: rounded }}
      >
        {content}
      </figure>
    );
  }

  return (
    <div ref={ref} style={{ perspective }}>
      <motion.div
        style={{
          y: ty,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          style={{
            x: tx,
            z: tz,
            rotateX: rx,
            rotate: rot,
            skewX: sk,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <motion.figure
            tabIndex={hasCaption ? 0 : undefined}
            className={tileClassName}
            style={{ aspectRatio, borderRadius: rounded, scaleY: innerSY }}
          >
            {content}
          </motion.figure>
        </motion.div>
      </motion.div>
    </div>
  );
}

export type ScrollTiltedGridImage = string | ({ src: string; alt?: string } & WorkCaption);

export type ScrollTiltedGridProps = {
  /** Image URLs or objects with optional localized work captions. */
  images?: readonly ScrollTiltedGridImage[];
  /** Localized label for work items without an image. */
  imagePlaceholder?: string;
  /** Cycle the source list and append more pairs near the bottom. Default `false`. */
  loop?: boolean;
  /** Initial number of cycles to render when `loop` is on. Default `3`. */
  initialCycles?: number;
  /** CSS `aspect-ratio` value for each tile. Default `"3/4"`. */
  aspectRatio?: string;
  /** Tailwind `max-w-*` token controlling the column width. Default `"lg"`. */
  maxWidth?: MaxWidthToken;
  /** Tailwind `gap-*` token between tiles. Default `10`. */
  gap?: GapToken;
  /** CSS `perspective` in pixels applied to each tile. Default `900`. */
  perspective?: number;
  /** Maximum `rotateX` tilt magnitude (degrees) at entry/exit poses. Default `70`. */
  maxTilt?: number;
  /** Maximum blur (px) at entry/exit poses. Default `8`. */
  maxBlur?: number;
  /** CSS `border-radius` for the tile clipping mask. Default `"0.375rem"`. */
  rounded?: string;
  /** Additional className applied to the outer wrapper. */
  className?: string;
};

/**
 * Editorial scroll-tilted image grid. Pairs of images rise from below tipped
 * forward, settle into focus, then tilt back over the top edge as they exit.
 */
export function ScrollTiltedGrid({
  images = DEFAULT_GRID_IMAGES,
  imagePlaceholder,
  loop = false,
  initialCycles = 3,
  aspectRatio = "3/4",
  maxWidth = "lg",
  gap = 10,
  perspective = 900,
  maxTilt = 70,
  maxBlur = 8,
  rounded = "0.375rem",
  className,
}: ScrollTiltedGridProps = {}) {
  const [cycles, setCycles] = useState(loop ? initialCycles : 1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loop) return;
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setCycles((c) => c + 2);
        }
      },
      { rootMargin: "1500px 0px 1500px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loop]);

  const items = useMemo(
    () =>
      loop
        ? Array.from({ length: cycles }, () => images).flat()
        : [...images],
    [loop, cycles, images],
  );

  const config = useMemo(
    () => ({ aspectRatio, perspective, maxTilt, maxBlur, rounded }),
    [aspectRatio, perspective, maxTilt, maxBlur, rounded],
  );

  const gridClass = [
    "mx-auto grid w-full grid-cols-1 sm:grid-cols-2",
    MAX_WIDTH_CLASS[maxWidth],
    GAP_CLASS[gap],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className={gridClass}>
        {items.map((item, i) => {
          const src = typeof item === "string" ? item : item.src;
          const alt = typeof item === "string" ? "" : item.alt ?? "";
          return (
            <Tile
              key={`${src}-${i}`}
              src={src}
              alt={alt}
              title={typeof item === "string" ? undefined : item.title}
              type={typeof item === "string" ? undefined : item.type}
              description={typeof item === "string" ? undefined : item.description}
              imagePlaceholder={imagePlaceholder}
              side={i % 2 === 0 ? "L" : "R"}
              config={config}
            />
          );
        })}
      </div>

      {loop ? <div ref={sentinelRef} aria-hidden className="h-px" /> : null}
    </div>
  );
}

export default ScrollTiltedGrid;
