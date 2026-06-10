"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    id: "front",
    title: "جلد روی کتاب",
    image: "/images/cover-front.jpg",
  },
  {
    id: "back",
    title: "جلد پشت کتاب",
    image: "/images/cover-back.jpg",
  },
];

export default function BookCoverSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <div className="relative z-10 w-full max-w-[430px]">
      <div className="pointer-events-none absolute -inset-5 rounded-[2rem] border border-[#d8b15e]/20" />
      <div className="pointer-events-none absolute -inset-9 rounded-[2.5rem] bg-[#d8b15e]/10 blur-3xl" />

      <div className="relative z-10 rounded-[1.8rem] border border-[#d8b15e]/55 bg-[#040302] p-3 shadow-[0_0_110px_rgba(216,177,94,0.20)]">
        <div className="rounded-[1.4rem] border border-[#d8b15e]/35 bg-[#020201] p-2">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[1rem] border border-[#d8b15e]/22 bg-[#030302]">
            <Image
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-5 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-bold transition ${
              activeIndex === index
                ? "border-[#f0cf75] bg-[#d8b15e] text-[#130c04]"
                : "border-[#d8b15e]/35 bg-[#070504]/75 text-[#d8c7a6] hover:bg-[#d8b15e]/10"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}