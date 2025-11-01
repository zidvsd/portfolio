"use client";
import { ChevronDown } from "lucide-react";

interface SelectDropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function SelectDropdown({
  selected,
  setSelected,
}: SelectDropdownProps) {
  return (
    <div className="relative flex justify-center mb-6 ">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full  px-4 py-2.5 border cursor-pointer border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-dark-gray text-gray-900 dark:text-neutral-100 focus:ring-2 focus:ring-neutral-500 focus:outline-none appearance-none pr-10"
      >
        <option value="All">All</option>
        <option value="Certificate">Certificate</option>
        <option value="Badge">Badge</option>
      </select>
      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );
}
