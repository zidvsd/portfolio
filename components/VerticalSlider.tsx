"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
export default function VerticalSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
    loop: true,
    mode: "snap",
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden w-full h-[180px]"
    >
      <div className="keen-slider__slide bg-amber-300 flex items-center justify-center text-xl font-semibold">
        Slide 1
      </div>
      <div className="keen-slider__slide bg-rose-300 flex items-center justify-center text-xl font-semibold">
        Slide 2
      </div>
      <div className="keen-slider__slide bg-lime-300 flex items-center justify-center text-xl font-semibold">
        Slide 3
      </div>
      <div className="keen-slider__slide bg-lime-300 flex items-center justify-center text-xl font-semibold">
        Slide 4
      </div>
    </div>
  );
}
