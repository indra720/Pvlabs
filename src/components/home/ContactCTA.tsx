import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => (
  <section className="section-padding px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[32px] overflow-hidden p-12 md:p-16 text-center shadow-2xl"
        style={{ 
          background: "linear-gradient(to right, #7B2FD9, #C84FD8, #3B8BF5, #60B8F0)" 
        }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            Your competitor's listing looks better than yours.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Every day without great visuals is a day your product gets scrolled past. Let's fix that — starting with one SKU, free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all w-full sm:w-auto">
              → Get Your Free 1-SKU Makeover
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all w-full sm:w-auto">
              View Pricing
            </Link>
          </div>
          <p className="text-white text-xs italic opacity-90">
            🔥 Limited free slots this month — 4 remaining
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
