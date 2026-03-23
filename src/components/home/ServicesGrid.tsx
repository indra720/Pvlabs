import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Palette, Check } from "lucide-react";

const ecommerceServices = [
  {
    badge: "🔥 Most Ordered",
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
    cta: "→ See Hero Image Examples",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999"
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
    cta: "→ See Lifestyle Examples",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070"
  },
  {
    badge: "Amazon Exclusive",
    badgeType: "amazon",
    title: "A+ Content & EBC Design",
    desc: "Amazon sellers with A+ content see up to 10% more sales. We design scroll-stopping A+ modules — brand story, feature banners, comparison charts — fully compliant with Amazon's latest guidelines. Desktop and mobile both optimized.",
    checklist: [
      "Brand story module",
      "Feature highlight banners",
      "Product comparison charts",
      "Amazon guideline compliant",
      "Desktop + mobile layout",
      "Delivered within 5 days"
    ],
    cta: "→ See A+ Content Examples",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
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
    cta: "→ See Infographic Examples",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
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
    cta: "→ Talk to Us About Catalog",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
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
    cta: "→ See Branding Examples",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071"
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
    cta: "→ See Packaging Examples",
    image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=2070"
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
    cta: "→ See Social Examples",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974"
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
    cta: "→ See Ad Creative Examples",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
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
    cta: "→ See Deck Examples",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
  }
];

const ServicesGrid = () => (
  <section className="section-padding bg-[#0a0a0a]">
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
          WHAT WE CREATE
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
          Everything your brand <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">needs to grow.</span>
        </h2>
        <p className="text-[#888] max-w-2xl mx-auto">
          We've split our expertise to serve your specific goals — whether you're selling on marketplaces or building a global brand.
        </p>
      </motion.div>

      {/* Dual Pillars Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-auto md:h-[800px]">
        
        {/* Left Pillar: E-Commerce */}
        <div className="flex flex-col h-full overflow-hidden bg-[#0d0d0d] rounded-[24px] border border-[#1a1a1a]">
          <div className="p-8 border-b border-[#1a1a1a] sticky top-0 bg-[#0d0d0d] z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-bg-vivid flex items-center justify-center shadow-lg">
                <ShoppingCart size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FOR SELLERS</h3>
                <p className="text-[#7B2FD9] text-xs font-bold uppercase tracking-wider">E-Commerce Visuals</p>
              </div>
            </div>
            <p className="text-xs text-[#888]">Visuals that convert browsers into buyers on Amazon, Flipkart & more.</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-12">
            {ecommerceServices.map((s, i) => (
              <ServiceItem key={i} service={s} color="#7B2FD9" />
            ))}
          </div>
          
          <div className="p-6 bg-[#0d0d0d] border-t border-[#1a1a1a]">
            <Link to="/services" className="flex items-center justify-center gap-2 gradient-btn w-full py-4 font-bold text-sm">
              Explore All Seller Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Pillar: Brand & Marketing */}
        <div className="flex flex-col h-full overflow-hidden bg-[#0a0a0a] rounded-[24px] border border-[#1a1a1a]">
          <div className="p-8 border-b border-[#1a1a1a] sticky top-0 bg-[#0a0a0a] z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#60B8F0] to-[#7B2FD9] flex items-center justify-center shadow-lg">
                <Palette size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FOR BRANDS</h3>
                <p className="text-[#60B8F0] text-xs font-bold uppercase tracking-wider">Brand & Marketing</p>
              </div>
            </div>
            <p className="text-xs text-[#888]">Look premium, sound consistent, and grow faster in any market.</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-12">
            {brandServices.map((s, i) => (
              <ServiceItem key={i} service={s} color="#60B8F0" />
            ))}
          </div>
          
          <div className="p-6 bg-[#0a0a0a] border-t border-[#1a1a1a]">
            <Link to="/services" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white w-full py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-sm">
              Explore All Brand Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceItem = ({ service, color }: { service: any, color: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col gap-6 group"
  >
    <div className="relative aspect-video rounded-xl overflow-hidden bg-[#111] border border-[#1a1a1a]">
      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
      {service.badge && (
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg ${
          service.badgeType === 'hot' ? 'gradient-bg-vivid' : 
          service.badgeType === 'amazon' ? 'bg-blue-600' : 'bg-cyan-600'
        }`}>
          {service.badge}
        </div>
      )}
    </div>
    
    <div>
      <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
      <p className="text-xs text-[#888] leading-relaxed mb-5">{service.desc}</p>
      
      <div className="grid grid-cols-1 gap-y-2 mb-6">
        {service.checklist.map((item: string, i: number) => (
          <div key={i} className="flex items-start gap-2 text-[11px]">
            <div className="mt-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0">
              <Check size={8} className="text-white" />
            </div>
            <span className="text-[#666]">{item}</span>
          </div>
        ))}
      </div>
      
      <Link to="/contact" className="text-xs font-bold text-white underline underline-offset-4 decoration-[#7B2FD9]/30 hover:decoration-[#7B2FD9] transition-all">
        {service.cta}
      </Link>
    </div>
  </motion.div>
);

export default ServicesGrid;
