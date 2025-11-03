// components/section/dashboard/WakaTimeStats.tsx
import { getWakaTimeData } from "@/lib/wakatime";

export default async function WakatimeStats() {
  const stats = await getWakaTimeData();

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
    <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
        Coding Activity (Last 7 Days)
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
        Total: {stats.total_hours} • Daily Avg: {stats.daily_average}
      </p>

      <h3 className="text-md font-medium text-neutral-800 dark:text-neutral-200 mb-2">
        Top Languages
      </h3>
      <div className="space-y-2 mb-4">
        {stats.top_languages.map((lang, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>{lang.name}</span>
            <span>{lang.percent.toFixed(1)}%</span>
          </div>
        ))}
      </div>

      <h3 className="text-md font-medium text-neutral-800 dark:text-neutral-200 mb-2">
        Top Editors
      </h3>
      <div className="space-y-2">
        {stats.top_editors.map((editor, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>{editor.name}</span>
            <span>{editor.percent.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
