import ProductsIntro from "@/components/products/ProductsIntro";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import ProductSearch from "@/components/products/ProductSearch";
import { productCategories, products } from "@/data/catalog";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
    q?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categoryParam = params?.category;
  const searchQuery = params?.q?.trim() ?? "";

  const selectedCategories = Array.isArray(categoryParam)
    ? categoryParam
    : categoryParam
      ? [categoryParam]
      : [];

  const normalizedSearchQuery = searchQuery.toLocaleLowerCase("tr-TR");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const searchableText = [
      product.name,
      product.category,
      product.description,
      product.longDescription,
      ...product.features,
      ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
    ]
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    const matchesSearch =
      !normalizedSearchQuery ||
      searchableText.includes(normalizedSearchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
        <ProductsIntro />

        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-10">
          <ProductSidebar
            categories={productCategories}
            selectedCategories={selectedCategories}
            searchQuery={searchQuery}
          />

          <div className="space-y-6">
            <ProductSearch
              searchQuery={searchQuery}
              selectedCategories={selectedCategories}
            />

            <ProductGrid products={filteredProducts} searchQuery={searchQuery} />
          </div>
        </div>
      </section>
    </main>
  );
}