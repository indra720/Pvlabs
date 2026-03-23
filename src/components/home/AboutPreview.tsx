import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";
// Realistic professional photography URL from Unsplash
const aboutTeam = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070";

const AboutPreview = () => (
 <>
 <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent mb-5"></div>
  <section className="section-padding bg-purple-50">
    <div className="w-full ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">WHY PV LABS</span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">
           Most sellers lose sales not because of their product,<span className="bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text">but because of bad visuals</span>
          </h2>
          <span className="text-gray-600 leading-relaxed mb-4 text-[1rem]  text-justify  max-w-[480px] block">
           We started PV Labs with one mission — help Indian e-commerce sellers compete with the best. Your product is great. Your listing shouldn't be the reason it doesn't sell. We create studio-quality visuals using AI + human expertise, specifically built for Amazon, Flipkart, Myntra & Etsy — at a fraction of traditional studio cost.
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 gap-4 mb-8">
            {[
              { icon: TrendingUp, label: "✦ AI-powered + Human refined" },
              { icon: Globe, label: "✦ Amazon & Flipkart compliant outputs" },
              { icon: Palette, label: "✦ Every file delivered production-ready" },
              
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm ">
                {/* <item.icon size={16} className="text-primary" /> */}
                <span className="font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all underline underline-offset-2">
            See Our work <ArrowRight size={16} />
            
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[24px] overflow-hidden shadow-xl">
            <img src={aboutTeam} alt="PV Labs creative team at work" className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 items-center">
            {[
              { num: "50+", label: " Brands Launched" },
              { num: "10,000+", label: "Visuals Delivered" },
              { num: "3-5", label: "Day Turnaround" },
              // { num: "80%", label: "Cost Saved Vs Studio" },
            ].map((s, i) => (
              <div key={i} className="glass-card w-[200px] bg-white border-purple-100 p-4 text-center shadow-sm">
                <div className="bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text text-[1.4rem] font-bold">
                  {s.num}
                </div>
                <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
 </>
);

export default AboutPreview;
