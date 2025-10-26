import { getRepoData } from "@/lib/github";
import Link from "next/link";
import Image from "next/image";
export default async function page() {
  const repoNames = ["portfolio", "kita-jobs-app", "clothora"];
  const repos = await getRepoData(repoNames);
  return (
    <div className="custom-container">
      <section className="custom-container space-y-2 pt-4 lg:pt-8">
        {/* About Section */}
        <h1 className="text-2xl font-semibold">Projects</h1>
        <h3 className="text-neutral-500">
          A showcase of both private and open-source projects I've built or
          contributed to.
        </h3>
      </section>
      <section className="space-y-4 custom-container border-t border-neutral-300 dark:border-neutral-600 mt-4 pt-4">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="p-4 rounded-lg border border-neutral-300 shadow-md dark:border-neutral-700"
          >
            <Link
              href={`/projects/${repo.name}`}
              className="font-bold text-accent"
            >
              {repo.name}
            </Link>
            <p>{repo.description}</p>
            <div className="size-72 relative">
              <Image
                src={repo.image}
                fill
                alt={repo.name}
                className="relative object-contain "
              />
            </div>
            <p className="text-sm text-gray-500">
              {repo.language} • {repo.visibility}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
