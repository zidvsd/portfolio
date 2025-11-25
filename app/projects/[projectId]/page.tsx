import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { TitleCase } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { getRepoReadme } from "@/lib/github";
import Image from "next/image";
import projectImages from "@/data/projectImages.json";
import BackButton from "@/components/buttons/BackButton";
import { extractTechIcons } from "@/lib/techIcons";

interface ProjectProps {
  params: { projectId: string };
}

export default async function Page({ params }: ProjectProps) {
  const { projectId } = params;
  const readme = await getRepoReadme(projectId);

  const username = "zidvsd";
  const matchImg = projectImages.find((img) => img.name === projectId);
  const liveDemoMatch = projectImages.find((demo) => demo.name === projectId);
  const liveDemoUrl = liveDemoMatch?.["live-demo"] || null;
  const imageSrc = matchImg ? matchImg.image : "/placeholder.png";

  let techStackIcons = extractTechIcons(readme || "");
  techStackIcons = Array.from(
    new Map(techStackIcons.map((icon) => [icon.alt, icon])).values()
  );

  return (
    <div className="py-10 space-y-6 custom-container">
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

      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden border border-neutral-300 dark:border-neutral-700">
        <Image
          src={imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`}
          alt={`${projectId}-img`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Render README properly */}
      <article className="space-y-2 prose dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {readme || "No README found."}
        </ReactMarkdown>
      </article>
    </div>
  );
}
