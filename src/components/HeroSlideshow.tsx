"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1772729315540-415f2db20d98?q=85&w=2400&auto=format&fit=crop",
    alt: "Alleppey Backwaters Houseboat",
  },
  {
    src: "https://images.unsplash.com/photo-1777532895247-19b598f7c39b?q=85&w=2400&auto=format&fit=crop",
    alt: "Munnar Tea Plantations Misty Hills",
  },
  {
    src: "https://images.unsplash.com/photo-1772729134950-7db4b3a7be4e?q=85&w=2400&auto=format&fit=crop",
    alt: "Kerala Backwaters Canal",
  },
  {
    src: "https://images.unsplash.com/photo-1764012393710-be2d33971ac0?q=85&w=2400&auto=format&fit=crop",
    alt: "Munnar Rolling Tea Gardens",
  },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const loaded = useRef<Set<string>>(new Set());

  useEffect(() => {
    SLIDES.forEach((s) => {
      if (!loaded.current.has(s.src)) {
        loaded.current.add(s.src);
        const img = new Image();
        img.src = s.src;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={SLIDES[index].src}
          alt={SLIDES[index].alt}
          className="w-full h-full object-cover"
          src={SLIDES[index].src}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-secondary-fixed"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
