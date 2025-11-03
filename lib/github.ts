// lib/getRepoData.ts
import projectImages from "@/data/projectImages.json";
import { Repo } from "@/types/repo";

export interface RepoData extends Repo {
  image: string;
}

const username = process.env.GITHUB_USERNAME;

export async function getRepoData(repoNames: string[]): Promise<RepoData[]> {
  const token = process.env.GITHUB_API_KEY;
  if (!token) {
    throw new Error(
      "GITHUB_API_KEY is not defined. Make sure .env is loaded and the server was restarted."
    );
  }

  try {
    const repoFetches = repoNames.map(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.mercy-preview+json",
          },
          next: { revalidate: 3000 },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch repo data for ${repo}: ${res.status}`);
      }

      const data = await res.json();
      const match = projectImages.find((img) => img.name === data.name);

      return {
        name: data.name,
        description: data.description,
        language: data.language,
        html_url: data.html_url,
        updated_at: data.updated_at,
        visibility: data.visibility,
        image: match?.image || "/placeholder.png",
        topics: data.topics || [],
      } as RepoData;
    });

    return await Promise.all(repoFetches);
  } catch (error) {
    console.error("Error fetching repo data:", error);
    return [];
  }
}

export async function getRepoReadme(repo: string): Promise<string | null> {
  const token = process.env.GITHUB_API_KEY;

  if (!token) {
    throw new Error("GITHUB_API_KEY is not defined.");
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repo}/readme`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw",
        },
        next: { revalidate: 3000 },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch README for ${repo}: ${res.status}`);
      return null;
    }

    return await res.text();
  } catch (error) {
    console.error("Error fetching README:", error);
    return null;
  }
}

export async function getGithubDashboard() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      // Optional caching behavior (revalidate every 6 hours)
      next: { revalidate: 21600 },
    });

    if (!res.ok) throw new Error("Failed to fetch GitHub data");

    const userData = await res.json();

    // Optional: fetch repo stats too
    const reposRes = await fetch(userData.repos_url);
    const repos = await reposRes.json();

    const totalStars = repos.reduce(
      (sum: number, repo: any) => sum + repo.stargazers_count,
      0
    );

    return {
      name: userData.name,
      followers: userData.followers,
      public_repos: userData.public_repos,
      total_stars: totalStars,
      avatar_url: userData.avatar_url,
    };
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return null;
  }
}
