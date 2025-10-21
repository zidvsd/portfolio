"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    vertical: false,
    slides: {
      perView: 1,
      spacing: 10,
    },
    loop: false, // keep false so we can manually control looping
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handleClick = () => {
    if (instanceRef.current) {
      const slider = instanceRef.current;
      const totalSlides = slider.track.details.slides.length;
      const nextIndex = slider.track.details.rel + 1;

      if (nextIndex >= totalSlides) {
        // Go back to the first slide
        slider.moveToIdx(0);
      } else {
        // Go to next slide
        slider.next();
      }
    }
  };

  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden w-full h-[180px]"
    >
      <div
        onClick={handleClick}
        className="keen-slider__slide bg-amber-300 flex items-center justify-center text-xl font-semibold cursor-pointer"
      >
        Slide 1
      </div>
      <div
        onClick={handleClick}
        className="keen-slider__slide bg-rose-300 flex items-center justify-center text-xl font-semibold cursor-pointer"
      >
        Slide 2
      </div>
      <div
        onClick={handleClick}
        className="keen-slider__slide bg-lime-300 flex items-center justify-center text-xl font-semibold cursor-pointer"
      >
        Slide 3
      </div>
      <div
        onClick={handleClick}
        className="keen-slider__slide bg-cyan-300 flex items-center justify-center text-xl font-semibold cursor-pointer"
      >
        Slide 4
      </div>
    </div>
  );
}
