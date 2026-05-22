import DeliveryCTA from "@/components/delivery/DeliveryCTA";
import DeliveryFaq from "@/components/delivery/DeliveryFaq";
import DeliveryHero from "@/components/delivery/DeliveryHero";
import DeliveryInfoCards from "@/components/delivery/DeliveryInfoCards";
import DeliveryOptions from "@/components/delivery/DeliveryOptions";
import DeliveryProcess from "@/components/delivery/DeliveryProcess";

export const metadata = {
  title: "Teslimat ve Lojistik | Dijital Katalog",
  description:
    "Kargo, lojistik, taşımacılık ve ürün teslimat süreçleri hakkında bilgilendirme.",
};

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <DeliveryHero />
      <DeliveryOptions />
      <DeliveryProcess />
      <DeliveryInfoCards />
      <DeliveryFaq />
      <DeliveryCTA />
    </main>
  );
}