import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, HeartHandshake, Infinity, Headphones } from "lucide-react";

const reasons = [
  { 
    icon: Zap, 
    title: "Lightning Fast", 
    desc: "Average turnaround of 3–5 business days. Larger projects delivered in 7–10 days. Rush delivery available on request." 
  },
  { 
    icon: Shield, 
    title: "100% Original", 
    desc: "Every design built from scratch for your product. No templates, no stock visuals. Your brand, your identity." 
  },
  { 
    icon: Clock, 
    title: "Always On Time", 
    desc: "We confirm timelines before starting and deliver on the date we commit. No surprises, no delays." 
  },
  { 
    icon: Users, 
    title: "E-Commerce Specialists", 
    desc: "Designers who understand Amazon, Flipkart, Myntra, Ajio & Nykaa — not just design tools. We think like sellers." 
  },
  { 
    icon: HeartHandshake, 
    title: "Client First", 
    desc: "2 revision rounds included in every project. Direct WhatsApp access to your project manager throughout — no bots, no tickets." 
  },
  { 
    icon: Infinity, 
    title: "End-to-End", 
    desc: "From brief to final files — we handle everything. Hero images, A+ content, packaging, branding. One team, all your visual needs." 
  },
  { 
    icon: Headphones, 
    title: "Dedicated Support", 
    desc: "Mon–Sat, 10AM–7PM IST. Response within 2–4 hours on WhatsApp. Real people, real answers." 
  },
];

const WhyChoose = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-5"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why PV Labs</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-foreground">
          Why leading brands <span className="gradient-text">choose us</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're not just designers — we're strategic partners committed to your brand's success.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 group hover:shadow-xl hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <r.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold mb-2 text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
