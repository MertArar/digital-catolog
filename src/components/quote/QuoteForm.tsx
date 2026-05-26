"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product, ProductCategory } from "@/data/catalog";

type QuoteFormProps = {
  products: Product[];
  categories: ProductCategory[];
  selectedProductId?: number;
};

type ActiveDropdown = "category" | "product" | null;

export default function QuoteForm({
  products,
  categories,
  selectedProductId,
}: QuoteFormProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const productFromUrl = useMemo(() => {
    return products.find((product) => product.id === selectedProductId);
  }, [products, selectedProductId]);

  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    productFromUrl?.category ?? ""
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    productFromUrl
  );

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const selectedCategoryLabel = selectedCategory || "Kategori seçiniz";

  const selectedProductLabel = selectedProduct
    ? selectedProduct.name
    : selectedCategory
      ? "Ürün seçiniz"
      : "Önce kategori seçiniz";

  useEffect(() => {
    if (!productFromUrl) return;

    setSelectedCategory(productFromUrl.category);
    setSelectedProduct((prev) => {
      if (prev?.id === productFromUrl.id) return prev;
      return productFromUrl;
    });
  }, [productFromUrl]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);

    setSelectedProduct((prev) => {
      if (prev?.category === categoryName) return prev;
      return undefined;
    });

    setActiveDropdown(null);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedCategory(product.category);
    setActiveDropdown(null);
  };

  return (
    <form className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Ad Soyad
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Adınız ve soyadınız"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Firma Adı
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firma adınız"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Telefon
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="05xx xxx xx xx"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            E-posta
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@firma.com"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div ref={dropdownRef} className="contents">
          <div className="relative">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-neutral-950"
            >
              Kategori
            </label>

            <input
              id="category"
              name="category"
              type="hidden"
              value={selectedCategory}
              readOnly
            />

            <button
              type="button"
              onClick={() =>
                setActiveDropdown((prev) =>
                  prev === "category" ? null : "category"
                )
              }
              className={`flex h-12 w-full cursor-pointer items-center justify-between rounded-2xl border px-4 text-left text-sm outline-none transition ${
                activeDropdown === "category"
                  ? "border-neutral-950 bg-white"
                  : "border-neutral-200 bg-neutral-50 hover:bg-white"
              }`}
            >
              <span
                className={
                  selectedCategory ? "text-neutral-950" : "text-neutral-400"
                }
              >
                {selectedCategoryLabel}
              </span>

              <span
                className={`ml-3 text-sm text-neutral-500 transition duration-300 ${
                  activeDropdown === "category" ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </button>

            <div
              className={`absolute left-0 right-0 top-[82px] z-40 grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-out ${
                activeDropdown === "category"
                  ? "grid-rows-[1fr] translate-y-0 opacity-100"
                  : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden p-2">
                <div className="max-h-72 overflow-y-auto pr-2 [scrollbar-color:#d4d4d4_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400">
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const isActive = selectedCategory === category.name;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => handleCategorySelect(category.name)}
                          className={`group flex w-full cursor-pointer items-start justify-between gap-4 rounded-2xl px-4 py-3 text-left transition ${
                            isActive
                              ? "bg-neutral-950 text-white"
                              : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                          }`}
                        >
                          <span>
                            <span className="block text-sm font-semibold">
                              {category.name}
                            </span>

                            <span
                              className={`mt-1 block text-xs ${
                                isActive
                                  ? "text-neutral-300"
                                  : "text-neutral-500"
                              }`}
                            >
                              {category.description}
                            </span>
                          </span>

                          {isActive && (
                            <span className="mt-1 text-xs font-semibold">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="product"
              className="mb-2 block text-sm font-semibold text-neutral-950"
            >
              İlgilenilen Ürün
            </label>

            <input
              id="product"
              name="product"
              type="hidden"
              value={selectedProduct ? selectedProduct.id : ""}
              readOnly
            />

            <button
              type="button"
              disabled={!selectedCategory}
              onClick={() => {
                if (!selectedCategory) return;

                setActiveDropdown((prev) =>
                  prev === "product" ? null : "product"
                );
              }}
              className={`flex h-12 w-full items-center justify-between rounded-2xl border px-4 text-left text-sm outline-none transition ${
                !selectedCategory
                  ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400"
                  : activeDropdown === "product"
                    ? "cursor-pointer border-neutral-950 bg-white"
                    : "cursor-pointer border-neutral-200 bg-neutral-50 hover:bg-white"
              }`}
            >
              <span
                className={
                  selectedProduct ? "text-neutral-950" : "text-neutral-400"
                }
              >
                {selectedProductLabel}
              </span>

              <span
                className={`ml-3 text-sm text-neutral-500 transition duration-300 ${
                  activeDropdown === "product" ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </button>

            <div
              className={`absolute left-0 right-0 top-[82px] z-30 grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-out ${
                activeDropdown === "product"
                  ? "grid-rows-[1fr] translate-y-0 opacity-100"
                  : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden p-2">
                <div className="max-h-72 overflow-y-auto pr-2 [scrollbar-color:#d4d4d4_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400">
                  <div className="space-y-1">
                    {filteredProducts.map((product) => {
                      const isActive = selectedProduct?.id === product.id;

                      return (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleProductSelect(product)}
                          className={`group flex w-full cursor-pointer items-start justify-between gap-4 rounded-2xl px-4 py-3 text-left transition ${
                            isActive
                              ? "bg-neutral-950 text-white"
                              : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                          }`}
                        >
                          <span>
                            <span className="block text-sm font-semibold">
                              {product.name}
                            </span>

                            <span
                              className={`mt-1 block text-xs ${
                                isActive
                                  ? "text-neutral-300"
                                  : "text-neutral-500"
                              }`}
                            >
                              {product.description}
                            </span>
                          </span>

                          {isActive && (
                            <span className="mt-1 text-xs font-semibold">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Adet / Miktar
          </label>

          <input
            id="quantity"
            name="quantity"
            type="text"
            placeholder="Örn: 10 adet"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Talep Detayı
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Ölçü, renk, malzeme, proje detayı veya özel talebinizi yazabilirsiniz."
            className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-neutral-100 pt-6">
        <label className="group flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="kvkk"
            checked={isKvkkAccepted}
            onChange={(event) => setIsKvkkAccepted(event.target.checked)}
            className="sr-only"
          />

          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
              isKvkkAccepted
                ? "scale-100 border-neutral-950 bg-neutral-950"
                : "border-neutral-300 bg-white group-hover:border-neutral-500"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 text-white transition-all duration-300 ${
                isKvkkAccepted
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
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

          <span className="text-sm leading-6 text-neutral-600">
            Kişisel verilerimin işlenmesine ilişkin{" "}
            <Link
              href="/kvkk"
              className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
            >
              KVKK metnini okuyunuz
            </Link>
            . Teklif talebi oluşturmak için metni okuduğumu ve onayladığımı
            kabul ediyorum.
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-neutral-500">
            Form gönderimi sonraki aşamada veritabanı ve e-posta bildirimiyle
            aktif edilecek.
          </p>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Talebi Gönder
          </button>
        </div>
      </div>
    </form>
  );
}