"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type ProductSearchProps = {
  searchQuery?: string;
  selectedCategories?: string[];
};

export default function ProductSearch({
  searchQuery = "",
  selectedCategories = [],
}: ProductSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState(searchQuery);

  const selectedCategoriesKey = useMemo(() => {
    return selectedCategories.join("||");
  }, [selectedCategories]);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const params = new URLSearchParams();

      const activeCategories = selectedCategoriesKey
        ? selectedCategoriesKey.split("||")
        : [];

      activeCategories.forEach((category) => {
        params.append("category", category);
      });

      const trimmedQuery = query.trim();

      if (trimmedQuery) {
        params.set("q", trimmedQuery);
      }

      const queryString = params.toString();

      router.replace(queryString ? `/products?${queryString}` : "/products", {
        scroll: false,
      });
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [query, selectedCategoriesKey, router]);

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="relative">
      <div className="group relative flex h-16 items-center rounded-[1.75rem] border border-neutral-200 bg-white px-5 shadow-sm transition duration-300 focus-within:border-neutral-400 focus-within:shadow-md">
        <span className="pointer-events-none mr-4 flex shrink-0 items-center justify-center text-neutral-400 transition duration-300 group-focus-within:text-neutral-700">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 21l-4.35-4.35" />
            <circle cx="11" cy="11" r="7" />
          </svg>
        </span>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ürün adı, kategori veya özellik ara..."
          className="h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-neutral-950 outline-none placeholder:text-neutral-400 md:text-base"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="ml-4 flex h-9 w-9 cursor-pointer items-center justify-center text-2xl font-light text-neutral-400 transition hover:text-neutral-700"
            aria-label="Aramayı temizle"
          >
            ×
          </button>
        )}
      </div>

      {query && (
        <p className="mt-3 px-2 text-sm text-neutral-500">
          “{query}” için sonuçlar listeleniyor.
        </p>
      )}
    </div>
  );
}