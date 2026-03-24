import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Linkedin, Instagram } from "lucide-react";
import tankaarImg from "@/assets/about-team.jpg";
import rudraImg from "@/assets/teamcreativity.jpg";
import { FaWhatsappSquare } from "react-icons/fa";
const founders = [
  {
    name: "Tankaar Sharma",
    role: "Founder & Creative Director",
    image: tankaarImg,
    bio: "Tankaar leads the creative vision at PV Labs. A data scientist by training and a visual thinker by instinct, he built PV Labs around one belief — that great design is not just aesthetic, it's a business tool. He oversees every visual output to ensure it performs, not just looks good."
  },
  {
    name: "Rudra Sharma",
    role: "Founder & Growth Lead",
    image: rudraImg,
    bio: "Rudra drives the business side of PV Labs — client acquisition, partnerships, and scaling operations. He brings a seller's perspective to every brief, having run his own e-commerce operations across Flipkart and Amazon. When he takes on a client, he already understands what it means to want your product to sell."
  }
];

const Team = () => (
  <section className="section-padding gradient-bg-soft">
    <div className="w-full max-w-7xl mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[3px]">
          THE TEAM BEHIND PV LABS
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-6 mb-4 text-gray-900">
          Built by people who understand <br className="hidden md:block" /> both design and business.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium">
          PV Labs was founded by two brothers — one obsessed with visuals, one obsessed with growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {founders.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px -15px rgba(123,47,217,0.2)" }}
            className="group relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-[32px] p-8 border border-white/50 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:border-[#7B2FD9]/50 group-hover:shadow-[0_20px_40px_-15px_rgba(123,47,217,0.2)]">
              
              {/* Modern Circular Image */}
              <div className="relative w-40 h-40 mb-8 -mt-16 md:-mt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] rounded-full p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                </div>
                {/* Status Dot */}
                <div className="absolute bottom-2 right-4 w-4 h-4 rounded-full bg-green-500 border-4 border-white z-10 animate-pulse" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">{m.name}</h3>
              <p className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent font-bold text-sm mb-6 uppercase tracking-wider">
                {m.role}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                {m.bio}
              </p>

              {/* Social Actions */}
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-gray-600 hover:bg-green-400 hover:text-white transition-all duration-300">
                  <FaWhatsappSquare size={18}/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center text-gray-600 italic text-sm font-medium tracking-wide"
      >
        "Two founders. One mission — make Indian brands look world-class."
      </motion.p>
    </div>
  </section>
);

export default Team;
