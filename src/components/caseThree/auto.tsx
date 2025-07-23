"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  interval?: number; // ms
  className?: string;
};

export default function AutoCarousel({
  images,
  interval = 3000,
  className,
}: Props) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % images.length),
      interval,
    );
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    start();
    return stop;
  }, [interval, images.length]);

  return (
    <div
      className={`relative overflow-hidden rounded-lg aspect-[4/3]  ${className || ""}`}
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

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full bg-black/30 ${i === idx ? "bg-black" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
