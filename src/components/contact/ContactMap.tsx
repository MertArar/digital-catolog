import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactMap() {
  return (
    <section id="map" className="mt-10">
      <div className="mb-5">
        <SectionLabel>Konum</SectionLabel>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950">
          Harita üzerinden konumumuzu inceleyebilirsiniz.
        </h2>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.076203619558!2d32.553484076703654!3d37.92865017194708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d09110bf2910ed%3A0x76a96a20905a5717!2sAryap%20Ah%C5%9Fap%20%26%20Dekorasyon!5e0!3m2!1str!2str!4v1779454858234!5m2!1str!2str"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full"
        />
      </div>
    </section>
  );
}