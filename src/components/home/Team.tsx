import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import tankaarImg from "@/assets/about-team.jpg";
import rudraImg from "@/assets/teamcreativity.jpg";

const founders = [
  {
    name: "Tankaar Sharma",
    role: "Co-Founder & Creative Director",
    image: tankaarImg,
    bio: "Tankaar leads the creative vision at PV Labs. A data scientist by training and a visual thinker by instinct, he built PV Labs around one belief — that great design is not just aesthetic, it's a business tool. He oversees every visual output to ensure it performs, not just looks good."
  },
  {
    name: "Rudra Sharma",
    role: "Co-Founder & Growth Lead",
    image: rudraImg,
    bio: "Rudra drives the business side of PV Labs — client acquisition, partnerships, and scaling operations. He brings a seller's perspective to every brief, having run his own e-commerce operations across Flipkart and Amazon. When he takes on a client, he already understands what it means to want your product to sell."
  }
];

const Team = () => (
  <section className="section-padding bg-[#0a0a0a]">
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
          THE TEAM BEHIND PV LABS
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-6 mb-4 text-white">
          Built by people who understand both design and business.
        </h2>
        <p className="text-[#888] max-w-2xl mx-auto">
          PV Labs was founded by two brothers — one obsessed with visuals, one obsessed with growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto relative">
        {/* Desktop Divider */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] bg-gradient-to-b from-[#7B2FD9] to-transparent" />
        
        {founders.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] p-8 rounded-2xl border border-[#1a1a1a] hover:border-[#7B2FD9]/30 transition-all group flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-[#0a0a0a] border border-[#1a1a1a]">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">{m.name}</h3>
            <p className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-4">{m.role}</p>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              {m.bio}
            </p>
            <div className="mt-auto">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:text-[#7B2FD9] transition-colors">
                <Phone size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-16 text-center text-[#666] italic text-sm">
        "Two founders. One mission — make Indian brands look world-class."
      </p>
    </div>
  </section>
);

export default Team;
