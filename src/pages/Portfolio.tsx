import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import servicePrint from "@/assets/service-print.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import portfolioShowcase from "@/assets/portfolio-showcase.jpg";

const categories = ["All", "Product Images", "A+ Content", "Packaging", "Branding", "Logo", "Infographics", "Ads-Creatives"];

const projects = [
  { title: "SkinGlow Hero Image Redesign", cat: ["Product Images", "Ads-Creatives"], desc: "Complete hero image set for a skincare brand — white background, shadow work, skin-tone accurate product rendering.", client: "SkinGlow Naturals", result: "CTR increased 2.1x after listing update", image: serviceBranding },
  { title: "NutriFuel A+ Content & EBC", cat: ["A+ Content", "Infographics"], desc: "Full A+ module — brand story banner, ingredient highlights, comparison chart, lifestyle imagery.", client: "NutriFuel", result: "Conversion rate up 38%", image: serviceWebdesign },
  { title: "KitchenKraft Packaging Design", cat: ["Packaging"], desc: "Complete packaging redesign for a cookware brand — label, box mockup, and Flipkart-ready listing visuals.", client: "KitchenKraft", result: "Return rate down 30%", image: servicePackaging },
  { title: "BabyNest Listing Makeover", cat: ["Product Images"], desc: "8-image listing set — hero, lifestyle, feature callouts, size chart. Flipkart compliant.", client: "BabyNest", result: "Sales up 55% in Week 1", image: serviceAppdesign },
  { title: "GroomX Complete Brand Identity", cat: ["Branding", "Logo"], desc: "Logo, color palette, typography system, and packaging — launched as a D2C men's grooming brand on Amazon.", client: "GroomX", result: "Perceived as premium brand from Day 1", image: serviceBranding },
  { title: "GlowRitual Nykaa Brand Store", cat: ["A+ Content", "Ads-Creatives"], desc: "Full Nykaa brand store setup — banner design, product listing visuals, lifestyle imagery, and ingredient highlight creatives.", client: "GlowRitual", result: "Featured in Nykaa Beauty Edit", image: serviceWebdesign },
  { title: "PowerTool Pro Listing Set", cat: ["Product Images", "Infographics"], desc: "7-image hero + infographic set for a tools brand. Technical accuracy + clean white background shots.", client: "PowerTool Pro", result: "First-try listing approval", image: servicePrint },
  { title: "PureLeaf Organic Packaging", cat: ["Packaging"], desc: "Eco-friendly packaging design for an organic food brand — label design, pouch mockup, Amazon listing visuals.", client: "PureLeaf Organics", result: "Best Seller tag within 3 weeks", image: servicePackaging },
  { title: "FitFlex Activewear Catalog", cat: ["Product Images"], desc: "12 SKU catalog shoot — lifestyle imagery, flat lays, detail shots, Myntra size chart banners.", client: "FitFlex", result: "12 SKUs live in 5 days", image: serviceSocial },
  { title: "UrbanThreads Ajio Catalog", cat: ["Branding", "Product Images"], desc: "Complete catalog shoot-style visuals for a fashion brand — flat lays, model mockups, detail shots, Ajio-compliant image set.", client: "UrbanThreads", result: "40+ SKUs live in 7 days", image: serviceSocial },
  { title: "GlowUp Skincare A+ Redesign", cat: ["A+ Content"], desc: "Replaced basic listing with full A+ content — ingredient storytelling, before/after banners, dermatologist badge visuals.", client: "GlowUp Skincare", result: "80% cost saving vs studio shoot", image: serviceWebdesign },
  { title: "JewelCraft Listing Visuals", cat: ["Product Images"], desc: "Premium product photography-style renders for a jewellery brand — close-ups, lifestyle, and white background sets.", client: "JewelCraft", result: "ROI positive within 2 weeks", image: serviceBranding },
];

const beforeAfterData = [
  { title: "SkinGlow Hero Image", tags: ["Ads-Creatives"], before: "Phone camera shot, yellow lighting, cluttered background", after: "Studio-quality white background render, shadow work, Amazon compliant", beforeImg: servicePrint, afterImg: serviceBranding },
  { title: "KitchenKraft Packaging", tags: ["Packaging"], before: "Generic white box, no branding, no product info", after: "Premium packaging, brand colors, shelf-ready label design", beforeImg: servicePackaging, afterImg: servicePackaging },
  { title: "NutriFuel A+ Content", tags: ["A+ Content", "Infographics"], before: "Plain text description, no banners, no visuals", after: "Full A+ module — brand story, ingredient highlights, comparison chart", beforeImg: serviceWebdesign, afterImg: serviceWebdesign },
  { title: "UrbanThreads Catalog", tags: ["Branding", "Product Images"], before: "Single front-facing image, plain white background", after: "Flat lay + model mockup + detail shot — Ajio full image set", beforeImg: serviceSocial, afterImg: serviceSocial },
  { title: "GlowRitual Brand Store", tags: ["A+ Content", "Ads-Creatives"], before: "Default Nykaa seller page, no branding, no banners", after: "Custom Nykaa storefront — lifestyle banners, curated layout", beforeImg: serviceWebdesign, afterImg: serviceWebdesign },
  { title: "JewelCraft Product Listing", tags: ["Product Images"], before: "Low-res image, no lifestyle context, no size reference", after: "Premium render — close-up, lifestyle, white background set", beforeImg: serviceBranding, afterImg: serviceBranding },
  { title: "EthnicRoots Storefront", tags: ["Branding", "Product Images"], before: "Inconsistent images across SKUs, no brand identity", after: "Unified visual language — lifestyle + size guide banners across all SKUs", beforeImg: serviceSocial, afterImg: serviceSocial },
  { title: "BloomSkin D2C Website", tags: ["Brand Website"], before: "No website, only marketplace presence", after: "Full mobile-first brand website with product pages + Nykaa integration", beforeImg: serviceAppdesign, afterImg: serviceAppdesign },
  // Adding duplicates or similar for the remaining dummy placeholders if needed, but 8 provided
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

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
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

      {/* Showcase */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[24px] overflow-hidden shadow-lg">
            <img src={portfolioShowcase} alt="Portfolio showcase" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* Grid */}
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
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <Eye size={28} className="text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {p.cat.map(c => (
                    <span key={c} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{c}</span>
                  ))}
                  <span className="text-xs text-muted-foreground">• {p.client}</span>
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

          <div className="grid md:grid-cols-2 gap-8">
            {filteredBeforeAfterData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-foreground text-lg">{item.title}</h3>
                  <div className="flex gap-1">
                    {item.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold text-muted-foreground bg-secondary px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-2">
                      <img src={item.beforeImg} alt="Before" className="w-full h-full object-cover opacity-60 grayscale" />
                    </div>
                    <span className="text-xs font-semibold text-destructive">Before</span>
                    <p className="text-xs text-muted-foreground mt-1">{item.before}</p>
                  </div>
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden mb-2">
                      <img src={item.afterImg} alt="After" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-primary">After</span>
                    <p className="text-xs text-muted-foreground mt-1">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center mt-5 rounded-md max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7B2FD9]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Like What You See?</h2>
            <p className="text-primary-foreground/80 mb-8">Let's do the same for your brand.</p>
            <Link to="/contact" className="bg-background text-foreground px-4 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
              Get Free Sample for your Product <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </section>

      {/* Bottom CTA */}

      <Footer />
    </div>
  );
};

export default Portfolio;
