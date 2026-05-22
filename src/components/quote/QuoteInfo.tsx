export default function QuoteInfo() {
  const steps = [
    {
      number: "01",
      title: "Talebinizi gönderin",
      description:
        "Ürün, adet, ölçü ve proje detaylarınızı form üzerinden bize iletin.",
    },
    {
      number: "02",
      title: "İhtiyacınız incelensin",
      description:
        "Ekibimiz talebinizi değerlendirir ve gerekirse ek bilgi için size ulaşır.",
    },
    {
      number: "03",
      title: "Size dönüş yapılsın",
      description:
        "Uygun ürün, ölçü ve fiyatlandırma bilgileri sizinle paylaşılır.",
    },
  ];

  return (
    <aside className="h-fit overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 text-white shadow-sm">
      <div className="p-6 md:p-8">
        <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-neutral-300">
          Teklif Süreci
        </span>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
          Talebinizi birkaç adımda bize iletin.
        </h2>

        <p className="mt-4 text-sm leading-6 text-neutral-300">
          Formu doldurduktan sonra ürün, adet ve proje detaylarınıza göre size
          en uygun teklif süreci başlatılır.
        </p>
      </div>

      <div className="px-6 md:px-8">
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.3em] text-neutral-400">
                  {step.number}
                </span>

                <span className="h-px flex-1 bg-white/10" />
              </div>

              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 p-6 md:p-8">
        <div className="rounded-3xl bg-white p-5 text-neutral-950">
          <p className="text-sm font-semibold">Daha hızlı dönüş için</p>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Telefon numaranızı, ilgilendiğiniz ürünü ve varsa ölçü/adet
            bilgisini net yazmanız teklif sürecini hızlandırır.
          </p>
        </div>
      </div>
    </aside>
  );
}