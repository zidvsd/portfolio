"use client";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-neutral-400 flex gap-2 items-center"
    >
      <ArrowLeft />
      <p>Back</p>
    </button>
  );
}
