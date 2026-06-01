import type { Product } from "@/data/catalog";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  searchQuery?: string;
};

export default function ProductGrid({
  products,
  searchQuery = "",
}: ProductGridProps) {
  const hasSearchQuery = searchQuery.trim().length > 0;

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-950">
          Ürün bulunamadı.
        </h3>

        <p className="mt-2 text-sm text-neutral-600">
          {hasSearchQuery
            ? `"${searchQuery}" aramasına uygun ürün bulunamadı.`
            : "Bu kategoriye ait ürün bulunmuyor."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 2xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}