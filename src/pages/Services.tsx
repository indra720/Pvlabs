import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Check, ShoppingCart, Palette, Package, Share2, 
  Zap, FileText, Image, BarChart3, Presentation, Layout
} from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Image collection for variety
const allImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071",
  "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
];

const getImages = (mainImage: string) => {
  const otherImages = allImages.filter(img => img !== mainImage);
  // Shuffle and take 4
  const shuffled = otherImages.sort(() => 0.5 - Math.random());
  return [mainImage, ...shuffled.slice(0, 4)];
};

const ecommerceServices = [
  {
    badge: "Most Ordered",
    badgeType: "hot",
    title: "Product Hero Images",
    desc: "Your main listing image is the single most important factor in getting a click. We create hero images that stop the scroll — clean, sharp, marketplace-compliant, and built to convert. No studio visit needed.",
    checklist: [
      "White background (marketplace compliant)",
      "Gradient & colored backgrounds",
      "Multiple angle shots",
      "Amazon 2000×2000px ready",
      "Flipkart & Myntra optimized",
      "3–5 day delivery"
    ],
    cta: "See Hero Image Examples",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999",
    images: getImages("https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999"),
    imageAlt: "Product hero image design by PV Labs India"
  },
  {
    title: "Lifestyle & Scene Images",
    desc: "Show your product in real life. Build emotional desire. Increase 'Add to Cart.' We create AI-powered lifestyle scenes — home, kitchen, outdoor, festive — that look 100% real without booking a single model or location.",
    checklist: [
      "Home & kitchen scenes",
      "Festive & seasonal themes",
      "Flat lay compositions",
      "AI model integration",
      "Brand color matched backgrounds",
      "Multiple scenes per product"
    ],
    cta: "See Lifestyle Examples",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070",
    images: getImages("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070"),
    imageAlt: "AI lifestyle product photography by PV Labs"
  },
  {
    badge: "Amazon Exclusive",
    badgeType: "amazon",
    title: "A+ Content & EBC Design",
    desc: "Amazon sellers with A+ content see up to 10% more sales. We design scroll-stopping A+ modules — brand story, feature banners, comparison charts — fully compliant with Amazon's latest guidelines.",
    checklist: [
      "Brand story module",
      "Feature highlight banners",
      "Product comparison charts",
      "Amazon guideline compliant",
      "Desktop + mobile layout",
      "Delivered within 5 days"
    ],
    cta: "See A+ Content Examples",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    images: getImages("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"),
    imageAlt: "Amazon A+ content design by PV Labs India"
  },
  {
    title: "Infographics & Listing Images",
    desc: "Images 2–7 in your listing do the heavy lifting. A buyer who doesn't read your description will still read your infographic. We design visuals that answer every buyer question before they even think to ask it.",
    checklist: [
      "Feature callout graphics",
      "Size & dimension charts",
      "How-to-use visuals",
      "USP highlight images",
      "Competitor comparison graphics",
      "Trust & certification badges"
    ],
    cta: "See Infographic Examples",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    images: getImages("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"),
    imageAlt: "Product infographic design for Amazon listing by PV Labs"
  },
  {
    badge: "Flipkart Specialist",
    badgeType: "flipkart",
    title: "Catalog & RPD Creation",
    desc: "Launching on Flipkart or Meesho? We handle complete catalog creation — product listings, RPD sheets, image uploads — so your products go live faster with zero compliance rejections.",
    checklist: [
      "Flipkart catalog creation",
      "RPD sheet preparation",
      "Meesho listing setup",
      "Category-specific optimization",
      "Bulk listing support",
      "Image spec compliance"
    ],
    cta: "Talk to Us About Catalog",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    images: getImages("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"),
    imageAlt: "Flipkart catalog and RPD creation service by PV Labs"
  }
];

const brandServices = [
  {
    title: "Logo & Brand Identity",
    desc: "Your logo is the face of your business. Your brand identity is everything behind it. We build complete brand systems for Indian businesses — from the first logo concept to a full identity kit that works across every touchpoint.",
    checklist: [
      "Logo design (5+ concepts)",
      "Brand color palette",
      "Typography system",
      "Business card design",
      "Product label design",
      "Complete brand guidelines PDF"
    ],
    cta: "See Branding Examples",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071",
    images: getImages("https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071"),
    imageAlt: "Logo and brand identity design by PV Labs India"
  },
  {
    title: "Packaging Design",
    desc: "Packaging is your first physical brand moment. It's what the customer sees, touches, and remembers. We design shelf-worthy packaging — boxes, labels, pouches, inserts — that builds brand recall and drives repeat purchases.",
    checklist: [
      "Box & carton design",
      "Product label & sticker",
      "Pouch & sachet design",
      "Insert & thank-you cards",
      "Print-ready CMYK files",
      "Multiple size variants"
    ],
    cta: "See Packaging Examples",
    image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=2070",
    images: getImages("https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=2070"),
    imageAlt: "Product packaging design by PV Labs India"
  },
  {
    title: "Social Media Creatives",
    desc: "Your Instagram and Facebook feed is your brand's shop window. We design scroll-stopping social creatives — posts, reels covers, stories, carousels — that look premium, stay on-brand, and drive engagement.",
    checklist: [
      "Instagram posts & carousels",
      "Story & reel cover designs",
      "Facebook ad creatives",
      "LinkedIn company banners",
      "Platform-optimized sizes",
      "Batch delivery (30 posts/month)"
    ],
    cta: "See Social Examples",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974",
    images: getImages("https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974"),
    imageAlt: "Social media creative design by PV Labs India"
  },
  {
    badge: "High Converting",
    badgeType: "hot",
    title: "Ad Creatives (Meta & Google)",
    desc: "A great product with a bad ad creative wastes your entire ad budget. We design high-converting Meta and Google ad creatives — static banners, carousel ads, display ads — built around your product's core USP and target audience psychology.",
    checklist: [
      "Meta (Facebook & Instagram) ads",
      "Google display banners",
      "Multiple size variants",
      "A/B test versions",
      "Conversion-focused layouts",
      "Brand consistent design"
    ],
    cta: "See Ad Creative Examples",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    images: getImages("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"),
    imageAlt: "Meta and Google ad creative design by PV Labs India"
  },
  {
    title: "Presentation & Pitch Deck",
    desc: "Your pitch deck is the difference between a deal and a no. We design investor decks, sales presentations, and brand decks that tell your story visually — clean, compelling, and built to impress in any boardroom.",
    checklist: [
      "Investor pitch decks",
      "Sales presentations",
      "Brand decks",
      "Company profile design",
      "PowerPoint & Google Slides",
      "Editable templates delivered"
    ],
    cta: "See Deck Examples",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    images: getImages("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"),
    imageAlt: "Pitch deck and presentation design by PV Labs India"
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"ecommerce" | "brand">("ecommerce");

  const scrollToCategory = (category: "ecommerce" | "brand") => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(4px);
          width: 24px !important;
          height: 24px !important;
          border-radius: 50%;
          color: #ffffff !important;
          transition: all 0.3s ease;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.55);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 8px !important;
          font-weight: 900 !important;
        }
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
          width: 5px !important;
          height: 5px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ffffff !important;
        }
      `}</style>
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
              WHAT WE CREATE
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-white">
              Design that sells.
            </h1>
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7B2FD9] via-[#C84FD8] to-[#60B8F0] bg-clip-text text-transparent">
              For sellers. For brands. For growth.
            </h2>
            <p className="text-[#888] text-lg max-w-3xl mx-auto leading-relaxed">
              From your first product listing to your complete brand identity — PV Labs creates visuals that make Indian businesses look world-class.
            </p>

            {/* Category Switcher */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={() => scrollToCategory("ecommerce")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${activeCategory === "ecommerce" ? "gradient-bg-vivid text-white" : "bg-[#111] border border-[#1a1a1a] text-white hover:border-[#7B2FD9]"}`}
              >
                <ShoppingCart size={18} /> 🛒 E-Commerce Visuals
              </button>
              <button 
                onClick={() => scrollToCategory("brand")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${activeCategory === "brand" ? "gradient-bg-vivid text-white" : "bg-[#111] border border-[#1a1a1a] text-white hover:border-[#60B8F0]"}`}
              >
                <Palette size={18} /> 🎨 Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-80px)] overflow-hidden">
        
        {/* Category 1: E-Commerce Visuals */}
        <section id="ecommerce" className="bg-[#0d0d0d] border-r border-[#1a1a1a] pb-20 lg:overflow-y-auto custom-scrollbar">
          <div className="px-6 md:px-12 pt-16">
            <div className="mb-12 sticky top-0 bg-[#0d0d0d] z-20 py-4">
              <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest">FOR SELLERS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Visuals that convert browsers into buyers.</h2>
              <p className="text-[#888] mt-4 max-w-md">Built for Amazon, Flipkart, Myntra & Meesho sellers who want more clicks, more carts, more sales.</p>
            </div>

            <div className="space-y-20">
              {ecommerceServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} category="ecommerce" />
              ))}
            </div>
          </div>
        </section>

        {/* Category 2: Brand & Marketing */}
        <section id="brand" className="bg-[#0a0a0a] pb-20 lg:overflow-y-auto custom-scrollbar">
          <div className="px-6 md:px-12 pt-16">
            <div className="mb-12 sticky top-0 bg-[#0a0a0a] z-20 py-4">
              <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest">FOR BRANDS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Look premium. Sound consistent. Grow faster.</h2>
              <p className="text-[#888] mt-4 max-w-md">Complete brand and marketing design for Indian companies who want to stand out — online and offline.</p>
            </div>

            <div className="space-y-20">
              {brandServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} category="brand" />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-[#0a0a0a] section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111] rounded-[24px] p-12 border border-[#1a1a1a] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FD9]/5 to-[#60B8F0]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Not sure which service fits your brand?</h2>
            <p className="text-[#888] text-lg mb-8 max-w-xl mx-auto relative z-10">
              Tell us about your business. We'll recommend exactly what you need — free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact" className="gradient-btn px-8 py-4 font-bold flex items-center justify-center gap-2">
                Get Free Recommendation <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/917417791003" className="px-8 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceCard = ({ service, index, category }: { service: any, index: number, category: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-8"
    >
      <div className="relative rounded-2xl overflow-hidden bg-[#111] aspect-video group">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {service.images && service.images.length > 0 ? (
            service.images.map((img: string, idx: number) => (
              <SwiperSlide key={idx} className="w-full h-full">
                <img 
                  src={img} 
                  alt={`${service.title} - ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="w-full h-full">
              <img 
                src={service.image} 
                alt={service.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </SwiperSlide>
          )}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-[5]" />
        {service.badge && (
          <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[12px] font-bold text-white shadow-lg z-10 ${
            service.badgeType === 'hot' ? 'gradient-bg-vivid' : 
            service.badgeType === 'amazon' ? 'bg-blue-600' : 'bg-cyan-600'
          }`}>
            {service.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-[#888] leading-relaxed mb-6 text-sm md:text-base">
          {service.desc}
        </p>
        
        <div className="grid grid-cols-1 gap-y-3 mb-8">
          {service.checklist.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-white" />
              </div>
              <span className="text-[#888]">{item}</span>
            </div>
          ))}
        </div>

        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 text-white font-bold hover:text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
        >
          {service.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;
