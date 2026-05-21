import Link from "next/link";
import { featuredProducts } from "@/data/catalog";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
            Öne Çıkan Ürünler
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            En çok incelenen ürünler.
          </h2>
        </div>

        <Link
          href="/products"
          className="w-fit rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Tüm Ürünleri Gör
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-neutral-100">
              <span className="text-5xl font-semibold text-neutral-300">
                {product.id.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="p-5">
              <span className="mb-3 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                {product.category}
              </span>

              <h3 className="text-lg font-semibold text-neutral-950">
                {product.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <Link
                  href={product.href}
                  className="inline-flex items-center text-sm font-semibold text-neutral-950"
                >
                  Ürünü İncele
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/quote"
                  className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-950 hover:text-white"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}