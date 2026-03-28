import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Search, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/Faq";
const categories = ["All", "General", "Process", "Pricing", "Services", "Support"];



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
            {/* <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span> */}
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
        <div className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center m-5 max-w-4xl mx-auto rounded-md">
          <div className="max-w-3xl mx-auto ">
            <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Still have questions?</h2>
            <p className="text-primary-foreground/80 mb-8">Our team is here to help. Get in touch and we'll respond within 24 hours.</p>
            <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default FAQPage;
