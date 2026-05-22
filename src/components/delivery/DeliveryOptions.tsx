import SectionLabel from "@/components/ui/SectionLabel";

const options = [
  {
    title: "Kargo",
    description:
      "Küçük, hafif ve standart paketlenebilir ürünlerde tercih edilir.",
  },
  {
    title: "Lojistik",
    description:
      "Mobilya, ahşap ürün ve büyük hacimli gönderiler için planlanır.",
  },
  {
    title: "Özel Taşıma",
    description:
      "Hassas, özel ölçülü veya tek parça taşınması gereken ürünlerde kullanılır.",
  },
];

export default function DeliveryOptions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <SectionLabel>Taşıma Seçenekleri</SectionLabel>

        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
          Her ürün için aynı teslimat yöntemi kullanılmaz.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {options.map((option, index) => (
          <article
            key={option.title}
            className="rounded-[2rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-neutral-400">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-6 text-xl font-semibold text-neutral-950">
              {option.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {option.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}