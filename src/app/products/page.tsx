import ProductsIntro from "@/components/products/ProductsIntro";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { productCategories, products } from "@/data/catalog";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = params?.category;

  const selectedCategories = Array.isArray(categoryParam)
    ? categoryParam
    : categoryParam
      ? [categoryParam]
      : [];

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
        <ProductsIntro />

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-10">
          <ProductSidebar
            categories={productCategories}
            selectedCategories={selectedCategories}
          />

          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  );
}