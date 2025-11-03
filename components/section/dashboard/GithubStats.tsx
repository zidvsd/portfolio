// components/section/dashboard/GithubStats.tsx
import { getGithubDashboard } from "@/lib/github";

export default async function GithubStats() {
  const githubDashboard = await getGithubDashboard();
  console.log(githubDashboard);

  return (
    <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
        GitHub Stats
      </h2>
      <pre className="text-sm text-neutral-500 dark:text-neutral-400">
        {JSON.stringify(githubDashboard, null, 2)}
      </pre>
    </div>
  );
}
