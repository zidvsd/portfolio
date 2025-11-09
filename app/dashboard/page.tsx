import { BarChart3, Code2, GitCommitHorizontal, Clock } from "lucide-react";
import GithubStats from "@/components/section/dashboard/GithubStats";
import WakaTimeChart from "@/components/section/dashboard/WakaTimeChart";
import { getWakaTimeData } from "@/lib/wakatime";
import { getGithubDashboard } from "@/lib/github";
import { getTopLanguages } from "@/lib/github";
import TechProficiencyChart from "@/components/section/dashboard/TechProficiencyChart";
import RecentActivity from "@/components/section/dashboard/RecentActivity";
export default async function page() {
  const stats = await getWakaTimeData();
  const GitHubDashboard = await getGithubDashboard();
  const languages = await getTopLanguages();

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
      <GithubStats data={GitHubDashboard} />
      <TechProficiencyChart
        data={languages.map((lang) => ({
          name: lang.language,
          level: lang.count * 10, // scale it to look like %
        }))}
      />

      {/* Recent Activity */}
      <div>
        <RecentActivity />
      </div>
    </div>
  );
}
