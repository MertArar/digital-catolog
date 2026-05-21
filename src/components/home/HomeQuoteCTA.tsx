import Link from "next/link";

export default function HomeQuoteCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-neutral-950 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              İhtiyacınıza uygun ürün için hızlı teklif alın.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300">
              Ürünleri inceleyin, ilgilendiğiniz çözümler için teklif talebi
              oluşturun. Ekibimiz size en kısa sürede dönüş yapsın.
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