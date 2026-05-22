import Link from "next/link";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.15-1.15a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

const contactItems = [
  {
    title: "Telefon",
    value: "+90 555 000 00 00",
    description: "Hafta içi 09:00 - 18:00",
    href: "tel:+905550000000",
    icon: <PhoneIcon />,
  },
  {
    title: "E-posta",
    value: "info@dijitalkatalog.com",
    description: "Genel iletişim ve proje talepleri",
    href: "mailto:info@dijitalkatalog.com",
    icon: <MailIcon />,
  },
  {
    title: "Adres",
    value: "Konya, Türkiye",
    description: "Aryap Ahşap & Dekorasyon",
    href: "#map",
    icon: <LocationIcon />,
  },
];

export default function ContactInfo() {
  return (
    <aside className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
        İletişim Bilgileri
      </h2>

      <p className="mt-3 text-sm leading-6 text-neutral-600">
        Size en uygun iletişim kanalından bize ulaşabilirsiniz.
      </p>

      <div className="mt-8 space-y-5">
        {contactItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex cursor-pointer gap-4 rounded-2xl p-3 transition hover:bg-neutral-50"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white">
              {item.icon}
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-500">
                {item.title}
              </p>

              <p className="mt-1 font-semibold text-neutral-950">
                {item.value}
              </p>

              <p className="mt-1 text-sm leading-6 text-neutral-600">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-neutral-950 p-5 text-white">
        <p className="text-sm font-semibold">Teklif almak istiyorsanız</p>

        <p className="mt-2 text-sm leading-6 text-neutral-300">
          Ürün, adet veya ölçü bilgisi için teklif formunu kullanabilirsiniz.
        </p>

        <Link
          href="/quote"
          className="mt-5 inline-flex cursor-pointer rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
        >
          Teklif Formuna Git
        </Link>
      </div>
    </aside>
  );
}