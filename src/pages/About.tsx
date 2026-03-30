import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Linkedin, Globe, UploadCloud, Monitor, Download, ShieldCheck } from "lucide-react"; // Added new icons
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { socialLinks } from "@/lib/social-links";

// Professional studio/workspace image
const heroImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Hero Intro (Story) */}
      <section className="pt-24 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl md:text-6xl font-extrabold mt-3 mb-6 text-foreground">
                The story behind <span className="gradient-text">PV Labs</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PV Labs was born from a simple frustration - great products on Amazon and
                Flipkart were losing sales because of bad visuals. Not bad products. Bad visuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're a team of two brothers - a data scientist and a business strategist -
                who built a studio that replaces expensive photoshoots with world-class
                product visuals. No camera. No shipping. No delays.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, PV Labs serves sellers and brands across Amazon India, Flipkart,
                Myntra, and Meesho - delivering catalog-ready visuals that convert.
              </p>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-white/20">
              <img src={heroImage} alt="PV Labs Studio" className="w-full h-auto object-cover aspect-[4/3]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission + Vision Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 hover:shadow-xl transition-all border-l-4 border-primary"
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg-vivid flex items-center justify-center mb-6 shadow-lg">
              <Target size={28} className="text-white" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To make premium product visuals accessible to every Indian e-commerce
              seller - not just big brands. We believe great design shouldn't require
              a ₹50,000 studio shoot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 hover:shadow-xl transition-all border-l-4 border-[#60B8F0]"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#60B8F0] to-[#7B2FD9] flex items-center justify-center mb-6 shadow-lg">
              <Eye size={28} className="text-white" />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become India's most trusted visual studio for e-commerce - where every
              seller, from first-time Flipkart lister to established Amazon brand, gets
              visuals that actually sell.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Process Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
              Our Simple <span className="gradient-text">3-Step Process</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-3xl mx-auto">
              Getting stunning, platform-compliant visuals is easier than you think. Follow our streamlined process:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col items-center text-center rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg-vivid flex items-center justify-center mb-6 shadow-lg">
                <UploadCloud size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">1. Submit Product Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send us your product information, basic images, and any specific requirements.
              </p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#60B8F0] to-[#7B2FD9] flex items-center justify-center mb-6 shadow-lg">
                <Monitor size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">2. CGI Creation & Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our artists craft photorealistic visuals. Preview and approve your images online.
              </p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col items-center text-center rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                <Download size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">3. Receive Assets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get your high-resolution, platform-compliant images instantly, ready for listing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose PV Labs Section */}
      <section className="section-padding bg-background border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
              Why Choose <span className="gradient-text">PV Labs</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-3xl mx-auto">
              Your competitive edge in online sales, delivered with speed, quality, and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Differentiator 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">E-commerce Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized knowledge for Amazon India, Flipkart, Myntra, and Meesho, ensuring compliance.
                </p>
              </div>
            </motion.div>

            {/* Differentiator 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-white" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Cost & Time Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save up to 80% and days of waiting compared to traditional studio photoshoots.
                </p>
              </div>
            </motion.div>

            {/* Differentiator 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#60B8F0] to-[#7B2FD9] flex items-center justify-center flex-shrink-0">
                <Target size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Conversion-Focused Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visuals crafted not just for beauty, but to boost click-through rates and sales.
                </p>
              </div>
            </motion.div>

            {/* Differentiator 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                <UploadCloud size={28} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">No Product Shipping Needed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Send us your product details, not your inventory. We work with CGI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Social Presence Section */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
              Connect with <span className="gradient-text">PV Labs</span>
            </h2>
            <p className="text-muted-foreground mt-2">Join us on our journey across all platforms</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map(({ icon: Icon, label, href, hoverColor }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 glass-card group transition-all duration-300 hover:shadow-xl hover:border-primary/20"
              >
                <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center transition-all duration-300 ${hoverColor}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className={`text-sm font-semibold text-foreground transition-colors ${hoverColor}`}>{label}</div>
                  <div className="text-xs text-muted-foreground">Follow @pvlabs</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
