export async function getWakaTimeData() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    const username = process.env.WAKATIME_USERNAME;
    console.log(apiKey);
    console.log(username);
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
      total_hours: data.data.human_readable_total, // e.g., "12 hrs 45 mins"
      daily_average: data.data.human_readable_daily_average, // e.g., "1 hr 48 mins"
      top_languages: data.data.languages.slice(0, 5).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent,
      })),
      top_editors: data.data.editors.slice(0, 3).map((editor: any) => ({
        name: editor.name,
        percent: editor.percent,
      })),
    };
  } catch (error) {
    console.error("WakaTime fetch failed:", error);
    return null;
  }
}
