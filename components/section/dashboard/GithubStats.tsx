"use client";

import Image from "next/image";
import { Star, GitCommitHorizontal, Users, FolderGit2 } from "lucide-react";

interface GithubDashboard {
  name: string;
  username: string;
  followers: number;
  public_repos: number;
  total_stars: number;
  avatar_url: string;
}

interface Props {
  data: GithubDashboard | null;
}

export default function GithubStats({ data }: Props) {
  if (!data) {
    return (
      <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
          GitHub Stats
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Unable to fetch GitHub data.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
      {/* 🧠 Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Image
            src="/icons/github-icon.svg"
            alt="GitHub Icon"
            width={26}
            height={26}
            className="dark:invert"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              GitHub Stats
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              A quick overview of GitHub performance including repositories,
              stars, and followers.
            </p>
          </div>
        </div>
      </div>

      {/* 👤 Profile */}
      <div className="flex items-center space-x-4 ml-4">
        <a
          href={`https://github.com/${data.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={data.avatar_url}
            alt={`${data.name} avatar`}
            width={56}
            height={56}
            className="rounded-full border border-neutral-300 dark:border-neutral-700"
          />
        </a>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {data.name}
          </h3>
          <a
            href={`https://github.com/${data.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:underline"
          >
            @{data.username}
          </a>
        </div>
      </div>

      {/* 📊 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition">
          <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4">
            <Users className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Followers
            </p>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {data.followers}
            </h3>
          </div>
        </div>

        <div className="flex items-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition">
          <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4">
            <FolderGit2 className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Public Repos
            </p>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {data.public_repos}
            </h3>
          </div>
        </div>

        <div className="flex items-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition">
          <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4">
            <Star className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Stars
            </p>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {data.total_stars}
            </h3>
          </div>
        </div>

        <div className="flex items-center p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition">
          <div className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-4">
            <GitCommitHorizontal className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Total Commits
            </p>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white"></h3>
          </div>
        </div>
      </div>
    </div>
  );
}
