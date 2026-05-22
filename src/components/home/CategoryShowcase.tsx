import Link from "next/link";
import { homeCategories } from "@/data/catalog";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <SectionLabel>Kategoriler</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Ürün gruplarını hızlıca keşfedin.
          </h2>
        </div>

        <Link
          href="/products"
          className="w-fit rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Tüm Ürünleri Gör
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {homeCategories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="group rounded-[1.5rem] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-xs font-bold text-white">
                {category.name.slice(0, 2)}
              </div>

              <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950">
                →
              </span>
            </div>

            <h3 className="text-lg font-semibold text-neutral-950">
              {category.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {category.description}
            </p>

            <div className="mt-5 text-sm font-semibold text-neutral-950">
              Kategoriyi İncele
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}