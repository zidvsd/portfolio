import icons from "@/data/icons.json";

export const techIcons: Record<string, { src: string; alt: string }> = {};

// Register multiple keys for flexible matching
icons.forEach(({ src, alt }) => {
  const key = alt.toLowerCase();
  techIcons[key] = { src, alt };
  techIcons[key.replace(/\s+/g, "")] = { src, alt }; // remove spaces
  techIcons[key.replace(/\./g, "")] = { src, alt }; // remove dots
  techIcons[key.replace(/\s+/g, "") + "js"] = { src, alt }; // handle Next.js / ReactJS variants
});
export function extractTechIcons(readme: string) {
  const detected: { src: string; alt: string }[] = [];
  const normalizedReadme = readme.toLowerCase();

  for (const key in techIcons) {
    const lowerKey = key.toLowerCase();

    // 🚫 skip plain HTML or CSS (but NOT Tailwind CSS)
    if (
      (lowerKey === "html" || lowerKey === "css") &&
      !lowerKey.includes("tailwind")
    ) {
      continue;
    }

    // allow flexible matching
    const flexibleKey = lowerKey
      .replace(/[-.\s]/g, "[\\s.-]*")
      .replace("tailwindcss", "tailwind[\\s-]*css"); // special Tailwind handling

    const regex = new RegExp(flexibleKey, "i");
    if (regex.test(normalizedReadme)) {
      detected.push(techIcons[key]);
    }
  }

  // remove duplicates
  return Array.from(
    new Map(detected.map((i) => [`${i.alt}-${i.src}`, i])).values()
  );
}
