import AchievementsGrid from "@/components/section/achievements/AchievementsGrid";

export default function page() {
  return (
    <section className="custom-container space-y-2  ">
      {/* About Section */}
      <h1 className="text-2xl font-semibold">Achievements</h1>
      <h3 className="text-neutral-500">
        A showcase of the certificates and badges I’ve earned along my
        professional and academic journey.
      </h3>

      <AchievementsGrid />
    </section>
  );
}
