import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Linkedin, Globe } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { socialLinks } from "@/lib/social-links";
// Professional studio/workspace image
const heroImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070";

// const socials = [
//   { name: "Facebook", link: "https://facebook.com", icon: "📘" },
//   { name: "whatsapp", link: "https://whatsapp.com", icon: "📸" },
//   { name: "LinkedIn", link: "https://linkedin.com", icon: "💼" },
//   { name: "Twitter", link: "https://twitter.com", icon: "🐦" },
// ];

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
      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">ABOUT US</span>
              <h1 className="font-heading text-5xl md:text-6xl font-extrabold mt-3 mb-6 text-foreground">
                The story behind <span className="gradient-text">PV Labs</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PV Labs was born from a simple frustration — great products on Amazon and
                Flipkart were losing sales because of bad visuals. Not bad products. Bad visuals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're a team of two brothers — a data scientist and a business strategist —
                who built a studio that replaces expensive photoshoots with world-class
                product visuals. No camera. No shipping. No delays.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, PV Labs serves sellers and brands across Amazon India, Flipkart,
                Myntra, and Meesho — delivering catalog-ready visuals that convert.
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
              seller — not just big brands. We believe great design shouldn't require
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
              To become India's most trusted visual studio for e-commerce — where every
              seller, from first-time Flipkart lister to established Amazon brand, gets
              visuals that actually sell.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Founders Section */}
      <section id="founders" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">THE FOUNDERS</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-foreground">Meet the Minds Behind <span className="gradient-text">PV Labs</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Tankaar Sharma */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="p-8 md:p-12">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                  TS
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Tankaar Sharma</h3>
                <p className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">Founder & Head of Technology</p>

                <p className="text-foreground font-medium mb-4 text-lg">
                  When your product visuals cost you a sale - Tankaar built the solution.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tankaar leads the creative vision at PV Labs. A data scientist by training and a visual thinker by instinct, he built PV Labs around one belief — that great design is not just aesthetic, it's a business tool. He oversees every visual output to ensure it performs, not just looks good.

                </p>

                <p className="text-muted-foreground italic mb-8 border-l-2 border-primary/30 pl-4">
                  3-day delivery. Zero compromise on quality. Built by someone who treats
                  your business like a data problem worth solving.
                </p>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#60B8F0] hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#60B8F0] hover:text-white transition-all">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Rudra Sharma */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="p-8 md:p-12">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#60B8F0] to-[#7B2FD9] mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                  RS
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Rudra Sharma</h3>
                <p className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">Founder & Head of Growth</p>

                <p className="text-foreground font-medium mb-4 text-lg">
                  He built e-commerce brands before he built PV Labs.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rudra drives the business side of PV Labs — client acquisition, partnerships, and scaling operations. He brings a seller's perspective to every brief, having run his own e-commerce operations across Flipkart and Amazon. When he takes on a client, he already understands what it means to want your product to sell.
                </p>

                <p className="text-muted-foreground italic mb-8 border-l-2 border-[#60B8F0]/30 pl-4">
                  Not a salesman. An entrepreneur who became the solution.
                </p>

                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#60B8F0] hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#60B8F0] hover:text-white transition-all">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Social Presence Section */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground">Connect with <span className="gradient-text">PV Labs</span></h2>
            <p className="text-muted-foreground mt-2">Join us on our journey across all platforms</p>
          </motion.div>

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
