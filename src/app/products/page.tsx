import ProductsIntro from "@/components/products/ProductsIntro";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { productCategories, products } from "@/data/catalog";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const selectedCategory = params?.category;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProductsIntro />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <ProductSidebar
            categories={productCategories}
            selectedCategory={selectedCategory}
          />

          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </main>
  );
}