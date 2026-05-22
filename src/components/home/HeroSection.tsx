import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="max-w-5xl">
          <SectionLabel>Dijital Ürün Kataloğu</SectionLabel>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
            Ürünleri keşfedin, detayları inceleyin.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Kategorilere ayrılmış ürün kataloğu üzerinden ürünleri kolayca
            inceleyebilir, ürün detaylarına ulaşabilir ve ihtiyacınıza uygun
            çözümler için hızlıca teklif talebi oluşturabilirsiniz.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Ürünleri İncele
            </Link>

            <Link
              href="/quote"
              className="group relative inline-flex overflow-hidden pb-2 text-sm font-semibold text-neutral-950"
            >
              <span>Teklif Talebi Oluştur</span>

              <span className="absolute bottom-0 left-0 h-px w-full bg-neutral-300" />

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-5xl gap-8 border-t border-neutral-200 pt-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-neutral-950">
              Düzenli katalog yapısı
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Ürünler kategori bazlı sunulur, ziyaretçi aradığı ürüne daha
              kolay ulaşır.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-950">
              Ürün odaklı bilgi akışı
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Her ürün için açıklama, teknik bilgi ve teklif yönlendirmesi net
              şekilde verilir.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-950">
              Hızlı teklif süreci
            </p>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Müşteri ilgilendiği ürün için doğrudan teklif talebi
              oluşturabilir.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-neutral-200/60 blur-3xl" />
    </section>
  );
}