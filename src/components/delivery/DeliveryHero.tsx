import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function DeliveryHero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <SectionLabel>Teslimat ve Lojistik</SectionLabel>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
            Ürününüzün size nasıl ulaşacağını önceden bilin.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Ürün ölçüsü, ağırlığı, teslimat adresi ve taşıma hassasiyetine göre
            kargo, lojistik veya özel sevkiyat seçenekleri değerlendirilir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Teslimat Hakkında Soru Sor
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-neutral-950 p-6 text-white md:p-8">
          <p className="text-sm font-semibold text-neutral-400">
            Teslimat belirlenirken
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-white">Ürün tipi</p>
              <p className="mt-1 text-sm leading-6 text-neutral-300">
                Küçük ürünler kargo ile, büyük ürünler lojistikle planlanabilir.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <p className="text-sm font-semibold text-white">Teslimat adresi</p>
              <p className="mt-1 text-sm leading-6 text-neutral-300">
                Şehir içi ve şehir dışı teslimat için farklı taşıma yöntemleri
                uygulanabilir.
              </p>
            </div>

            <div className="h-px bg-white/10" />

            <div>
              <p className="text-sm font-semibold text-white">Paketleme</p>
              <p className="mt-1 text-sm leading-6 text-neutral-300">
                Hassas yüzeyler ve özel ölçülü ürünler için korumalı paketleme
                yapılır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}