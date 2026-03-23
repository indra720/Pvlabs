import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, ShoppingCart, Palette, Zap, 
  FileText, Star, MessageSquare, Shield, Clock, Phone
} from "lucide-react";
import { useState } from "react";
import tankaarImg from "@/assets/about-team.jpg"; // Placeholder, using available asset
import rudraImg from "@/assets/teamcreativity.jpg"; // Placeholder, using available asset

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "brand">("ecommerce");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
              PRICING
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-white">
              Invest in visuals that <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">pay you back.</span>
            </h1>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Per-SKU pricing for e-commerce sellers. Custom quotes for brand projects. Final scope confirmed after consultation.
            </p>

            {/* Tab Switcher */}
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveTab("ecommerce")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${activeTab === "ecommerce" ? "gradient-bg-vivid text-white shadow-lg" : "bg-[#111] border border-[#1a1a1a] text-white"}`}
              >
                <ShoppingCart size={18} /> 🛒 E-Commerce Visuals
              </button>
              <button 
                onClick={() => setActiveTab("brand")}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${activeTab === "brand" ? "gradient-bg-vivid text-white shadow-lg" : "bg-[#111] border border-[#1a1a1a] text-white"}`}
              >
                <Palette size={18} /> 🎨 Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === "ecommerce" ? (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-24"
            >
              {/* Single SKU Section */}
              <section>
                <div className="mb-12">
                  <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest">SINGLE PRODUCT</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Start with one SKU.</h2>
                  <p className="text-[#888] mt-2">Test us on your best listing. Zero commitment. Full quality.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Card 1 */}
                  <div className="bg-[#111] p-8 rounded-2xl border border-[#1a1a1a] flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-1">Listing Image Upgrade</h3>
                    <p className="text-[#888] text-sm mb-6 italic">Fix what the customer sees at first glance</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">Starting ₹399</span>
                      <p className="text-[#666] text-xs mt-1">Up to ₹899 · depends on product category</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {["5 listing images per SKU", "White + styled backgrounds", "Marketplace compliant sizing", "Platform-ready file formats", "3–5 day delivery"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#888]">
                          <Check size={14} className="text-[#7B2FD9]" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#1a1a1a] p-3 rounded-lg text-xs text-[#888] mb-6">
                      💬 "My product gets traffic but doesn't convert"
                    </div>
                    <Link to="/contact" className="block text-center py-3 rounded-full font-bold border border-[#7B2FD9] text-white hover:bg-[#7B2FD9]/10 transition-all">
                      → Get Started
                    </Link>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#111] p-8 rounded-2xl border-2 border-[#7B2FD9] flex flex-col h-full relative shadow-2xl shadow-[#7B2FD9]/10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg-vivid text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                    <h3 className="text-xl font-bold text-white mb-1">Full Listing Upgrade</h3>
                    <p className="text-[#888] text-sm mb-6 italic">Make the entire listing work as one system</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">Starting ₹699</span>
                      <p className="text-[#666] text-xs mt-1">Up to ₹1,499 · depends on product category</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {["5 listing images", "RPD or A+ content", "Infographic-style benefit highlights", "Mobile-first optimized creatives", "Platform-ready files", "3–5 day delivery"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#888]">
                          <Check size={14} className="text-[#7B2FD9]" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#1a1a1a] p-3 rounded-lg text-xs text-[#888] mb-6">
                      💬 "I want my listing to explain, convince & convert"
                    </div>
                    <Link to="/contact" className="block text-center py-3 rounded-full font-bold gradient-bg-vivid text-white hover:shadow-lg transition-all">
                      → Get Started
                    </Link>
                  </div>
                </div>
              </section>

              {/* Multi-SKU Pricing Table */}
              <section>
                <div className="mb-12">
                  <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest">MULTIPLE PRODUCTS</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">More SKUs. Lower cost per SKU.</h2>
                  <p className="text-[#888] mt-2">Built for brands managing multiple products. Visual consistency across your entire catalog.</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-[#111] rounded-2xl overflow-hidden border border-[#1a1a1a]">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]">
                        <th className="p-6 text-left text-[#666] font-bold text-sm">SERVICES</th>
                        <th className="p-6 text-center text-white font-bold text-sm bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">10 SKUs</th>
                        <th className="p-6 text-center text-white font-bold text-sm bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">25 SKUs</th>
                        <th className="p-6 text-center font-bold text-sm relative">
                          <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">50+ SKUs</span>
                          <div className="absolute top-0 right-2 bg-green-500/10 text-green-500 text-[8px] px-1.5 py-0.5 rounded border border-green-500/20">BEST VALUE</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#0f0f0f] border-b border-[#1a1a1a]">
                        <td className="p-6 text-white font-medium text-sm">Listing Image Upgrade<br/><span className="text-[#666] font-normal text-xs">(5 images per SKU)</span></td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹399/SKU</td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹349/SKU</td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹299/SKU</td>
                      </tr>
                      <tr className="bg-[#111] border-b border-[#1a1a1a]">
                        <td className="p-6 text-white font-medium text-sm">RPD / A+ Content Only<br/><span className="text-[#666] font-normal text-xs">(5 images per SKU)</span></td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹649/SKU</td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹599/SKU</td>
                        <td className="p-6 text-center text-[#888] font-bold text-sm">₹449/SKU</td>
                      </tr>
                      <tr className="bg-[#0f0f0f] border-l-[3px] border-[#7B2FD9]">
                        <td className="p-6 text-white font-medium text-sm flex items-center gap-2">Listing Images + RPD/A+ Combined <span className="text-[10px] bg-[#7B2FD9]/20 text-[#7B2FD9] px-2 py-0.5 rounded">RECOMMENDED</span><br/><span className="text-[#666] font-normal text-xs">(5 images per SKU)</span></td>
                        <td className="p-6 text-center bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm">₹699/SKU</td>
                        <td className="p-6 text-center bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm">₹649/SKU</td>
                        <td className="p-6 text-center bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm">₹499/SKU</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-center text-sm font-medium bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">
                  "50+ SKUs saves you up to ₹200 per SKU vs single SKU pricing"
                </p>
              </section>

              {/* How to Choose */}
              <section className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "🖼️", title: "Choose Listing Image Upgrade if...", text: "Your product gets traffic but visuals look inconsistent or outdated." },
                  { icon: "📄", title: "Choose RPD / A+ Only if...", text: "Your listing images already perform well but below-the-fold content is missing." },
                  { icon: "⚡", title: "Choose Combined if...", text: "You want every SKU to explain itself so buyers don't hesitate or compare." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#111] p-6 rounded-2xl border border-[#1a1a1a]">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-white font-bold mb-2 text-sm">{item.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </section>

              {/* Ongoing Support Strip */}
              <div className="bg-[#111] p-10 rounded-2xl border border-[#1a1a1a] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FD9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Support Beyond the First Upgrade</h3>
                    <p className="text-[#666]">For brands that keep launching and updating.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-[#888]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">✦ New product launches</div>
                      <div className="flex items-center gap-2">✦ Seasonal campaign updates</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">✦ Faster turnaround</div>
                      <div className="flex items-center gap-2">✦ Ongoing creative support</div>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="inline-block mt-8 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold">
                  Talk to us about a monthly retainer →
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="brand"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest">BRAND & MARKETING DESIGN</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Every brand project is different.</h2>
                <p className="text-[#888] mt-4 max-w-2xl mx-auto">Pricing depends on scope, complexity, and timeline. Book a free consultation — we'll give you a clear quote within 24 hours.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Palette, title: "Logo & Brand Identity", text: "Logo design, brand color system, typography kit & complete brand guidelines." },
                  { icon: Package, title: "Packaging Design", text: "Box, label, pouch & insert design. Print-ready CMYK files delivered." },
                  { icon: Share2, title: "Social Media Creatives", text: "Posts, carousels, stories & reel covers — on-brand, platform-optimized." },
                  { icon: Zap, title: "Ad Creatives", text: "High-converting Meta & Google ad creatives. Multiple sizes. A/B test versions." },
                  { icon: Layout, title: "Presentation & Pitch Deck", text: "Investor decks, sales presentations & company profiles. PowerPoint + Google Slides." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#111] p-8 rounded-2xl border border-[#1a1a1a] group hover:border-[#7B2FD9]/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center mb-6">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed mb-6">{item.text}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold hover:underline">
                      Get a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="bg-[#111] rounded-[24px] p-12 border border-[#7B2FD9]/30 text-center mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Not sure what your project needs?</h2>
                <p className="text-[#888] mb-8 max-w-xl mx-auto">Tell us about your brand. We'll scope it out and send you a clear quote — free, within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="gradient-btn px-8 py-3.5 font-bold">→ Book Free Consultation</Link>
                  <a href="https://wa.me/917417791003" className="px-8 py-3.5 rounded-full border border-[#1a1a1a] text-white font-bold hover:bg-[#1a1a1a] transition-all">💬 WhatsApp Us</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shared Bottom Sections */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How work moves at PV Labs</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent hidden md:block" />
            {[
              { step: 1, title: "Requirement confirmation & asset collection" },
              { step: 2, title: "Visual structure alignment before execution" },
              { step: 3, title: "Final delivery after scope completion" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full gradient-bg-vivid text-white flex items-center justify-center font-bold mb-6 shadow-xl">
                  {s.step}
                </div>
                <p className="text-white text-sm font-medium max-w-[200px]">{s.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[11px] text-[#666]">Execution starts post advance payment</p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
              THE TEAM BEHIND PV LABS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">Built by people who understand both design and business.</h2>
            <p className="text-[#888]">PV Labs was founded by two brothers — one obsessed with visuals, one obsessed with growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] bg-gradient-to-b from-[#7B2FD9] to-transparent" />
            
            {/* Tankaar */}
            <div className="bg-[#111] p-8 rounded-2xl border border-[#1a1a1a] hover:border-[#7B2FD9]/30 transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-[#0a0a0a] border border-[#1a1a1a]">
                  <img src={tankaarImg} alt="Tankaar Sharma" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Tankaar Sharma</h3>
                <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-4">Co-Founder & Creative Director</span>
                <p className="text-[#888] text-sm leading-relaxed">
                  Tankaar leads the creative vision at PV Labs. A data scientist by training and a visual thinker by instinct, he built PV Labs around one belief — that great design is not just aesthetic, it's a business tool. He oversees every visual output to ensure it performs, not just looks good.
                </p>
                <div className="mt-6">
                  <Link to="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:text-[#7B2FD9] transition-colors"><Phone size={14} /></Link>
                </div>
              </div>
            </div>

            {/* Rudra */}
            <div className="bg-[#111] p-8 rounded-2xl border border-[#1a1a1a] hover:border-[#7B2FD9]/30 transition-all group">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-[#0a0a0a] border border-[#1a1a1a]">
                  <img src={rudraImg} alt="Rudra Sharma" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Rudra Sharma</h3>
                <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-4">Co-Founder & Growth Lead</span>
                <p className="text-[#888] text-sm leading-relaxed">
                  Rudra drives the business side of PV Labs — client acquisition, partnerships, and scaling operations. He brings a seller's perspective to every brief, having run his own e-commerce operations across Flipkart and Amazon. When he takes on a client, he already understands what it means to want your product to sell.
                </p>
                <div className="mt-6">
                  <Link to="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:text-[#7B2FD9] transition-colors"><Phone size={14} /></Link>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-[#666] italic text-sm">"Two founders. One mission — make Indian brands look world-class."</p>
        </div>
      </section>

      {/* Final Risk Reversal */}
      <section className="pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto border-t border-[#1a1a1a] pt-12">
          <p className="text-[#888] mb-4">🛡️ Not happy with the result? We redo it free — no questions asked.</p>
          <p className="text-[#888]">💬 Still confused? WhatsApp us — we'll help you pick the right plan.</p>
          <div className="mt-12">
            <Link to="/contact" className="gradient-btn px-10 py-5 font-bold text-lg inline-flex items-center gap-3">
              → Book Free Consultation <ArrowRight size={20} />
            </Link>
            <div className="mt-6 space-y-2 text-[#666] text-xs">
              <p>📞 We respond within 2 hours · Mon–Sat 10am–7pm IST</p>
              <p>💬 Or WhatsApp us directly: +91 74177 91003</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
