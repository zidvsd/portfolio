// lib/wakatime.ts
"use server";
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
  current_streak?: number;
  top_languages: WakaLanguage[];
  top_editors: WakaEditor[];
}

export interface WakaTimeDaily {
  date: string;
  total_seconds: number;
  human_readable_total: string;
  projects: { name: string; percent: number; total_seconds: number }[];
  languages: { name: string; percent: number; total_seconds: number }[];
  editors: { name: string; percent: number; total_seconds: number }[];
}
export async function getWakaTimeData(): Promise<WakaTimeStats | null> {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    const username = process.env.WAKATIME_USERNAME;

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/last_7_days`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString(
            "base64"
          )}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log(data);

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
export async function getWakaTimeActivity(): Promise<WakaTimeDaily[] | null> {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;

    const res = await fetch(
      `https://wakatime.com/api/v1/users/current/summaries?range=last_7_days`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString(
            "base64"
          )}`,
          cache: "no-store",
        },
      }
    );
    if (!res.ok) throw new Error(`JTT[ ${res.status}`);
    const data = await res.json();
    console.log(data.data);
    return data.data as WakaTimeDaily[];
  } catch (error) {
    console.error("WakaTime activity fetch failed:", error);
    return null;
  }
}
