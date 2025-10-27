// app/projects/page.tsx
import { getRepoData } from "@/lib/github";
import ProjectsGrid from "@/components/section/projects/ProjectsGrid";

export default async function Page() {
  const repoNames = [
    "portfolio",
    "kita-jobs-app",
    "clothora",
    "recipe-app",
    "brew-haven",
    "le-dream",
  ];

  // ✅ Runs on the server, env vars are accessible here
  const repos = await getRepoData(repoNames);

  return <ProjectsGrid initialRepos={repos} />;
}
