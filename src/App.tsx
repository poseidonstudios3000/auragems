import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Globe, Sun, Moon, Instagram, Facebook, Twitter, ArrowUpRight, ShieldCheck, Gem, Award } from 'lucide-react';
import { PRODUCTS, TRANSLATIONS, type Language } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ur' || lang === 'ur';

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ur', label: 'UR' },
  ];

  return (
    <div className={`min-h-screen ${isRtl ? 'rtl' : ''} ${isDark ? 'dark' : ''} selection:bg-aura-gold selection:text-aura-deep bg-aura-cream dark:bg-aura-deep transition-colors duration-500`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center pointer-events-none bg-white/10 dark:bg-aura-deep/40 backdrop-blur-xl border-b border-white/10 dark:border-white/5 transition-colors duration-500">
        <div className="pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-2xl font-display font-black tracking-[0.4em] cursor-pointer text-white drop-shadow-sm"
          >
            AURA GEMS
          </motion.h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          <button
            onClick={() => setIsDark(!isDark)}
            className="pill-button flex items-center gap-2 !px-3 sm:!px-4 !bg-white/10 !text-white !border-white/15 hover:!bg-white/20"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="pill-button flex items-center gap-2 !px-3 sm:!px-5 !bg-white/10 !text-white !border-white/15 hover:!bg-white/20"
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
                  className="absolute top-full mt-2 right-0 bg-white/15 backdrop-blur-xl border border-white/15 p-2 min-w-[100px] flex flex-col gap-1 rounded-2xl overflow-hidden"
                >
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                      className={`text-[10px] font-bold px-4 py-2 rounded-xl transition-all text-white ${lang === l.code ? 'bg-white/20' : 'hover:bg-white/10'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Hero Section — always has image bg + white text */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/webp/auragems_hero.webp"
            alt="Luxury gemstone in Dubai apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-aura-deep/40" />
        </div>

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
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] mb-6 sm:mb-10 font-display font-black uppercase tracking-tighter text-white">
                {t.hero.titleLine1}<br/>{t.hero.titleLine2}
              </h2>
              <p className="text-sm sm:text-xl md:text-2xl font-sans opacity-70 max-w-none mx-auto mb-8 sm:mb-12 leading-relaxed text-white whitespace-nowrap">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#shop" className="pill-button !px-8 sm:!px-10 !py-4 !text-xs !bg-aura-gold !text-aura-deep !border-aura-gold hover:!bg-white hover:!border-white">
                  {t.hero.cta}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <div className="w-[1px] h-12 bg-white" />
          <span className="text-[8px] font-black tracking-widest uppercase text-white">SCROLL</span>
        </motion.div>
      </section>

      {/* The Process Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-white dark:bg-aura-dark-surface transition-colors duration-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-6 uppercase">OUR PROMISE</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-aura-deep/10 dark:md:divide-white/10">
            {t.process.map((item, i) => {
              const icons = [ShieldCheck, Gem, Award];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center px-8 sm:px-12 py-12 md:py-0"
                >
                  <span className="text-[80px] sm:text-[100px] font-display font-black leading-none text-aura-deep/[0.03] dark:text-white/[0.03] mb-4">{item.id}</span>
                  <div className="mb-6 text-aura-gold">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-black mb-4 uppercase tracking-widest text-aura-deep dark:text-white transition-colors duration-500">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-aura-gold/40 mb-6" />
                  <p className="text-sm text-aura-deep/40 dark:text-white/40 leading-relaxed max-w-xs transition-colors duration-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 bg-aura-cream dark:bg-aura-deep transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-8">
            <div>
              <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-6 uppercase">{t.shop.title}</p>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-display font-black uppercase leading-none tracking-tighter whitespace-nowrap text-aura-deep dark:text-white transition-colors duration-500">{t.shop.subtitle}</h2>
            </div>
            <button className="pill-button !px-8 sm:!px-12 !py-4 sm:!py-5 !text-xs !bg-aura-deep !text-white dark:!bg-white dark:!text-aura-deep hover:!bg-aura-gold hover:!text-aura-deep dark:hover:!bg-aura-gold transition-colors duration-500">
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
                className="group relative bg-white dark:bg-aura-dark-card rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aura-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <button className="absolute bottom-8 left-1/2 -translate-x-1/2 pill-button !bg-white !text-aura-deep opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {t.shop.addToCart}
                  </button>
                </div>
                <div className="p-8 sm:p-10">
                  <h4 className="text-xl sm:text-2xl font-display font-black uppercase leading-tight group-hover:text-aura-gold transition-colors mb-3 text-aura-deep dark:text-white">{product.name[lang]}</h4>
                  <p className="text-[10px] font-black tracking-widest text-aura-deep/30 dark:text-white/30 uppercase mb-1">{product.category[lang]}</p>
                  <p className="text-[9px] text-aura-deep/40 dark:text-white/40 uppercase tracking-widest mb-6">{product.specs}</p>
                  <span className="text-aura-gold font-black tracking-wide text-xs uppercase">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-6 sm:px-8 bg-white dark:bg-aura-dark-surface transition-colors duration-500 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-aura-gold text-[10px] font-black tracking-[0.5em] mb-8 sm:mb-12 uppercase">OUR HERITAGE</p>
            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-display font-black uppercase leading-[0.85] mb-12 sm:mb-16 tracking-tighter text-aura-deep dark:text-white transition-colors duration-500">
              {t.about.title}
            </h2>
            <p className="text-lg sm:text-xl font-sans text-aura-deep/50 dark:text-white/50 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-12 sm:mb-16 transition-colors duration-500">
              {t.about.content}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {t.about.highlights.map((highlight, i) => (
                <div key={i}>
                  <p className="text-3xl sm:text-4xl font-display font-black mb-2 text-aura-gold uppercase">
                    {highlight.includes('%') ? '100%' : highlight.includes('Dubai') || highlight.includes('دبئی') ? 'DUBAI' : 'CERTIFIED'}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-black tracking-widest text-aura-deep/30 dark:text-white/30 uppercase transition-colors duration-500">{highlight}</p>
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
                src="/images/webp/about-showcase.webp"
                alt="AURA GEMS Showcase"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-aura-gold/10 mix-blend-overlay" />
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-aura-gold text-aura-deep p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] shadow-2xl"
            >
              <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-2">Certified</p>
              <p className="text-lg sm:text-2xl font-display font-black leading-none">AUTHENTICITY<br/>GUARANTEED</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-aura-cream dark:bg-aura-deep py-16 sm:py-24 px-6 sm:px-8 border-t border-aura-deep/5 dark:border-white/5 transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 mb-16 sm:mb-20">
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-display font-black tracking-[0.4em] mb-8 sm:mb-12 text-aura-deep dark:text-white transition-colors duration-500">AURA GEMS</h2>
              <p className="text-sm text-aura-deep/40 dark:text-white/40 leading-relaxed mb-8 sm:mb-12 max-w-xs transition-colors duration-500">
                {t.footer.brand}
              </p>
              <div className="flex gap-4">
                <a href="#" className="pill-button !p-3 !bg-aura-deep/5 dark:!bg-white/10 !text-aura-deep dark:!text-white !border-aura-deep/10 dark:!border-white/10 hover:!bg-aura-gold hover:!text-aura-deep hover:!border-aura-gold"><Instagram size={16} /></a>
                <a href="#" className="pill-button !p-3 !bg-aura-deep/5 dark:!bg-white/10 !text-aura-deep dark:!text-white !border-aura-deep/10 dark:!border-white/10 hover:!bg-aura-gold hover:!text-aura-deep hover:!border-aura-gold"><Facebook size={16} /></a>
                <a href="#" className="pill-button !p-3 !bg-aura-deep/5 dark:!bg-white/10 !text-aura-deep dark:!text-white !border-aura-deep/10 dark:!border-white/10 hover:!bg-aura-gold hover:!text-aura-deep hover:!border-aura-gold"><Twitter size={16} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 text-aura-deep/30 dark:text-white/30 transition-colors duration-500">Navigation</h4>
              <ul className="flex flex-col gap-4 sm:gap-6 text-[11px] font-bold uppercase tracking-widest text-aura-deep dark:text-white transition-colors duration-500">
                <li><a href="#about" className="luxury-underline">{t.nav.about}</a></li>
                <li><a href="#shop" className="luxury-underline">{t.nav.shop}</a></li>
                <li><a href="#contact" className="luxury-underline">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 text-aura-deep/30 dark:text-white/30 transition-colors duration-500">Services</h4>
              <ul className="flex flex-col gap-4 sm:gap-6 text-[11px] font-bold uppercase tracking-widest text-aura-deep dark:text-white transition-colors duration-500">
                {t.footer.services.map((service, i) => (
                  <li key={i}><a href="#" className="luxury-underline">{service}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-8 sm:mb-12 text-aura-deep/30 dark:text-white/30 transition-colors duration-500">Newsletter</h4>
              <p className="text-sm text-aura-deep/40 dark:text-white/40 mb-8 sm:mb-10 transition-colors duration-500">{t.footer.newsletter}</p>
              <form className="flex border-b border-aura-deep/10 dark:border-white/10 pb-4 group focus-within:border-aura-gold transition-colors">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent text-[10px] font-black tracking-widest w-full outline-none text-aura-deep dark:text-white placeholder:text-aura-deep/30 dark:placeholder:text-white/30 transition-colors duration-500"
                />
                <button type="submit" className="text-aura-deep dark:text-white hover:text-aura-gold transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 sm:pt-16 border-t border-aura-deep/5 dark:border-white/5 text-[9px] sm:text-[10px] font-black tracking-[0.3em] text-aura-deep/20 dark:text-white/20 gap-4 text-center transition-colors duration-500">
            <p>{t.footer.rights}</p>
            <p>AURAGEMS.AE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
