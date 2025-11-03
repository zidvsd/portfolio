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

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/all_time`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${apiKey}:`)}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log("✅ WakaTime data:", data.data);

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
