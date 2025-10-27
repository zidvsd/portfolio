export function handleScrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
export function TitleCase(str: string) {
  return str
    .split(/[-_ ]/) // Split by dash, underscore, or space
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
