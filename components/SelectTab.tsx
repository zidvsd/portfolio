"use client";

interface SelectDropdownProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function SelectDropdown({
  selected,
  setSelected,
}: SelectDropdownProps) {
  return (
    <div className="flex justify-center mb-6">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full max-w-xs px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg 
                   bg-white dark:bg-dark-gray text-gray-900 dark:text-neutral-100 
                   focus:ring-2 focus:ring-neutral-500 focus:outline-none"
      >
        <option value="All">All</option>
        <option value="Certificate">Certificate</option>
        <option value="Badge">Badge</option>
      </select>
    </div>
  );
}
