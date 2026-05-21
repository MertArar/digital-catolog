import Link from "next/link";
import type { ProductCategory } from "@/data/catalog";

type ProductSidebarProps = {
  categories: ProductCategory[];
  selectedCategory?: string;
};

export default function ProductSidebar({
  categories,
  selectedCategory,
}: ProductSidebarProps) {
  const isAllActive = !selectedCategory || selectedCategory === "all";

  return (
    <aside className="h-fit rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm lg:sticky lg:top-28">
      <h2 className="mb-4 px-3 text-sm font-semibold text-neutral-950">
        Kategoriler
      </h2>

      <nav className="space-y-1">
        <Link
          href="/products"
          className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
            isAllActive
              ? "bg-neutral-950 text-white"
              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
          }`}
        >
          Tüm Ürünler
        </Link>

        {categories.map((category) => {
          const isActive = selectedCategory === category.name;

          return (
            <Link
              key={category.id}
              href={{
                pathname: "/products",
                query: { category: category.name },
              }}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "bg-neutral-950 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 rounded-2xl bg-neutral-100 p-4">
        <p className="text-sm font-semibold text-neutral-950">
          Teklif mi almak istiyorsunuz?
        </p>

        <p className="mt-2 text-sm leading-6 text-neutral-600">
          İlgilendiğiniz ürünleri belirleyip bize hızlıca ulaşabilirsiniz.
        </p>

        <Link
          href="/quote"
          className="mt-4 inline-flex rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Teklif Al
        </Link>
      </div>
    </aside>
  );
}