import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight, Check, ShoppingCart, Palette
} from "lucide-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { brandImages, brandServices, ecommerceImages, ecommerceServices } from "@/lib/services-data";
import { FaWhatsapp } from "react-icons/fa6";


// Split Image Collections


const getEcommerceImages = (mainImage: string) => {
  const otherImages = ecommerceImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};

const getBrandImages = (mainImage: string) => {
  const otherImages = brandImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};



const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"ecommerce" | "brand">("ecommerce");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

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
      <section className="pt-32 pb-12 px-6 md:px-12 gradient-bg-soft">
        <div className="w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
              WHAT WE CREATE
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-black">
              Design that sells
            </h1>
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7B2FD9] via-[#C84FD8] to-[#60B8F0] bg-clip-text text-transparent">
              For Sellers. For Brands. For Growth.
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
                <ShoppingCart size={18} />  E-Commerce Visuals
              </button>
              <button
                onClick={() => scrollToCategory("brand")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${activeCategory === "brand" ? "gradient-bg-vivid text-white" : "bg-[#111] border border-[#1a1a1a] text-white hover:border-[#60B8F0]"}`}
              >
                <Palette size={18} /> Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-80px)] overflow-hidden">

        {/* Category 1: E-Commerce Visuals */}
        <section id="ecommerce" className="bg-white border-r  pb-20 lg:overflow-y-auto custom-scrollbar">
          <div className="px-6 md:px-12 m-6 pt-16 bg-white rounded-md shadow-2xl">
            <div className="mb-12 sticky top-0 bg-white z-20 border-black py-4   shadow-xl px-2 text-center">
              <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest text-center">FOR SELLERS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">Visuals that convert browsers into buyers.</h2>
              <p className="text-[#888] mt-4 w-auto">Built for Amazon, Flipkart, Myntra & Meesho sellers who want more clicks, more carts, more sales.</p>
            </div>

            <div className="space-y-20">
              {ecommerceServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} category="ecommerce" />
              ))}
            </div>
          </div>
        </section>

        {/* Category 2: Brand & Marketing */}
        <section id="brand" className="bg-white border-r  pb-20 lg:overflow-y-auto custom-scrollbar">
          <div className="px-6 md:px-12 m-6 pt-16 bg-white rounded-md shadow-2xl">
            <div className="mb-12 sticky top-0 bg-white z-20 k py-4   shadow-xl px-6 text-center">
              <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest">FOR BRANDS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mt-4">Look Premium. Sound Consistent. Grow Faster.</h2>
              <p className="text-[#888] mt-4 w-auto">Complete brand and marketing design for Indian companies who want to stand out — online and offline.</p>
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
      <section className="bg-white section-padding ">
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-r from-slate-900 to-slate-800  rounded-md">
          <div className="bg-whiterounded-[24px] p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FD9]/5 to-[#60B8F0]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Not sure which service fits your brand?</h2>
            <p className="text-[#888] text-lg mb-4 max-w-xl mx-auto relative z-10">
              Tell us about your business. We'll recommend exactly what you need — free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 ">
              <Link to="/contact" className="gradient-btn px-4  py-4 font-bold flex items-center justify-center gap-2">
                Get Free Recommendation <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/917417791003" className="px-4 py-4 rounded-full border border-white text-white font-bold hover:bg-green-300 hover:text-white  transition-all flex items-center justify-center gap-2">
               <FaWhatsapp/> WhatsApp Us
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
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-8 scroll-mt-32"
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
          <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[12px] font-bold text-white shadow-lg z-10 ${service.badgeType === 'hot' ? 'gradient-bg-vivid' :
            service.badgeType === 'amazon' ? 'bg-blue-600' : 'bg-cyan-600'
            }`}>
            {service.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
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
          className="inline-flex items-center gap-2  font-bold text-[#7B2FD9] transition-colors group underline underline-offset-8 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9]"
        >
          {service.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;