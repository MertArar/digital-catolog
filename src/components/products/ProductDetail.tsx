"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/catalog";

type ProductDetailProps = {
  product: Product;
};

type GalleryImage = {
  src?: string;
  alt: string;
  label: string;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const galleryImages = useMemo<GalleryImage[]>(() => {
    const realImages =
      product.images?.slice(0, 4).map((image, index) => ({
        src: image.src,
        alt: image.alt,
        label: `Görsel ${String(index + 1).padStart(2, "0")}`,
      })) ?? [];

    const fallbackImages = Array.from(
      { length: Math.max(0, 4 - realImages.length) },
      (_, index) => {
        const imageNumber = realImages.length + index + 1;

        return {
          alt: `${product.name} görsel ${imageNumber}`,
          label: `Görsel ${String(imageNumber).padStart(2, "0")}`,
        };
      }
    );

    return [...realImages, ...fallbackImages];
  }, [product]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const selectedImage = galleryImages[selectedImageIndex];

  const showPreviousImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedImageIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImageIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, galleryImages.length]);

  const renderGalleryImage = (
    image: GalleryImage,
    variant: "main" | "thumb" | "lightbox"
  ) => {
    if (image.src) {
      return (
        <img
          src={image.src}
          alt={image.alt}
          className={`h-full w-full ${
            variant === "lightbox"
              ? "object-contain"
              : "object-cover transition duration-500 group-hover:scale-105"
          }`}
        />
      );
    }

    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100">
        <span
          className={`font-semibold text-neutral-300 ${
            variant === "thumb"
              ? "text-3xl"
              : variant === "lightbox"
                ? "text-8xl"
                : "text-7xl"
          }`}
        >
          {product.id.toString().padStart(2, "0")}
        </span>

        <span
          className={`mt-3 font-semibold text-neutral-400 ${
            variant === "thumb" ? "text-[11px]" : "text-sm"
          }`}
        >
          {image.label}
        </span>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
        >
          ← Tüm ürünlere dön
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="group relative flex aspect-[4/3] w-full cursor-zoom-in items-center justify-center overflow-hidden bg-neutral-100"
              >
                {renderGalleryImage(selectedImage, "main")}

                <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-950 shadow-sm backdrop-blur transition group-hover:bg-neutral-950 group-hover:text-white">
                  Büyüt
                </span>
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {galleryImages.slice(1, 4).map((image, index) => {
                const imageIndex = index + 1;
                const isActive = selectedImageIndex === imageIndex;

                return (
                  <button
                    key={image.label}
                    type="button"
                    onClick={() => setSelectedImageIndex(imageIndex)}
                    className={`group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-0.5 hover:shadow-md ${
                      isActive
                        ? "border-neutral-950"
                        : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      {renderGalleryImage(image, "thumb")}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm ring-1 ring-neutral-200">
              {product.category}
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {product.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/quote?product=${product.id}`}
                className="rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Bu Ürün İçin Teklif Al
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                Diğer Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Ürün Özellikleri
            </h2>

            <ul className="mt-6 space-y-4">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm text-neutral-700"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[11px] text-white">
                    ✓
                  </span>
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Teknik Bilgiler
            </h2>

            <div className="mt-6 divide-y divide-neutral-100">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]"
                >
                  <p className="text-sm font-semibold text-neutral-950">
                    {spec.label}
                  </p>
                  <p className="text-sm leading-6 text-neutral-600">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] bg-neutral-950 p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Bu ürün hakkında detaylı bilgi almak ister misiniz?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-300">
                Ürünün ölçü, malzeme, adet veya proje ihtiyacınıza göre
                fiyatlandırılması için teklif talebi oluşturabilirsiniz.
              </p>
            </div>

            <Link
              href={`/quote?product=${product.id}`}
              className="w-fit rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Teklif Talebi Oluştur
            </Link>
          </div>
        </section>
      </section>

      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="group absolute right-5 top-5 z-20 flex h-12 w-12 cursor-pointer items-center justify-center text-white/80 transition hover:text-white"
            aria-label="Galeriyi kapat"
          >
            <span className="absolute h-0.5 w-8 rotate-45 rounded-full bg-current transition-transform duration-300 ease-out group-hover:rotate-[225deg]" />
            <span className="absolute h-0.5 w-8 -rotate-45 rounded-full bg-current transition-transform duration-300 ease-out group-hover:rotate-[135deg]" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center text-5xl font-light text-white/70 transition hover:-translate-x-1 hover:text-white md:left-8"
            aria-label="Önceki görsel"
          >
            ‹
          </button>

          <div
            className="relative flex h-[82vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-950"
            onClick={(event) => event.stopPropagation()}
          >
            {renderGalleryImage(selectedImage, "lightbox")}
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center text-5xl font-light text-white/70 transition hover:translate-x-1 hover:text-white md:right-8"
            aria-label="Sonraki görsel"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </main>
  );
}