"use client";
import DarkModeToggle from "../buttons/DarkModeToggle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TextAlignJustify, BadgeCheck } from "lucide-react";
import { useState } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import navs from "@/data/navs.json";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const path = usePathname();
  return (
    <div className="sticky top-0 bg-[#FAFAFA] dark:bg-dark-gray py-4">
      <div className="custom-container flex justify-between items-center ">
        <div
          className={`flex md:flex-col items-center gap-4 ${
            isToggle ? "flex-col" : "flex"
          }`}
        >
          <div className={` relative  ${isToggle ? "size-20" : "size-16"} `}>
            {" "}
            <Image
              fill
              className="object-cover rounded-full"
              src={"/images/profile-picture.png"}
              priority
              alt="profile-pic"
            />
          </div>
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-semibold text-foreground">
              Rashid Visda
            </h2>
            <BadgeCheck className="text-accent size-6" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <DarkModeToggle />
          <TextAlignJustify onClick={() => setIsToggle(!isToggle)} />
        </div>
      </div>
      {isToggle ? (
        <nav className="px-6 custom-container w-full border-neutral-300 flex flex-col items-start justify-center gap-2 pt-4 mt-2 border-t">
          {navs.map((nav) => {
            const iconsMap = Icons as unknown as Record<string, LucideIcon>;
            const LucideIcon = iconsMap[nav.icon as keyof typeof Icons];
            const isActive = path === nav.path;

            return (
              <Link
                key={nav.path}
                href={nav.path}
                className={`w-full group text-xl rounded-md flex items-center py-2 px-4 gap-2 
transition-colors  duration-300 hover:bg-gray  
${
  isActive
    ? "bg-gray "
    : " hover:scale-105 hover-utility hover:text-foreground text-neutral-500 "
}`}
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
      ) : (
        ""
      )}
    </div>
  );
}
