"use client";

import { WakaTimeStats } from "@/lib/wakatime";
import Image from "next/image";

interface Props {
  stats: WakaTimeStats | null;
}

export default function WakaTimeChart({ stats }: Props) {
  const wakaProfile = "https://wakatime.com/@zidvsd";

  if (!stats) {
    return (
      <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
          WakaTime Stats
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Unable to fetch WakaTime data. Check username or API access.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
      {/* Header with WakaTime logo */}
      <div className="flex items-center space-x-2">
        <a href={wakaProfile} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/wakatime.svg" // path to your WakaTime logo
            alt="WakaTime Logo"
            width={32}
            height={32}
            className="p-1 rounded-full dark:bg-white"
          />
        </a>
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Coding Activity (Last 7 Days)
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            A summary of my coding hours tracked over the past week using
            WakaTime.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
        <div className="flex-1 p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Total Hours
          </p>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            {stats.total_hours}
          </p>
        </div>
        <div className="flex-1 p-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Daily Average
          </p>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            {stats.daily_average}
          </p>
        </div>
      </div>
    </div>
  );
}
