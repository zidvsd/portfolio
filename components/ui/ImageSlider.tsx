"use client";
import { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export default function ImageSlider() {
  // --- Autoplay plugin ---
  function AutoplayPlugin(slider: KeenSliderInstance) {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => slider.next(), 3500);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }

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
      <div ref={sliderRef} className="keen-slider max-w-[380px] w-full">
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
