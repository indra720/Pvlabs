import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeam from "../../assets/about-team2.png";

const AboutPreview = () => (
  <>
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent mb-5"></div>

    <section className="section-padding bg-purple-50">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-6 ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              WHY PV LABS
            </span>

            <h2 className="font-heading text-2xl md:text-6xl font-bold mt-3 mb-6 text-gray-900">
              Most sellers lose sales not because of their product,
              <span className="bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text">
                {" "}but because of bad visuals
              </span>
            </h2>

            <span className="text-gray-600 leading-relaxed mb-4 text-xl w-auto block">
              We started PV Labs with one mission - help Indian e-commerce sellers compete with the best...
            </span>

            {/* ✅ UPDATED LIST */}

            <div className="space-y-6 mt-10 mb-8">
              {[
                { 
                  title: "Conversion-Driven Designs", 
                  desc: "We don't just create pretty pictures; we build visuals that convert visitors into customers.",
                  icon: <TrendingUp size={20} />
                },
                { 
                  title: "Marketplace Expertise", 
                  desc: "Fully optimized content for major platforms like Amazon, Flipkart, and Myntra.",
                  icon: <Globe size={20} />
                },
                { 
                  title: "Data-Backed Strategy", 
                  desc: "We analyze your competition to ensure your brand stands out and dominates the market.",
                  icon: <Users size={20} />
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="mt-1 bg-white shadow-sm border border-purple-100 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all underline underline-offset-2"
            >
              See Our work <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[24px] overflow-hidden shadow-xl">
              <img
                src={aboutTeam}
                alt="PV Labs creative team"
                className="w-full h-auto md:h-[600px] object-cover"
              />
            </div>

           
          </motion.div>

        </div>
      </div>
    </section>
  </>
);

export default AboutPreview;

