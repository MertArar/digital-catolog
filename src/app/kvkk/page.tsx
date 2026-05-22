import Link from "next/link";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Dijital Katalog",
  description:
    "Kişisel verilerin korunmasına ilişkin aydınlatma metni ve veri sahibi hakları.",
};

const kvkkSections = [
  {
    title: "Giriş",
    paragraphs: [
      `Özel hayatın gizliliği başta olmak üzere temel hak ve özürlüklerin korunması amacıyla kişisel verilerle ilgili düzenlenen 7 Nisan 2016 tarihli ve 29677 sayılı Resmî Gazete’de yayımlanan 6698 sayılı Kişisel Verilerin Korunması Kanunu ile bu Kanunun “Veri Sorumlusunun Aydınlatma Yükümlülüğü” başlıklı 10. maddesi ve 10 Mart 2018 tarih ve 30356 sayılı Resmî Gazete’de yayımlanan Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca “Aydınlatma Yükümlülüğü”nü yerine getirmek amacıyla bu “Aydınlatma Metni” hazırlanmıştır.`,

      `Kişisel veri sahipleri, kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (bundan böyle “KVK Kanunu” olarak ifade edilecektir) ve sair mevzuat hükümleri gereğince kişisel verileri toplanan, işlenen ve aktarılan kişilerdir.`,

      `Veri sorumlusu ise kişisel verileri bu metinde açıklandığı üzere kaydedebilen, saklayabilen, güncelleyebilen, mevzuatın ya da anlaşmaların izin verdiği veya zorunlu kıldığı durumlarda üçüncü kişiler ile hizmet alan kişinin yakınları ve/veya hizmet alanın çalışanı/sigortalısı olduğu kamu ve/veya özel hukuk tüzel kişileri, diğer kamu ve/veya özel hukuk tüzel kişileri, faaliyetlerini yürütmek üzere hizmet aldığı veya işbirliği yaptığı üçüncü kişilerle paylaşabilen, aktarabilen, sınıflandırılabilen kişidir. Bu hüküm uyarınca Yargıtay Genel Sekreterliği, Yargıtay Başkanlığında koordinasyonu sağlayacak üst düzey birim olarak belirlenmiştir.`,

      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından kişisel verilerin güvenliğine azami hassasiyet gösterilmektedir. Edinilen kişisel veriler bu aydınlatma metninde belirtilen ve RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. giriş yapılması ile kurulan ilişki dışında kullanılmamakta, başka amaçlarla üçüncü şahıs ya da tüzel kişilerle paylaşılmamakta, faaliyet dışı hiçbir nedenle ve ticari amaçlarla kullanılmamakta ya da satılmamaktadır. Kişisel verilerin üçüncü kişilerle paylaşılmasını gerektiren sebeplerin varlığı halinde ise bu bilgiler sadece gerektiği kadar ve ilgili olduğu ölçüde aktarılacaktır.`,

      `Kişisel veriler belirtilen işleme amaçları dışında kullanılmayacak, açık bir rıza olmaksızın ya da ilgili mevzuatta öngörülen sebepler dışında üçüncü kişilere aktarılmayacak veya ifşa edilmeyecektir.`,
    ],
  },
  {
    title:
      "1. Kişisel Verilerin Toplanması, Çerezler Hakkında Bilgilendirme ve Veri Toplanmasının Amacı",
    paragraphs: [
      `Kişisel verilerin toplanması sağlanan hizmete bağlı olarak değişkenlik gösterebilir. Bununla birlikte kişisel veriler otomatik ya da otomatik olmayan yöntemlerle onay veya imza ile tanzim edilen işlemlere ilişkin tüm sözleşmeler, bilgilendirme formları ve sair belgeler ile uzaktan bağlantı ya da veri aktarımı sırasında, iletişim formu ya da Yargıtay Başkanlığına ait ……gov.tr uzantılı tüm e-posta hesapları üzerinden iletilen talepler ile ilgili yapılan her türlü görüşmede internet sitesi, mobil uygulamalar ve benzeri vasıtalarla toplanabilecektir.`,

      `Kişisel verilerin toplanmasındaki amaç; RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. bünyesinde ihtiyaç duyulan hizmetlerin tekilleştirilmesi ve daha az kişisel veri alınması, bilgi güvenliği süreçlerinin yürütülmesi, güvenlik ve risk değerlendirmesi yapılması, erişim yetkilerinin dağılımının sağlanması, internet sitesinin kullanımına dair analiz yapılması, daha iyi hizmet sunmak için iletişim kanallarının kullanıcılara özgü hale getirilmesi, ziyaretçi kayıtlarının oluşturulması ve takibinin sağlanması ile daha iyi ve hızlı bilgiye ulaşılması ve kullanıcı profili oluşturulması, çağrı merkezi kayıtları ile taleplerin takibinin sağlanması ve sonuçlandırılması, iş faaliyetlerinin incelenmesi ve denetlenmesi yoluyla bu faaliyetlerin mevzuata uygun şekilde icra edilmesi, eğitim ve etik alanındaki çalışmalara katkı sağlanması, kanuni yükümlülüklerin veya yetkili idari kuruluşların, kurumların ve kişilerin taleplerinin yerine getirilmesi amaçlarıyla ve gizlilik koşullarına uymak kaydı ile gerektiğinde paylaşmaktır.`,

      `Ayrıca https://www..............com.tr adresli internet sitesi ile mobil uygulamasında çeşitli amaçlarla çerezler kullanmakta ve bu çerezler vasıtasıyla kişisel veriler toplanarak da işlenmektedir. Çerezlerin toplanmasındaki amaç;`,
    ],
    list: [
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. web ve mobil uygulamasının gerekli temel fonksiyonlarını gerçekleştirmek,`,
      `Sistemi ve uygulamayı analiz etmek ve performansını arttırmak,`,
      `Kişiselleştirme ile hedefleme faaliyeti gerçekleştirmek,`,
      `Sistemin işlevselliğini arttırmak ve kullanım kolaylığı sağlamaktır.`,
    ],
    extraParagraphs: [
      `Kullanıcıların RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. sistemine girmiş oldukları bilgilere üçüncü kişilerin erişimi engellenmiş olup kişisel bilgilerin gizliliğini korumak amacıyla sistem ve internet alt yapısı en güvenilir seviyede tutularak gerekli önlemler alınmaktadır.`,

      `Çerezlerin cihazda tutulması, tarayıcıda gerekli ayarlar yapılarak engellenebilecektir. Bu konuda detaylar için tarayıcı üreticisinin yardım seçeneğine başvurulabilir.`,
    ],
  },
  {
    title: "2. Kişisel Veri İşleme İlkeleri",
    paragraphs: [
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti., KVK Kanunun 4. maddesinde “Kişisel Verilerin İşlenme Amaçları” başlığında altında belirtilen amaçlar çerçevesinde KVK Kanunu ve diğer kanunlarda öngörülen usul ve esaslara uygun olarak kişisel verileri işleyebilir.`,

      `Kişisel verilerin işlenmesinde aşağıdaki ilkelere uyulur:`,
    ],
    list: [
      `Hukuka ve dürüstlük kurallarına uygun olma.`,
      `Doğru ve gerektiğinde güncel olma.`,
      `Belirli, açık ve meşru amaçlar için işlenme.`,
      `İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma.`,
      `İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme.`,
    ],
  },
  {
    title: "3. Kişisel Verilerin İşlenmesi",
    paragraphs: [
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından aşağıda yer alanlar dahil ve bunlarla sınırlı olmaksızın bu maddede belirtilen amaçlar ile bağlantılı, sınırlı ve ölçülü şekilde KVK Kanunu’nun 5. ve 8. maddeleri uyarınca ve/veya ilgili mevzuattaki istisnaların varlığı halinde kişisel veriler mevzuat uyarınca gerekli olan hallerde rıza doğrultusunda, aksi hallerde rıza aranmaksızın yukarıdaki amaçlar doğrultusunda işlenebilecektir.`,

      `Kişisel veriler, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda hizmetlerin sunulabilmesi ve bu kapsamda yasadan doğan mesuliyetlerin eksiksiz ve doğru bir şekilde yerine getirebilmesi için işlenmesini gerektiren süre ile sınırlı olarak işlenmekte, sürelerin dolmasının ardından ise silinmekte, yok edilmekte veya anonim hale getirilmektedir.`,

      `Bunların yanında kanunlarda açıkça öngörülen hallerde, veri sorumlusu sıfatıyla Yargıtay Başkanlığının hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olan, ilgili kişinin kendisi tarafından alenileştirilen ve o kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusu sıfatını haiz Yargıtay Başkanlığının meşru menfaatleri için işlenmesi zorunlu olan veriler, bu başlık altında belirtilen sürelerin geçmesi durumunda ancak bu cümlede tahdidi olarak sayılmış amaçların gerçekleştirilmesi için kullanılabilecektir. Bu nedenlerle saklanan kişisel verilere başka bir amaç ile erişilmesine izin verilmeyecek ve ancak zaruri durumlarda bu veriler kullanılabilecektir. Sayılan zaruri durumların sona ermesi halinde kişisel veriler usulüne uygun olarak silinecek, yok edilecek veya anonim hale getirilecektir.`,
    ],
  },
  {
    title: "4. İşlenecek Kişisel Veriler",
    list: [
      `Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası, doğum yeri ve tarihi, medeni hal, cinsiyet ve diğer kimlik verileri`,
      `İletişim Bilgileri: Adres, telefon numarası, elektronik posta adresi ve sair iletişim verileri`,
      `Hukuki İşlem: Adli makamlarla yazışmalardaki bilgiler, mahkemelerden bilgi ve belge talepleri vb.`,
      `İşlem Güvenliği: IP adresi bilgileri, RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. sistemine giriş çıkış bilgileri ile süreleri, şifre ve parola bilgileri v.b.`,
      `Sistem Kullanımında Kullanıcı Alışkanlıklarına İlişkin Bilgiler: Toplanan kişisel veriler, KVK Kanunu tarafından öngörülen temel ilkelere uygun olarak ve KVK Kanunu’nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir. Kişisel verilerin işlenmesi KVK Kanunu ve ilgili mevzuatta sayılan şekillerde söz konusu programa üyelik ve giriş yapıldığı andan itibaren başlayacak ve devam edecektir.`,
    ],
  },
  {
    title:
      "5. İşlenen Kişisel Verilerin Kimlere, Hangi Amaçla ve Nasıl Aktarılabileceği",
    paragraphs: [
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından toplanan kişisel veriler; 6698 sayılı KVK Kanunu’nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları kapsamında belirtilmiş amaçlarla sınırlı olarak, KVK Kanunu’nun 8. ve 9. maddelerine uygun olmak suretiyle Yargıtay ile ilişki içerisinde olan kişilerin hukuki, teknik ve ticari güvenliğinin temini amacıyla üçüncü kişilere ve kurumlara aktarılabilecektir.`,

      `Kişisel verilerin üçüncü kişilerle paylaşılması gereken sebeplerin varlığı halinde ise aktarılan bilgiler sadece gerektiği kadarı ile ve ilgili olduğu ölçüde aktarılacaktır.`,
    ],
  },
  {
    title: "6. KVK Kanunu Gereği Kişisel Verilerin İşlenme Şartları",
    paragraphs: [
      `Kişisel veriler kural olarak ilgili kişinin açık rızası olmaksızın işlenemez.`,

      `Aşağıdaki şartlardan birinin varlığı hâlinde ilgili kişinin açık rızası aranmaksızın kişisel verilerinin işlenmesi mümkündür:`,
    ],
    list: [
      `Kanunlarda açıkça öngörülmesi,`,
      `Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması,`,
      `Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, işlenmesinin gerekli olması,`,
      `Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,`,
      `İlgili kişi tarafından alenileştirilmiş olması,`,
      `Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,`,
      `İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.`,
    ],
  },
  {
    title:
      "7. Kişisel Verilerin Silinmesi, Yok Edilmesi ve Anonim Hale Getirilmesi",
    list: [
      `İlgili mevzuat hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel veriler resen veya ilgili kişinin talebi üzerine veri sorumlusu tarafından silinir, yok edilir veya anonim hâle getirilir.`,
      `Kişisel verilerin silinmesi, yok edilmesi veya anonim hâle getirilmesine ilişkin diğer mevzuat hükümleri saklıdır.`,
    ],
  },
  {
    title: "8. Veri Sahibinin Hakları",
    list: [
      `Kişisel veri işlenip işlenmediğini öğrenme,`,
      `Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,`,
      `Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,`,
      `Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri öğrenme,`,
      `Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,`,
      `KVK Kanunu ve ilgili diğer mevzuat hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,`,
      `İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi halinde kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,`,
      `Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.`,
    ],
  },
  {
    title: "9. Veri Sahibinin Başvuru Şekli",
    paragraphs: [
      `Yukarıdaki başlık altında sıralanan haklara ilişkin talepte bulunulurken, başvuranın kimliğinin tespitine elverişli bilgiler ile KVK Kanunu’nun 11. maddesinde öngörülen ve kullanılması talep edilen hakka yönelik açıklamalar http://www.........com.tr internet adresinde yer alan KVKK Başvuru Formu’na yazılmalı ve doldurulan formun imzalı bir nüshası “Akademi Mah. Gürbulut Sk. S.Ü Teknoloji Geliştirme Bölgesi Konya Teknokent No: 67 Selçuklu/KONYA” adresine posta ile gönderilmelidir. Bu yöntem dışında doldurulan form, kimlik belgesi ile bizzat elden iletilebilir, noter kanalıyla veya 6698 sayılı Kanunu’nun 13. maddesinin 1. fıkrası gereğince bu Kanunda belirtilen diğer yöntemler ile RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.’ye gönderilebilir.`,

      `Başvurular Türkçe yapılmalıdır. Başvurularda, ad ve soyad, başvuru yazılı ise imza, Türkiye Cumhuriyeti vatandaşları için T.C. kimlik numarası (yabancılar için uyruğu, pasaport numarası/kimlik numarası) tebligata esas yerleşim yeri veya işyeri adresi, varsa bildirime esas elektronik posta adresi, telefon veya faks numarası ile talep konusu yazılmalıdır.`,

      `Başvurularda talep edilen hususun açık ve anlaşılır olması, içeriğinin başvuranın şahsı ile ilgili bulunması, başkası adına hareket edilmesi halinde bu konuda özel olarak yetkilendirilmesi ve bu yetkinin belgelendirilmesi, başvuruda kimlik ve adres bilgilerine yer verilmesi gerekir.`,

      `İşbu form üzerinde yer verilen hususlar ile ilgili olarak, hukuki ve teknolojik gelişmeler doğrultusunda değişiklikler yapılabilir.`,
    ],
  },
  {
    title: "10. Veri Sahibine Cevap Verilmesi",
    paragraphs: [
      `Yargıtay Genel Sekreterliğine iletilen haklara ilişkin talepler en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyet doğurması halinde, Kişisel Verileri Koruma Kurulu’nca belirlenen tarifedeki ücret alınacaktır.`,
    ],
  },
];

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-3"
            >
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
              KVKK
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950">
              Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni
            </h1>

            <p className="mt-4 text-sm leading-6 text-neutral-600">
              RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından
              kişisel verilerin işlenmesine ilişkin bilgilendirme metni.
            </p>

            <div className="mt-8 rounded-3xl bg-neutral-950 p-5 text-white">
              <p className="text-sm font-semibold">İletişim Bilgileri</p>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Akademi Mah. Gürbulut Sk. S.Ü Teknoloji Geliştirme Bölgesi
                Konya Teknokent No: 67 Selçuklu/KONYA
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-neutral-200 px-5 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                İletişime Geç
              </Link>

              <Link
                href="/quote"
                className="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Teklif Al
              </Link>
            </div>
          </aside>

          <article className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="border-b border-neutral-100 p-6 md:p-8">
              <p className="text-sm font-semibold text-neutral-500">
                RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                KVKK Aydınlatma Metni
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
                Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                kapsamında kişisel verilerin işlenmesine ilişkin bilgilendirme
                amacıyla hazırlanmıştır.
              </p>
            </div>

            <div className="space-y-8 p-6 md:p-8">
              {kvkkSections.map((section) => (
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

                  {section.extraParagraphs && (
                    <div className="mt-4 space-y-4">
                      {section.extraParagraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-neutral-700"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              <section className="rounded-[1.5rem] bg-neutral-950 p-5 text-white md:p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  İletişim Bilgileri
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Adres: Akademi Mah. Gürbulut Sk. S.Ü Teknoloji Geliştirme
                  Bölgesi Konya Teknokent No: 67 Selçuklu/KONYA
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}