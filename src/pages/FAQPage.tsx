import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Search, HelpCircle } from "lucide-react";

const categories = ["All", "General", "Process", "Pricing", "Services", "Support"];

const faqs: { cat: string; q: string; a: string }[] = [
  // General
  { cat: "General", q: "What is PV Labs?", a: "PV Labs is India's dedicated e-commerce visual studio. We create product hero images, A+ content, lifestyle visuals, infographics, packaging design, and brand identity — everything your listing needs to convert on Amazon, Flipkart, Myntra, and Meesho. No studio shoot required." },
  { cat: "General", q: "What industries do you serve?", a: "We work with sellers and brands across all major e-commerce categories — skincare & personal care, fashion & apparel, electronics, home & kitchen, fitness & supplements, food & beverages, jewellery, baby products, and more." },
  { cat: "General", q: "Do I need to send my physical product?", a: "No. Just share clear reference images of your product + your brief. Our team handles everything from there. No shipping, no delays." },
  { cat: "General", q: "Are your visuals Amazon and Flipkart compliant?", a: "Yes. All images are delivered in platform-specific dimensions and specifications — white background hero images for Amazon, Flipkart-ready formats, and A+ content as per Amazon's guidelines." },
  { cat: "General", q: "Do you work with first-time sellers?", a: "Absolutely. Whether you're launching your first product or scaling an existing brand, we'll guide you on exactly what visuals you need and why." },

  // Process
  { cat: "Process", q: "What does your design process look like?", a: "Simple 4-step process: 1. You share your product details + brief. 2. Our design team creates initial concepts. 3. You review and share feedback. 4. We deliver final files, Amazon & Flipkart ready. No shipping your product. No studio visit. Just results." },
  { cat: "Process", q: "How long does a typical project take?", a: "Most projects are delivered within 3–5 business days. Larger projects (10+ SKUs, full A+ content) may take 7–10 days. We always confirm the timeline before starting." },
  { cat: "Process", q: "How many revisions are included?", a: "Every project includes 2 rounds of revisions. Additional revisions can be requested at a nominal charge." },
  { cat: "Process", q: "What if I don't like the initial concepts?", a: "Your revision rounds cover this. Share your feedback clearly and our team will rework the concepts. We don't stop until you're satisfied within the agreed revision scope." },
  { cat: "Process", q: "How do you handle communication?", a: "Primarily via WhatsApp and email. You'll have direct access to your project manager throughout. No ticketing systems, no bots — real people, real responses within a few hours." },
  { cat: "Process", q: "What file formats do you deliver?", a: "JPEG and PNG for listing images (Amazon/Flipkart compliant dimensions). PDF for packaging and print. Source files (PSD/AI) available on request." },
  { cat: "Process", q: "Can I edit the files you deliver?", a: "Final delivered files are ready-to-upload. Source files can be provided at an additional charge if you need to make future edits yourself." },

  // Pricing
  { cat: "Pricing", q: "How much does a project cost?", a: "Pricing depends on the number of SKUs and type of visuals needed. We offer per-SKU pricing as well as custom packages for brands. Get a free quote — no commitment required." },
  { cat: "Pricing", q: "Do you offer payment plans?", a: "Yes. For larger projects we offer 50% advance + 50% on delivery. For smaller projects, full payment upfront is required." },
  { cat: "Pricing", q: "Is there a refund policy?", a: "If we haven't started work yet, full refund is issued. Once work begins, refunds are not applicable — but we will always make it right through revisions." },
  { cat: "Pricing", q: "Do you charge for consultations?", a: "No. Your first consultation is completely free. We'll understand your requirements, suggest the right package, and give you a no-obligation quote." },

  // Services
  { cat: "Services", q: "What services do you offer?", a: "Product hero images, lifestyle visuals, A+ content & EBC banners, infographics, packaging design, logo & brand identity, social media creatives, and more. View our full services list here." },
  { cat: "Services", q: "Can you handle multiple services for one project?", a: "Absolutely. Most of our clients combine hero images + infographics + A+ content in one order. Bundling saves time and ensures visual consistency across your listing." },

  // Support
  { cat: "Support", q: "What kind of support do you offer post-delivery?", a: "If there's any issue with delivered files — wrong dimensions, format issues — we fix it free of charge within 7 days of delivery." },
  { cat: "Support", q: "How quickly do you respond?", a: "Within 2–4 hours on WhatsApp during business hours (Mon–Sat, 10AM–7PM IST)." },
];

const FAQPage = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = (active === "All" ? faqs : faqs.filter(f => f.cat === active)).filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Frequently asked <span className="gradient-text">questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Everything you need to know about working with PV Labs. Can't find your answer? Contact us.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions..." className="w-full bg-background border border-border rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === c ? "gradient-btn" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 pt-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {filtered.map((f, i) => (
            <motion.details key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className="glass-card p-6 group">
              <summary className="font-heading font-bold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-primary flex-shrink-0" />
                  {f.q}
                </span>
                <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
              </summary>
              <div className="mt-4 pl-9">
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2 inline-block">{f.cat}</span>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{f.a}</p>
              </div>
            </motion.details>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No questions found matching your search.</p>}
        </div>
      </section>

      <section className="section-padding gradient-bg-vivid text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Still have questions?</h2>
          <p className="text-primary-foreground/80 mb-8">Our team is here to help. Get in touch and we'll respond within 24 hours.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
