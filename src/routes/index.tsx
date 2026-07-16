import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Flame, Truck, Leaf, ChefHat, ArrowRight, Instagram, Facebook, ShoppingBag, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const LOGO = "https://sugaroholic.com/wp-content/uploads/2024/04/WhatsApp_Image_2025-03-26_at_6.55.46_PM-removebg-preview.png";
const IMG = {
  hero: "https://sugaroholic.com/wp-content/uploads/2026/07/sugaroholic-new-3-scaled.png",
  heroProduct: "https://sugaroholic.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.43.46-PM.jpeg",
  tiramisu: "https://rosybrown-donkey-272893.hostingersite.com/wp-content/uploads/2025/03/BISCOFF-TIRAMISU-e1742556657515.jpg",
  tresleches: "https://rosybrown-donkey-272893.hostingersite.com/wp-content/uploads/2025/04/th-1.jpeg",
  brownies: "https://rosybrown-donkey-272893.hostingersite.com/wp-content/uploads/2025/04/BROOKIES-2.jpg",
  macarons: "https://rosybrown-donkey-272893.hostingersite.com/wp-content/uploads/2025/03/Chocolate-Macarons-1-e1742556589251.jpg",
};

const categories = [
  { name: "Tiramisu", img: IMG.tiramisu, count: "9 flavors" },
  { name: "Tresleches", img: IMG.tresleches, count: "3 flavors" },
  { name: "Brownies", img: IMG.brownies, count: "6 flavors" },
  { name: "Macarons", img: IMG.macarons, count: "12 flavors" },
];

const bestSellers = [
  { name: "Pistachio Kunafa Dream Cake", img: "https://sugaroholic.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-16-at-2.43.46-PM.jpeg", price: "£28" },
  { name: "Dubai Pistachio Kunafa Chocolate", img: "https://sugaroholic.com/wp-content/uploads/2025/05/Pistachio-Kunafa-Chocolate-2.jpg", price: "£18" },
  { name: "Chocolate Dream Cake", img: "https://sugaroholic.com/wp-content/uploads/2025/05/Chocolate-Dream-Cake.jpg", price: "£26" },
  { name: "Persian Rosemilk Tresleches", img: "https://sugaroholic.com/wp-content/uploads/2025/04/th-1.jpeg", price: "£22" },
  { name: "Biscoff Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/BISCOFF-T.jpg", price: "£20" },
  { name: "Pistachio Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/PISTACHIO-TIRAMISU.jpeg.webp", price: "£22" },
];

const menuData: Record<string, { name: string; img: string }[]> = {
  Tiramisu: [
    { name: "Rosemilk Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/ROSEMILK-TIRAMISU.jpg" },
    { name: "Pistachio Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/PISTACHIO-TIRAMISU.jpeg.webp" },
    { name: "Oreo Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/OREO-TIR.webp" },
    { name: "Nutella Ferrero Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/NUTELLA-FERRERO-ROCHER-TIRAMISU.jpg" },
    { name: "Matcha Strawberry Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/MATCHA-T.jpg" },
    { name: "Classic Tiramisu", img: "https://sugaroholic.com/wp-content/uploads/2025/03/CLASSIC-TIRAMSISU.jpeg" },
  ],
  Cookies: [
    { name: "Triple Chocolate Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/Triple-chocolate-cookies.jpg" },
    { name: "Red Velvet Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/RED-VELVET-COOKIES.jpg" },
    { name: "Nutella Bueno Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/NUTELLA-BUENO-COOKIES.jpg" },
    { name: "Matcha Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/MATCHA-COOKIES.jpg" },
    { name: "NYC Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/NYC-Cookies.jpg" },
    { name: "Biscoff Cookies", img: "https://sugaroholic.com/wp-content/uploads/2025/03/Biscoff-cookies.jpg" },
  ],
  Macarons: [
    { name: "Tender Coconut Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/04/Tender-coconut-Macaron.webp" },
    { name: "Salted Caramel Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/03/Salted-Caramel-Macarons-1-2.jpg" },
    { name: "Pistachio Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/03/Pistachio-Macarons_2.jpeg" },
    { name: "Oreo Cheesecake Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/04/oreo-macaron.jpg" },
    { name: "Lemon Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/03/lemon-macarons-16.jpg" },
    { name: "Ferrero Rocher Macarons", img: "https://sugaroholic.com/wp-content/uploads/2025/04/Ferrero-Rocher-macaron.jpg" },
  ],
  Tresleches: [
    { name: "Saffron Tresleches", img: "https://sugaroholic.com/wp-content/uploads/2025/04/Saffron-Tres-Leches-Hafiz-Mustafa.jpg.webp" },
    { name: "Persian Rosemilk Tresleches", img: "https://sugaroholic.com/wp-content/uploads/2025/04/th.jpeg" },
    { name: "Classic Tresleches", img: "https://sugaroholic.com/wp-content/uploads/2025/04/tres-leche-cake.jpg" },
  ],
  Brownies: [
    { name: "Tiramisu Brownies", img: "https://sugaroholic.com/wp-content/uploads/2025/04/367.-Tiramisu-Brownies.jpg" },
    { name: "Red Velvet Brownies", img: "https://sugaroholic.com/wp-content/uploads/2025/04/RED-VELVET-BROWNIES.jpg" },
    { name: "Pistachio Kunafa Brownie", img: "https://sugaroholic.com/wp-content/uploads/2025/05/Pistachio-Kunafa-Brownie.jpg" },
    { name: "Oreo Brownies", img: "https://sugaroholic.com/wp-content/uploads/2025/04/Oreo-Brownies.jpg" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <TopBar />
      <Header />
      <Hero />
      <Categories />
      <BestSellers />
      <Features />
      <PreOrder />
      <MenuTabs />
      <CTA />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden lg:block border-b border-border/40 bg-cocoa/60 backdrop-blur-sm text-xs">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-muted-foreground">
        <div className="flex items-center gap-6">
          <a href="tel:+447818488007" className="flex items-center gap-2 hover:text-gold transition"><Phone className="w-3.5 h-3.5 text-gold" /> +44 7818 488007</a>
          <a href="mailto:admin@sugaroholic.com" className="flex items-center gap-2 hover:text-gold transition"><Mail className="w-3.5 h-3.5 text-gold" /> admin@sugaroholic.com</a>
        </div>
        <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold" /> Unit 7, Dagenham Heathway Shopping Centre, RM108RE</div>
      </div>
    </div>
  );
}

function Logo({ size = 52 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <motion.img
        src={LOGO}
        alt="Sugaroholic Patisserie"
        style={{ width: size, height: size }}
        className="object-contain drop-shadow-[0_0_20px_oklch(0.78_0.13_78/40%)]"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="leading-none">
        <div className="font-display text-xl md:text-2xl tracking-widest text-gold">SUGAROHOLIC</div>
        <div className="text-[10px] tracking-[0.4em] text-muted-foreground mt-1">PATISSERIE</div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Shop", "Menu", "Contact", "Blog"];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-foreground/80 hover:text-gold transition relative group">
              {l}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#menu" className="btn-gold hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
            <ShoppingBag className="w-4 h-4" /> Order Now
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-gold" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="lg:hidden border-t border-border/40 overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm py-1">{l}</a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <img src={IMG.hero} alt="" className="w-full h-full object-cover opacity-30" />
      </motion.div>

      {/* floating decoration */}
      <FloatingBlobs />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 rounded-full gold-ring px-4 py-1.5 text-xs tracking-widest text-gold mb-6">
            <Flame className="w-3.5 h-3.5" /> LONDON'S SWEETEST PATISSERIE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black"
          >
            <span className="block text-gold">Handcrafted</span>
            <span className="block font-script text-cream text-6xl md:text-8xl lg:text-9xl italic">sweetness</span>
            <span className="block text-cream">delivered daily</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }}
            className="mt-6 text-muted-foreground max-w-lg text-lg">
            From velvety tiramisu to delicate macarons — every bite is baked fresh with love,
            the finest ingredients, and a pinch of obsession.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm tracking-wide">
              Explore Menu <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=447818488007" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm border border-gold/40 hover:bg-gold/10 transition">
              Book a Table
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><div className="text-2xl font-display text-gold">40+</div>Flavors</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display text-gold">100%</div>Fresh Daily</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-2xl font-display text-gold">UK</div>Delivery</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-gold/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-dashed border-gold/20"
          />
          <div className="absolute inset-12 rounded-full overflow-hidden gold-ring shadow-[0_30px_80px_-20px_oklch(0.78_0.13_78/40%)]">
            <img src={IMG.hero} alt="Signature cake" className="w-full h-full object-cover" />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 card-warm rounded-2xl p-4 backdrop-blur-md"
          >
            <div className="text-xs text-muted-foreground">Signature</div>
            <div className="font-display text-gold">Pistachio Kunafa</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-2 -right-2 card-warm rounded-full w-24 h-24 flex flex-col items-center justify-center"
          >
            <div className="text-gold font-display text-2xl">4.9★</div>
            <div className="text-[10px] text-muted-foreground">500+ reviews</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingBlobs() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl -z-10"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10"
      />
    </>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <div className="font-script text-gold text-3xl md:text-4xl">{eyebrow}</div>
      <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold text-cream">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </motion.div>
  );
}

function Categories() {
  return (
    <section id="shop" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Sugaroholic" title="Our Popular Categories" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#menu"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-warm group rounded-3xl overflow-hidden block"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl text-cream group-hover:text-gold transition">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{c.count}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Bestsellers" title="Best Selling Products" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-warm rounded-3xl overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute top-4 right-4 btn-gold rounded-full px-3 py-1 text-xs">{p.price}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-display text-lg text-cream">{p.name}</h3>
                <button className="w-10 h-10 rounded-full gold-ring flex items-center justify-center hover:bg-gold/10 transition">
                  <ShoppingBag className="w-4 h-4 text-gold" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: ChefHat, title: "Quality Ingredients", desc: "Only the finest, thoughtfully sourced ingredients in every bite." },
    { icon: Truck, title: "Fast UK Delivery", desc: "Enjoy our treats delivered fresh across the United Kingdom." },
    { icon: Leaf, title: "Delicious Recipes", desc: "Sustainable, guilt-free indulgence crafted with real love." },
  ];
  return (
    <section id="about" className="py-24 px-6 bg-cocoa/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center p-8 rounded-3xl card-warm"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="mx-auto w-16 h-16 rounded-2xl btn-gold flex items-center justify-center mb-5"
            >
              <it.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="font-display text-2xl text-cream mb-2">{it.title}</h3>
            <p className="text-muted-foreground text-sm">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PreOrder() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="https://sugaroholic.com/wp-content/uploads/2025/04/IMG_7054.jpg" alt="Party" className="rounded-3xl aspect-[4/5] object-cover" />
          <div className="grid gap-4 pt-8">
            <img src="https://sugaroholic.com/wp-content/uploads/2025/04/IMG_7082.jpg" alt="Party" className="rounded-3xl aspect-square object-cover" />
            <img src="https://sugaroholic.com/wp-content/uploads/2025/04/IMG_7053.jpg" alt="Party" className="rounded-3xl aspect-square object-cover" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-script text-gold text-3xl">Order Today</div>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-2">Pre-order for your parties</h2>
          <p className="text-muted-foreground mt-6 text-lg">
            From birthdays to weddings — our custom cakes turn every celebration into a moment
            worth remembering. Give us 48 hours and we'll create something unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://api.whatsapp.com/send/?phone=447818488007" target="_blank" rel="noreferrer"
              className="btn-gold rounded-full px-7 py-4 inline-flex items-center gap-2 text-sm">
              Pre-order Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+447818488007" className="rounded-full px-7 py-4 border border-gold/40 hover:bg-gold/10 transition text-sm inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MenuTabs() {
  const tabs = Object.keys(menuData);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section id="menu" className="py-24 px-6 bg-cocoa/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Dessert Menu" title="Our Specials Menu" />
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative px-6 py-2.5 rounded-full text-sm transition ${
                active === t ? "text-cocoa" : "text-muted-foreground hover:text-gold"
              }`}
            >
              {active === t && (
                <motion.div layoutId="tab-pill" className="absolute inset-0 rounded-full btn-gold" style={{ zIndex: -1 }} />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuData[active].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="card-warm rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img src={item.img} alt={item.name} className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-display text-cream group-hover:text-gold transition">{item.name}</h3>
                <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center card-warm rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full border border-gold/20"
        />
        <div className="font-script text-gold text-4xl">Ready to indulge?</div>
        <h2 className="font-display text-4xl md:text-6xl text-cream mt-3">Satisfy your sweet tooth</h2>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
          Explore our menu and place your order today. Every cake is crafted fresh, with the love and detail your celebrations deserve.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#menu" className="btn-gold rounded-full px-8 py-4 text-sm inline-flex items-center gap-2">
            Order Today <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="blog" className="border-t border-border/40 bg-cocoa/60 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 text-sm text-muted-foreground max-w-sm">
            Sugaroholic Patisserie — London's home for artisan tiramisu, macarons,
            tresleches and unforgettable dream cakes.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full gold-ring flex items-center justify-center hover:bg-gold/10 transition">
                <I className="w-4 h-4 text-gold" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-gold mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground">Unit 7, Dagenham Heathway Shopping Centre, RM108RE, London</p>
        </div>
        <div>
          <h4 className="font-display text-gold mb-4">Contact</h4>
          <a href="tel:+447818488007" className="block text-sm text-muted-foreground hover:text-gold">+44 7818 488007</a>
          <a href="mailto:admin@sugaroholic.com" className="block text-sm text-muted-foreground hover:text-gold mt-1">admin@sugaroholic.com</a>
        </div>
      </div>
      <a href="https://petaxai.com" className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PetaxAI. Sour High through Innovation.
      </a>
    </footer>
  );
}
