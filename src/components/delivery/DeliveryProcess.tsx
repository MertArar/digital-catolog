import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  "Ürün ve teslimat adresi alınır.",
  "Ürünün ölçü, ağırlık ve hassasiyeti değerlendirilir.",
  "Kargo, lojistik veya özel taşıma yöntemi belirlenir.",
  "Sevkiyat planı ve tahmini teslimat bilgisi paylaşılır.",
];

export default function DeliveryProcess() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-white p-6 shadow-sm md:p-10">
        <div className="mb-10">
          <SectionLabel>Süreç</SectionLabel>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Teslimat planı siparişe göre netleşir.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[1.75rem] bg-neutral-50 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                {index + 1}
              </span>

              <p className="mt-5 text-sm font-medium leading-6 text-neutral-800">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}