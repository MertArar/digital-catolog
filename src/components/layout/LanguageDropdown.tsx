"use client";

import { useEffect, useRef, useState } from "react";

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

export default function LanguageDropdown() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex justify-end">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950"
        aria-label="Dil seçimi"
      >
        <span
          className={`${selectedLanguage.flagClass} overflow-hidden rounded-[3px] text-base shadow-sm`}
        />

        <span>{selectedLanguage.code}</span>

        <span
          className={`text-xs text-neutral-400 transition duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ↓
        </span>
      </button>

      <div
        className={`absolute right-0 top-12 z-50 grid w-44 origin-top-right overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] translate-y-0 scale-100 opacity-100"
            : "pointer-events-none grid-rows-[0fr] -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="p-2">
            {languages.map((language) => {
              const isActive = selectedLanguage.code === language.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => {
                    setSelectedLanguage(language);
                    setIsOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition ${
                    isActive
                      ? "bg-neutral-950 text-white"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`${language.flagClass} overflow-hidden rounded-[3px] text-base shadow-sm`}
                    />

                    <span className="font-medium">{language.label}</span>
                  </span>

                  {isActive && <span className="text-xs">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}