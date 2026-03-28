import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Palette, Check } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ecommerceImages,brandImages, ecommerceServices, brandServices } from "@/lib/services-data";


const getEcommerceImages = (mainImage: string) => {
  const otherImages = ecommerceImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};

const getBrandImages = (mainImage: string) => {
  const otherImages = brandImages.filter(img => img !== mainImage);
  return [mainImage, ...otherImages.sort(() => 0.5 - Math.random())];
};


const ServicesGrid = () => (
  <>
    <style>{`
      .swiper-button-next, .swiper-button-prev {
        background-color: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(4px);
        width: 20px !important;
        height: 20px !important;
        border-radius: 50%;
        padding:2px !important;
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
    <section className="section-padding gradient-bg-soft">
      <div className="w-full sm:max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}s
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
            WHAT WE CREATE
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-gray-900">
            Everything your brand <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">needs to grow.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We've split our expertise to serve your specific goals - whether you're selling on marketplaces or building a global brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-auto md:h-[800px]">
          {/* Left Pillar: E-Commerce */}
          <div className="flex flex-col h-full overflow-hidden bg-white rounded-[24px] border border-white/50 shadow-xl">
            <div className="p-8 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg-vivid flex items-center justify-center shadow-lg">
                  <ShoppingCart size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FOR SELLERS</h3>
                  <p className="text-[#7B2FD9] text-xs font-bold uppercase tracking-wider">E-Commerce Visuals</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Visuals that convert browsers into buyers on Amazon, Flipkart & more.</p>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-12">
              {ecommerceServices.map((s, i) => (
                <ServiceItem key={i} service={s} color="#7B2FD9" />
              ))}
            </div>

            <div className="p-6 bg-white border-t border-gray-100">
              <Link to="/services" className="flex items-center justify-center gap-2 gradient-btn w-full py-4 font-bold text-sm text-white hover:shadow-lg transition-all">
                Explore All Seller Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Pillar: Brand & Marketing */}
          <div className="flex flex-col h-full overflow-hidden bg-white rounded-[24px] border border-white/50 shadow-xl">
            <div className="p-8 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#60B8F0] to-[#7B2FD9] flex items-center justify-center shadow-lg">
                  <Palette size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FOR BRANDS</h3>
                  <p className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider">Brand & Marketing</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">Look premium, sound consistent, and grow faster in any market.</p>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-12">
              {brandServices.map((s, i) => (
                <ServiceItem key={i} service={s} color="#60B8F0" />
              ))}
            </div>

            <div className="p-6 bg-white border-t border-gray-100">
              <Link to="/services" className="flex items-center justify-center gap-2 bg-purple-50 border border-purple-100 text-gray-900 w-full py-4 rounded-xl font-bold hover:bg-purple-100 transition-all text-sm">
                Explore All Brand Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section></>
);

const ServiceItem = ({ service, color }: { service: any, color: string }) => (
  <motion.div
    id={service.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col gap-6 group scroll-mt-20"
  >
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
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
              <img src={img} alt={`${service.title} - ${idx + 1}`} className="w-full h-full object-cover transition-transform" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="w-full h-full">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform" />
          </SwiperSlide>
        )}
      </Swiper>
      {service.badge && (
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg z-10 ${service.badgeType === 'hot' ? 'gradient-bg-vivid' :
          service.badgeType === 'amazon' ? 'bg-blue-600' : 'bg-cyan-600'
          }`}>
          {service.badge}
        </div>
      )}
    </div>

    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed mb-5">{service.desc}</p>

      <div className="grid grid-cols-1 gap-y-2 mb-6">
        {service.checklist.map((item: string, i: number) => (
          <div key={i} className="flex items-start gap-2 text-[11px]">
            <div className="mt-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0">
              <Check size={8} className="text-white" />
            </div>
            <span className="text-gray-600">{item}</span>
          </div>
        ))}
      </div>

      <Link to="/contact" className="text-xs font-bold text-gray-900 underline underline-offset-4 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9] transition-all">
        {service.cta}
      </Link>
    </div>
  </motion.div>
);

export default ServicesGrid;
