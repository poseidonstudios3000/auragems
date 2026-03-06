export type Language = 'en' | 'ur' | 'de' | 'ru' | 'ar';

export interface Product {
  id: string;
  name: { en: string; ur: string; de: string; ru: string; ar: string };
  price: string;
  category: { en: string; ur: string; de: string; ru: string; ar: string };
  image: string;
  description: { en: string; ur: string; de: string; ru: string; ar: string };
  specs: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: {
      en: 'Black Tourmaline with Quartz',
      ur: 'کوارٹز کے ساتھ بلیک ٹورمالین',
      de: 'Schwarzer Turmalin mit Quarz',
      ru: 'Чёрный турмалин с кварцем',
      ar: 'تورمالين أسود مع كوارتز'
    },
    price: 'Price on Demand',
    category: {
      en: 'Natural Formations',
      ur: 'قدرتی ساخت',
      de: 'Natürliche Formationen',
      ru: 'Природные образования',
      ar: 'تكوينات طبيعية'
    },
    image: '/images/webp/black-tourmaline-with-quartz.webp',
    description: {
      en: 'A stunning combination of black tourmaline and clear quartz.',
      ur: 'بلیک ٹورمالین اور شفاف کوارٹز کا شاندار امتزاج۔',
      de: 'Eine atemberaubende Kombination aus schwarzem Turmalin und klarem Quarz.',
      ru: 'Потрясающее сочетание чёрного турмалина и прозрачного кварца.',
      ar: 'مزيج مذهل من التورمالين الأسود والكوارتز الشفاف.'
    },
    specs: '155 gm, 68 × 53 × 47 mm'
  },
  {
    id: '2',
    name: {
      en: 'Alien Eye Fluorite Crystal',
      ur: 'ایلین آئی فلورائٹ کرسٹل',
      de: 'Alien-Eye-Fluorit-Kristall',
      ru: 'Кристалл флюорита «Глаз пришельца»',
      ar: 'كريستال فلوريت عين الفضائي'
    },
    price: 'Price on Demand',
    category: {
      en: 'Rare Specimens',
      ur: 'نایاب نمونے',
      de: 'Seltene Exemplare',
      ru: 'Редкие экземпляры',
      ar: 'عيّنات نادرة'
    },
    image: '/images/webp/alien-eye-fluorite-crystal.webp',
    description: {
      en: 'Exceptional Alien Eye Fluorite Crystal specimen.',
      ur: 'ایلین آئی فلورائٹ کرسٹل کا غیر معمولی نمونہ۔',
      de: 'Außergewöhnliches Alien-Eye-Fluorit-Kristall-Exemplar.',
      ru: 'Исключительный образец флюорита «Глаз пришельца».',
      ar: 'عيّنة استثنائية من كريستال فلوريت عين الفضائي.'
    },
    specs: '185 gm, 39 × 88 × 50 mm'
  },
  {
    id: '3',
    name: {
      en: 'Green Titanite (Sphene) Crystals with Calcite',
      ur: 'کیلسائٹ کے ساتھ سبز ٹائٹنائٹ (اسفین) کرسٹلز',
      de: 'Grüner Titanit (Sphen) mit Calcit',
      ru: 'Зелёный титанит (сфен) с кальцитом',
      ar: 'كريستالات تيتانيت أخضر (سفين) مع كالسيت'
    },
    price: 'Price on Demand',
    category: {
      en: 'Collector\'s Grade',
      ur: 'کلیکٹر گریڈ',
      de: 'Sammlerqualität',
      ru: 'Коллекционное качество',
      ar: 'درجة هواة الجمع'
    },
    image: '/images/webp/green-titanite-sphene-crystals-with-calcite.webp',
    description: {
      en: 'Green Titanite (Sphene) Crystals with Calcite.',
      ur: 'کیلسائٹ کے ساتھ سبز ٹائٹنائٹ (اسفین) کرسٹلز۔',
      de: 'Grüner Titanit (Sphen) Kristalle mit Calcit.',
      ru: 'Кристаллы зелёного титанита (сфена) с кальцитом.',
      ar: 'كريستالات تيتانيت أخضر (سفين) مع كالسيت.'
    },
    specs: '147 gm, 45 × 80 × 63 mm'
  },
  {
    id: '4',
    name: {
      en: 'Spessartine Garnet Crystals with Muscovite on Feldspar',
      ur: 'فیلڈسپار پر مسکووائٹ کے ساتھ اسپیسارٹائن گارنیٹ کرسٹلز',
      de: 'Spessartin-Granat-Kristalle mit Muskovit auf Feldspat',
      ru: 'Кристаллы спессартинового граната с мусковитом на полевом шпате',
      ar: 'كريستالات عقيق سبيسارتين مع مسكوفيت على فلسبار'
    },
    price: 'Price on Demand',
    category: {
      en: 'Rare Specimens',
      ur: 'نایاب نمونے',
      de: 'Seltene Exemplare',
      ru: 'Редкие экземпляры',
      ar: 'عيّنات نادرة'
    },
    image: '/images/webp/spessartine-garnet-crystals-with-muscovite-on-feldspar.webp',
    description: {
      en: 'Spessartine Garnet Crystals with Muscovite on Feldspar.',
      ur: 'فیلڈسپار پر مسکووائٹ کے ساتھ اسپیسارٹائن گارنیٹ کرسٹلز۔',
      de: 'Spessartin-Granat-Kristalle mit Muskovit auf Feldspat.',
      ru: 'Кристаллы спессартинового граната с мусковитом на полевом шпате.',
      ar: 'كريستالات عقيق سبيسارتين مع مسكوفيت على فلسبار.'
    },
    specs: '580 gm, 60 × 113 × 82 mm'
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { about: 'About', shop: 'Shop', collections: 'Collections', contact: 'Contact' },
    scroll: 'SCROLL',
    ourPromise: 'OUR PROMISE',
    ourHeritage: 'OUR HERITAGE',
    certified: 'Certified',
    authenticityBadge: 'AUTHENTICITY\nGUARANTEED',
    priceOnDemand: 'Price on Demand',
    highlightLabels: { natural: '100%', location: 'DUBAI', certified: 'CERTIFIED' },
    hero: {
      badge: 'LUXURY NATURAL GEMSTONES',
      titleLine1: 'THE ART OF EARTH',
      titleLine2: 'THE ESSENCE OF LIGHT',
      subtitle: 'Rare natural gemstones to elevate your space and energy',
      cta: 'EXPLORE COLLECTION',
      accent: 'BASED IN DUBAI, UAE'
    },
    process: [
      { id: '01', title: 'HAND-SELECTED', desc: 'Every specimen is carefully chosen for its natural beauty, crystal formation, and energetic properties.' },
      { id: '02', title: 'NATURAL & UNCUT', desc: 'We celebrate each stone in its raw, authentic form — as nature intended.' },
      { id: '03', title: 'AUTHENTICITY GUARANTEED', desc: 'Every AURA gemstone comes with a certificate of authenticity, verifying its mineral composition and quality.' }
    ],
    collections: {
      title: 'OUR COLLECTIONS',
      items: [
        { title: 'CRYSTAL CLUSTERS', subtitle: 'Natural Formations' },
        { title: 'RARE SPECIMENS', subtitle: 'Collector\'s Grade' },
        { title: 'SPIRITUAL STONES', subtitle: 'Energy & Healing' }
      ]
    },
    shop: {
      title: 'CURATED SELECTION',
      subtitle: 'Handpicked for the discerning collector.',
      addToCart: 'INQUIRE',
      viewAll: 'VIEW ALL GEMS',
    },
    about: {
      title: 'ABOUT AURA GEMS',
      content: 'AURA GEMS brings rare, natural gemstones to Dubai and the UAE. Whether you\'re looking to add a statement piece to your interior or harness the spiritual energy of natural crystals, each stone in our collection has been handpicked for its beauty and authenticity.',
      highlights: ['100% Natural Specimens', 'Authenticity Guaranteed', 'Based in Dubai, UAE']
    },
    footer: {
      brand: 'Rare natural gemstones for luxury interiors and spiritual living. Based in Dubai, serving the UAE.',
      services: ['Private Viewing', 'WhatsApp Inquiries', 'Shipping Within UAE'],
      rights: '© 2025 AURA GEMS — auragems.ae'
    }
  },
  ur: {
    nav: { about: 'ہمارے بارے میں', shop: 'شاپ', collections: 'کلیکشنز', contact: 'رابطہ کریں' },
    scroll: 'سکرول',
    ourPromise: 'ہمارا وعدہ',
    ourHeritage: 'ہماری وراثت',
    certified: 'تصدیق شدہ',
    authenticityBadge: 'اصلیت کی\nضمانت',
    priceOnDemand: 'قیمت درخواست پر',
    highlightLabels: { natural: '100%', location: 'دبئی', certified: 'تصدیق شدہ' },
    hero: {
      badge: 'قدرتی قیمتی پتھر',
      titleLine1: 'زمین کا فن',
      titleLine2: 'روشنی کا جوہر',
      subtitle: 'آپ کی جگہ اور توانائی کو بلند کرنے کے لیے نایاب قدرتی قیمتی پتھر',
      cta: 'کلیکشن دیکھیں',
      accent: 'دبئی، یو اے ای میں واقع'
    },
    process: [
      { id: '01', title: 'ہاتھ سے منتخب', desc: 'ہر نمونہ اپنی قدرتی خوبصورتی، کرسٹل ساخت اور توانائی کی خصوصیات کے لیے احتیاط سے چنا جاتا ہے۔' },
      { id: '02', title: 'قدرتی اور غیر تراشیدہ', desc: 'ہم ہر پتھر کو اس کی خام اور اصلی شکل میں مناتے ہیں — جیسا کہ فطرت نے چاہا۔' },
      { id: '03', title: 'اصلیت کی ضمانت', desc: 'اورا کا ہر قیمتی پتھر اصلیت کے سرٹیفکیٹ کے ساتھ آتا ہے، جو اس کی معدنی ساخت اور معیار کی تصدیق کرتا ہے۔' }
    ],
    collections: {
      title: 'ہماری کلیکشنز',
      items: [
        { title: 'کرسٹل کلسٹرز', subtitle: 'قدرتی ساخت' },
        { title: 'نایاب نمونے', subtitle: 'کلیکٹر گریڈ' },
        { title: 'روحانی پتھر', subtitle: 'توانائی اور شفا' }
      ]
    },
    shop: {
      title: 'منتخب کلیکشن',
      subtitle: 'سمجھدار کلیکٹر کے لیے منتخب۔',
      addToCart: 'استفسار',
      viewAll: 'تمام پتھر دیکھیں',
    },
    about: {
      title: 'اورا جیمز کے بارے میں',
      content: 'اورا جیمز دبئی اور یو اے ای میں نایاب، قدرتی قیمتی پتھر لاتا ہے۔ چاہے آپ اپنے انٹیریئر میں ایک شاندار ٹکڑا شامل کرنا چاہتے ہوں یا قدرتی کرسٹلز کی روحانی توانائی سے فائدہ اٹھانا چاہتے ہوں، ہماری کلیکشن کا ہر پتھر اپنی خوبصورتی اور اصلیت کے لیے ہاتھ سے چنا گیا ہے۔',
      highlights: ['100% قدرتی نمونے', 'اصلیت کی ضمانت', 'دبئی، یو اے ای میں واقع']
    },
    footer: {
      brand: 'لگژری انٹیریئرز اور روحانی زندگی کے لیے نایاب قدرتی قیمتی پتھر۔ دبئی میں واقع، یو اے ای کی خدمت میں۔',
      services: ['پرائیویٹ ویونگ', 'واٹس ایپ استفسارات', 'یو اے ای میں شپنگ'],
      rights: '© 2025 اورا جیمز — auragems.ae'
    }
  },
  de: {
    nav: { about: 'Über uns', shop: 'Shop', collections: 'Kollektionen', contact: 'Kontakt' },
    scroll: 'SCROLLEN',
    ourPromise: 'UNSER VERSPRECHEN',
    ourHeritage: 'UNSER ERBE',
    certified: 'Zertifiziert',
    authenticityBadge: 'ECHTHEIT\nGARANTIERT',
    priceOnDemand: 'Preis auf Anfrage',
    highlightLabels: { natural: '100%', location: 'DUBAI', certified: 'ZERTIFIZIERT' },
    hero: {
      badge: 'LUXUS-NATUREDELSTEINE',
      titleLine1: 'DIE KUNST DER ERDE',
      titleLine2: 'DIE ESSENZ DES LICHTS',
      subtitle: 'Seltene Naturedelsteine für Ihren Raum und Ihre Energie',
      cta: 'KOLLEKTION ENTDECKEN',
      accent: 'MIT SITZ IN DUBAI, VAE'
    },
    process: [
      { id: '01', title: 'HANDVERLESEN', desc: 'Jedes Exemplar wird sorgfältig nach seiner natürlichen Schönheit, Kristallformation und energetischen Eigenschaften ausgewählt.' },
      { id: '02', title: 'NATÜRLICH & UNGESCHLIFFEN', desc: 'Wir feiern jeden Stein in seiner rohen, authentischen Form — so wie die Natur es vorgesehen hat.' },
      { id: '03', title: 'ECHTHEIT GARANTIERT', desc: 'Jeder AURA-Edelstein wird mit einem Echtheitszertifikat geliefert, das seine mineralische Zusammensetzung und Qualität bestätigt.' }
    ],
    collections: {
      title: 'UNSERE KOLLEKTIONEN',
      items: [
        { title: 'KRISTALL-CLUSTER', subtitle: 'Natürliche Formationen' },
        { title: 'SELTENE EXEMPLARE', subtitle: 'Sammlerqualität' },
        { title: 'SPIRITUELLE STEINE', subtitle: 'Energie & Heilung' }
      ]
    },
    shop: {
      title: 'KURATIERTE AUSWAHL',
      subtitle: 'Handverlesen für den anspruchsvollen Sammler.',
      addToCart: 'ANFRAGEN',
      viewAll: 'ALLE EDELSTEINE',
    },
    about: {
      title: 'ÜBER AURA GEMS',
      content: 'AURA GEMS bringt seltene, natürliche Edelsteine nach Dubai und in die VAE. Ob Sie ein Statement-Stück für Ihr Interieur suchen oder die spirituelle Energie natürlicher Kristalle nutzen möchten — jeder Stein in unserer Kollektion wurde handverlesen für seine Schönheit und Authentizität.',
      highlights: ['100% Natürliche Exemplare', 'Echtheit garantiert', 'Mit Sitz in Dubai, VAE']
    },
    footer: {
      brand: 'Seltene Naturedelsteine für luxuriöse Innenräume und spirituelles Leben. Mit Sitz in Dubai, für die VAE.',
      services: ['Private Besichtigung', 'WhatsApp-Anfragen', 'Versand in den VAE'],
      rights: '© 2025 AURA GEMS — auragems.ae'
    }
  },
  ru: {
    nav: { about: 'О нас', shop: 'Магазин', collections: 'Коллекции', contact: 'Контакты' },
    scroll: 'ЛИСТАТЬ',
    ourPromise: 'НАШЕ ОБЕЩАНИЕ',
    ourHeritage: 'НАШЕ НАСЛЕДИЕ',
    certified: 'Сертифицировано',
    authenticityBadge: 'ПОДЛИННОСТЬ\nГАРАНТИРОВАНА',
    priceOnDemand: 'Цена по запросу',
    highlightLabels: { natural: '100%', location: 'ДУБАЙ', certified: 'СЕРТИФИЦИРОВАНО' },
    hero: {
      badge: 'РОСКОШНЫЕ НАТУРАЛЬНЫЕ КАМНИ',
      titleLine1: 'ИСКУССТВО ЗЕМЛИ',
      titleLine2: 'СУЩНОСТЬ СВЕТА',
      subtitle: 'Редкие натуральные камни для вашего пространства и энергии',
      cta: 'СМОТРЕТЬ КОЛЛЕКЦИЮ',
      accent: 'ДУБАЙ, ОАЭ'
    },
    process: [
      { id: '01', title: 'РУЧНОЙ ОТБОР', desc: 'Каждый экземпляр тщательно отобран за его природную красоту, кристаллическую структуру и энергетические свойства.' },
      { id: '02', title: 'НАТУРАЛЬНЫЕ И НЕОБРАБОТАННЫЕ', desc: 'Мы ценим каждый камень в его первозданной, подлинной форме — такой, какой задумала природа.' },
      { id: '03', title: 'ПОДЛИННОСТЬ ГАРАНТИРОВАНА', desc: 'Каждый камень AURA поставляется с сертификатом подлинности, подтверждающим его минеральный состав и качество.' }
    ],
    collections: {
      title: 'НАШИ КОЛЛЕКЦИИ',
      items: [
        { title: 'КРИСТАЛЛИЧЕСКИЕ ДРУЗЫ', subtitle: 'Природные образования' },
        { title: 'РЕДКИЕ ЭКЗЕМПЛЯРЫ', subtitle: 'Коллекционное качество' },
        { title: 'ДУХОВНЫЕ КАМНИ', subtitle: 'Энергия и исцеление' }
      ]
    },
    shop: {
      title: 'ИЗБРАННАЯ КОЛЛЕКЦИЯ',
      subtitle: 'Отобрано вручную для взыскательного коллекционера.',
      addToCart: 'ЗАПРОСИТЬ',
      viewAll: 'ВСЕ КАМНИ',
    },
    about: {
      title: 'ОБ AURA GEMS',
      content: 'AURA GEMS привозит редкие натуральные драгоценные камни в Дубай и ОАЭ. Ищете ли вы эффектный элемент для интерьера или хотите использовать духовную энергию натуральных кристаллов — каждый камень в нашей коллекции отобран вручную за его красоту и подлинность.',
      highlights: ['100% Натуральные образцы', 'Подлинность гарантирована', 'Дубай, ОАЭ']
    },
    footer: {
      brand: 'Редкие натуральные камни для роскошных интерьеров и духовной жизни. Дубай, ОАЭ.',
      services: ['Частный просмотр', 'Запросы через WhatsApp', 'Доставка по ОАЭ'],
      rights: '© 2025 AURA GEMS — auragems.ae'
    }
  },
  ar: {
    nav: { about: 'عن الشركة', shop: 'المتجر', collections: 'المجموعات', contact: 'اتصل بنا' },
    scroll: 'مرّر',
    ourPromise: 'وعدنا',
    ourHeritage: 'تراثنا',
    certified: 'معتمد',
    authenticityBadge: 'الأصالة\nمضمونة',
    priceOnDemand: 'السعر عند الطلب',
    highlightLabels: { natural: '100%', location: 'دبي', certified: 'معتمد' },
    hero: {
      badge: 'أحجار كريمة طبيعية فاخرة',
      titleLine1: 'فَنُّ الأَرْض',
      titleLine2: 'جَوْهَرُ النُّور',
      subtitle: 'أحجار كريمة طبيعية نادرة لرفع مستوى مساحتك وطاقتك',
      cta: 'استكشف المجموعة',
      accent: 'مقرّنا في دبي، الإمارات'
    },
    process: [
      { id: '01', title: 'مُنتقاة يدوياً', desc: 'يتم اختيار كل عيّنة بعناية لجمالها الطبيعي وتكوينها البلوري وخصائصها الطاقية.' },
      { id: '02', title: 'طبيعية وغير مصقولة', desc: 'نحتفي بكل حجر في شكله الخام والأصيل — كما أرادته الطبيعة.' },
      { id: '03', title: 'أصالة مضمونة', desc: 'كل حجر كريم من أورا يأتي مع شهادة أصالة تؤكد تركيبه المعدني وجودته.' }
    ],
    collections: {
      title: 'مجموعاتنا',
      items: [
        { title: 'تجمّعات بلورية', subtitle: 'تكوينات طبيعية' },
        { title: 'عيّنات نادرة', subtitle: 'درجة هواة الجمع' },
        { title: 'أحجار روحانية', subtitle: 'طاقة وشفاء' }
      ]
    },
    shop: {
      title: 'تشكيلة مختارة',
      subtitle: 'مُنتقاة بعناية للجامع المميّز.',
      addToCart: 'استفسار',
      viewAll: 'جميع الأحجار',
    },
    about: {
      title: 'عن أورا جيمز',
      content: 'تقدّم أورا جيمز أحجاراً كريمة طبيعية نادرة إلى دبي والإمارات. سواء كنت تبحث عن قطعة مميّزة لديكورك الداخلي أو ترغب في الاستفادة من الطاقة الروحانية للبلورات الطبيعية، فإن كل حجر في مجموعتنا قد تم انتقاؤه يدوياً لجماله وأصالته.',
      highlights: ['عيّنات طبيعية 100%', 'أصالة مضمونة', 'مقرّنا في دبي، الإمارات']
    },
    footer: {
      brand: 'أحجار كريمة طبيعية نادرة للديكور الفاخر والحياة الروحانية. مقرّنا في دبي، نخدم الإمارات.',
      services: ['مشاهدة خاصة', 'استفسارات واتساب', 'شحن داخل الإمارات'],
      rights: '© 2025 أورا جيمز — auragems.ae'
    }
  }
};
