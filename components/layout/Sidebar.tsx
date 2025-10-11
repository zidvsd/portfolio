"use client";
import DarkModeToggle from "../buttons/DarkModeToggle";
import Image from "next/image";
import navs from "@/data/navs.json";
import * as Icons from "lucide-react";
import { BadgeCheck } from "lucide-react";
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
            src="/images/profile-picture.jfif"
            alt="profile-picture"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-y-2 items-center">
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-semibold">Rashid Visda</h2>
            <BadgeCheck className="text-blue-accent size-6" />
          </div>
          <p className="text-neutral-600">@zidvsd</p>
          <DarkModeToggle />
        </div>

        {/* Navigation */}
        <nav className="border-t w-full border-neutral-300 flex flex-col items-start justify-center gap-2 py-4">
          {navs.map((nav) => {
            const LucideIcon = (Icons as any)[nav.icon];
            const isActive = path === nav.path;

            return (
              <Link
                key={nav.path}
                href={nav.path}
                className={`w-full rounded-md flex items-center py-2 px-4 gap-2 
    transition-colors duration-300
    ${
      isActive
        ? "!bg-neutral-400 dark:!bg-dark-gray text-foreground dark:text-white"
        : "text-foreground "
    }`}
              >
                {LucideIcon && (
                  <LucideIcon
                    className={`size-5 ${
                      isActive ? "text-accent" : "text-foreground"
                    }`}
                  />
                )}
                <span>{nav.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
