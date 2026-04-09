import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeam from "../../assets/about-team2.png";

const AboutPreview = () => (
  <>
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7B2FD9] to-transparent mb-5"></div>

    <section className="section-padding bg-purple-50">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

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

            <h2 className="font-heading text-2xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">
              Most sellers lose sales not because of their product,
              <span className="bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text">
                {" "}but because of bad visuals
              </span>
            </h2>

            <span className="text-gray-600 leading-relaxed mb-4 text-[1rem] text-justify max-w-[480px] block">
              We started PV Labs with one mission - help Indian e-commerce sellers compete with the best...
            </span>

            {/* ✅ UPDATED LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-6 gap-4 mb-8">
              {[
                {
                  icon: Users,
                  heading: "We've done this 500+ times —",
                  desc: "your category included. Skincare. Jewelry. Apparel. FMCG. Home decor. Bamboo. Ayurvedic..."
                },
                {
                  icon: Globe,
                  heading: "Platform compliance isn't a bonus —",
                  desc: "it's the baseline. Amazon's 2000×2000px pure white..."
                },
                {
                  icon: TrendingUp,
                  heading: "Every day your listing looks average, you're paying for it. Not to us —",
                  desc: "to your competitor. Every scroll-past is a sale lost..."
                },
                {
                  icon: ArrowRight,
                  heading: "Results sellers actually talk about.",
                  desc: "3x CTR improvements. Higher BSR. More add-to-carts..."
                },
                {
                  icon: Users,
                  heading: "Mon–Sat, 10AM–7PM —",
                  desc: "and we actually reply. No ghosting after delivery..."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 text-sm">

                  {/* 🔥 Heading (gradient) */}
                  <span className="font-bold bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text">
                    ✦ {item.heading}
                  </span>

                  {/* ✅ Description (normal color) */}
                  <span className="text-gray-600">
                    {item.desc}
                  </span>

                </div>
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
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 items-center">
              {[
                { num: "50+", label: " Brands Launched" },
                { num: "10,000+", label: "Visuals Delivered" },
                { num: "3-5", label: "Day Turnaround" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="glass-card w-[200px] bg-white border-purple-100 p-4 text-center shadow-sm"
                >
                  <div className="bg-gradient-to-b from-[#7B2FD9] to-[#60B8F0] text-transparent bg-clip-text text-[1.4rem] font-bold">
                    {s.num}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {s.label}
                  </div>
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

