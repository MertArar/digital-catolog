import SectionLabel from "@/components/ui/SectionLabel";

export default function ProductsIntro() {
  return (
    <div className="mb-12 max-w-3xl">
      <SectionLabel>Ürün Kataloğu</SectionLabel>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
        Ürünleri inceleyin, ihtiyacınıza uygun çözüm için teklif alın.
      </h1>

      <p className="mt-5 text-lg leading-8 text-neutral-600">
        Kategorilere ayrılmış ürün kataloğu üzerinden ürünleri inceleyebilir,
        ilgilendiğiniz ürünler için hızlıca teklif talebi oluşturabilirsiniz.
      </p>
    </div>
  );
}