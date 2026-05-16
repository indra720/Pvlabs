import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, CheckCircle, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "@/lib/social-links";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Free Consultation</span>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold mt-3 mb-6 text-foreground">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your brand? Get a free quote within 24 hours. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
              {["Free consultation", "Response within 24hrs", "No commitment required"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> {t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="p-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* WhatsApp Card replacing Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="glass-card p-10 shadow-xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                <FaWhatsapp size={40}/>
              </div>
              <h2 className="font-heading text-3xl font-extrabold mb-3 text-foreground">Start Chat on WhatsApp</h2>
              <p className="text-base text-muted-foreground mb-8 max-w-md">
                Need a quick quote or have a project in mind? Message us on WhatsApp for instant support.
              </p>
              <a 
                href="https://wa.me/917417791003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-2xl font-bold text-base hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-green-100"
              >
                <FaWhatsapp size={20}/> Message us Now
              </a>
              <p className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
                <CheckCircle size={12} className="text-green-500" /> Response within minutes
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: "Email Us", value: "growth@pvlabs.ai", sub: "We respond within 24 hours", href: "mailto:growth@pvlabs.ai" },
              { icon: Phone, label: "Call Us", value: "+91 74177 91003", sub: "Mon–Sat, 10AM–7PM IST", href: "tel:+917417791003" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat: 10AM – 7PM IST", sub: "Sunday: Closed" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-sm text-foreground hover:text-primary transition-colors"
                      target={item.href.startsWith('mailto:') ? "_blank" : undefined}
                      rel={item.href.startsWith('mailto:') ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-foreground">{item.value}</div>
                  )}
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-foreground mb-3">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, label, href, hoverColor }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`group w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-all ${hoverColor}`}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
