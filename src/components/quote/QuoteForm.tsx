"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "@/data/catalog";

type QuoteFormProps = {
  products: Product[];
  selectedProductId?: number;
};

export default function QuoteForm({
  products,
  selectedProductId,
}: QuoteFormProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    () => products.find((product) => product.id === selectedProductId)
  );

  const selectedProductLabel = useMemo(() => {
    return selectedProduct ? selectedProduct.name : "Ürün seçiniz";
  }, [selectedProduct]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <div ref={dropdownRef} className="relative">
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
            onClick={() => setIsProductDropdownOpen((prev) => !prev)}
            className={`flex h-12 w-full cursor-pointer items-center justify-between rounded-2xl border px-4 text-left text-sm outline-none transition ${
              isProductDropdownOpen
                ? "border-neutral-950 bg-white"
                : "border-neutral-200 bg-neutral-50 hover:bg-white"
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
                isProductDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ↓
            </span>
          </button>

          <div
            className={`absolute left-0 right-0 top-[82px] z-30 grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-out ${
              isProductDropdownOpen
                ? "grid-rows-[1fr] translate-y-0 opacity-100"
                : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden p-2">
              <div className="max-h-72 overflow-y-auto pr-2 [scrollbar-color:#d4d4d4_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400">
                <div className="space-y-1">
                  {products.map((product) => {
                    const isActive = selectedProduct?.id === product.id;

                    return (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsProductDropdownOpen(false);
                        }}
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
                              isActive ? "text-neutral-300" : "text-neutral-500"
                            }`}
                          >
                            {product.category}
                          </span>
                        </span>

                        {isActive && (
                          <span className="mt-1 text-xs font-semibold">✓</span>
                        )}
                      </button>
                    );
                  })}
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