import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin, Phone } from "lucide-react";
import tankaarImg from "@/assets/about-team.jpg";
import rudraImg from "@/assets/teamcreativity.jpg";
import { Link } from "react-router-dom";

const Founders = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

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

      <Footer />
    </div>
  );
};

export default Founders;
