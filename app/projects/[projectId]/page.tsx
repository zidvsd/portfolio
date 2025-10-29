import React from "react";
import { TitleCase } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { getRepoReadme } from "@/lib/github";
import { marked } from "marked";
import Image from "next/image";
import projectImages from "@/data/projectImages.json";
import BackButton from "@/components/buttons/BackButton";
import { extractTechIcons } from "@/lib/techIcons";
interface ProjectProps {
  params: { projectId: string };
}

export default async function Page({ params }: ProjectProps) {
  const { projectId } = await params;
  const readme = await getRepoReadme(projectId);
  const username = "zidvsd";
  const matchImg = projectImages.find((img) => img.name === projectId);
  const liveDemoMatch = projectImages.find((demo) => demo.name === projectId);
  const liveDemoUrl = liveDemoMatch?.["live-demo"] || null;
  const imageSrc = matchImg ? matchImg.image : "/placeholder.png";
  // convert to html
  const htmlContent = readme ? marked.parse(readme) : "<p>No README found.</p>";
  let techStackIcons = extractTechIcons(readme || "");
  console.log(readme);
  techStackIcons = Array.from(
    new Map(techStackIcons.map((icon) => [icon.alt, icon])).values()
  );

  return (
    <div className=" py-10 space-y-6 custom-container">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6 tracking-tight">
        {TitleCase(projectId)}
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between border-t border-neutral-300 dark:border-neutral-600 pt-6 mt-4 gap-6">
        {/* Tech Stack Icons */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            Tech Stack:
          </span>
          {techStackIcons.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {techStackIcons.map((icon) => (
                <div
                  key={icon.alt}
                  className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                >
                  <Image
                    src={icon.src}
                    alt={`${icon.alt}`}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={`https://github.com/${username}/${projectId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center hover-utility gap-2 hover:text-black/40 dark:hover:text-neutral-600"
          >
            <Github className="w-6 h-6" />
            <span className="hover-utility">Source Code</span>
          </a>
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover-utility hover:text-black/40 dark:hover:text-neutral-600"
            >
              <ExternalLink className="w-6 h-6" />
              <span className="hover-utility">Live Demo</span>
            </a>
          )}
        </div>
      </div>
      <div className="relative w-full aspect-video overflow-hidden  border border-neutral-300 dark:border-neutral-700">
        <Image
          src={imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`}
          alt={`${projectId}-img`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Render formatted HTML */}

      <article
        className="
    prose dark:prose-invert max-w-none leading-relaxed
    prose-headings:scroll-mt-20
    prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6
    prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:border-b prose-h2:border-neutral-300 dark:prose-h2:border-neutral-700 pb-2
    prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6
    prose-p:text-base prose-p:leading-7
    prose-li:marker:text-accent prose-ul:list-disc prose-ul:ml-6
    prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-medium
    prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-xl prose-pre:border prose-pre:border-border
    prose-a:text-accent prose-a:no-underline hover:prose-a:underline
    prose-img:rounded-xl prose-img:shadow-md
    transition-colors duration-300
  "
        dangerouslySetInnerHTML={{
          __html: htmlContent || "<p>No readme found.</p>",
        }}
      />
    </div>
  );
}
