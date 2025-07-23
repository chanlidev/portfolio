"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  interval?: number;
  className?: string;
};

export default function AutoCarousel({
  images,
  interval = 3000,
  className,
}: Props) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<number | null>(null);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const goto = (i: number) => setIdx(() => (i + images.length) % images.length);

  const start = () => {
    stop();
    if (images.length > 1) {
      timer.current = window.setInterval(next, interval);
    }
  };
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // only restart when interval or number of images changes
  }, [interval, images.length]);

  // Optional: reset timer after manual nav
  const jump = (fn: () => void) => {
    stop();
    fn();
    start();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg aspect-[4/3] ${className || ""}`}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => jump(prev)}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 flex items-center justify-center backdrop-blur-sm transition"
      >
        <ChevronLeft className="h-6 w-6 text-black/70" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => jump(next)}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 flex items-center justify-center backdrop-blur-sm transition"
      >
        <ChevronRight className="h-6 w-6 text-black/70" />
      </button>

      {/* Pagination pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => jump(() => goto(i))}
            className={`h-2 w-2 rounded-full transition ${
              i === idx ? "bg-black" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
