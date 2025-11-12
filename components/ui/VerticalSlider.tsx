"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Repo } from "@/types/repo";
import repoImages from "@/data/projectImages.json";
import Link from "next/link";
import { AutoplayPlugin } from "@/lib/AutoplayPlugin";
interface RepoImageData {
  name: string;
  image: string;
  "live-demo"?: string;
}

export default function VerticalSlider({ repos }: { repos?: Repo[] }) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      vertical: true,

      slides: {
        perView: 3,
        spacing: 10,
      },
      loop: true,
      mode: "snap",
    },
    [AutoplayPlugin]
  );

  if (!repos || repos.length === 0) {
    return (
      <div className="text-center text-neutral-400">Loading projects...</div>
    );
  }

  const mergedRepos = repos.map((repo) => {
    const imageData = (repoImages as RepoImageData[]).find(
      (item) => item.name === repo.name
    );
    return {
      ...repo,
      image: imageData?.image || "/images/fallback.png",
      liveDemo: imageData?.["live-demo"],
    };
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden w-full h-[360px]"
    >
      {mergedRepos.map((repo) => (
        <Link
          href={`/projects/${repo.name}`}
          key={repo.name}
          className="keen-slider__slide relative bg-neutral-800 flex flex-col items-center justify-center text-center text-white rounded-xl overflow-hidden"
        >
          <Image
            src={repo.image}
            alt={repo.name}
            width={300}
            height={150}
            className="hover-utility hover:scale-105 object-cover w-full h-full absolute inset-0 opacity-70"
          />
        </Link>
      ))}
    </div>
  );
}
