import React, { useState } from "react";
import { motion, AnimatePresence, type Variants} from "framer-motion";

const LINKS = [
  {
    label: "Agent 1",
    href:
      "https://wa.me/595971761414?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.",
  },
  {
    label: "Agent 2",
    href:
      "https://wa.me/595984331943?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div aria-hidden={false} className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="w-56 p-3 bg-card/90 backdrop-blur-md rounded-xl shadow-glow border border-border/20"
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-foreground">Contactar por WhatsApp</p>
                <div className="flex flex-col gap-2 mt-1">
                  {LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
                      onClick={() => setOpen(false)}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
                        <path d="M20.52 3.48a11.86 11.86 0 00-16.8 0A11.86 11.86 0 002 12.35c0 2.08.55 4.11 1.6 5.9L2 22l3.95-1.03a11.86 11.86 0 005.57 1.43h.01c6.5 0 11.8-5.28 11.8-11.8 0-3.16-1.24-6.12-3.24-8.18zm-8.53 17.04h-.01a9.7 9.7 0 01-4.94-1.34l-.35-.21-2.35.62.63-2.28-.23-.37A9.67 9.67 0 013.88 12.35C3.88 7.12 7.95 3.05 13.18 3.05c2.53 0 4.9.99 6.68 2.77a9.38 9.38 0 012.77 6.66 9.7 9.7 0 01-9.7 9.7zm5.31-7.24c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.73.93-.9 1.12c-.16.19-.32.2-.61.07a8.55 8.55 0 01-2.52-1.55 9.64 9.64 0 01-1.8-2.24c-.19-.33 0-.51.14-.67.14-.14.31-.37.47-.56.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.53-.07-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.37-.26.3-1.01.99-1.01 2.42 0 1.43 1.03 2.82 1.17 3.02.13.2 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.09 1.7-.69 1.94-1.36.24-.65.24-1.21.17-1.33-.07-.12-.26-.2-.55-.35z" />
                      </svg>
                      <span className="text-muted-foreground">{l.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir chat de WhatsApp"
          className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white border-2 border-white/10 hover:shadow-glow transition-shadow"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20.52 3.48a11.86 11.86 0 00-16.8 0A11.86 11.86 0 002 12.35c0 2.08.55 4.11 1.6 5.9L2 22l3.95-1.03a11.86 11.86 0 005.57 1.43h.01c6.5 0 11.8-5.28 11.8-11.8 0-3.16-1.24-6.12-3.24-8.18zm-8.53 17.04h-.01a9.7 9.7 0 01-4.94-1.34l-.35-.21-2.35.62.63-2.28-.23-.37A9.67 9.67 0 013.88 12.35C3.88 7.12 7.95 3.05 13.18 3.05c2.53 0 4.9.99 6.68 2.77a9.38 9.38 0 012.77 6.66 9.7 9.7 0 01-9.7 9.7zm5.31-7.24c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.73.93-.9 1.12c-.16.19-.32.2-.61.07a8.55 8.55 0 01-2.52-1.55 9.64 9.64 0 01-1.8-2.24c-.19-.33 0-.51.14-.67.14-.14.31-.37.47-.56.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.53-.07-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.37-.26.3-1.01.99-1.01 2.42 0 1.43 1.03 2.82 1.17 3.02.13.2 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.09 1.7-.69 1.94-1.36.24-.65.24-1.21.17-1.33-.07-.12-.26-.2-.55-.35z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
