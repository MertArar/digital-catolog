import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function DeliveryCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-12">
        <SectionLabel>Teslimat İçin Teklif</SectionLabel>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Ürününüz için en uygun teslimat yöntemini birlikte netleştirelim.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300">
              Ürün, adet, ölçü ve teslimat adresinizi paylaşın. Kargo, lojistik
              veya özel sevkiyat seçeneklerini teklif aşamasında değerlendirelim.
            </p>
          </div>

          <Link
            href="/quote"
            className="w-fit rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Teklif Talebi Oluştur
          </Link>
        </div>
      </div>
    </section>
  );
}