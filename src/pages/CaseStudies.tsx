import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Users, BarChart3, CheckCircle, ArrowUpRight } from "lucide-react";
import pukhraj from "../assets/Images for Website - Copy/Case Studies/CS 1.png";
import nipura from "../assets/Images for Website - Copy/Case Studies/CS 2.png";
import attar from "../assets/Images for Website - Copy/Case Studies/CS 3.png";
import only from "../assets/Images for Website - Copy/Case Studies/CS 4.png";
import Aakirti from "../assets/Images for Website - Copy/Case Studies/CS 5.png";
import aldo from "../assets/Images for Website - Copy/Case Studies/CS 6.png";
import ashoka from "../assets/Images for Website - Copy/Case Studies/CS 7.png";
import blazer from "../assets/Images for Website - Copy/Case Studies/CS 8.png";

const caseStudies = [
  {
    id: "pukhraj-flipkart",
    title: "This jasmine oil brand had a great product. Their listing was invisible. Here's what we did.",
    client: "Pukhraj",
    category: "Flipkart",
    duration: "4 Days",
    heroImage: pukhraj,
    problem: "Pukhraj had a quality jasmine oil product but their Flipkart listing was driving buyers away. Phone camera images, off-white background, product filling 40% of frame. Buyers landed on the listing and kept scrolling. They weren't losing on product. They were losing on presentation.",
    solution: "We rebuilt the entire visual identity for Flipkart — studio-quality hero image, white background compliant, product fills 85% of frame, shadow work, ingredient callout infographics, and lifestyle imagery. Every image designed to stop the scroll and answer a buyer objection before they could ask it.",
    results: [
      { metric: "2.3x", label: "More clicks, same traffic" },
      { metric: "42%", label: "More buyers who converted" },
      { metric: "4 Days", label: "Start to live" },
      { metric: "Zero", label: "Back-and-forth revisions" },
    ],
    testimonial: { text: "We always knew our product was good. PV Labs made our listing show that. Clicks doubled in the first week itself.", author: "Pukhraj Brand", role: "Flipkart Seller, Jasmine Oil" },
    beforeAfter: { before: "Phone camera shot, off-white background, product too small in frame", after: "Studio-quality white background render, shadow work, Flipkart compliant" },
  },
  {
    id: "nipura-myntra",
    title: "Their earrings were premium. Their Myntra page looked anything but. Here's how we fixed it.",
    client: "Nipura Jewellery",
    category: "Myntra",
    duration: "5 Days",
    heroImage: nipura,
    problem: "Nipura Jewellery was live on Myntra but had a default seller page — no RPD modules, no brand banner, no material callouts, no size reference. In a category full of premium-looking jewellery brands, they were completely invisible. Buyers couldn't see the craftsmanship. Price looked unjustified.",
    solution: "We designed a complete Myntra RPD — brand story banner, material callout modules showing 92.5 sterling silver hallmark, styling guide with Indian skin tone reference, size and weight reference for every earring. Now the listing sells the craftsmanship before the buyer even reads a word.",
    results: [
      { metric: "38%", label: "Higher listing quality score" },
      { metric: "45%", label: "Sales increase Month 1" },
      { metric: "5 Days", label: "Start to live" },
      { metric: "First", label: "Try RPD Approval" },
    ],
    testimonial: { text: "The difference was night and day. Our listing finally looked like the brand we actually are. Orders picked up the same week RPD went live.", author: "Nipura Jewellery", role: "Myntra Seller, Earrings" },
    beforeAfter: { before: "Default Myntra page, no RPD, no brand identity, no modules", after: "Complete RPD — material callouts, styling guide, size reference live" },
  },
  {
    id: "attar-ayurveda-amazon",
    title: "This Ayurvedic brand was getting buried on Amazon. No A+ content. No brand story. Here's what changed.",
    client: "Attar Ayurveda",
    category: "Amazon",
    duration: "6 Days",
    heroImage: attar,
    problem: "Attar Ayurveda had a quality bhringraj powder product but their Amazon listing was plain text only — no banners, no visuals, no brand story, no ingredient callouts. Competitors with A+ content were outranking them despite an inferior product. Buyers had no reason to trust an Ayurvedic health product with zero visual credibility.",
    solution: "We built a complete A+ module from scratch — Ayurvedic brand story banner, ingredient sourcing story, usage guide visuals, Ayush certification highlight, and lifestyle imagery showing the product in daily routine. All within Amazon's EBC guidelines. Every module built to establish trust before the buyer scrolls to reviews.",
    results: [
      { metric: "41%", label: "Conversion Rate Up" },
      { metric: "6 Days", label: "A+ Live in Amazon" },
      { metric: "Ayush", label: "Certified Badge Prominent" },
      { metric: "Zero", label: "Back-and-forth Revisions" },
    ],
    testimonial: { text: "Our product was always Ayurvedic and pure. PV Labs made our listing prove it. The A+ content they built is the reason buyers trust us before even reading reviews.", author: "Attar Ayurveda", role: "Amazon Seller, Bhringraj Powder" },
    beforeAfter: { before: "Plain text description, no banners, no visuals, no brand story", after: "Full A+ module — ingredient sourcing, usage guide, certification highlights" },
  },
  {
    id: "only-essentials-d2c",
    title: "Their Ayurvedic gut health product was live. But their D2C presence looked like an afterthought.",
    client: "Only Essentials",
    category: "D2C Website",
    duration: "5 Days",
    heroImage: only,
    problem: "Only Essentials had a quality Ayurvedic gut health powder but their D2C website had generic product images — no ingredient storytelling, no lifestyle context, no trust badges, no brand visual system. In a category where trust is everything, their visuals were costing them credibility before buyers even read the description.",
    solution: "We created a complete D2C visual set — premium product hero images, ingredient callout infographics with Ayush certification prominently highlighted, lifestyle imagery showing morning routine context, and trust badge graphics. Every visual designed to build credibility and convert a first-time buyer who has never heard of the brand.",
    results: [
      { metric: "Premium", label: "D2C Brand Feel Achieved" },
      { metric: "5 Days", label: "Full Visual Set Live" },
      { metric: "Zero", label: "Studio Shoot Required" },
      { metric: "Ayush", label: "Badge Prominent" },
    ],
    testimonial: { text: "We always struggled to show buyers why our product was worth trusting. PV Labs built visuals that do that automatically — without us saying a word.", author: "Only Essentials", role: "D2C Brand, Ayurvedic Gut Health" },
    beforeAfter: { before: "Generic images, no ingredient story, no trust badges, no brand identity", after: "Premium D2C visual set — ingredient callouts, lifestyle imagery, trust badges, Ayurvedic positioning clear" },
  },
  {
    id: "aakirti-ajio",
    title: "40+ ethnic suit SKUs. Ajio kept rejecting them. Here's how we got every single one approved.",
    client: "Aakirti",
    category: "Ajio",
    duration: "7 Days",
    heroImage:Aakirti,
    problem: "Aakirti had 40+ ethnic suit SKUs ready to list on Ajio but only had basic front-facing images — no flat lays, no detail shots, no fabric close-ups, no lifestyle context. Ajio's catalog standards require multiple angles and lifestyle imagery — their listings kept getting rejected. Beautiful suits, invisible on the platform.",
    solution: "We created a complete catalog set for all 40+ SKUs — flat lay, styled shot, detail shot, and fabric texture close-up per SKU. Standardized visual language across the entire range so the brand looked cohesive on Ajio's grid. Every image built to Ajio's exact catalog specifications.",
    results: [
      { metric: "40+", label: "SKUs Live In 7 Days" },
      { metric: "Zero", label: "Listing Rejections" },
      { metric: "100%", label: "Consistent Visual Identity" },
      { metric: "First-Try", label: "Ajio Approval" },
    ],
    testimonial: { text: "Three rejections before PV Labs. They got every single SKU approved on the first try. That's the difference between designers and e-commerce specialists.", author: "Aakirti", role: "Ajio Brand, Ethnic Wear" },
    beforeAfter: { before: "Basic front-facing images, listing rejections, no catalog standard", after: "Complete catalog set — flat lay, detail shot, size guide, Ajio compliant" },
  },
  {
    id: "aldo-sandal-d2c",
    title: "This sandal brand was selling on marketplaces. But they had no brand of their own. Here's what we built.",
    client: "ALDO",
    category: "Brand Website",
    duration: "5 Days",
    heroImage: aldo,
    problem: "ALDO had a quality sandal product selling on marketplaces but zero D2C presence — no website, no brand identity online, no direct customer relationship. Their product visuals were inconsistent — different angles, different lighting, different backgrounds across platforms. No visual system. No brand story. Buyers couldn't tell if this was a premium brand or a generic reseller.",
    solution: "We created a complete D2C visual set for ALDO's brand website — premium product photography style visuals, multiple angles per SKU, lifestyle context shots showing sandals in real environments, clean white background hero images, and detail shots highlighting craftsmanship. Every visual consistent across the entire product range — one unified brand language.",
    results: [
      { metric: "Premium", label: "D2C Brand Feel Achieved" },
      { metric: "5 Days", label: "Full Visual Set Live" },
      { metric: "Zero", label: "Studio Shoot Required" },
      { metric: "Consistent", label: "Visual Language Across All SKUs" },
    ],
    testimonial: { text: "We finally looked like a brand people would actually trust. PV Labs gave our sandals the visual identity they deserved. Our D2C website finally feels premium.", author: "ALDO", role: "D2C Brand, Footwear" },
    beforeAfter: { before: "Inconsistent marketplace images, no brand identity, no visual system", after: "Premium D2C visual set — multiple angles, lifestyle context, consistent brand language" },
  },
  {
    id: "ashoka-dry-fruits",
    title: "Their dry fruits were premium quality. Their packaging was making them look like a commodity. Here's the fix.",
    client: "Ashoka",
    category: "Packaging · Flipkart · Brand Website",
    duration: "6 Days",
    heroImage: ashoka,
    problem: "Ashoka had a quality dry fruits product but their packaging looked homemade — basic label design, no brand color system, no visual hierarchy, no premium positioning. On Flipkart shelves dominated by established dry fruit brands, they were completely invisible. Same product on their website had completely different images — zero consistency across platforms. Buyers couldn't justify the price because the packaging didn't match the quality.",
    solution: "We redesigned the complete packaging system for Ashoka — new label design with premium color system, clear visual hierarchy, product window highlighting the dry fruits inside, FSSAI and quality certification badges prominently placed. Then extended the same visual language to Flipkart listing images and D2C website product visuals — so every touchpoint told the same premium, consistent brand story.",
    results: [
      { metric: "2", label: "Platforms Covered" },
      { metric: "6 Days", label: "Packaging + Listing Live" },
      { metric: "Premium", label: "Brand Positioning Achieved" },
      { metric: "Consistent", label: "Visual Identity Both Platforms" },
    ],
    testimonial: { text: "Our product quality was always there. PV Labs made our packaging finally show it. We look like a premium brand now — not just another dry fruits seller.", author: "Ashoka", role: "Flipkart Seller, Dry Fruits" },
    beforeAfter: { before: "Basic label, no brand system, inconsistent images across platforms", after: "Premium packaging design — unified visual language on Flipkart + website both" },
  },
  {
    id: "highek-blazer",
    title: "Great blazer. Zero brand identity. Ads spending money with nothing to show. Here's how we turned it around.",
    client: "HighEk",
    category: "Branding · Ads Creative · Amazon",
    duration: "7 Days",
    heroImage: blazer,
    problem: "HighEk had a premium blazer product on Amazon but two critical problems — first, zero brand identity: no consistent visual language, no brand story, no A+ content, nothing to differentiate from 100 other blazer sellers. Second, their Meta ad creatives were generic product shots with no conversion focus — high spend, low returns. Money going out, sales not coming in. Both problems had the same root cause: no visual strategy.",
    solution: "We tackled both simultaneously. First, built a complete A+ content module for Amazon — brand story banner, fabric detail highlights, size guide, styling imagery, care instructions. Then designed high-converting Meta ad creatives — multiple formats, conversion-focused layouts, brand consistent design. Same visual language across Amazon listing and Meta ads — so every touchpoint reinforced the same premium brand message.",
    results: [
      { metric: "4.1x", label: "Meta Ad ROAS" },
      { metric: "38%", label: "Conversion Rate Up" },
      { metric: "7 Days", label: "A+ + Ads Live" },
      { metric: "Zero", label: "Revision Needed" },
    ],
    testimonial: { text: "Two problems fixed in one project. Our Amazon listing finally looks premium and our ads are actually converting. PV Labs understood exactly what we needed.", author: "HighEk", role: "Amazon Brand, Premium Blazers" },
    beforeAfter: { before: "Generic listing, no brand identity, low-converting ad creatives", after: "Complete A+ content + high-converting Meta ad creatives — same brand language across all touchpoints" },
  },
];

const CaseStudies = () => (
  <div className="min-h-screen gradient-bg-soft">
    <Navbar />

    {/* Hero */}
    <section className="pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Before PV Labs. <span className="gradient-text">After PV Labs.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Real sellers. Real numbers. No stock photos, no made-up metrics.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { icon: TrendingUp, num: "2x", label: "Listings clicked twice as often" },
            { icon: Target, num: "60%", label: "Saved vs. hiring in-house" },
            { icon: Users, num: "6+", label: "Marketplaces we've dominated" },
            { icon: BarChart3, num: "96%", label: "Clients who came back for more" },
          ].map((s, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <s.icon size={18} className="text-primary mx-auto mb-1" />
              <div className="font-heading text-2xl font-bold gradient-text">{s.num}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Case Study Cards */}
    {caseStudies.map((cs, i) => (
      <div key={cs.id}>
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.category}</span>
                <span className="text-xs text-muted-foreground">• {cs.client}</span>
                <span className="text-xs text-muted-foreground">• {cs.duration}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{cs.title}</h2>

              {/* Hero image */}
              <div className="rounded-[24px] overflow-hidden shadow-lg mb-12">
                <img src={cs.heroImage} alt={cs.title} className="w-full aspect-[21/9] object-cover" />
              </div>

              {/* Problem → Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <h3 className="font-heading text-lg font-bold text-foreground">The Problem</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div className="glass-card p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <h3 className="font-heading text-lg font-bold text-foreground">Our Approach</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {cs.results.map((r, j) => (
                  <div key={j} className="glass-card p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="font-heading text-xl md:text-3xl font-bold gradient-text">{r.metric}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="glass-card p-6 border-l-4 border-destructive/30">
                  <span className="text-xs font-bold text-destructive uppercase tracking-wider">Before</span>
                  <p className="text-muted-foreground mt-2">{cs.beforeAfter.before}</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-primary/50">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">After</span>
                  <p className="text-muted-foreground mt-2">{cs.beforeAfter.after}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="glass-card p-8 bg-primary/5 border-primary/20">
                <p className="text-lg text-foreground italic leading-relaxed mb-4">"{cs.testimonial.text}"</p>
                <div>
                  <span className="font-heading font-bold text-foreground">{cs.testimonial.author}</span>
                  <span className="text-sm text-muted-foreground ml-2">- {cs.testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {i === 1 && (
          <section className="py-20 px-6 text-center border-y border-border/50">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Every brand above was losing sales not because of their product - <span className="gradient-text">but because of how it looked online.</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-10">Sound familiar?</p>
              <Link to="/contact" className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:shadow-2xl transition-all hover:scale-105">
                Show us your listing <ArrowRight size={22} />
              </Link>
            </div>
          </section>
        )}
      </div>
    ))}

    {/* CTA */}
    <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center max-w-4xl mx-auto my-12 w-[calc(100%-3rem)] rounded-[32px] shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Want Results Like These?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Let's build your success story - one listing at a time.
        </p>
        <Link to="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105">
          Try a Free Sample
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudies;
