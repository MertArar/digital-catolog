"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Teslimat ücreti ürün fiyatına dahil mi?",
    answer:
      "Teslimat ücreti ürünün ölçüsüne, ağırlığına, teslimat adresine ve seçilecek taşıma yöntemine göre değişebilir. Bu nedenle teklif aşamasında ayrıca netleştirilir.",
  },
  {
    question: "Her ürün kargo ile gönderilebilir mi?",
    answer:
      "Hayır. Küçük ve standart paketlenebilir ürünler kargo ile gönderilebilir. Büyük, hassas veya özel üretim ürünlerde lojistik ya da özel taşıma yöntemi tercih edilebilir.",
  },
  {
    question: "Şehir dışına teslimat yapılıyor mu?",
    answer:
      "Evet. Şehir dışı teslimatlarda ürünün türüne göre lojistik firma, ambar, kargo veya özel sevkiyat seçenekleri değerlendirilir.",
  },
  {
    question: "Ürün teslim alınırken nelere dikkat edilmeli?",
    answer:
      "Ürünü teslim alırken paket ve ürün kontrolü yapılması önerilir. Hasar görülmesi halinde teslimat sırasında tutanak tutulması ve bizimle iletişime geçilmesi gerekir.",
  },
];

export default function DeliveryFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>Sık Sorulanlar</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Teslimat hakkında merak edilenler.
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-600">
            En sık sorulan teslimat sorularını burada topladık. Daha özel bir
            durum varsa iletişim formundan bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-neutral-950 md:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-neutral-400 transition duration-300 ${
                      isOpen ? "rotate-45 text-neutral-950" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}