export type Language = 'en' | 'ur';

export interface Product {
  id: string;
  name: { en: string; ur: string };
  price: string;
  category: { en: string; ur: string };
  image: string;
  description: { en: string; ur: string };
  specs: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { en: 'Black Tourmaline with Quartz', ur: 'کوارٹز کے ساتھ بلیک ٹورمالین' },
    price: 'Price on Demand',
    category: { en: 'Natural Formations', ur: 'قدرتی ساخت' },
    image: '/images/webp/black-tourmaline-with-quartz.webp',
    description: {
      en: 'A stunning combination of black tourmaline and clear quartz.',
      ur: 'بلیک ٹورمالین اور شفاف کوارٹز کا شاندار امتزاج۔'
    },
    specs: '155 gm, 68 × 53 × 47 mm'
  },
  {
    id: '2',
    name: { en: 'Alien Eye Fluorite Crystal', ur: 'ایلین آئی فلورائٹ کرسٹل' },
    price: 'Price on Demand',
    category: { en: 'Rare Specimens', ur: 'نایاب نمونے' },
    image: '/images/webp/alien-eye-fluorite-crystal.webp',
    description: {
      en: 'Exceptional Alien Eye Fluorite Crystal specimen.',
      ur: 'ایلین آئی فلورائٹ کرسٹل کا غیر معمولی نمونہ۔'
    },
    specs: '185 gm, 39 × 88 × 50 mm'
  },
  {
    id: '3',
    name: { en: 'Green Titanite (Sphene) Crystals with Calcite', ur: 'کیلسائٹ کے ساتھ سبز ٹائٹنائٹ (اسفین) کرسٹلز' },
    price: 'Price on Demand',
    category: { en: 'Collector\'s Grade', ur: 'کلیکٹر گریڈ' },
    image: '/images/webp/green-titanite-sphene-crystals-with-calcite.webp',
    description: {
      en: 'Green Titanite (Sphene) Crystals with Calcite.',
      ur: 'کیلسائٹ کے ساتھ سبز ٹائٹنائٹ (اسفین) کرسٹلز۔'
    },
    specs: '147 gm, 45 × 80 × 63 mm'
  },
  {
    id: '4',
    name: { en: 'Spessartine Garnet Crystals with Muscovite on Feldspar', ur: 'فیلڈسپار پر مسکووائٹ کے ساتھ اسپیسارٹائن گارنیٹ کرسٹلز' },
    price: 'Price on Demand',
    category: { en: 'Rare Specimens', ur: 'نایاب نمونے' },
    image: '/images/webp/spessartine-garnet-crystals-with-muscovite-on-feldspar.webp',
    description: {
      en: 'Spessartine Garnet Crystals with Muscovite on Feldspar.',
      ur: 'فیلڈسپار پر مسکووائٹ کے ساتھ اسپیسارٹائن گارنیٹ کرسٹلز۔'
    },
    specs: '580 gm, 60 × 113 × 82 mm'
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { about: 'About', shop: 'Shop', collections: 'Collections', contact: 'Contact' },
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
      newsletter: 'Join our list for exclusive drops and new arrivals.',
      rights: '© 2025 AURA GEMS — auragems.ae'
    }
  },
  ur: {
    nav: { about: 'ہمارے بارے میں', shop: 'شاپ', collections: 'کلیکشنز', contact: 'رابطہ کریں' },
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
      newsletter: 'خصوصی ریلیزز اور نئی آمد کے لیے ہماری فہرست میں شامل ہوں۔',
      rights: '© 2025 اورا جیمز — auragems.ae'
    }
  }
};
