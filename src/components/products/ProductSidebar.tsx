"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ProductCategory } from "@/data/catalog";

type ProductSidebarProps = {
  categories: ProductCategory[];
  selectedCategories?: string[];
};

export default function ProductSidebar({
  categories,
  selectedCategories = [],
}: ProductSidebarProps) {
  const router = useRouter();

  const selectedCategoriesKey = selectedCategories.join("||");

  const [checkedCategories, setCheckedCategories] =
    useState<string[]>(selectedCategories);

  useEffect(() => {
    const nextSelectedCategories = selectedCategoriesKey
      ? selectedCategoriesKey.split("||")
      : [];

    setCheckedCategories(nextSelectedCategories);
  }, [selectedCategoriesKey]);

  const toggleCategory = (categoryName: string) => {
    setCheckedCategories((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((item) => item !== categoryName);
      }

      return [...prev, categoryName];
    });
  };

  const applyFilters = () => {
    if (checkedCategories.length === 0) {
      router.push("/products");
      return;
    }

    const params = new URLSearchParams();

    checkedCategories.forEach((category) => {
      params.append("category", category);
    });

    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    setCheckedCategories([]);
    router.push("/products");
  };

  return (
    <aside className="h-fit rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Filtrele
        </p>

        <h2 className="mt-2 text-xl font-semibold tracking-tight text-neutral-950">
          Kategoriler
        </h2>
      </div>

      <div className="space-y-2">
        {categories.map((category) => {
          const isChecked = checkedCategories.includes(category.name);

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => toggleCategory(category.name)}
              className={`group flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl px-3 py-3 text-left transition ${
                isChecked
                  ? "bg-neutral-100 text-neutral-950"
                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
                    isChecked
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-300 bg-white text-transparent group-hover:border-neutral-500"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-3.5 w-3.5 transition ${
                      isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>

                <span className="text-sm font-semibold">{category.name}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-2">
        <button
          type="button"
          onClick={applyFilters}
          className="cursor-pointer rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Uygula
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="cursor-pointer rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
        >
          Filtreleri Temizle
        </button>
      </div>
    </aside>
  );
}