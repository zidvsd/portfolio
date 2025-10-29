"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-neutral-400 flex gap-2 items-center cursor-pointer hover-utility hover:text-black dark:hover:text-white"
    >
      <ArrowLeft />
      <p>Back</p>
    </button>
  );
}
