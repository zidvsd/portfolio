// lib/wakatime.ts

interface WakaLanguage {
  name: string;
  percent: number;
}

interface WakaEditor {
  name: string;
  percent: number;
}

// ✅ This matches what getWakaTimeData() actually returns
export interface WakaTimeStats {
  total_hours: string;
  daily_average: string;
  top_languages: WakaLanguage[];
  top_editors: WakaEditor[];
}

export async function getWakaTimeData(): Promise<WakaTimeStats | null> {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    const username = process.env.WAKATIME_USERNAME;

    console.log("Using WakaTime credentials:", { apiKey, username });

    const res = await fetch(
      `https://wakatime.com/api/v1/users/${username}/stats/last_7_days`,
      {
        headers: apiKey
          ? {
              Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString(
                "base64"
              )}`,
            }
          : {},
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`❌ WakaTime API error (${res.status}):`, text);
      throw new Error("Failed to fetch WakaTime Data");
    }

    const data = await res.json();

    return {
      total_hours: data.data.human_readable_total,
      daily_average: data.data.human_readable_daily_average,
      top_languages: data.data.languages.slice(0, 5),
      top_editors: data.data.editors.slice(0, 3),
    };
  } catch (error) {
    console.error("WakaTime fetch failed:", error);
    return null;
  }
}
