import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ContactIntro />

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </section>
    </main>
  );
}