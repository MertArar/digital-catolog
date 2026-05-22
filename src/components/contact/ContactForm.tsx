"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);

  return (
    <form className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
          Mesaj Gönderin
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          Formu doldurun, size en kısa sürede dönüş yapalım.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Ad Soyad
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Adınız ve soyadınız"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Firma Adı
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firma adınız"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            E-posta
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="ornek@firma.com"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Telefon
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="05xx xxx xx xx"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Konu
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Örn: Ürün hakkında bilgi almak istiyorum"
            className="h-12 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-neutral-950"
          >
            Mesajınız
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Sorunuzu, ürün ihtiyacınızı veya proje detaylarınızı yazabilirsiniz."
            className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-950 focus:bg-white"
          />
        </div>
      </div>

      <div className="mt-7 border-t border-neutral-100 pt-6">
        <label className="group flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="kvkk"
            checked={isKvkkAccepted}
            onChange={(event) => setIsKvkkAccepted(event.target.checked)}
            className="sr-only"
          />

          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
              isKvkkAccepted
                ? "scale-100 border-neutral-950 bg-neutral-950"
                : "border-neutral-300 bg-white group-hover:border-neutral-500"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 text-white transition-all duration-300 ${
                isKvkkAccepted
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>

          <span className="text-sm leading-6 text-neutral-600">
            Kişisel verilerimin işlenmesine ilişkin{" "}
            <Link
              href="/kvkk"
              className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
            >
              KVKK metnini okuyunuz
            </Link>
            . Metni okuduğumu ve onayladığımı kabul ediyorum.
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-neutral-500">
            Form gönderimi sonraki aşamada aktif edilecek.
          </p>

          <button
            type="button"
            className="cursor-pointer rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Mesajı Gönder
          </button>
        </div>
      </div>
    </form>
  );
}