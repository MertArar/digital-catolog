import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="mb-5 inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
          Dijital Katalog ve Teklif Yönetim Sistemi
        </span>

        <h1 className="text-5xl font-semibold tracking-tight text-neutral-950 md:text-7xl">
          Ürünlerinizi dijital katalogla sergileyin, teklif taleplerini tek
          yerden yönetin.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Üretici firmalar için modern ürün kataloğu, kategori sistemi ve teklif
          talep altyapısı.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Ürünleri İncele
          </Link>

          <Link
            href="/quote"
            className="rounded-full border border-neutral-200 bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
}