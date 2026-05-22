import Link from "next/link";
import { featuredProducts } from "@/data/catalog";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel>Öne Çıkan Ürünler</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
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

              <div className="mt-6 flex items-center justify-between gap-4">
                <Link
                  href={product.href}
                  className="group/view relative inline-flex items-center gap-2 overflow-hidden pb-2 text-sm font-semibold text-neutral-950"
                >
                  <span>Ürünü İncele</span>

                  <span className="inline-block -rotate-45 text-base leading-none transition-transform duration-300 ease-out group-hover/view:rotate-0">
                    →
                  </span>

                  <span className="absolute bottom-0 left-0 h-px w-full bg-neutral-300" />

                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 ease-out group-hover/view:scale-x-100" />
                </Link>

                <Link
                  href="/quote"
                  className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-950 hover:text-white"
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