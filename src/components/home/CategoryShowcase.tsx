import Link from "next/link";
import { homeCategories } from "@/data/catalog";

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
            Kategoriler
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Ürün gruplarını keşfedin.
          </h2>
        </div>

        <Link
          href="/products"
          className="w-fit rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
        >
          Tüm Kategoriler
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {homeCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold text-white">
              {category.name.slice(0, 2)}
            </div>

            <h3 className="text-xl font-semibold text-neutral-950">
              {category.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {category.description}
            </p>

            <div className="mt-6 inline-flex items-center text-sm font-semibold text-neutral-950">
              İncele
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}