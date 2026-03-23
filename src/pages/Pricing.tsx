import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Check, ArrowRight, ShoppingCart, Palette, Zap, 
  FileText, Star, MessageSquare, Shield, Clock, Phone, Linkedin, Instagram,
  Package,
  Share2,
  Layout
} from "lucide-react";
import { useState } from "react";
import tankaarImg from "@/assets/about-team.jpg";
import rudraImg from "@/assets/teamcreativity.jpg";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "brand">("ecommerce");

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-white to-white text-slate-900 selection:bg-purple-200">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-20 px-6 md:px-12 relative overflow-hidden bg-white">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-200/50 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent drop-shadow-sm tracking-[3px] mb-6 shadow-sm">
              Pricing
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Invest in visuals that <br/>
              <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent drop-shadow-sm">pay you back.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Per-SKU pricing for e-commerce sellers. Custom quotes for brand projects. <br className="hidden md:block"/> No hidden fees. Final scope confirmed after consultation.
            </p>

            {/* Tab Switcher */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveTab("ecommerce")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${activeTab === "ecommerce" ? "bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white scale-105 shadow-purple-500/30" : "bg-white text-slate-500 hover:text-[#7B2FD9] hover:bg-purple-50"}`}
              >
                <ShoppingCart size={20} /> 🛒 E-Commerce Visuals
              </button>
              <button 
                onClick={() => setActiveTab("brand")}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg ${activeTab === "brand" ? "bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white scale-105 shadow-blue-500/30" : "bg-white text-slate-500 hover:text-[#60B8F0] hover:bg-blue-50"}`}
              >
                <Palette size={20} /> 🎨 Brand & Marketing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent mb-5"></div>
      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "ecommerce" ? (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              {/* Single SKU Section */}
              <section>
                <div className="mb-12 text-center md:text-left">
                  <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-md">SINGLE PRODUCT</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Start with one SKU.</h2>
                  <p className="text-slate-600 mt-2 text-lg">Test us on your best listing. Zero commitment. Full quality.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Card 1 */}
                  <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full group">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Listing Image Upgrade</h3>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Fix what the customer sees at first glance</p>
                    <div className="mb-8 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                      <span className="text-5xl font-extrabold text-[#7B2FD9]">₹399</span>
                      <span className="text-sm text-slate-500 font-bold ml-2">/ starting</span>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase">Up to ₹899 · Category dependent</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {["5 listing images per SKU", "White + styled backgrounds", "Marketplace compliant sizing", "Platform-ready file formats", "3–5 day delivery"].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-[#7B2FD9]" />
                          </div> 
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 mb-8 border border-slate-100 italic flex gap-2 items-center">
                      <MessageSquare size={16} className="text-purple-400 shrink-0"/> "My product gets traffic but doesn't convert"
                    </div>
                    <Link to="/contact" className="block text-center py-4 rounded-full font-bold border-2 border-slate-200 text-slate-700 hover:border-[#7B2FD9] hover:text-[#7B2FD9] hover:bg-purple-50 transition-all">
                      → Get Started
                    </Link>
                  </div>

                  {/* Card 2 - Highlighted */}
                  <div className="bg-white p-10 rounded-[32px] border-2 border-[#7B2FD9] flex flex-col h-full relative shadow-2xl shadow-purple-500/20 transform md:-translate-y-4">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Listing Upgrade</h3>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Make the entire listing work as one system</p>
                    <div className="mb-8 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                      <span className="text-5xl font-extrabold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">₹699</span>
                      <span className="text-sm text-slate-500 font-bold ml-2">/ starting</span>
                      <p className="text-slate-400 text-xs mt-1 font-semibold uppercase">Up to ₹1,499 · Category dependent</p>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {["5 listing images", "RPD or A+ content", "Infographic-style benefit highlights", "Mobile-first optimized creatives", "Platform-ready files", "3–5 day delivery"].map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check size={12} className="text-white" />
                          </div> 
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-500 mb-8 border border-slate-100 italic flex gap-2 items-center">
                      <MessageSquare size={16} className="text-blue-400 shrink-0"/> "I want my listing to explain, convince & convert"
                    </div>
                    <Link to="/contact" className="block text-center py-4 rounded-full font-bold bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all">
                      → Get Started Now
                    </Link>
                  </div>
                </div>
              </section>

              {/* Multi-SKU Pricing Table */}
              <section>
                <div className="mb-12 text-center md:text-left">
                  <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">MULTIPLE PRODUCTS</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">More SKUs. Lower cost per SKU.</h2>
                  <p className="text-slate-600 mt-2 text-lg">Built for brands managing multiple products. Visual consistency across your entire catalog.</p>
                </div>

                <div className="overflow-x-auto rounded-[24px] border border-slate-200 shadow-xl bg-white">
                  <table className="w-full border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-6 text-left text-slate-500 font-bold text-xs uppercase tracking-wider">SERVICES</th>
                        <th className="p-6 text-center font-extrabold text-sm text-slate-700">10 SKUs</th>
                        <th className="p-6 text-center font-extrabold text-sm text-slate-700">25 SKUs</th>
                        <th className="p-6 text-center font-extrabold text-sm relative bg-purple-50 text-[#7B2FD9]">
                          50+ SKUs
                          <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full border border-green-200 font-bold">BEST VALUE</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 text-slate-900 font-bold text-sm">Listing Image Upgrade<br/><span className="text-slate-400 font-medium text-xs">(5 images per SKU)</span></td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹399/SKU</td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹349/SKU</td>
                        <td className="p-6 text-center text-slate-900 font-bold text-lg bg-purple-50/30">₹299<span className="text-xs font-normal text-slate-500">/SKU</span></td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-6 text-slate-900 font-bold text-sm">RPD / A+ Content Only<br/><span className="text-slate-400 font-medium text-xs">(5 images per SKU)</span></td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹649/SKU</td>
                        <td className="p-6 text-center text-slate-600 font-medium text-sm">₹599/SKU</td>
                        <td className="p-6 text-center text-slate-900 font-bold text-lg bg-purple-50/30">₹449<span className="text-xs font-normal text-slate-500">/SKU</span></td>
                      </tr>
                      <tr className="bg-gradient-to-r from-white to-purple-50 border-l-[6px] border-[#7B2FD9]">
                        <td className="p-6 text-slate-900 font-bold text-sm flex items-center gap-3">
                          Listing Images + RPD/A+ Combined 
                          <span className="text-[10px] bg-[#7B2FD9] text-white px-2 py-0.5 rounded-full font-bold shadow-sm">RECOMMENDED</span>
                        </td>
                        <td className="p-6 text-center text-[#7B2FD9] font-bold text-sm">₹699/SKU</td>
                        <td className="p-6 text-center text-[#7B2FD9] font-bold text-sm">₹649/SKU</td>
                        <td className="p-6 text-center text-[#7B2FD9] font-extrabold text-xl bg-purple-100/50">₹499<span className="text-xs font-normal text-slate-500">/SKU</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-center text-sm font-medium text-slate-500 bg-white inline-block px-6 py-2 rounded-full border border-slate-100 shadow-sm mx-auto block w-fit">
                  🎉 "50+ SKUs saves you up to <span className="text-[#7B2FD9] font-bold">₹200 per SKU</span> vs single SKU pricing"
                </p>
              </section>

              {/* How to Choose */}
              <section className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "🖼️", title: "Choose Listing Image Upgrade if...", text: "Your product gets traffic but visuals look inconsistent or outdated." },
                  { icon: "📄", title: "Choose RPD / A+ Only if...", text: "Your listing images already perform well but below-the-fold content is missing." },
                  { icon: "⚡", title: "Choose Combined if...", text: "You want every SKU to explain itself so buyers don't hesitate or compare." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                    <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
                    <h3 className="text-slate-900 font-bold mb-3 text-lg">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </section>

              {/* Ongoing Support Strip */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7B2FD9]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">Support Beyond the First Upgrade</h3>
                    <p className="text-slate-300 text-lg">For brands that keep launching and updating.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-sm text-slate-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]"/> New product launches</div>
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]"/> Seasonal campaigns</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]"/> Faster turnaround</div>
                      <div className="flex items-center gap-2"><Check size={16} className="text-[#7B2FD9]"/> Dedicated creative team</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
                    Talk to us about a monthly retainer <ArrowRight size={18}/>
                  </Link>
                </div>
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
                <span className="text-[#60B8F0] text-sm font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md text-blue-600">BRAND & MARKETING DESIGN</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">Every brand project is different.</h2>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">Pricing depends on scope, complexity, and timeline. Book a free consultation — we'll give you a clear quote within 24 hours.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Palette, title: "Logo & Brand Identity", text: "Logo design, brand color system, typography kit & complete brand guidelines." },
                  { icon: Package, title: "Packaging Design", text: "Box, label, pouch & insert design. Print-ready CMYK files delivered." },
                  { icon: Share2, title: "Social Media Creatives", text: "Posts, carousels, stories & reel covers — on-brand, platform-optimized." },
                  { icon: Zap, title: "Ad Creatives", text: "High-converting Meta & Google ad creatives. Multiple sizes. A/B test versions." },
                  { icon: Layout, title: "Presentation & Pitch Deck", text: "Investor decks, sales presentations & company profiles. PowerPoint + Google Slides." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-lg group hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.text}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#7B2FD9] font-bold hover:gap-3 transition-all">
                      Get a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[32px] p-12 border border-purple-100 text-center mt-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0]" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Not sure what your project needs?</h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">Tell us about your brand. We'll scope it out and send you a clear quote — free, within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="gradient-btn px-10 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/20 transition-all">→ Book Free Consultation</Link>
                  <a href="https://wa.me/917417791003" className="px-10 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:border-[#7B2FD9] hover:text-[#7B2FD9] transition-all">💬 WhatsApp Us</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shared Bottom Sections */}
      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-20">How work moves at PV Labs</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 hidden md:block rounded-full" />
            <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] hidden md:block rounded-full" />
            
            {[
              { step: 1, title: "Requirement confirmation & asset collection" },
              { step: 2, title: "Visual structure alignment before execution" },
              { step: 3, title: "Final delivery after scope completion" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-xl border-4 border-white transition-transform duration-300 hover:scale-110 ${i === 2 ? "bg-white text-slate-400 border-slate-200" : "gradient-bg-vivid text-white"}`}>
                  {s.step}
                </div>
                <p className="text-slate-900 text-sm font-bold max-w-[200px]">{s.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-xs text-slate-500 font-medium uppercase tracking-widest bg-slate-50 inline-block px-4 py-2 rounded-full mx-auto block w-fit">Execution starts post advance payment</p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#7B2FD9] text-sm font-bold uppercase tracking-[4px]">
              THE TEAM BEHIND PV LABS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">Built by people who understand<br/>both design and business.</h2>
            <p className="text-slate-600 text-lg">PV Labs was founded by two brothers — one obsessed with visuals, one obsessed with growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            
            {/* Tankaar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] rounded-full p-[3px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img src={tankaarImg} alt="Tankaar Sharma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Tankaar Sharma</h3>
                <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-6 uppercase tracking-wider">Co-Founder & Creative Director</span>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Tankaar leads the creative vision at PV Labs. A data scientist by training and a visual thinker by instinct, he built PV Labs around one belief — that great design is not just aesthetic, it's a business tool.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#7B2FD9] hover:text-white transition-all"><Linkedin size={18} /></Link>
                  <Link to="#" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-all"><Phone size={18} /></Link>
                </div>
              </div>
            </motion.div>

            {/* Rudra */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] rounded-full p-[3px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img src={rudraImg} alt="Rudra Sharma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Rudra Sharma</h3>
                <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-6 uppercase tracking-wider">Co-Founder & Growth Lead</span>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Rudra drives the business side of PV Labs. He brings a seller's perspective to every brief, having run his own e-commerce operations. When he takes on a client, he already understands what it means to want your product to sell.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#7B2FD9] hover:text-white transition-all"><Linkedin size={18} /></Link>
                  <Link to="#" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-all"><Phone size={18} /></Link>
                </div>
              </div>
            </motion.div>
          </div>
          <p className="mt-16 text-center text-slate-500 italic text-sm font-medium">"Two founders. One mission — make Indian brands look world-class."</p>
        </div>
      </section>

      {/* Final Risk Reversal */}
      <section className="pb-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto border-t border-slate-100 pt-12">
          <p className="text-slate-600 mb-4 font-medium">🛡️ Not happy with the result? We redo it free — no questions asked.</p>
          <p className="text-slate-600 font-medium">💬 Still confused? WhatsApp us — we'll help you pick the right plan.</p>
          <div className="mt-12">
            <Link to="/contact" className="gradient-btn px-12 py-5 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all text-white">
              → Book Free Consultation <ArrowRight size={20} />
            </Link>
            <div className="mt-8 space-y-2 text-slate-500 text-xs font-medium">
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
