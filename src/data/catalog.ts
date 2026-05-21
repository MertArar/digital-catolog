export type ProductCategory = {
  id: number;
  name: string;
  description: string;
  href: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  href: string;
  isFeatured: boolean;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
};

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Ofis Mobilyaları",
    description:
      "Kurumsal ofisler için masa, dolap ve çalışma alanı çözümleri.",
    href: "/products?category=Ofis%20Mobilyaları",
  },
  {
    id: 2,
    name: "Ahşap Ürünler",
    description: "İç mekânlara sıcaklık katan dekoratif ahşap yüzeyler.",
    href: "/products?category=Ahşap%20Ürünler",
  },
  {
    id: 3,
    name: "Endüstriyel Ürünler",
    description: "Üretim ve atölye alanları için dayanıklı ürün grupları.",
    href: "/products?category=Endüstriyel%20Ürünler",
  },
  {
    id: 4,
    name: "Dekoratif Ürünler",
    description: "Mağaza, ofis ve yaşam alanları için şık dekoratif çözümler.",
    href: "/products?category=Dekoratif%20Ürünler",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Yönetici Masası",
    category: "Ofis Mobilyaları",
    description:
      "Kurumsal ofisler için modern çizgilere sahip premium yönetici masası.",
    longDescription:
      "Modern Yönetici Masası, profesyonel çalışma alanları için estetik görünüm ve fonksiyonelliği bir araya getirir. Geniş yüzeyi, dayanıklı malzeme yapısı ve sade çizgileriyle yönetici odaları, toplantı alanları ve modern ofis projeleri için ideal bir çözümdür.",
    href: "/products/1",
    isFeatured: true,
    features: [
      "Geniş ve kullanışlı çalışma yüzeyi",
      "Kurumsal ofis dekorasyonuna uygun modern tasarım",
      "Dayanıklı yüzey kaplaması",
      "Kablo geçişlerine uygun düzenli kullanım alanı",
    ],
    specs: [
      { label: "Kategori", value: "Ofis Mobilyaları" },
      { label: "Kullanım Alanı", value: "Yönetici Odası / Ofis" },
      { label: "Malzeme", value: "Ahşap gövde / dayanıklı yüzey" },
      { label: "Üretim Tipi", value: "Standart veya özel ölçü" },
    ],
  },
  {
    id: 2,
    name: "Ahşap Duvar Paneli",
    category: "Ahşap Ürünler",
    description:
      "İç mekânlara sıcak ve doğal bir atmosfer kazandıran dekoratif panel.",
    longDescription:
      "Ahşap Duvar Paneli; ofis, otel, restoran, mağaza ve konut projelerinde dekoratif yüzey çözümü olarak kullanılır. Mekâna doğal bir karakter kazandırırken sade ve modern bir görünüm sunar.",
    href: "/products/2",
    isFeatured: true,
    features: [
      "Doğal ahşap görünüm",
      "Dekoratif yüzey etkisi",
      "İç mekân projelerine uygun kullanım",
      "Farklı ölçü ve yüzey seçenekleri",
    ],
    specs: [
      { label: "Kategori", value: "Ahşap Ürünler" },
      { label: "Kullanım Alanı", value: "İç Mekân / Dekorasyon" },
      { label: "Malzeme", value: "Ahşap panel yüzey" },
      { label: "Üretim Tipi", value: "Projeye özel uygulanabilir" },
    ],
  },
  {
    id: 3,
    name: "Endüstriyel Çalışma Tezgahı",
    category: "Endüstriyel Ürünler",
    description:
      "Atölye ve üretim alanları için dayanıklı, fonksiyonel çalışma tezgahı.",
    longDescription:
      "Endüstriyel Çalışma Tezgahı, üretim alanlarında uzun süreli ve yoğun kullanıma uygun olacak şekilde tasarlanır. Dayanıklı gövde yapısı ve fonksiyonel çalışma yüzeyiyle atölye, fabrika ve teknik servis alanları için uygundur.",
    href: "/products/3",
    isFeatured: true,
    features: [
      "Yoğun kullanıma uygun sağlam yapı",
      "Üretim ve atölye alanları için ideal",
      "Fonksiyonel çalışma yüzeyi",
      "İhtiyaca göre ölçülendirilebilir yapı",
    ],
    specs: [
      { label: "Kategori", value: "Endüstriyel Ürünler" },
      { label: "Kullanım Alanı", value: "Atölye / Fabrika / Üretim" },
      { label: "Malzeme", value: "Metal gövde / dayanıklı tabla" },
      { label: "Üretim Tipi", value: "Standart veya özel üretim" },
    ],
  },
  {
    id: 4,
    name: "Dekoratif Raf Sistemi",
    category: "Dekoratif Ürünler",
    description:
      "Mağaza, ofis ve yaşam alanları için şık ve modüler raf çözümü.",
    longDescription:
      "Dekoratif Raf Sistemi; ürün sergileme, ofis düzenleme ve iç mekân dekorasyonu için kullanılan modüler bir çözümdür. Farklı alanlara uyarlanabilir yapısıyla hem fonksiyonel hem estetik kullanım sağlar.",
    href: "/products/4",
    isFeatured: false,
    features: [
      "Modüler kullanım",
      "Dekoratif görünüm",
      "Mağaza ve ofis alanlarına uygun",
      "Farklı ölçülerde üretilebilir",
    ],
    specs: [
      { label: "Kategori", value: "Dekoratif Ürünler" },
      { label: "Kullanım Alanı", value: "Mağaza / Ofis / Yaşam Alanı" },
      { label: "Malzeme", value: "Ahşap / metal kombinasyon" },
      { label: "Üretim Tipi", value: "Projeye göre üretim" },
    ],
  },
  {
    id: 5,
    name: "Toplantı Masası",
    category: "Ofis Mobilyaları",
    description:
      "Modern toplantı odaları için geniş yüzeyli, kurumsal masa çözümü.",
    longDescription:
      "Toplantı Masası, kurumsal çalışma alanlarında ekip görüşmeleri, sunumlar ve toplantılar için tasarlanmış geniş yüzeyli bir ofis mobilyasıdır. Modern çizgileriyle profesyonel toplantı odalarına uyum sağlar.",
    href: "/products/5",
    isFeatured: false,
    features: [
      "Geniş toplantı yüzeyi",
      "Kurumsal ofis kullanımına uygun",
      "Modern ve sade tasarım",
      "Farklı kişi kapasitelerine göre üretim",
    ],
    specs: [
      { label: "Kategori", value: "Ofis Mobilyaları" },
      { label: "Kullanım Alanı", value: "Toplantı Odası" },
      { label: "Malzeme", value: "Ahşap yüzey / sağlam taşıyıcı yapı" },
      { label: "Üretim Tipi", value: "Ölçüye göre üretilebilir" },
    ],
  },
  {
    id: 6,
    name: "Ahşap Akustik Panel",
    category: "Ahşap Ürünler",
    description:
      "Mekânlarda hem dekoratif görünüm hem de ses düzenleme sağlayan panel.",
    longDescription:
      "Ahşap Akustik Panel, iç mekânlarda dekoratif görünümle birlikte ses konforunu artırmaya yönelik kullanılan yüzey çözümüdür. Ofis, toplantı odası, restoran ve sosyal alanlarda tercih edilebilir.",
    href: "/products/6",
    isFeatured: false,
    features: [
      "Dekoratif ahşap görünüm",
      "Ses düzenleme desteği",
      "Ofis ve sosyal alanlara uygun",
      "Farklı yüzey ve ölçü seçenekleri",
    ],
    specs: [
      { label: "Kategori", value: "Ahşap Ürünler" },
      { label: "Kullanım Alanı", value: "Ofis / Restoran / Toplantı Odası" },
      { label: "Malzeme", value: "Ahşap akustik yüzey" },
      { label: "Üretim Tipi", value: "Projeye özel uygulanabilir" },
    ],
  },
];

export const homeCategories = productCategories.slice(0, 3);

export const featuredProducts = products.filter((product) => product.isFeatured);