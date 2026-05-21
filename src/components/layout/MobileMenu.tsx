"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navLinks: NavLink[];
};

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-xl text-neutral-950"
        aria-label="Mobil menüyü aç"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute left-4 right-4 top-16 rounded-3xl border border-neutral-200 bg-white p-4 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}