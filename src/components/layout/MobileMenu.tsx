"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
};

const languages = [
  {
    code: "TR",
    label: "Türkçe",
    flagClass: "fi fi-tr",
  },
  {
    code: "EN",
    label: "English",
    flagClass: "fi fi-gb",
  },
  {
    code: "DE",
    label: "Deutsch",
    flagClass: "fi fi-de",
  },
];

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-950 shadow-sm transition hover:bg-neutral-100"
        aria-label="Mobil menüyü aç"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between">
          <span
            className={`h-0.5 w-full rounded-full bg-neutral-950 transition duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-neutral-950 transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-full rounded-full bg-neutral-950 transition duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-x-4 top-24 z-50 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/99 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="p-4">
          <div className="mb-4 rounded-3xl bg-neutral-950 p-5 text-white">
            <p className="text-sm font-semibold">Dijital Katalog</p>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Ürünleri inceleyin, katalog detaylarına ulaşın ve hızlıca teklif
              talebi oluşturun.
            </p>
          </div>

          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
              >
                <span>{link.label}</span>
                <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950">
                  →
                </span>
              </Link>
            ))}
          </nav>

          <div className="my-4 h-px bg-neutral-100" />

          <div>
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Dil Seçimi
            </p>

            <div className="grid grid-cols-3 gap-2">
              {languages.map((language) => {
                const isActive = selectedLanguage.code === language.code;

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => setSelectedLanguage(language)}
                    className={`flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border px-2.5 py-2 text-xs font-semibold transition ${
                      isActive
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                    }`}
                  >
                    <span
                      className={`${language.flagClass} overflow-hidden rounded-[3px] text-base shadow-sm`}
                    />
                    <span>{language.code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 grid gap-2">
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Teklif Al
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}