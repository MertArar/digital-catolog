import QuoteForm from "@/components/quote/QuoteForm";
import QuoteInfo from "@/components/quote/QuoteInfo";
import QuoteIntro from "@/components/quote/QuoteIntro";
import { products } from "@/data/catalog";

type QuotePageProps = {
  searchParams?: Promise<{
    product?: string;
  }>;
};

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const selectedProductId = params?.product ? Number(params.product) : undefined;

  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <QuoteIntro />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
          <div className="h-fit lg:sticky lg:top-28">
            <QuoteForm
              products={products}
              selectedProductId={selectedProductId}
            />
          </div>

          <QuoteInfo />
        </div>
      </section>
    </main>
  );
}