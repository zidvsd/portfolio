"use client";
import Image from "next/image";
import aboutData from "../../data/about.json";
import Education from "@/components/section/about/Education";
import WorkExperience from "@/components/section/about/WorkExperience";
export default function Page() {
  return (
    <section className="custom-container space-y-2 pt-4 lg:pt-8">
      {/* About Section */}
      <h1 className="text-2xl font-semibold">About</h1>
      <h3 className="text-neutral-500">A brief introduction to who I am.</h3>

      <article className="leading-8 border-t w-full dark:border-t-neutral-500 space-y-4 pt-6 mt-6 dark:text-neutral-400">
        <p>{aboutData.about.introduction}</p>
        <p>{aboutData.about.summary}</p>
        <p>{aboutData.about.mindset}</p>
        <p>{aboutData.about.closing}</p>

        <p className="font-semibold">Best regards,</p>

        <Image
          src="/signature.png"
          alt="signature"
          width={160}
          height={40}
          className="object-contain"
        />
      </article>

      {/* Work Experience Section */}
      <section className="border-t w-full dark:border-t-neutral-500  pt-6 mt-12">
        <WorkExperience />
      </section>

      <section className="border-t w-full dark:border-t-neutral-500  pt-6 mt-12">
        <Education />
      </section>
    </section>
  );
}
