import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pukhraj1 from "../assets/Images for Website - Copy/pukhraj/first.png"
import pukhraj2 from "../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (1).png"
import pukhraj3 from "../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (2).png"
import pukhraj4 from "../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (5).png"
import pukhraj5 from "../assets/Images for Website - Copy/pukhraj/mage_5byoho5byoho5byo (4).png"

// also images
import aldo1 from "../assets/Images for Website - Copy/aldo/first.png"
import aldo2 from "../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (2).png"
import aldo3 from "../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (3).png"
import aldo4 from "../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (4).png"
import aldo5 from "../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (5).png"
import aldo6 from "../assets/Images for Website - Copy/aldo/Image Jan 1, 2026, 04_43_41 PM (6).png"

// aakirti
import Aakirti1 from "../assets/Images for Website - Copy/aakirti/first.png"
import Aakirti2 from "../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (2).png"
import Aakirti3 from "../assets/Images for Website - Copy/aakirti/Image May 3, 2026, 09_22_09 AM (1).png"
import Aakirti4 from "../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (4).png"
import Aakirti5 from "../assets/Images for Website - Copy/aakirti/Image Jan 1, 2026, 03_53_53 PM (5).png"


// nutricrate

import nutricrate1 from "../assets/Images for Website - Copy/nutricrate/first.png"
import nutricrate2 from "../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (2).png"
import nutricrate3 from "../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (3).png"
import nutricrate4 from "../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (4).png"
import nutricrate5 from "../assets/Images for Website - Copy/nutricrate/Image May 3, 2026, 08_45_02 AM (1).png"


// Ashoka
import ashoka1 from "../assets/Images for Website - Copy/ashoka/cardFirstimg.png"
import ashoka2 from "../assets/Images for Website - Copy/ashoka/Image May 3, 2026, 09_25_38 AM (1).png"
import ashoka3 from "../assets/Images for Website - Copy/ashoka/Image May 3, 2026, 09_25_38 AM (3).png"
import ashoka4 from "../assets/Images for Website - Copy/ashoka/Image May 3, 2026, 09_25_38 AM (4).png"

//attar ayurveda
import attar1 from "../assets/Images for Website - Copy/Attar Ayurveda/AA1 (1).png"
import attar2 from "../assets/Images for Website - Copy/Attar Ayurveda/AA2 (1).png"
import attar3 from "../assets/Images for Website - Copy/Attar Ayurveda/AA3 (1).png"
import attar4 from "../assets/Images for Website - Copy/Attar Ayurveda/AA4 (1).png"
import attar5 from "../assets/Images for Website - Copy/Attar Ayurveda/AA5 (1).png"




// nipura
import nipura1 from "../assets/Images for Website - Copy/Nipura/first.png"
import nipura2 from "../assets/Images for Website - Copy/Nipura/Nipura2 (1).png"
import nipura3 from "../assets/Images for Website - Copy/Nipura/Nipura3 (1).png"
import nipura4 from "../assets/Images for Website - Copy/Nipura/Nipura4 (1).png"

// ella
import ella1 from "../assets/Images for Website - Copy/ella/first.png"
import ella2 from "../assets/Images for Website - Copy/ella/Image Mar 23, 2026, 10_42_09 PM (1).png"
import ella3 from "../assets/Images for Website - Copy/ella/Image Mar 23, 2026, 10_42_09 PM (2).png"
import ella4 from "../assets/Images for Website - Copy/ella/Image Mar 23, 2026, 10_42_09 PM (3).png"
import ella5 from "../assets/Images for Website - Copy/ella/Image Mar 23, 2026, 10_42_09 PM (4).png"

// generic service images

import generic1 from "../assets/Images for Website - Copy/Generic Brand/first.png"
import generic2 from "../assets/Images for Website - Copy/Generic Brand/Image_sbhkgrsbhkgrsbhk (1).png"
import generic3 from "../assets/Images for Website - Copy/Generic Brand/Image_sbhkgrsbhkgrsbhk (2).png"
import generic4 from "../assets/Images for Website - Copy/Generic Brand/Image_sbhkgrsbhkgrsbhk (4).png"
import generic5 from "../assets/Images for Website - Copy/Generic Brand/Image_sbhkgrsbhkgrsbhk (5).png"


// import servicePrint from "@/assets/service-print.jpg";
// import serviceSocial from "@/assets/service-social.jpg";
// import portfolioShowcase from "@/assets/portfolio-showcase.jpg"; 

import heroimg from "../assets/Portfoliobanner.png"


// before and after images
import pukhrajBefore from "../assets/Images for Website - Copy/Before and after/pukhraj before.png"
import pukhrajAfter from "../assets/Images for Website - Copy/Before and after/Pukhraj after.png"
import AldoBefore from "../assets/Images for Website - Copy/Before and after/Aldo before.png"
import AldoAfter from "../assets/Images for Website - Copy/Before and after/Aldo after.png"
import AakirtiBefore from "../assets/Images for Website - Copy/Before and after/aakriti before.png"
import AakirtiAfter from "../assets/Images for Website - Copy/Before and after/aakirti afer.png"
import AshokaBefore from "../assets/Images for Website - Copy/Before and after/ashoka before.png"
import AshokaAfter from "../assets/Images for Website - Copy/Before and after/Ashoka after.png"
import attarBefore from "../assets/Images for Website - Copy/Before and after/attar ayurveda before.png"
import attarAfter from "../assets/Images for Website - Copy/Before and after/attar ayurveda after.png"
import BlesttaBefore from "../assets/Images for Website - Copy/Before and after/blestaa essential before.png"
import BlesttaAfter from "../assets/Images for Website - Copy/Before and after/blestaa essential after.png"
import HighekBefore from "../assets/Images for Website - Copy/Before and after/highek before.png"
import HighekAfter from "../assets/Images for Website - Copy/Before and after/Highek after.png"
import nutricateBefore from "../assets/Images for Website - Copy/Before and after/nurtricate before.png"
import nutricateAfter from "../assets/Images for Website - Copy/Before and after/nutricrate after.png"

const categories = ["All", "Product Images", "A+ Content", "Packaging", "Branding", "Logo", "Infographics", "Ads-Creatives", "Flipkart", "Brand Website", "Ajio", "Amazon", "Myntra"];

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
  {
    title: "Ashoka Dry Fruits , FK + Website Visuals",
    cat: ["Product Images", "Flipkart", "Brand Website"],
    desc: "Dual-platform visual set for a dry fruits brand , Flipkart listing images + D2C website product photography, consistent visual language across both.",
    brand: "Ashoka",
    result: "Live on Flipkart + website simultaneously",
    images: [ashoka1, ashoka2, ashoka3, ashoka4]
  },

  {
    title: "HighEk Blazer A+ Content",
    cat: ["A+ Content", "Amazon"],
    desc: "Complete Amazon A+ module for a premium blazer brand , brand story banner, fabric detail highlights, size guide, styling lifestyle imagery.",
    brand: "HighEk",
    result: "A+ live, conversion rate improved",
    images: [generic1, generic2, generic3, generic4, generic5]
  },
  {
    title: "Nipura Jewellery RPD , Myntra",
    cat: ["Infographics", "Myntra"],
    desc: "Complete Rich Product Description design for a jewellery brand on Myntra , feature modules, material callouts, size and styling guide.",
    brand: "Nipura Jewellery",
    result: "Myntra RPD approved, first attempt",
    images: [nipura1, nipura2, nipura3, nipura4]
  },
  {
    title: "Attar Ayurveda Bhringraj Powder A+",
    cat: ["A+ Content", "Amazon"],
    desc: "Full Amazon A+ content for an Ayurvedic hair care brand , ingredient sourcing story, usage guide banners, certification highlights, lifestyle imagery.",
    brand: "Attar Ayurveda",
    result: "Best performing listing in category",
    images: [attar1, attar2, attar3, attar4, attar5]
  },
  {
    title: "ELLA Sofa Amazon Listing Set",
    cat: ["Product Images", "Amazon"],
    desc: "Complete Amazon listing visual set for a premium sofa brand , hero shots, dimension reference, lifestyle in-room context, fabric detail close-ups.",
    brand: "ELLA",
    result: "Returns reduced, listing quality 94/100",
    images: [ella1, ella2, ella3, ella4, ella5]
  },

];

const beforeAfterData = [
  { title: "Pukhraj Jasmine Oil Listing Visuals", tags: ["Product Images", "Ads-Creatives"], before: "Phone camera shot, yellow lighting, cluttered background", after: "Studio-quality white background render, shadow work, Amazon compliant", beforeImg: pukhrajBefore, afterImg: pukhrajAfter },
  { title: "ALDO Sandal  Visual Set", tags: ["Product Images", "Brand Website"], before: "Generic white box, no branding, no product info", after: "Premium packaging, brand colors, shelf-ready label design", beforeImg: AldoBefore, afterImg: AldoAfter },
  {
    title: "Aakirti Suit Catalog", tags: ["Product Images",
      "Ajio"], before: "Plain text description, no banners, no visuals", after: "Full A+ module - brand story, ingredient highlights, comparison chart", beforeImg: AakirtiBefore, afterImg: AakirtiAfter
  },
  { title: "Nutricrate Honey Listing Images", tags: ["Amazon", "Product Images"], before: "Single front-facing image, plain white background", after: "Flat lay + model mockup + detail shot - Ajio full image set", beforeImg: BlesttaBefore, afterImg: BlesttaAfter },
  { title: "GlowRitual Brand Store", tags: ["A+ Content", "Ads-Creatives"], before: "Default Nykaa seller page, no branding, no banners", after: "Custom Nykaa storefront - lifestyle banners, curated layout", beforeImg: attarBefore, afterImg: attarAfter },
  { title: "JewelCraft Product Listing", tags: ["Product Images"], before: "Low-res image, no lifestyle context, no size reference", after: "Premium render - close-up, lifestyle, white background set", beforeImg: HighekBefore, afterImg: HighekAfter },
  { title: "EthnicRoots Storefront", tags: ["Branding", "Product Images"], before: "Inconsistent images across SKUs, no brand identity", after: "Unified visual language - lifestyle + size guide banners across all SKUs", beforeImg: AshokaBefore, afterImg: AshokaAfter },
  { title: "BloomSkin D2C Website", tags: ["Brand Website"], before: "No website, only marketplace presence", after: "Full mobile-first brand website with product pages + Nykaa integration", beforeImg: AakirtiBefore, afterImg: AakirtiAfter },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filteredProjects = active === "All"
    ? projects
    : projects.filter(p => p.cat.includes(active));

  const filteredBeforeAfterData = active === "All"
    ? beforeAfterData
    : beforeAfterData.filter(item => item.tags.includes(active));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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

      <section className="pt-24 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Catalog visuals, <span className="gradient-text">A+ content</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Helping Indian sellers look premium
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Layout Wrapper */}
      <div className="flex flex-col">
        {/* Showcase - Order changes based on 'active' filter */}
        <section className={`px-6 md:px-12 pb-8 transition-all duration-500 ${active === 'All' ? 'order-1' : 'order-2'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[24px] overflow-hidden shadow-lg">
              <img src={heroimg} alt="Portfolio showcase" className="w-full" />
            </motion.div>
          </div>
        </section>

        {/* Results Wrapper (Grid + Before/After) - Swaps order with Showcase */}
        <div className={`transition-all duration-500 ${active === 'All' ? 'order-2' : 'order-1'}`}>
          {/* projects grid*/}
          <section className="px-6 md:px-12 pb-24 pt-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p, i) => (
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
                    <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
                    <p className="text-sm text-accent font-semibold">{p.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Before/After */}
          <section className="section-padding gradient-bg-soft">
            <div className="max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Transformations</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Before & <span className="gradient-text">After</span></h2>
                <p className="text-muted-foreground mt-4 max-w-xl mx-auto">See what a listing looks like before and after PV Labs gets to work.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {filteredBeforeAfterData.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                      <h3 className="font-heading font-bold text-foreground text-base md:text-lg leading-tight">{item.title}</h3>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map(t => (
                          <span key={t} className="text-[9px] md:text-[10px] uppercase font-bold text-muted-foreground bg-secondary px-2 py-1 rounded whitespace-nowrap">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="min-w-0">
                        <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden mb-2">
                          <img src={item.beforeImg} alt="Before" className="w-full h-full object-cover opacity-60 grayscale" />
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-destructive">Before</span>
                        <p className="text-[9px] md:text-xs text-muted-foreground mt-1 break-words leading-tight">{item.before}</p>
                      </div>
                      <div className="min-w-0">
                        <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden mb-2">
                          <img src={item.afterImg} alt="After" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold text-primary">After</span>
                        <p className="text-[9px] md:text-xs text-muted-foreground mt-1 break-words leading-tight">{item.after}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section - Fixed at bottom */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center rounded-[24px] max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#7B2FD9]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Like What You See?</h2>
              <p className="text-primary-foreground/80 mb-8">Let's do the same for your brand.</p>
              <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
                Try a Free Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
