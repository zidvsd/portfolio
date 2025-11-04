import { BarChart3, Code2, GitCommitHorizontal, Clock } from "lucide-react";
import GithubStats from "@/components/section/dashboard/GithubStats";
import WakatimeStats from "@/components/section/dashboard/WakatimeStats";
import WakaTimeChart from "@/components/section/dashboard/WakaTimeChart";
import { getWakaTimeData } from "@/lib/wakatime";
export default async function page() {
  const stats = await getWakaTimeData();
  const overViewStats = [
    { title: "Projects Completed", value: "12", icon: Code2 },
    { title: "GitHub Stars", value: "30", icon: BarChart3 },
    { title: "Total Commits", value: "12", icon: GitCommitHorizontal },
    { title: "Hours Coded", value: "420+", icon: Clock },
  ];

  const techProficiency = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 60 },
  ];

  const recentActivities = [
    {
      title: "Added new portfolio project",
      date: "Oct 25, 2025",
    },
    {
      title: "Redesigned homepage with dark mode",
      date: "Oct 20, 2025",
    },
    {
      title: "Fixed responsive layout in About page",
      date: "Oct 15, 2025",
    },
  ];

  return (
    <div className="p-6 space-y-10 custom-container">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <h3 className="text-neutral-500">
          A showcase of the certificates and badges I’ve earned along my
          professional and academic journey.
        </h3>
      </div>
      <WakaTimeChart stats={stats} />
      <GithubStats />
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overViewStats.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 mr-4">
              <item.icon className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.title}
              </p>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {item.value}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section (Static bars as placeholder) */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Project Growth (Static Visualization)
        </h2>
        <div className="flex items-end space-x-4 h-40">
          {[8, 10, 12, 6, 9, 11, 14].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-neutral-400/20 to-neutral-400/80 rounded-t-lg"
              style={{ height: `${height * 10}px` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-neutral-500 mt-2">
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
        </div>
      </div>

      {/* Tech Stack Proficiency */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Tech Stack Proficiency
        </h2>
        <div className="space-y-4">
          {techProficiency.map((tech, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {tech.name}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {tech.level}%
                </span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-neutral-600 to-neutral-400 dark:from-neutral-300 dark:to-neutral-500 h-3 rounded-full"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {recentActivities.map((activity, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
            >
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                {activity.title}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {activity.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
