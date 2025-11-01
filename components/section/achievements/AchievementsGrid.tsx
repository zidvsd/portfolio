"use client";
import { useState, useMemo } from "react";
import achievements from "@/data/achievements.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import SelectTab from "@/components/SelectTab";

export default function AchievementsGrid() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredAchievements = useMemo(() => {
    const lowerQuery = query.toLowerCase();

    return achievements.filter((achievement) => {
      const matchesQuery =
        achievement.name.toLowerCase().includes(lowerQuery) ||
        achievement["date-issued"].toLowerCase().includes(lowerQuery);
      const matchesType =
        selectedType === "All" ||
        achievement.type.toLowerCase() === selectedType.toLowerCase();

      return matchesQuery && matchesType;
    });
  }, [query, selectedType]);

  return (
    <div className="border-t border-neutral-300 dark:border-neutral-700 mt-6">
      <div className="mt-6 w-full flex justify-between items-center">
        <div className="self-start">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        <SelectTab selected={selectedType} setSelected={setSelectedType} />
      </div>

      <span className="text-neutral-500 dark:text-neutral-400">
        Total: {filteredAchievements.length}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 lg:gap-4">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement, index) => (
            <Link
              key={index}
              href={achievement.url}
              target="_blank"
              className="block group"
            >
              {/* Card */}
              <div className="flex flex-col rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-sm hover:shadow-lg overflow-hidden bg-white dark:bg-dark-gray h-[20rem] transition-all">
                {/* Image - fills top half */}
                <div className="relative w-full h-1/2 overflow-hidden">
                  <Image
                    src={achievement.url}
                    alt={achievement.alt}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-sm sm:text-base flex items-center">
                      View Certificate <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-neutral-200">
                      {achievement.name}
                    </h2>
                    <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                      {achievement.issuer}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Issued on
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {" "}
                      {achievement["date-issued"]}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No certificates found.
          </p>
        )}
      </div>
    </div>
  );
}
