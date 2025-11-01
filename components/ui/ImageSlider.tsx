"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { AutoplayPlugin } from "@/lib/AutoplayPlugin";
import Image from "next/image";

export default function ImageSlider() {
  // --- Autoplay plugin ---

  // --- Image data ---
  const slides = [
    { src: "/images/zid.jpg" },
    { src: "/images/zid (2).jpg" },
    { src: "/images/zid(3).webp" },
    { src: "/images/profile-picture.png" },
  ];

  // --- Keen Slider setup ---
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 15 },
      mode: "snap",
      renderMode: "performance",
    },
    [AutoplayPlugin]
  );

  // --- Small random tilt values for realism ---
  const tiltAngles = [
    "rotate-[1deg]",
    "rotate-[-1deg]",
    "rotate-[2deg]",
    "rotate-[-2deg]",
  ];

  return (
    <div className="flex justify-center w-full">
      <div
        ref={sliderRef}
        className="keen-slider w-full max-w-[380px] md:h-[240px] lg:h-[280px] xl:h-auto overflow-hidden rounded-2xl"
      >
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide flex justify-center">
            <div
              className={`
                cursor-pointer
                relative aspect-[3/4] w-full rounded-2xl overflow-hidden
                shadow-xl border border-neutral-800 bg-neutral-900
                transition-transform duration-500
                hover:scale-[1.05] hover:-translate-y-2 hover:rotate-0
                ${tiltAngles[i % tiltAngles.length]} mt-4
              `}
            >
              <Image
                src={slide.src}
                alt={`photo-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
