import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactIntro() {
  return (
    <div className="mb-10 max-w-3xl">
      <SectionLabel>İletişim</SectionLabel>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
        Bizimle iletişime geçin.
      </h1>

      <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
        Ürünler, projeler veya teklif süreciyle ilgili sorularınız için bize
        ulaşabilirsiniz.
      </p>
    </div>
  );
}