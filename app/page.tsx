import profile from "@/data/profile.json";
import TechStackIcons from "@/components/ui/TechStackIcons";
import Featured from "@/components/ui/Featured";
import { getRepoData } from "@/lib/github";
import { repoNames } from "./projects/page";
import { Github, Linkedin, Mail } from "lucide-react";
export default async function page() {
  const repos = await getRepoData(repoNames);
  return (
    <div className="custom-container  mx-auto ">
      <section id="home-section" className="pb-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-semibold">
              Hi, I&apos;m {profile.name}
            </h1>
            <ul className="lg:flex text-neutral-600 dark:text-neutral-400 list-disc list-inside mt-2 text-sm gap-4 space-y-2">
              <li>
                Based in {profile.location.city}, {profile.location.country}{" "}
              </li>
              <li>{profile.location.workPreference}</li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="hover-utility hover:text-foreground/40"
              href="https://github.com/zidvsd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              className="hover-utility hover:text-foreground/40"
              href="https://www.linkedin.com/in/Rashid-Visda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              className="hover-utility hover:text-foreground/40"
              href="mailto:rashidvisda@example.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
        <article className="leading-8 mt-4 text-neutral-500 dark:text-custom-gray">
          {profile.bio}
        </article>
      </section>

      {/* skills */}
      <section
        id="skills-section"
        className="pt-8 border-t border-neutral-300 dark:border-neutral-600"
      >
        <TechStackIcons />
      </section>
      {/* bento grid  */}

      <section
        id="featured-section"
        className="pt-8 border-t border-neutral-300 dark:border-neutral-600 mt-12"
      >
        <Featured repos={repos} />
      </section>
    </div>
  );
}
