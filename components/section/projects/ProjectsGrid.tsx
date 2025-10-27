"use client";
import { Repo } from "@/types/repo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TitleCase } from "@/lib/utils";

interface ProjectsGridProps {
  initialRepos: Repo[];
}

export default function ProjectsGrid({ initialRepos }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 custom-container pt-4 lg:pt-0">
      {initialRepos.map((repo) => (
        <Link
          key={repo.name}
          href={`/projects/${repo.name}`}
          className="block group"
        >
          {/* Full card fixed height */}
          <div className="flex flex-col rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-sm hover:shadow-lg overflow-hidden bg-white dark:bg-dark-gray h-[32rem]">
            {/* Image takes fixed portion */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={repo.image || "/placeholder.png"}
                alt={repo.name}
                fill
                sizes="100vw"
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg flex items-center">
                  View Project <ArrowRight className="ml-2" />
                </span>
              </div>
            </div>

            {/* Content stretches to fill remaining space */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-neutral-100">
                {TitleCase(repo.name.replace(/-/g, " "))}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                <span className="font-medium">{repo.visibility}</span>
              </p>
              {repo.topics?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
