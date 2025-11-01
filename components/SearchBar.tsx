"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  query,
  setQuery,
  placeholder = "Search certificates...",
}: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto mb-6">
      <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-dark-gray text-gray-900 dark:text-neutral-100 placeholder-gray-400 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
      />
    </div>
  );
}
