import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

// Placeholder for actual blog post data or import from a dedicated file
const postsData = [
  { title: "10 Logo Design Trends Dominating 2026", category: "Branding", readTime: "5 min", author: "Priya Verma", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071", excerpt: "Discover the latest logo design trends from minimalist wordmarks to dynamic adaptive logos that are shaping brand identities this year." },
  { title: "Why Your Brand Needs a Complete Design System", category: "Strategy", readTime: "4 min", author: "Jordan Lee", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072", excerpt: "Learn how a unified design system can save time, ensure consistency, and scale your brand's visual language across all touchpoints." },
  { title: "The Psychology of Color in Mobile App Design", category: "UI/UX", readTime: "6 min", author: "Alex Rivera", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974", excerpt: "How strategic color choices influence user behavior, boost engagement, and create emotional connections in app interfaces." },
  { title: "Mastering Typography for Digital Products", category: "Design", readTime: "7 min", author: "Samira Khan", image: "https://images.unsplash.com/photo-1499952127939-9149656c0f4f?auto=format&fit=crop&q=80&w=2070", excerpt: "Explore the principles of effective typography in UI design and how to choose fonts that enhance readability and brand identity." },
  { title: "The Future of Branding: AI and Personalization", category: "Trends", readTime: "5 min", author: "Ben Carter", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2070", excerpt: "How artificial intelligence is revolutionizing brand identity creation and enabling hyper-personalized customer experiences." },
];

const CARD_WIDTH = 350; // Approximate width of a card
const CARD_GAP = 24;   // Gap between cards
const CENTER_SCALE = 1.15; // Scale for the center card
const SIDE_SCALE = 0.9;  // Scale for side cards
const FAR_SCALE = 0.7;   // Scale for far-out cards

const BlogCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item as center
  const totalCards = postsData.length;

  // Autoplay
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  // Start autoplay on mount
  useEffect(() => {
    autoplayTimeout.current = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoplayTimeout.current) {
        clearInterval(autoplayTimeout.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleMouseEnter = () => {
    if (autoplayTimeout.current) clearInterval(autoplayTimeout.current);
  };

  const handleMouseLeave = () => {
    autoplayTimeout.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  return (
    <section className="section-padding relative" ref={carouselRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Blog</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Latest <span className="gradient-text">Insights</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Design tips, industry trends, and creative inspiration from our team.</p>
      </motion.div>

      <div className="relative w-full overflow-hidden px-4 md:px-16"> {/* Added padding to show side cards better */}
        <AnimatePresence initial={false} custom={activeIndex}>
          {postsData.map((post, index) => {
            const offset = index - activeIndex;
            const absoluteOffset = Math.abs(offset);

            let scale = 0;
            let zIndex = 0;
            let x = 0;
            let opacity = 0;

            if (offset === 0) { // Center card
              scale = CENTER_SCALE;
              zIndex = 3;
              x = 0;
              opacity = 1;
            } else if (offset === 1) { // Right card
              scale = SIDE_SCALE;
              zIndex = 2;
              x = CARD_WIDTH + CARD_GAP;
              opacity = 0.7;
            } else if (offset === -1) { // Left card
              scale = SIDE_SCALE;
              zIndex = 2;
              x = -(CARD_WIDTH + CARD_GAP);
              opacity = 0.7;
            } else if (offset === 2) { // Far right card
              scale = FAR_SCALE;
              zIndex = 1;
              x = 2 * (CARD_WIDTH + CARD_GAP);
              opacity = 0.4;
            } else if (offset === -2) { // Far left card
              scale = FAR_SCALE;
              zIndex = 1;
              x = -2 * (CARD_WIDTH + CARD_GAP);
              opacity = 0.4;
            } else {
              // Cards completely out of view
              scale = 0;
              opacity = 0;
            }

            return (
              <motion.div
                key={index}
                custom={offset}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: (offset: number) => ({
                    x: offset * (CARD_WIDTH + CARD_GAP),
                    scale: 0.9,
                    opacity: 0.5,
                    zIndex: offset === 0 ? 3 : (Math.abs(offset) < 2 ? 2 : 1),
                  }),
                  center: (offset: number) => ({
                    x: offset * (CARD_WIDTH + CARD_GAP),
                    scale: offset === 0 ? CENTER_SCALE : (Math.abs(offset) === 1 ? SIDE_SCALE : FAR_SCALE),
                    opacity: offset === 0 ? 1 : (Math.abs(offset) === 1 ? 0.7 : 0.4),
                    zIndex: offset === 0 ? 3 : (Math.abs(offset) < 2 ? 2 : 1),
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      scale: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      zIndex: { delay: 0.1 } // Ensure zIndex applies after other animations
                    }
                  }),
                  exit: (offset: number) => ({
                    x: offset * (CARD_WIDTH + CARD_GAP) * 1.5, // Move further out when exiting
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  })
                }}
                style={{
                  position: "absolute",
                  width: `${CARD_WIDTH}px`,
                  left: "50%", // Center the carousel container
                  x: `${x}px`, // This x value is now correctly applied via variants
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  className="shadow-lg rounded-[24px] overflow-hidden cursor-pointer"
                >
                  <div className="glass-card-dark h-full flex flex-col"> {/* Use dark glass card for contrast and make it flex column */}
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                        <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="gradient-btn px-5 py-2 text-sm inline-flex items-center gap-1">
                          Read More <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between"> {/* Flex grow to fill space */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <h3 className="font-heading font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-xs text-primary-foreground/60 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto"> {/* Push to bottom */}
                        <span className="text-xs text-primary-foreground/60 flex items-center gap-1"><User size={12} /> {post.author}</span>
                        <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-primary flex items-center gap-1 font-medium">
                          Read more <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 z-30 flex justify-between w-full px-4 md:px-8">
          <button onClick={goToPrev} className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-lg hover:bg-background/80 transition-all">
            <ArrowLeft size={24} className="text-primary-foreground" />
          </button>
          <button onClick={goToNext} className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-lg hover:bg-background/80 transition-all">
            <ArrowRight size={24} className="text-primary-foreground" />
          </button>
        </div>
    </section>
  );
};

export default BlogCarousel;
