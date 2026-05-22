import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası | Dijital Katalog",
  description:
    "RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. gizlilik politikası.",
};

const sections = [
  {
    title: "1. Politikanın Amacı ve Kapsamı",
    paragraphs: [
      `Bu Gizlilik Politikası, RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından sunulan internet sitesi, dijital katalog, teklif talep formları ve iletişim kanalları üzerinden elde edilen kişisel verilerin nasıl işlendiğini, korunduğunu, saklandığını ve ilgili kişilerin hangi haklara sahip olduğunu açıklamak amacıyla hazırlanmıştır.`,
      `Bu politika; internet sitemizi ziyaret eden kullanıcılar, ürün ve hizmetlerimiz hakkında bilgi almak isteyen kişiler, teklif formu veya iletişim formu dolduran ziyaretçiler ve bizimle elektronik iletişim kanalları üzerinden iletişime geçen kişiler için geçerlidir.`,
    ],
  },
  {
    title: "2. Veri Sorumlusu",
    paragraphs: [
      `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.’dir.`,
      `Adres: Akademi Mah. Gürbulut Sk. S.Ü Teknoloji Geliştirme Bölgesi Konya Teknokent No: 67 Selçuklu/KONYA`,
      `İletişim: info@dijitalkatalog.com`,
    ],
  },
  {
    title: "3. İşlenen Kişisel Veriler",
    paragraphs: [
      `İnternet sitesi ve formlar üzerinden aşağıdaki kişisel veriler işlenebilir:`,
    ],
    list: [
      `Kimlik bilgileri: Ad, soyad, firma adı gibi bilgiler.`,
      `İletişim bilgileri: Telefon numarası, e-posta adresi ve mesaj içeriği.`,
      `Talep bilgileri: İlgilenilen ürün, adet, ölçü, proje detayı ve teklif talebi açıklamaları.`,
      `İşlem güvenliği bilgileri: IP adresi, erişim zamanı, tarayıcı ve cihaz bilgileri.`,
      `Çerez ve kullanım bilgileri: Site performansı, ziyaret edilen sayfalar ve kullanıcı tercihleri.`,
    ],
  },
  {
    title: "4. Kişisel Verilerin İşlenme Amaçları",
    paragraphs: [
      `Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:`,
    ],
    list: [
      `İletişim taleplerinin alınması ve cevaplandırılması.`,
      `Teklif taleplerinin değerlendirilmesi ve kullanıcıya geri dönüş yapılması.`,
      `Ürün, hizmet ve proje ihtiyaçlarının analiz edilmesi.`,
      `İnternet sitesinin güvenliğinin sağlanması.`,
      `Kullanıcı deneyiminin iyileştirilmesi.`,
      `Yasal yükümlülüklerin yerine getirilmesi.`,
      `Uyuşmazlıkların önlenmesi ve gerektiğinde hukuki süreçlerin yürütülmesi.`,
    ],
  },
  {
    title: "5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri",
    paragraphs: [
      `Kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 5. maddesinde yer alan kişisel veri işleme şartlarına dayanılarak işlenmektedir.`,
    ],
    list: [
      `Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması.`,
      `Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.`,
      `İlgili kişinin kendisi tarafından alenileştirilmiş olması.`,
      `Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.`,
      `İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati için veri işlenmesinin zorunlu olması.`,
      `Gerekli hallerde ilgili kişinin açık rızasının bulunması.`,
    ],
  },
  {
    title: "6. Çerezler ve Benzeri Teknolojiler",
    paragraphs: [
      `İnternet sitemizde kullanıcı deneyimini iyileştirmek, sitenin güvenliğini sağlamak, performansı ölçmek ve bazı temel fonksiyonları çalıştırmak amacıyla çerezler kullanılabilir.`,
      `Zorunlu çerezler, internet sitesinin temel fonksiyonlarının çalışması için kullanılır. Analitik, performans, reklam veya pazarlama amaçlı çerezler ise ancak ilgili mevzuata uygun şekilde açık rıza alınması gereken durumlarda kullanılır.`,
      `Kullanıcılar tarayıcı ayarları üzerinden çerez tercihlerini değiştirebilir, çerezleri silebilir veya engelleyebilir. Ancak bazı çerezlerin devre dışı bırakılması internet sitesinin belirli bölümlerinin düzgün çalışmamasına neden olabilir.`,
    ],
  },
  {
    title: "7. Kişisel Verilerin Aktarılması",
    paragraphs: [
      `Kişisel verileriniz, bu politikada belirtilen amaçların gerçekleştirilmesi için gerekli olduğu ölçüde ve ilgili mevzuata uygun olarak üçüncü kişilerle paylaşılabilir.`,
    ],
    list: [
      `Hosting, sunucu, e-posta ve teknik altyapı hizmet sağlayıcıları.`,
      `Yazılım, bakım, güvenlik ve destek hizmeti alınan iş ortakları.`,
      `Hukuki yükümlülük bulunması halinde yetkili kamu kurum ve kuruluşları.`,
      `Uyuşmazlık halinde avukatlar, danışmanlar ve yetkili merciler.`,
    ],
  },
  {
    title: "8. Kişisel Verilerin Saklanma Süresi",
    paragraphs: [
      `Kişisel veriler, işlendikleri amaç için gerekli olan süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri kadar muhafaza edilir.`,
      `Saklama süresinin sona ermesi veya işleme amacının ortadan kalkması halinde kişisel veriler silinir, yok edilir veya anonim hale getirilir.`,
    ],
  },
  {
    title: "9. Ticari Elektronik İletiler",
    paragraphs: [
      `Kullanıcılara kampanya, tanıtım, bilgilendirme veya pazarlama amacıyla ticari elektronik ileti gönderilmesi gereken hallerde, ilgili mevzuat uyarınca gerekli onay süreçleri işletilir.`,
      `Kullanıcılar, ticari elektronik ileti almayı kabul etmiş olsalar dahi daha sonra bu iletileri almayı reddetme hakkına sahiptir.`,
    ],
  },
  {
    title: "10. Veri Güvenliği",
    paragraphs: [
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti., kişisel verilerin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek, verilerin güvenli şekilde saklanmasını sağlamak amacıyla gerekli teknik ve idari tedbirleri almaya özen gösterir.`,
    ],
    list: [
      `Yetkisiz erişimi önlemeye yönelik erişim kontrolleri uygulanır.`,
      `Veriler mümkün olduğu ölçüde güvenli altyapılar üzerinde saklanır.`,
      `Form ve iletişim verilerine erişim sınırlı kişilerle sınırlandırılır.`,
      `Gerektiğinde yedekleme, loglama ve güvenlik kontrolleri uygulanır.`,
    ],
  },
  {
    title: "11. İlgili Kişinin Hakları",
    paragraphs: [
      `KVKK’nın 11. maddesi kapsamında ilgili kişiler aşağıdaki haklara sahiptir:`,
    ],
    list: [
      `Kişisel verilerinin işlenip işlenmediğini öğrenme.`,
      `Kişisel verileri işlenmişse buna ilişkin bilgi talep etme.`,
      `Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.`,
      `Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri öğrenme.`,
      `Kişisel verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme.`,
      `Kişisel verilerin silinmesini veya yok edilmesini isteme.`,
      `İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.`,
      `Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğranması halinde zararın giderilmesini talep etme.`,
    ],
  },
  {
    title: "12. Başvuru Yöntemi",
    paragraphs: [
      `İlgili kişiler, KVKK kapsamındaki haklarına ilişkin taleplerini yazılı olarak veya mevzuatta belirtilen diğer yöntemlerle RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.’ye iletebilir.`,
      `Başvurularda ad, soyad, iletişim bilgileri, talep konusu ve kimlik tespitine elverişli bilgilerin bulunması gerekir. Başvurular, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılır.`,
    ],
  },
  {
    title: "13. Politika Değişiklikleri",
    paragraphs: [
      `Bu Gizlilik Politikası, mevzuat değişiklikleri, hizmetlerin kapsamı veya teknik altyapıda meydana gelen değişiklikler doğrultusunda güncellenebilir.`,
      `Politikanın güncel hali internet sitesinde yayımlandığı tarihten itibaren geçerli olur.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <Link href="/" className="mb-8 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-sm font-bold text-white">
                DK
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-950">
                  Dijital Katalog
                </p>
                <p className="text-xs text-neutral-500">
                  Yasal Bilgilendirme
                </p>
              </div>
            </Link>

            <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-600">
              Gizlilik
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950">
              Gizlilik Politikası
            </h1>

            <p className="mt-4 text-sm leading-6 text-neutral-600">
              İnternet sitesi, iletişim formu, teklif formu ve dijital katalog
              kullanımı kapsamında kişisel verilerin korunmasına ilişkin genel
              bilgilendirme.
            </p>

            <div className="mt-8 rounded-3xl bg-neutral-950 p-5 text-white">
              <p className="text-sm font-semibold">Son Güncelleme</p>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                22.05.2026
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/kvkk"
                className="rounded-full border border-neutral-200 px-5 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                KVKK Metni
              </Link>

              <Link
                href="/contact"
                className="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                İletişime Geç
              </Link>
            </div>
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="border-b border-neutral-100 p-6 md:p-8">
              <p className="text-sm font-semibold text-neutral-500">
                RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                Gizlilik Politikası
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                Bu politika, internet sitesi ziyaretçilerinin ve form
                kullanıcılarının kişisel verilerinin hangi kapsamda işlendiğine
                ilişkin genel bilgilendirme sunar. Daha ayrıntılı kişisel veri
                işleme açıklamaları için KVKK Aydınlatma Metni’ni de
                inceleyebilirsiniz.
              </p>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[1.5rem] border border-neutral-100 bg-neutral-50/70 p-5 md:p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {section.title}
                  </h3>

                  {section.paragraphs && (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-neutral-700"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-7 text-neutral-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="rounded-[1.5rem] bg-neutral-950 p-5 text-white md:p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  Not
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Bu Gizlilik Politikası genel bilgilendirme amacıyla
                  hazırlanmıştır. Şirketin gerçek veri işleme süreçleri,
                  kullanılan üçüncü taraf servisler, çerez araçları, e-posta
                  altyapısı ve reklam/analitik sistemleri doğrultusunda
                  gerektiğinde güncellenmelidir.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}