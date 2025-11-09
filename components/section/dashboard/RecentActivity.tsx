import { getWakaTimeActivity, WakaTimeDaily } from "@/lib/wakatime";
import { timeAgo } from "@/lib/utils";
import { formatSeconds } from "@/lib/utils";
export default async function RecentActivity() {
  const wakaTimeActivity: WakaTimeDaily[] | null = await getWakaTimeActivity();

  if (!wakaTimeActivity || wakaTimeActivity.length === 0) {
    return (
      <div className="custom-container">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          No recent coding activity found.
        </p>
      </div>
    );
  }

  // Map projects per day and include the languages used
  const recentProjects = wakaTimeActivity.flatMap((day) =>
    day.projects.map((project) => {
      // Find languages that contributed to this project
      const languagesUsed = day.languages.map((lang) => lang.name).join(", ");

      return {
        date: day.date,
        projectName: project.name,
        duration: formatSeconds(project.total_seconds),
        languages: languagesUsed,
        timeAgo: timeAgo(day.date),
      };
    })
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
      <div className="space-y-3">
        {recentProjects.map((activity, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex flex-col">
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                {activity.projectName}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {activity.duration} • {activity.languages}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
