// lib/getRepoData.ts
import projectImages from "@/data/projectImages.json";
import { Repo } from "@/types/repo";

export async function getRepoData(repoNames: string[]): Promise<Repo[]> {
  const username = "zidvsd";
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
  const username = "zidvsd";
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
