export type Language = 'en' | 'ar';

export interface Product {
  id: string;
  name: { en: string; ar: string };
  price: string;
  category: { en: string; ar: string };
  image: string;
  description: { en: string; ar: string };
  specs: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { en: 'Black Tourmaline Schorl with Quartz', ar: 'شورل التورمالين الأسود مع الكوارتز' },
    price: 'Price on Demand',
    category: { en: 'Natural Formations', ar: 'تكوينات طبيعية' },
    image: 'https://picsum.photos/seed/tourmaline/1000/1200',
    description: { 
      en: 'A stunning combination of black tourmaline and clear quartz.', 
      ar: 'مزيج مذهل من التورمالين الأسود والكوارتز الشفاف.'
    },
    specs: '155g, 68×53×47mm'
  },
  {
    id: '2',
    name: { en: 'Spessartine Garnet Crystals', ar: 'بلورات عقيق سبيسارتين' },
    price: 'Price on Demand',
    category: { en: 'Rare Specimens', ar: 'عينات نادرة' },
    image: 'https://picsum.photos/seed/garnet/1000/1200',
    description: { 
      en: 'Spessartine Garnet Crystals with Muscovite on Feldspar.', 
      ar: 'بلورات عقيق سبيسارتين مع المسكوفيت على الفلسبار.'
    },
    specs: '580g, 60×113×82mm'
  },
  {
    id: '3',
    name: { en: 'Green Titanite Sphene Crystals', ar: 'بلورات تيتانيت سفين خضراء' },
    price: 'Price on Demand',
    category: { en: 'Collector\'s Grade', ar: 'درجة هواة الجمع' },
    image: 'https://picsum.photos/seed/titanite/1000/1200',
    description: { 
      en: 'Green Titanite Sphene Crystals with Calcite.', 
      ar: 'بلورات تيتانيت سفين خضراء مع الكالسيت.'
    },
    specs: '147g, 45×80×63mm'
  },
  {
    id: '4',
    name: { en: 'Alien Eye Fluorite Crystal', ar: 'كريستال فلوريت "عين الفضائي"' },
    price: 'Price on Demand',
    category: { en: 'Rare Specimens', ar: 'عينات نادرة' },
    image: 'https://picsum.photos/seed/fluorite-alien/1000/1200',
    description: { 
      en: 'Exceptional Alien Eye Fluorite Crystal specimen.', 
      ar: 'عينة استثنائية من كريستال الفلوريت عين الفضائي.'
    },
    specs: '185g, 39×88×50mm'
  },
  {
    id: '5',
    name: { en: 'Celestine Crystals Cluster', ar: 'عنقود بلورات السيليستين' },
    price: 'Price on Demand',
    category: { en: 'Crystal Clusters', ar: 'عناقيد كريستالية' },
    image: 'https://picsum.photos/seed/celestine/1000/1200',
    description: { 
      en: 'Celestine Crystals Cluster with Calcite.', 
      ar: 'عنقود بلورات السيليستين مع الكالسيت.'
    },
    specs: '263g, 39×124×65mm'
  },
  {
    id: '6',
    name: { en: 'Fluorescent Apatite Cluster', ar: 'عنقود أباتيت فلوري' },
    price: 'Price on Demand',
    category: { en: 'Natural Formations', ar: 'تكوينات طبيعية' },
    image: 'https://picsum.photos/seed/apatite/1000/1200',
    description: { 
      en: 'Vibrant Fluorescent Apatite Cluster specimen.', 
      ar: 'عينة عنقود أباتيت فلوري نابضة بالحياة.'
    },
    specs: '495g, 106×77×57mm'
  },
  {
    id: '7',
    name: { en: 'Phantom Fluorite Crystal', ar: 'كريستال فلوريت فانتوم' },
    price: 'Price on Demand',
    category: { en: 'Rare Specimens', ar: 'عينات نادرة' },
    image: 'https://picsum.photos/seed/phantom/1000/1200',
    description: { 
      en: 'Unique Phantom Fluorite Crystal formation.', 
      ar: 'تكوين فريد من كريستال الفلوريت فانتوم.'
    },
    specs: '178g, 36×70×70mm'
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { about: 'About', shop: 'Shop', collections: 'Collections', contact: 'Contact' },
    hero: {
      badge: 'LUXURY NATURAL GEMSTONES',
      title: 'THE ART OF EARTH, THE ESSENCE OF LIGHT',
      subtitle: 'Rare natural gemstones to elevate your space and energy.',
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
      newsletter: 'Join our list for exclusive drops and new arrivals.',
      rights: '© 2025 AURA GEMS — auragems.ae'
    }
  },
  ar: {
    nav: { about: 'عن الشركة', shop: 'المتجر', collections: 'المجموعات', contact: 'اتصل بنا' },
    hero: {
      badge: 'أحجار كريمة طبيعية فاخرة',
      title: 'فن الأرض، جوهر الضوء',
      subtitle: 'أحجار كريمة طبيعية نادرة للارتقاء بمساحتك وطاقتك.',
      cta: 'استكشف المجموعة',
      accent: 'مقرنا في دبي، الإمارات العربية المتحدة'
    },
    process: [
      { id: '01', title: 'مختارة يدوياً', desc: 'يتم اختيار كل عينة بعناية لجمالها الطبيعي وتكوينها البلوري وخصائصها الحيوية.' },
      { id: '02', title: 'طبيعية وغير مقطوعة', desc: 'نحتفي بكل حجر في شكله الخام والأصيل - كما أرادت الطبيعة.' },
      { id: '03', title: 'أصالة مضمونة', desc: 'يأتي كل حجر كريم من أورا مع شهادة أصالة، تتحقق من تكوينه المعدني وجودته.' }
    ],
    collections: {
      title: 'مجموعاتنا',
      items: [
        { title: 'عناقيد كريستالية', subtitle: 'تكوينات طبيعية' },
        { title: 'عينات نادرة', subtitle: 'درجة هواة الجمع' },
        { title: 'أحجار روحانية', subtitle: 'الطاقة والشفاء' }
      ]
    },
    shop: {
      title: 'مجموعة مختارة',
      subtitle: 'مختارة بعناية لهواة الجمع المتميزين.',
      addToCart: 'استفسار',
      viewAll: 'عرض جميع الأحجار',
    },
    about: {
      title: 'عن أورا جيمز',
      content: 'توفر أورا جيمز أحجاراً كريمة طبيعية نادرة في دبي والإمارات العربية المتحدة. سواء كنت تبحث عن قطعة مميزة لديكورك الداخلي أو تسعى للاستفادة من الطاقة الروحية للبلورات الطبيعية، فقد تم اختيار كل حجر في مجموعتنا يدوياً لجماله وأصالته.',
      highlights: ['عينات طبيعية 100%', 'أصالة مضمونة', 'مقرنا في دبي، الإمارات العربية المتحدة']
    },
    footer: { 
      brand: 'أحجار كريمة طبيعية نادرة للديكورات الفاخرة والحياة الروحانية. مقرنا في دبي، نخدم الإمارات العربية المتحدة.',
      services: ['مشاهدة خاصة', 'استفسارات واتساب', 'الشحن داخل الإمارات'],
      newsletter: 'انضم إلى قائمتنا للحصول على الإصدارات الحصرية والوصول الجديد.',
      rights: '© 2025 أورا جيمز — auragems.ae'
    }
  }
};
