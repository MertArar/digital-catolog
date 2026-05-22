import Link from "next/link";

const footerLinks = [
  {
    title: "Sayfalar",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Ürünler", href: "/products" },
      { label: "Teklif Al", href: "/quote" },
      { label: "İletişim", href: "/contact" },
    ],
  },
  {
    title: "Katalog",
    links: [
      { label: "Ofis Mobilyaları", href: "/products?category=Ofis%20Mobilyaları" },
      { label: "Ahşap Ürünler", href: "/products?category=Ahşap%20Ürünler" },
      { label: "Endüstriyel Ürünler", href: "/products?category=Endüstriyel%20Ürünler" },
      { label: "Dekoratif Ürünler", href: "/products?category=Dekoratif%20Ürünler" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
      { label: "Gizlilik Politikası", href: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold text-white">
                DK
              </div>

              <div>
                <p className="text-base font-semibold text-neutral-950">
                  Dijital Katalog
                </p>
                <p className="text-sm text-neutral-500">
                  Teklif Yönetim Sistemi
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
              Üretici firmalar için modern ürün kataloğu, kategori yapısı ve
              teklif talep sürecini bir araya getiren dijital katalog altyapısı.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Ürünleri İncele
              </Link>

              <Link
                href="/quote"
                className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                Teklif Al
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-neutral-950">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center text-sm text-neutral-600 transition hover:text-neutral-950"
                      >
                        <span className="mr-2 h-px w-0 bg-neutral-950 transition-all duration-300 group-hover:w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-100 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">
            © 2026 Dijital Katalog. Tüm hakları saklıdır.
          </p>

          <p className="text-sm text-neutral-500">
            Modern katalog ve teklif yönetim altyapısı.
          </p>
        </div>
      </div>
    </footer>
  );
}