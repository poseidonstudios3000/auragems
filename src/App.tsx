import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Globe, Menu, X, ChevronRight, Instagram, Facebook, Twitter, ArrowUpRight, Search, ShieldCheck, Gem, Award } from 'lucide-react';
import { PRODUCTS, TRANSLATIONS, type Language } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar' || lang === 'ur';

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : ''} selection:bg-aura-gold selection:text-aura-deep bg-aura-cream`}>
      {/* Header / Top Navigation */}
      <header className="fixed top-0 w-full z-50 px-4 sm:px-8 py-6 sm:py-10 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="pill-button flex items-center gap-2 !px-3 sm:!px-5"
          >
            {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
            <span className="hidden sm:inline">Menu</span>
          </button>
          <div className="hidden lg:flex gap-2">
            <a href="#shop" className="pill-button">{t.nav.shop}</a>
            <a href="#collections" className="pill-button">{t.nav.collections}</a>
            <a href="#about" className="pill-button">{t.nav.about}</a>
            <a href="#contact" className="pill-button">{t.nav.contact}</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-2xl font-display font-black tracking-[0.4em] cursor-pointer"
          >
            AURA GEMS
          </motion.h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="pill-button flex items-center gap-2 !px-3 sm:!px-5"
            >
              <Globe size={14} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 right-0 glass-card p-2 min-w-[100px] flex flex-col gap-1 rounded-2xl overflow-hidden"
                >
                  {languages.map(l => (
                    <button 
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                      className={`text-[10px] font-bold px-4 py-2 rounded-xl transition-all ${lang === l.code ? 'bg-aura-deep text-white' : 'hover:bg-aura-deep/5'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="pill-button relative !px-3 sm:!px-5">
            <ShoppingBag size={14} />
            {cart.length > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-aura-gold text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black"
              >
                {cart.length}
              </motion.span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 100 : -100 }}
            className="fixed inset-0 z-[45] bg-aura-deep text-white p-12 flex flex-col justify-center"
          >
            <nav className="flex flex-col gap-8">
              {['shop', 'about', 'collections', 'contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter hover:text-aura-gold transition-colors"
                >
                  {t.nav[item as keyof typeof t.nav]}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/auragems_hero.webp"
            alt="Luxury gemstone in Dubai apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-aura-deep/40" />
        </div>

        {/* Vertical Text Accent */}
        <div className={`absolute top-1/2 -translate-y-1/2 hidden xl:block text-[10px] font-black tracking-[1em] opacity-30 uppercase vertical-text text-white ${isRtl ? 'left-12' : 'right-12'}`}>
          {t.hero.accent}
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20 relative z-10 text-center">
          <motion.div style={{ opacity, scale }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-aura-gold text-[10px] font-black tracking-widest mb-8 border border-white/20 backdrop-blur-sm">
                {t.hero.badge}
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] mb-8 sm:mb-12 font-display font-black uppercase tracking-tighter text-white">
                {t.hero.title}
              </h2>
              <p className="text-base sm:text-lg font-sans opacity-70 max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed text-white">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="pill-button !px-8 sm:!px-10 !py-4 !text-xs !bg-aura-gold !text-aura-deep !border-aura-gold hover:!bg-white hover:!border-white">
                  {t.hero.cta}
                </button>
                <button className="pill-button !px-8 sm:!px-10 !py-4 !text-xs !bg-white/10 !text-white !border-white/20 backdrop-blur-sm hover:!bg-white/20 group">
                  VIEW SHOWREEL
                  <ArrowUpRight size={14} className="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <div className="w-[1px] h-12 bg-white" />
          <span className="text-[8px] font-black tracking-widest uppercase text-white">SCROLL</span>
        </motion.div>
      </section>

      {/* Numbered Cards Section - The Process */}
      <section className="py-20 sm:py-32 px-6 sm:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.process.map((item, i) => {
              const icons = [ShieldCheck, Gem, Award];
              const Icon = icons[i];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-card p-8 sm:p-12 rounded-[30px] sm:rounded-[40px] flex flex-col items-center text-center group hover:bg-aura-deep hover:text-white transition-all duration-700 cursor-default"
                >
                  <div className="w-12 h-8 rounded-full bg-aura-stone group-hover:bg-white/10 flex items-center justify-center text-[10px] font-black mb-8 sm:mb-12 transition-colors">
                    {item.id}
                  </div>
                  <div className="mb-8 sm:mb-12 text-aura-gold group-hover:scale-110 transition-transform duration-500">
                    <Icon size={40} strokeWidth={1} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-display font-black mb-4 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-50 group-hover:opacity-70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collections Section - Editorial Layout */}
      <section id="collections" className="py-20 sm:py-32 lg:py-48 px-6 sm:px-8 bg-aura-cream">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-6 uppercase">COLLECTIONS</p>
              <h2 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black uppercase leading-[0.85] mb-8 sm:mb-12">
                {t.collections.title.split(' ')[0]}<br/>{t.collections.title.split(' ')[1]}
              </h2>
              <div className="aspect-[4/5] rounded-[30px] sm:rounded-[60px] overflow-hidden relative group mb-12">
                <img 
                  src="https://picsum.photos/seed/collection-1/1000/1200" 
                  alt="Collection" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-deep/60 to-transparent flex flex-col justify-end p-8 sm:p-12">
                  <h3 className="text-2xl sm:text-4xl text-white font-display font-black uppercase mb-4">{t.collections.items[0].title}</h3>
                  <p className="text-white/60 text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4">{t.collections.items[0].subtitle}</p>
                  <button className="text-white/60 text-[9px] sm:text-[10px] font-black tracking-widest uppercase flex items-center gap-2 hover:text-aura-gold transition-colors">
                    EXPLORE <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="aspect-square rounded-[30px] sm:rounded-[60px] overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/seed/collection-2/800/800" 
                    alt="Collection" 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-aura-deep/20 group-hover:bg-aura-deep/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase mb-2">{t.collections.items[1].title}</h3>
                    <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase">{t.collections.items[1].subtitle}</p>
                  </div>
                </div>
                <div className="aspect-square rounded-[30px] sm:rounded-[60px] overflow-hidden relative group">
                  <img 
                    src="https://picsum.photos/seed/collection-3/800/800" 
                    alt="Collection" 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-aura-deep/20 group-hover:bg-aura-deep/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase mb-2">{t.collections.items[2].title}</h3>
                    <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase">{t.collections.items[2].subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:mt-12 p-8 sm:p-12 glass-card rounded-[30px] sm:rounded-[60px]">
                <p className="text-lg sm:text-xl font-sans opacity-60 leading-relaxed mb-8">
                  "Each gemstone tells a story that began millions of years ago. Our mission is to write the next chapter of that story with you."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-aura-gold" />
                  <div>
                    <p className="text-xs sm:text-sm font-black uppercase tracking-widest">AHMED AL-SAYED</p>
                    <p className="text-[8px] sm:text-[10px] opacity-40 uppercase tracking-widest">Founder & Master Gemologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section - Bento Grid Style */}
      <section id="shop" className="py-20 sm:py-32 lg:py-48 px-6 sm:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 sm:mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-6 uppercase">{t.shop.title}</p>
              <h2 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black uppercase leading-none tracking-tighter">{t.shop.subtitle}</h2>
            </div>
            <button className="pill-button !px-8 sm:!px-12 !py-4 sm:!py-5 !text-xs bg-aura-deep text-white hover:!bg-aura-gold hover:!text-aura-deep">
              {t.shop.viewAll}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-aura-cream rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name[lang]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aura-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 pill-button !bg-white !text-aura-deep opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    {t.shop.addToCart}
                  </button>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl sm:text-2xl font-display font-black uppercase leading-none group-hover:text-aura-gold transition-colors">{product.name[lang]}</h4>
                    <span className="text-aura-gold font-black tracking-tighter text-base sm:text-lg">{product.price}</span>
                  </div>
                  <p className="text-[10px] font-black tracking-widest opacity-30 uppercase mb-2">{product.category[lang]}</p>
                  <p className="text-[9px] opacity-40 uppercase tracking-widest">{product.specs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-20 sm:py-32 lg:py-64 px-6 sm:px-8 bg-aura-deep text-white overflow-hidden relative">
        {/* Background Mist */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-aura-gold/5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-8 sm:mb-12 uppercase">OUR HERITAGE</p>
            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-display font-black uppercase leading-[0.85] mb-12 sm:mb-16 tracking-tighter">
              {t.about.title}
            </h2>
            <p className="text-lg sm:text-xl font-sans opacity-50 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-12 sm:mb-16">
              {t.about.content}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {t.about.highlights.map((highlight, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-display font-black mb-2 text-aura-gold uppercase">
                    {highlight.includes('%') ? '100%' : highlight.includes('Dubai') ? 'DUBAI' : 'CERTIFIED'}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-black tracking-widest opacity-30 uppercase">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-square rounded-[30px] sm:rounded-[60px] overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/aura-heritage/1000/1000" 
                alt="Heritage" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-aura-gold/10 mix-blend-overlay" />
            </div>
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 glass-card !bg-aura-gold !text-aura-deep p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] shadow-2xl"
            >
              <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-2">Certified</p>
              <p className="text-lg sm:text-2xl font-display font-black leading-none">AUTHENTICITY<br/>GUARANTEED</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-aura-cream py-20 sm:py-32 px-6 sm:px-8 border-t border-aura-deep/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 mb-20 sm:mb-32">
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-display font-black tracking-[0.4em] mb-8 sm:mb-12">AURA GEMS</h2>
              <p className="text-sm opacity-40 leading-relaxed mb-8 sm:mb-12 max-w-xs">
                {t.footer.brand}
              </p>
              <div className="flex gap-4">
                <a href="#" className="pill-button !p-3 hover:!bg-aura-gold hover:!text-aura-deep"><Instagram size={16} /></a>
                <a href="#" className="pill-button !p-3 hover:!bg-aura-gold hover:!text-aura-deep"><Facebook size={16} /></a>
                <a href="#" className="pill-button !p-3 hover:!bg-aura-gold hover:!text-aura-deep"><Twitter size={16} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 opacity-30">Navigation</h4>
              <ul className="flex flex-col gap-4 sm:gap-6 text-[11px] font-bold uppercase tracking-widest">
                <li><a href="#about" className="luxury-underline">{t.nav.about}</a></li>
                <li><a href="#shop" className="luxury-underline">{t.nav.shop}</a></li>
                <li><a href="#collections" className="luxury-underline">{t.nav.collections}</a></li>
                <li><a href="#contact" className="luxury-underline">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 opacity-30">Services</h4>
              <ul className="flex flex-col gap-4 sm:gap-6 text-[11px] font-bold uppercase tracking-widest">
                {t.footer.services.map((service, i) => (
                  <li key={i}><a href="#" className="luxury-underline">{service}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 opacity-30">Newsletter</h4>
              <p className="text-sm opacity-40 mb-8 sm:mb-10">{t.footer.newsletter}</p>
              <form className="flex border-b border-aura-deep/10 pb-4 group focus-within:border-aura-gold transition-colors">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent text-[10px] font-black tracking-widest w-full outline-none"
                />
                <button type="submit" className="hover:text-aura-gold transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 sm:pt-16 border-t border-aura-deep/5 text-[9px] sm:text-[10px] font-black tracking-[0.3em] opacity-20 gap-4 text-center">
            <p>{t.footer.rights}</p>
            <p>AURAGEMS.AE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
