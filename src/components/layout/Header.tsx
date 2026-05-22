import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünler", href: "/products" },
  { label: "Teslimat", href: "/delivery" },
  { label: "İletişim", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold text-white">
            DK
          </div>

          <div>
            <p className="text-sm font-semibold text-neutral-950">
              Dijital Katalog
            </p>
            <p className="text-xs text-neutral-500">
              Teklif Yönetim Sistemi
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-neutral-950 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/quote"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Teklif Al
          </Link>

          <span className="h-6 w-px bg-neutral-200" />

          <LanguageDropdown />
        </div>

        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}