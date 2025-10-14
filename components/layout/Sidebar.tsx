"use client";
import DarkModeToggle from "../buttons/DarkModeToggle";
import Image from "next/image";
import navs from "@/data/navs.json";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ArrowRight } from "lucide-react";
import type { Icon as LucideIconType } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  return (
    <div>
      <div className="flex flex-col gap-y-4 items-center justify-center text-center">
        {/* Profile Picture */}
        <div className="size-32 relative border border-neutral-200 rounded-full">
          <Image
            className="object-cover rounded-full"
            fill
            src="/images/profile-picture.png"
            alt="profile-picture"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-y-2  items-center">
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-semibold">Rashid Visda</h2>
            <BadgeCheck className="text-blue-accent size-6" />
          </div>
          <p className="text-neutral-600">@zidvsd</p>
          <DarkModeToggle />
        </div>

        {/* Navigation */}
        <nav className="border-t w-full border-neutral-300 flex flex-col items-start justify-center gap-2 py-4 mt-2">
          {navs.map((nav) => {
            const iconsMap = Icons as unknown as Record<string, LucideIcon>;
            const LucideIcon = iconsMap[nav.icon as keyof typeof Icons];
            const isActive = path === nav.path;

            return (
              <Link
                key={nav.path}
                href={nav.path}
                className={`w-full group text-xl rounded-md flex items-center py-2 px-4 gap-2 
transition-colors duration-300 hover:bg-gray 
${isActive ? "bg-gray" : "text-foreground hover:scale-105 hover-utility"}`}
              >
                {LucideIcon && (
                  <LucideIcon className="size-5 group-hover:rotate-[-20deg] hover-utility" />
                )}
                <span>{nav.name}</span>
                {isActive && (
                  <ArrowRight className="ml-auto size-4 text-off-gray" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
