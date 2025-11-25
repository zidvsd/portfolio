// app/projects/page.tsx
import { getRepoData } from "@/lib/github";
import ProjectsGrid from "@/components/section/projects/ProjectsGrid";

export const repoNames = [
  "portfolio",
  "kita-jobs-app",
  "clothora",
  "recipe-app",
  "brew-haven",
  "le-dream",
  "stash"
];

export default async function Page() {
  // ✅ Runs on the server, env vars are accessible here
  const repos = await getRepoData(repoNames);

  return (
    <div className="custom-container">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <h3 className="text-neutral-500 mt-2">
        A showcase of both private and open-source projects I&apos;ve built or
        contributed to.
      </h3>
      <ProjectsGrid initialRepos={repos} />
    </div>
  );
}
