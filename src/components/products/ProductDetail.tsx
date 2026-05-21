import Link from "next/link";
import type { Product } from "@/data/catalog";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
        >
          ← Tüm ürünlere dön
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="flex aspect-[4/3] items-center justify-center bg-neutral-100">
              <span className="text-7xl font-semibold text-neutral-300">
                {product.id.toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm ring-1 ring-neutral-200">
              {product.category}
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {product.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/quote?product=${product.id}`}
                className="rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Bu Ürün İçin Teklif Al
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                Diğer Ürünleri İncele
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Ürün Özellikleri
            </h2>

            <ul className="mt-6 space-y-4">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-neutral-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[11px] text-white">
                    ✓
                  </span>
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
              Teknik Bilgiler
            </h2>

            <div className="mt-6 divide-y divide-neutral-100">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]"
                >
                  <p className="text-sm font-semibold text-neutral-950">
                    {spec.label}
                  </p>
                  <p className="text-sm leading-6 text-neutral-600">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] bg-neutral-950 p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Bu ürün hakkında detaylı bilgi almak ister misiniz?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-300">
                Ürünün ölçü, malzeme, adet veya proje ihtiyacınıza göre
                fiyatlandırılması için teklif talebi oluşturabilirsiniz.
              </p>
            </div>

            <Link
              href={`/quote?product=${product.id}`}
              className="w-fit rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Teklif Talebi Oluştur
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}