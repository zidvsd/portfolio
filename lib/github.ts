// lib/getRepoData.ts

interface RepoData {
  name: string;
  description: string;
  language: string;
  html_url: string;
  updated_at: string;
  visibility: string;
  image: string;
}
import projectImages from "@/data/projectImages.json";
export async function getRepoData(repoNames: string[]): Promise<RepoData[]> {
  try {
    const username = "zidvsd";
    const token = process.env.GITHUB_API_KEY;
    const repoFetches = repoNames.map(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`,
            Accept: "application/vnd.github+json",
          },
          next: { revalidate: 3000 },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch repo data: ${res.status}`);
      }

      const data = await res.json();

      // find images in json
      const match = projectImages.find((img) => img.name === data.name);
      return {
        name: data.name,
        description: data.description,
        language: data.language,
        html_url: data.html_url,
        updated_at: data.updated_at,
        visibility: data.visibility,
        image: match?.image || null,
      } as RepoData;
    });

    // Wait for all fetches to complete
    const results = await Promise.all(repoFetches);
    return results;
  } catch (error) {
    console.error("Error fetching repo data:", error);
    return [];
  }
}
