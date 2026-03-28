import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";

const posts = [
  { title: "10 Logo Design Trends Dominating 2026", category: "Branding", readTime: "5 min", author: "Priya Verma", image: serviceBranding, excerpt: "Discover the latest logo design trends from minimalist wordmarks to dynamic adaptive logos that are shaping brand identities this year." },
  { title: "Why Your Brand Needs a Complete Design System", category: "Strategy", readTime: "4 min", author: "Jordan Lee", image: serviceWebdesign, excerpt: "Learn how a unified design system can save time, ensure consistency, and scale your brand's visual language across all touchpoints." },
  { title: "The Psychology of Color in Mobile App Design", category: "UI/UX", readTime: "6 min", author: "Alex Rivera", image: serviceAppdesign, excerpt: "How strategic color choices influence user behavior, boost engagement, and create emotional connections in app interfaces." },
  { title: "Mastering Typography for Digital Products", category: "Design", readTime: "7 min", author: "Samira Khan", image: serviceWebdesign, excerpt: "Explore the principles of effective typography in UI design and how to choose fonts that enhance readability and brand identity." },
  { title: "The Future of Branding: AI and Personalization", category: "Trends", readTime: "5 min", author: "Ben Carter", image: serviceBranding, excerpt: "How artificial intelligence is revolutionizing brand identity creation and enabling hyper-personalized customer experiences." },
  { title: "Motion Design: Bringing Interfaces to Life", category: "UI Animation", readTime: "6 min", author: "Leo Zhang", image: serviceAppdesign, excerpt: "Why purposeful motion is the key to creating engaging, intuitive, and memorable digital experiences for modern users." },
  { title: "Motion Design: Bringing Interfaces to Life", category: "UI Animation", readTime: "6 min", author: "Leo Zhang", image: serviceAppdesign, excerpt: "Why purposeful motion is the key to creating engaging, intuitive, and memorable digital experiences for modern users." },
];

const BlogPreview = () => {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = (index: number) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    // stop only if center card
    if (swiper.realIndex === index) {
      swiper.autoplay?.stop();
    }
  };

  const handleMouseLeave = () => {
    swiperRef.current?.swiper?.autoplay?.start();
  };

  return (
    <section className="section-padding gradient-bg-soft overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Explore Insights</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Design tips, industry trends, and creative inspiration from our team.</p>
        </motion.div>

        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={1000}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full py-10 !overflow-visible "
          >
            {posts.map((p, i) => (
              <SwiperSlide key={i} className="sm:mx-10 max-w-[300px] sm:max-w-[380px]">
                <motion.div
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{p.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><User size={12} /> {p.author}</span>
                      <span className="text-sm text-primary flex items-center gap-1 font-medium"><span className=" hidden sm:flex">Read more</span> <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;