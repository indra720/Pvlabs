import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Sparkles, ShieldCheck, ArrowRight, Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import serviceBranding from "../assets/Blog1.png";
import serviceWebdesign from "../assets/Blog2.png";
import serviceAppdesign from "../assets/Blog3.png";
import serviceSocial from "@/assets/service-social.jpg";

const blogData: Record<string, any> = {
  "amazon-listing-guide-2026": {
    title: "Amazon Listing Images — Complete Guide for Indian Sellers 2026",
    category: "Guide",
    subtitle: "CTR & Conversion Optimization",
    author: "Rudra",
    date: "March 20, 2026",
    readTime: "8 min",
    image: serviceBranding,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Why It Matters More Than Anything Else</h2>
          </div>
          <div className="glass-card p-6 md:p-8 border-l-4 border-primary bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={80} className="text-primary" />
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic font-medium relative z-10">
              "Amazon gives every buyer a split second to decide — scroll or click. In that moment, your main image is the only thing that exists. No title, no price, no reviews — just the image. A bad image = no click = no sale. Simple."
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all bg-white/50 group">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <ShieldCheck className="text-primary group-hover:scale-110 transition-transform" size={24} /> Technical Specs 2026
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Pure white background — <span className="text-gray-900 font-bold">RGB (255, 255, 255)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Product must fill at least <span className="text-gray-900 font-bold">85% of the frame</span></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Minimum <span className="text-gray-900 font-bold">1500 × 1500 pixels</span> recommended</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>JPEG, PNG, or TIFF format — <span className="text-gray-900 font-bold">No watermarks</span></span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 md:p-8 hover:border-accent/30 transition-all bg-white/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <Clock className="text-accent" size={24} /> How Many Images?
            </h3>
            <p className="text-gray-600 font-medium mb-6">
              Amazon allows up to <span className="text-gray-900 font-bold">9 images</span> per listing. Use all of them. Every empty slot is a missed opportunity to convince your buyer.
            </p>
            <div className="flex items-center gap-2 p-4 bg-accent/5 rounded-2xl border border-accent/10 text-accent font-bold text-sm">
              <Sparkles size={16} /> 1 Hero + 8 Supporting Images
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm">01</span>
            The 9-Image Strategy — A Winning Set
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Main Hero", d: "Clean, professional, 85% fill. Your click magnet." },
              { t: "Second Angle", d: "Back, side, or open lid shot. Shows depth." },
              { t: "Lifestyle", d: "Product in real use. Helps buyers visualize." },
              { t: "Feature Callout", d: "Highlight the #1 unique selling point clearly." },
              { t: "Infographic", d: "3-5 key benefits with icons and fast text." },
              { t: "Dimensions", d: "Size/scale reference to reduce return rates." },
              { t: "Material/Ingredients", d: "What's inside? Build trust via transparency." },
              { t: "Comparison Chart", d: "Your product vs generic. Why you win." },
              { t: "Social Proof", d: "Family/office/outdoor context. Trusted feel." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">Image {i + 1}</span>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
          <h2 className="text-2xl font-black mb-8">Most Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">01.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Phone camera hero shots:</span> Uneven lighting and shadows kill trust instantly.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">02.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Product too small:</span> Amazon wants 85%+ fill. Don't leave empty space.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">03.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Text on hero image:</span> Against guidelines. Leads to listing suppression.</p>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">04.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Ignoring mobile:</span> 70% of traffic is mobile. Text must be readable on small screens.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">05.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">No lifestyle images:</span> Hard to build an emotional connection with just white backgrounds.</p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-400 font-bold">06.</span>
                <p className="text-sm text-gray-300"><span className="text-white font-bold">Duplicate images:</span> Signals low effort and confuses the buyer.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Category-Specific Tips</h2>
          <div className="space-y-4">
            {[
              { c: "Skincare & Beauty", t: "Texture & consistency shots. Before/after graphics are high converters." },
              { c: "Home & Kitchen", t: "Real Indian home settings. Scale reference is critical for 'fit'." },
              { c: "Electronics", t: "All ports, buttons, and 'in-the-box' accessories in one frame." },
              { c: "Food & Supplements", t: "Certifications (FSSAI, Organic) as visual badges build instant trust." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-full md:w-24 font-black text-[10px] uppercase tracking-tighter text-gray-400 md:border-r md:border-gray-100 md:pr-6">{item.c}</div>
                <p className="text-sm text-gray-600 font-medium">{item.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-primary/10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Do You Need a Studio Shoot?</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              In-house studio shoots in India cost <span className="text-gray-900 font-bold">₹8,000–₹40,000 per SKU</span>.
              The alternative? <span className="text-primary font-bold">Catalog-quality CGI</span>.
              Same output, fraction of the cost, and you never need to ship your product anywhere.
              This is how modern Amazon brands scale.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="px-6 py-3 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-xl text-center">CGI is the Future</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left">Available at PV Labs</div>
            </div>
          </div>
        </section>

        <section>
          <div className="glass-card p-6 md:p-10 bg-white shadow-2xl border border-gray-100 rounded-2xl md:rounded-3xl w-full">
            <h2 className="text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center">Final Checklist</h2>
            
            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "White background hero — RGB 255,255,255",
                "Product fills 85%+ of frame",
                "Minimum 1500 × 1500px resolution",
                "All 9 image slots utilized",
                "Lifestyle image included",
                "Size/dimension reference included",
                "Mobile-readable text on infographics",
                "No text or logos on hero image"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-green-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl sm:rounded-2xl md:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                Fix the images first. Everything else follows.
              </h3>
              <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2">
                Want us to audit your current Amazon listing images for free?
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-4 bg-primary hover:bg-accent text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-95 shadow-md">
                Get Free Listing Audit →
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "amazon-a-plus-content-guide": {
    title: "What is A+ Content & Why Every Amazon Brand Needs It",
    category: "Education",
    subtitle: "Brand Growth Strategy",
    author: "Tankaar Sharma",
    date: "March 25, 2026",
    readTime: "7 min",
    image: serviceWebdesign,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
              <ShieldCheck className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">The Power of Visual Storytelling</h2>
          </div>
          <div className="glass-card p-6 md:p-8 border-l-4 border-purple-500 bg-white/50">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              "Your competitor's listing looks like a magazine spread. Yours looks like a plain text document from 2015. Same product. Same price. But they're outselling you — and <span className="text-purple-600 font-bold">A+ Content</span> is probably why."
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 bg-white/50 border-purple-50">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What is A+ Content?</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              A+ Content (previously EBC) is Amazon's premium listing feature that lets brand-registered sellers replace the plain text product description with rich visual content — banners, comparison charts, lifestyle images, and more.
            </p>
          </div>
          <div className="glass-card p-6 md:p-8 bg-purple-900 text-white border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl" />
            <h3 className="text-xl font-bold mb-4">Basic vs Premium</h3>
            <ul className="space-y-3 text-xs text-purple-100 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Basic: 5 modules, comparison charts (Free for registered brands)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Premium: Video, interactive hotspots, carousels (Conditional)</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">What Goes Inside? Module by Module</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Brand Story Banner", d: "First impression after bullet points. Your visual identity." },
              { t: "Feature Highlight", d: "Image + text combo. Buyers read this more than anything." },
              { t: "Ingredient Breakdown", d: "Critical for skincare, food, and supplements. Build trust." },
              { t: "Lifestyle & Usage", d: "Full-width image showing product in real Indian context." },
              { t: "Comparison Chart", d: "Your product variants side-by-side. Reduces returns." },
              { t: "Technical Spec Table", d: "Detailed data for electronics or heavy appliances." }
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-3xl border border-purple-50 bg-purple-50/20 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all">
                <h4 className="font-bold text-gray-900 mb-2">{m.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{m.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 text-white">
          <h2 className="text-2xl font-black mb-8">The Impact on Your Numbers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Amazon's data shows A+ Content increases conversion rates by <span className="text-white font-bold">3–10%</span> on average. For high-competition Indian categories, it's even higher.
              </p>
              <div className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                <span className="text-4xl font-black text-purple-400 mb-2 block">38%</span>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Conversion increase seen by our client 'NutriFuel'</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                { t: "Conversion Goes Up", d: "Less bouncing to competitor listings." },
                { t: "Returns Go Down", d: "Buyers understand exactly what they're getting." },
                { t: "Brand Perception", d: "Look established, not like a 'new seller'." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold text-xs">{i + 1}</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{item.t}</h5>
                    <p className="text-xs text-gray-400">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Repeating bullet points (don't waste the space!)",
              "Low resolution images (Amazon requires 970px width)",
              "Mentioning competitor brand names (policy violation)",
              "Ignoring mobile layout (70% of traffic is mobile)",
              "No Brand Story module (skipping brand recognition)",
              "Publishing and forgetting (A+ needs updates as you grow)"
            ].map((err, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100/50">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-xs text-gray-600 font-bold">{err}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-purple-50/50 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-purple-100">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Timeline & Approval</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-sm text-gray-600 font-medium">
                Amazon takes up to <span className="text-gray-900 font-bold">7 business days</span> to review A+ Content. Rejections often happen due to pricing claims or contact info.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-purple-100 shadow-sm">
                <Clock size={14} className="text-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Build in 10 days for your launch</span>
              </div>
            </div>
            <div className="w-full md:w-64 p-6 bg-white rounded-3xl shadow-xl border border-purple-50 text-center">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Success Rate</h4>
              <span className="text-4xl font-black text-gray-900">99%</span>
              <p className="text-[10px] text-gray-500 mt-2">Approval rate with PV Labs designs</p>
            </div>
          </div>
        </section>

        <section>
          <div className="glass-card p-6 md:p-10 bg-white shadow-2xl border border-gray-100 rounded-2xl md:rounded-3xl w-full">
            <h2 className="text-2xl font-black text-gray-900 mb-6 md:mb-8 text-center">A+ Content Checklist</h2>
            
            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "Brand Registry enrollment confirmed",
                "All images minimum 970px wide",
                "No competitor brand names mentioned",
                "No pricing or promotional claims",
                "No contact information included",
                "Mobile layout reviewed",
                "Brand Story module created",
                "Comparison chart included"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-purple-100/50 bg-purple-50/30 hover:bg-purple-50/60 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-purple-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-purple-900 to-purple-950 rounded-xl sm:rounded-2xl md:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                A+ Content is the single highest-ROI improvement for Amazon listings.
              </h3>
              <p className="text-purple-200/90 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2">
                Need high-converting A+ modules designed in 5 days?
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-4 bg-white hover:bg-purple-50 text-purple-900 font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 active:scale-95 shadow-md">
                Get Your A+ Content Done →
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "flipkart-listing-requirements-2026": {
    title: "Flipkart Listing Image Requirements — Full Size & Format Guide 2026",
    category: "Guide",
    subtitle: "Seller Compliance Guide",
    author: "Rudra",
    date: "March 28, 2026",
    readTime: "6 min",
    image: serviceAppdesign,
    content: (
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Clock className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
              Flipkart Standards vs. Amazon
            </h2>
          </div>
          <div className="glass-card p-4 sm:p-6 md:p-8 border-l-4 border-blue-500 bg-white/50 rounded-xl sm:rounded-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed md:leading-relaxed font-medium">
              "Most sellers treat Flipkart as a copy-paste of their Amazon listing. Big mistake. Flipkart's catalog team reviews images manually for many categories, and what works on one platform can get rejected on the other."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="glass-card p-4 sm:p-6 md:p-8 hover:border-blue-300 transition-all bg-white/50 rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 sm:gap-3 text-gray-900">
              <ShieldCheck className="text-blue-600 flex-shrink-0" size={20} />
              <span>Technical Specs 2026</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-600 font-medium text-xs sm:text-sm md:text-base">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Min Resolution</span>
                <span className="text-gray-900 font-bold text-right">1000 × 1000 px</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Recommended</span>
                <span className="text-gray-900 font-bold text-right">1500 × 1500 px</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Background</span>
                <span className="text-gray-900 font-bold text-right">Pure White (255,255,255)</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                <span>Product Fill</span>
                <span className="text-gray-900 font-bold text-right">80% Minimum</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Format</span>
                <span className="text-gray-900 font-bold text-right">JPEG / PNG</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 sm:p-6 md:p-8 bg-blue-900 text-white border-none rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">How Many Images?</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed md:leading-relaxed mb-4 md:mb-6 font-medium">
              Flipkart's algorithm rewards listings with <span className="text-white font-bold">6+ images</span>. Clicks are significantly higher when buyers see the product from every possible angle.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Hero", "Angle 2", "Lifestyle", "Infographic", "Dimensions", "Packaging"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 bg-white/10 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 md:mb-8">
            Category-Specific Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              { c: "Fashion & Apparel", d: "Front/back shots mandatory. Model images preferred over flat lays." },
              { c: "Home & Kitchen", d: "Real Indian home settings. Dimension references are non-negotiable." },
              { c: "Electronics", d: "All ports/buttons visible. In-the-box contents shot recommended." },
              { c: "Skincare & Beauty", d: "Ingredient list must be visible. Certifications (BIS) build trust." },
              { c: "Food & Grocery", d: "FSSAI license number and Expiry date must be clearly visible." },
              { c: "Baby Products", d: "Age suitability and safety certifications clearly displayed." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-bold text-blue-900 text-xs sm:text-sm md:text-base mb-2 md:mb-3">
                  {item.c}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed md:leading-relaxed font-medium">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-2xl sm:rounded-3xl md:rounded-[32px] lg:rounded-[40px] p-5 sm:p-6 md:p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500/5 blur-[80px] sm:blur-[100px]" />

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-8 text-red-400 relative z-10">
            Common Rejection Reasons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-x-12 lg:gap-y-6 relative z-10">
            {[
              { t: "Off-white background", d: "Even a slight grey or beige tint leads to instant manual rejection." },
              { t: "Product too small", d: "System flags any product filling less than 80% of the frame." },
              { t: "Watermarks / Logos", d: "Main image must be clean. No brand identity on the hero shot." },
              { t: "Low Resolution", d: "Images under 1000px are auto-rejected by the Flipkart portal." },
              { t: "Inconsistent Style", d: "Different lighting or backgrounds across SKUs kills trust." },
              { t: "Lifestyle as Hero", d: "Main image MUST be white background. No exceptions." },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <h5 className="font-bold text-white text-xs sm:text-sm md:text-base flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" /> {item.t}
                </h5>
                <p className="text-xs md:text-sm text-gray-400 font-medium pl-3.5">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 md:mb-6">
            Flipkart vs. Amazon — Key Differences
          </h2>

          <div className="w-[280px] sm:w-full overflow-x-auto rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-100 scrollbar-hide">
            <table className="w-full min-w-[500px] text-left text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-50 text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="p-3 sm:p-4 md:p-4">Feature</th>
                  <th className="p-3 sm:p-4 md:p-4">Flipkart</th>
                  <th className="p-3 sm:p-4 md:p-4">Amazon</th>
                </tr>
              </thead>
              <tbody className="font-medium text-gray-600">
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Min Res</td>
                  <td className="p-3 sm:p-4 md:p-4">1000 × 1000</td>
                  <td className="p-3 sm:p-4 md:p-4">1000 × 1000</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Product Fill</td>
                  <td className="p-3 sm:p-4 md:p-4">80%+</td>
                  <td className="p-3 sm:p-4 md:p-4">85%+</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Manual Review</td>
                  <td className="p-3 sm:p-4 md:p-4 text-blue-600 font-bold">Yes (Strict)</td>
                  <td className="p-3 sm:p-4 md:p-4">Algorithm First</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 sm:p-4 md:p-4 bg-gray-50/30">Size Chart</td>
                  <td className="p-3 sm:p-4 md:p-4 text-blue-600 font-bold">Compulsory*</td>
                  <td className="p-3 sm:p-4 md:p-4">Recommended</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 mt-2 md:mt-4 text-center italic">
            Scroll table horizontally to view more →
          </p>
        </section>

        <section className="w-full">
          <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow-2xl border border-gray-100 rounded-xl sm:rounded-2xl lg:rounded-3xl w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-6 md:mb-8 lg:mb-10 text-center px-2">
              Flipkart Image Checklist
            </h2>

            {/* Checklist Grid - Fully Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10 w-full">
              {[
                "Pure white background — RGB 255,255,255",
                "Minimum 1500 × 1500px resolution",
                "Product fills 80%+ of frame",
                "Square 1:1 ratio maintained",
                "No watermarks or logos on hero image",
                "Maximum image slots filled (6–9)",
                "Lifestyle image included",
                "Size chart included (for fashion)",
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-100/50 bg-blue-50/20 hover:bg-blue-50/50 transition-all"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={12} className="text-blue-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-bold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - Fully Responsive */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center w-full">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-black mb-2 sm:mb-3 md:mb-4 px-2">
                Struggling with Flipkart listing rejections?
              </h3>
              <p className="text-blue-200/90 text-[11px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed px-2">
                We create 100% Flipkart-compliant listing image sets with zero rejections guaranteed.
              </p>
              <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs lg:text-sm rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 shadow-md">
                Get Flipkart-Ready Images →
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogData[slug] : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="relative z-10  ">
        <section className="pt-24 pb-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/blog" className="flex  justify-start items-center gap-2 text-xs font-bold text-primary hover:text-accent transition-all mb-5">
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className=" text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-xs font-black uppercase tracking-[4px] mb-4 block">
                {post.subtitle}
              </span>
              <h1 className="text-3xl lg:text-4xl text-center  font-black font-heading mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 ">
                <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {post.readTime} read</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 mb-12 md:mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <img src={post.image} alt={post.title} className="w-screen h-full aspect-video md:aspect-[21/10] object-cover" />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[80px_1fr] gap-8 md:gap-12">
              <div className="hidden lg:flex flex-col gap-4 sticky top-40 h-fit">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest text-center mb-2">Share</p>
                {socialLinks.slice(0, 4).map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:scale-110 border border-gray-100/50">
                    <link.icon size={18} />
                  </a>
                ))}
              </div>

              <div className="prose prose-slate max-w-none">
                {post.content}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;



