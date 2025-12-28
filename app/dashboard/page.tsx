export const dynamic = "force-dynamic";
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

  return (
    <div className="custom-container">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <h3 className="text-neutral-500">
          A showcase of the certificates and badges I’ve earned along my
          professional and academic journey.
        </h3>
      </div>

      <div className="space-y-6">
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-700 pt-6 mt-6">
          <WakaTimeChart stats={stats} />
        </div>
        <div>
          <GithubStats data={GitHubDashboard} />
        </div>
        <div>
          <TechProficiencyChart
            data={languages.map((lang) => ({
              name: lang.language,
              level: lang.count * 10, // scale it to look like %
            }))}
          />
        </div>
        {/* Recent Activity */}
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
