import SectionLabel from "@/components/ui/SectionLabel";

const infos = [
  {
    title: "Teslimat süresi değişebilir",
    description:
      "Stok, üretim, şehir ve taşıma yöntemine göre teslimat süresi farklılık gösterebilir.",
  },
  {
    title: "Hasar kontrolü önemlidir",
    description:
      "Ürün teslim alınırken paket ve ürün kontrolü yapılması önerilir.",
  },
  {
    title: "Şehir dışı gönderim mümkündür",
    description:
      "Şehir dışı teslimatlar ürün tipine göre lojistik veya özel sevkiyatla planlanabilir.",
  },
];

export default function DeliveryInfoCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <SectionLabel>Bilmeniz Gerekenler</SectionLabel>

        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
          Teslimat öncesi kısa notlar.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {infos.map((info) => (
          <article
            key={info.title}
            className="rounded-[2rem] bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-neutral-950">
              {info.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-600">
              {info.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}