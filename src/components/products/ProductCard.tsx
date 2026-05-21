import Link from "next/link";
import type { Product } from "@/data/catalog";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
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

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            href={product.href}
            className="inline-flex items-center text-sm font-semibold text-neutral-950"
          >
            Ürünü İncele
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
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
  );
}