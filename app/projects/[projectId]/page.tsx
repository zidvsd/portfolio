import React from "react";
import { TitleCase } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { getRepoReadme } from "@/lib/github";
import { marked } from "marked";
import Image from "next/image";
import projectImages from "@/data/projectImages.json";
import BackButton from "@/components/buttons/BackButton";
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
  return (
    <div className=" py-10 space-y-6 custom-container">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6 tracking-tight">
        {TitleCase(projectId)}
      </h1>
      <div className="flex items-center gap-8">
        <a
          href={`https://github.com/${username}/${projectId}`}
          className="group flex items-center gap-2 hover:text-black/40 dark:hover:text-neutral-600"
        >
          <Github className="size-6 hover-utility group-hover:text-black/40 dark:group-hover:text-neutral-600" />
          <span className="hover-utility">Source Code</span>
        </a>
        {liveDemoUrl ? (
          <a
            href={`${liveDemoUrl}`}
            className="group flex items-center gap-2 hover:text-black/40 dark:hover:text-neutral-600"
          >
            <ExternalLink className="size-6 hover-utility group-hover:text-black/40 dark:group-hover:text-neutral-600" />
            <span className="hover-utility">Live Demo</span>
          </a>
        ) : null}
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
        className="  border-t border-neutral-300 dark:border-neutral-600 pt-6 mt-4 space-y-4
    prose dark:prose-invert
    prose-h1:text-3xl
    prose-h2:text-2xl
    prose-h3:text-xl
    prose-strong:text-foreground
    prose-a:text-accent hover:prose-a:underline
    max-w-none leading-relaxed
  "
        dangerouslySetInnerHTML={{
          __html: htmlContent || "<p> No readme found. </p>",
        }}
      />
    </div>
  );
}
