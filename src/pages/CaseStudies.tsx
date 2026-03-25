import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Users, BarChart3, CheckCircle, ArrowUpRight } from "lucide-react";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceAppdesign from "@/assets/service-appdesign.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceMotion from "@/assets/service-motion.jpg";

const caseStudies = [
  {
    id: "skinglow-redesign",
    title: "SkinGlow Hero Image Redesign",
    client: "SkinGlow Naturals",
    category: "Amazon",
    duration: "7 Days",
    heroImage: serviceBranding,
    problem: "SkinGlow was getting traffic on Amazon but CTR was poor. Their listing images were shot on a phone — inconsistent lighting, cluttered background, no brand identity. Customers were scrolling past without clicking.",
    solution: "We created a full 7-image listing set — white background hero, shadow render, 3 infographic slides highlighting key ingredients, 1 lifestyle image, and 1 size/variant comparison. Every image built for Amazon's algorithm and the buyer's eye.",
    results: [
      { metric: "2.1x", label: "CTR Increase" },
      { metric: "38%", label: "Conversion Uplift" },
      { metric: "7 Days", label: "Turnaround" },
      { metric: "Zero", label: "Revisions Needed" },
    ],
    testimonial: { text: "We were getting visitors but no clicks. PV Labs fixed that in one week. Best investment we made for our listing.", author: "Rahul M.", role: "Amazon Seller, Personal Care" },
    beforeAfter: { before: "Phone camera shot, yellow lighting, cluttered background, no brand identity", after: "Studio-quality white background render, shadow work, Amazon compliant" },
  },
  {
    id: "kitchenkraft-packaging",
    title: "KitchenKraft Packaging & Listing Overhaul",
    client: "KitchenKraft",
    category: "Flipkart",
    duration: "5 Days",
    heroImage: servicePackaging,
    problem: "KitchenKraft had a quality product but their packaging looked generic — plain white box, no branding, no visual hierarchy. Flipkart return rate was high because customers didn't know what they were getting.",
    solution: "We redesigned the full packaging — label, box structure, and brand color system. Then built a matching Flipkart listing set: hero image, unboxing lifestyle shot, feature callout cards, and a size reference graphic.",
    results: [
      { metric: "30%", label: "Drop in Returns" },
      { metric: "55%", label: "Sales Increase Week 1" },
      { metric: "Full", label: "Packaging + Listing" },
      { metric: "5 Day", label: "Delivery" },
    ],
    testimonial: { text: "Customers now know exactly what they're buying. Returns dropped, ratings improved. PV Labs understood our product better than we expected.", author: "Kavya M.", role: "Flipkart Brand, Home & Kitchen" },
    beforeAfter: { before: "Generic white box, no branding, no visual hierarchy", after: "Premium packaging, brand colors, shelf-ready label design" },
  },
  {
    id: "nutrifuel-aplus",
    title: "NutriFuel A+ Content & Brand Store",
    client: "NutriFuel",
    category: "Amazon",
    duration: "6 Days",
    heroImage: serviceWebdesign,
    problem: "NutriFuel had decent sales but no A+ content. Their product page was plain text — no banners, no visuals, no brand story. Competitors with A+ content were outranking them despite an inferior product.",
    solution: "We built a complete A+ module from scratch — brand story banner, ingredient highlight section, clinical badge visuals, product comparison chart, and a lifestyle section showing the customer journey. All within Amazon's EBC guidelines.",
    results: [
      { metric: "38%", label: "Conversion Rate Up" },
      { metric: "6 Days", label: "A+ Live in" },
      { metric: "3", label: "Outranked Competitors" },
      { metric: "Week 3", label: "Best Seller Tag" },
    ],
    testimonial: { text: "Our product was always better. Now our listing finally shows it. The A+ content PV Labs built is the reason we hit Best Seller.", author: "Manish T.", role: "Amazon Brand, Health & Supplements" },
    beforeAfter: { before: "Plain text description, no banners, no visuals, no brand story", after: "Full A+ module — brand story, ingredient highlights, clinical badge visuals" },
  },
  {
    id: "glowritual-nykaa",
    title: "GlowRitual Nykaa Brand Store",
    client: "GlowRitual",
    category: "Nykaa",
    duration: "7 Days",
    heroImage: serviceWebdesign,
    problem: "GlowRitual was live on Nykaa but had a default seller page — no banners, no storefront, no visual identity. In a category dominated by premium-looking brands, they were invisible.",
    solution: "We designed a full Nykaa brand store — hero banner, category banners, lifestyle imagery for each product line, ingredient storytelling creatives, and a unified color language across all touchpoints.",
    results: [
      { metric: "Featured", label: "in Nykaa Beauty Edit" },
      { metric: "70%", label: "Wishlist Adds Up" },
      { metric: "7 Days", label: "Full Store Live" },
      { metric: "80%", label: "Cost Saving vs Studio" },
    ],
    testimonial: { text: "We looked like a ₹10 crore brand overnight. PV Labs made our Nykaa store something we're actually proud to share.", author: "Ananya G.", role: "Nykaa Brand, Organic Skincare" },
    beforeAfter: { before: "Default Nykaa seller page, no banners, no storefront", after: "Custom Nykaa storefront — hero banner, lifestyle imagery, unified color language" },
  },
  {
    id: "urbanthreads-ajio",
    title: "UrbanThreads Ajio Catalog Shoot",
    client: "UrbanThreads",
    category: "Ajio",
    duration: "7 Days",
    heroImage: serviceSocial,
    problem: "UrbanThreads had 40+ SKUs to list on Ajio but only had basic front-facing images. Ajio's catalog standards require multiple angles, lifestyle context, and detail shots — their listings kept getting rejected.",
    solution: "We created a complete catalog set for all 40 SKUs — flat lay, model mockup, detail shot, and size guide banner per SKU. Standardized visual language across the entire range so the brand looked cohesive on Ajio's grid.",
    results: [
      { metric: "40", label: "SKUs Live in 7 Days" },
      { metric: "Zero", label: "Listing Rejections" },
      { metric: "100%", label: "Consistent Visual Identity" },
      { metric: "First-Try", label: "Approval" },
    ],
    testimonial: { text: "Three rejections before PV Labs. They got every single SKU approved on the first try. That's the difference between designers and e-commerce specialists.", author: "Vikram T.", role: "Ajio Brand, Men's Casual Wear" },
    beforeAfter: { before: "Basic front-facing images, rejected listings", after: "Complete catalog set — flat lay, model mockup, detail shot, size guide" },
  },
  {
    id: "bloomskin-d2c",
    title: "BloomSkin D2C Website + Myntra Integration",
    client: "BloomSkin",
    category: "Brand Website",
    duration: "4 Weeks",
    heroImage: serviceAppdesign,
    problem: "BloomSkin was entirely dependent on Myntra for sales — no website, no direct customer relationship, no brand equity outside the marketplace. They wanted to build a D2C presence without losing Myntra momentum.",
    solution: "We built a full mobile-first brand website — homepage with hero section, individual product pages, brand story, founder note, and trust badges. Integrated Myntra buy links on every product page so customers could purchase directly from their preferred platform.",
    results: [
      { metric: "3x", label: "Direct Traffic Up" },
      { metric: "60%", label: "Mobile Visitors" },
      { metric: "Zero", label: "Bounce on Landing Page" },
      { metric: "Active", label: "Myntra + D2C Both" },
    ],
    testimonial: { text: "We finally have a brand, not just a Myntra listing. PV Labs built something we can grow for years.", author: "Ishaan V.", role: "D2C + Myntra Brand, Organic Skincare" },
    beforeAfter: { before: "No website, only marketplace presence", after: "Full mobile-first brand website with product pages + Myntra integration" },
  },
  {
    id: "groomx-branding",
    title: "GroomX Complete Brand Identity",
    client: "GroomX",
    category: "Branding",
    duration: "10 Days",
    heroImage: serviceBranding,
    problem: "GroomX had a great men's grooming product but zero brand identity — no logo, no packaging, no visual language. They were selling on Amazon with a supplier's generic label and losing to branded competitors despite better quality.",
    solution: "We built the entire brand from scratch — logo design with multiple lockups, color palette, typography system, packaging label design, box structure, and Amazon listing visuals. Every element designed to communicate premium quality to the modern Indian male consumer.",
    results: [
      { metric: "10 Days", label: "Brand Live in" },
      { metric: "Premium", label: "Perceived as D2C Brand" },
      { metric: "Full", label: "Identity System" },
      { metric: "Packaging", label: "+ Listing in 1 Project" },
    ],
    testimonial: { text: "We went from a generic supplier label to a brand people actually recognize. PV Labs didn't just design a logo — they built our entire identity.", author: "Deepak S.", role: "D2C Brand, Men's Grooming" },
    beforeAfter: { before: "Generic supplier label, no logo, no visual language", after: "Full brand identity — logo, color palette, packaging, Amazon listing visuals" },
  },
  {
    id: "pureleaf-organic",
    title: "PureLeaf Organic — Packaging & Brand System",
    client: "PureLeaf Organics",
    category: "Branding",
    duration: "8 Days",
    heroImage: servicePackaging,
    problem: "PureLeaf was an organic food brand with a loyal customer base but outdated packaging. Their label looked homemade, didn't communicate the organic positioning, and was getting ignored on both Flipkart and Nykaa shelves where premium organic competitors dominated.",
    solution: "We redesigned the complete packaging system — logo refinement, earthy premium color palette, pouch label, box design, and tamper-seal sticker. Then extended it to Flipkart listing visuals and a Nykaa brand banner set so every touchpoint told the same clean, organic story.",
    results: [
      { metric: "2", label: "Platforms + Packaging" },
      { metric: "8 Day", label: "Turnaround" },
      { metric: "40%", label: "Sales Increase Month 1" },
      { metric: "Featured", label: "on Nykaa Organic Edit" },
    ],
    testimonial: { text: "Our product was always organic and clean. Now our packaging finally says that. Sales jumped the month we relaunched — same product, new identity.", author: "Ritu K.", role: "D2C Brand, Organic Food & Beverages" },
    beforeAfter: { before: "Outdated packaging, homemade look, ignored on shelves", after: "Complete packaging system — logo, premium color palette, box design" },
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
            Real results, <span className="gradient-text">real impact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Deep dives into our most transformative projects. See how strategic design drives measurable business outcomes for brands worldwide.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { icon: TrendingUp, num: "2x", label: "Avg. CTR Improvement" },
            { icon: Target, num: "60%", label: "Avg. Cost Saving" },
            { icon: Users, num: "6", label: "Platforms" },
            { icon: BarChart3, num: "96%", label: "Client Satisfaction" },
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
      <section key={cs.id} className={`section-padding ${i % 2 === 1 ? "gradient-bg-soft" : ""}`}>
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
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">{cs.title}</h2>

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
                <span className="text-sm text-muted-foreground ml-2">— {cs.testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding gradient-bg-vivid text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Want Results Like These?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Let's build your success story — one listing at a time.
        </p>
        <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
          Get Free Sample for your product → <ArrowRight size={18} />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaseStudies;
