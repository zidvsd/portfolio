"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import achievements from "@/data/achievements.json";
import { AutoplayPlugin } from "@/lib/AutoplayPlugin";
import Image from "next/image";
import Link from "next/link";

export default function AchievementsSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",

      slides: { perView: 1, spacing: 15 },
    },
    [AutoplayPlugin]
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {achievements.map((achievement, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <Link href={achievement.url} target="_blank">
              <div className="relative w-[320px] h-[280px]">
                <Image
                  src={achievement.url}
                  alt={achievement.alt}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
