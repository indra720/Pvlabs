import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Eye } from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Realistic professional photography URLs from Unsplash
const portfolioShowcase = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426";
const serviceBranding = "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071";
const serviceAppdesign = "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974";
const servicePackaging = "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=2070";
const serviceWebdesign = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072";
const serviceMotion = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070";
const servicePrint = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2070";




import pukhraj1 from "../../assets/Images for Website - Copy/pukhraj/first.png"
import pukhraj2 from "../../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (1).png"
import pukhraj3 from "../../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (2).png"
import pukhraj4 from "../../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (5).png"
import pukhraj5 from "../../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (4).png"

// also images
import aldo1 from "../../assets/Images for Website - Copy/aldo/first.png"
import aldo2 from "../../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (2).png"
import aldo3 from "../../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (3).png"
import aldo4 from "../../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (4).png"
import aldo5 from "../../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (5).png"
import aldo6 from "../../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (6).png"

// aakirti
import Aakirti1 from "../../assets/Images for Website - Copy/aakirti/first.png"
import Aakirti2 from "../../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (2).png"
import Aakirti3 from "../../assets/Images for Website - Copy/aakirti/Image May 3, 2026, 09_22_09 AM (1).png"
import Aakirti4 from "../../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (4).png"
import Aakirti5 from "../../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (5).png"


// nutricrate

import nutricrate1 from "../../assets/Images for Website - Copy/nutricrate/first.png"
import nutricrate2 from "../../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (2).png"
import nutricrate3 from "../../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (3).png"
import nutricrate4 from "../../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (4).png"
import nutricrate5 from "../../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (1).png"




const projects = [
  {
    title: "Pukhraj Jasmine Oil Listing Visuals",
    cat: ["Product Images", "Flipkart"],
    desc: "Complete product visual set for a premium jasmine oil brand ,hero images, ingredient callouts, lifestyle shots, Flipkart-compliant image set.",
    brand: "Pukhraj",
    result: "Flipkart-ready visuals delivered in 5 days",
    images: [pukhraj1, pukhraj2, pukhraj3, pukhraj4, pukhraj5]
  },
  {
    title: "ALDO Sandal  Visual Set",
    cat: ["Product Images", "Brand Website"],
    desc: "Premium product photography-style visuals for a sandal brand's D2C website , multiple angles, lifestyle context, clean white and styled backgrounds.",
    brand: "ALDO",
    result: "Website-ready visuals, zero studio shoot",
    images: [aldo1, aldo2, aldo3, aldo4, aldo5, aldo6]
  },

  {
    title: "Aakirti Suit Catalog ",
    cat: ["Product Images", "Ajio"],
    desc: "Complete catalog visual set for an ethnic suit brand , flat lays, detail shots, fabric texture close-ups, Ajio-compliant image specifications.",
    brand: "Aakirti",
    result: "First-try Ajio catalog approval",
    images: [Aakirti1, Aakirti2, Aakirti3, Aakirti4, Aakirti5]
  },
  {
    title: "Nutricrate Honey Listing Images",
    cat: ["Product Images", "Amazon"],
    desc: "Full Amazon listing visual set for a premium honey brand , white background hero, lifestyle imagery, infographic callouts, ingredient highlight shots.",
    brand: "Nutricrate",
    result: "Amazon listing live, Day 1",
    images: [nutricrate1, nutricrate2, nutricrate3, nutricrate4, nutricrate5,]
  },
]

const FeaturedWork = () => (
  <section className="section-padding">
    <div className="w-full ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A curated selection of our recent projects showcasing real results for real clients.
        </p>
      </motion.div>

      {/* Showcase banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[24px] overflow-hidden mb-12 shadow-lg"
      >
        <img src={portfolioShowcase} alt="PV Labs portfolio showcase" className="w-full h-auto sm:h-[90vh]" />
      </motion.div>

      <style>{`
        .portfolio-swiper .swiper-button-next, .portfolio-swiper .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(8px);
          width: 24px !important;
          height: 24px !important;
          border-radius: 50%;
          color: #000000 !important;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .portfolio-swiper .swiper-button-next:after, .portfolio-swiper .swiper-button-prev:after {
          font-size: 8px !important;
          font-weight: 900 !important;
        }
        .portfolio-swiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
          width: 4px !important;
          height: 4px !important;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ffffff !important;
        }
      `}</style>

      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden relative portfolio-swiper">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={false}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full"
                >
                  {p.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={img} alt={`${p.title} - ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors pointer-events-none z-10"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {p.cat.map(c => (
                    <span key={c} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{c}</span>
                  ))}
                  <span className="text-xs text-muted-foreground">• {p.brand}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1 ">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-2r line-clamp-2">{p.desc}</p>
                <p className="text-sm text-accent font-semibold">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="text-center mt-12">
        <Link to="/portfolio" className="gradient-btn px-8 py-3 text-sm inline-flex items-center gap-2">
          View All Projects <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
