// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const ContactCTA = () => (
//   <section className="section-padding px-6">
//     <div className="max-w-5xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         className="relative rounded-[32px] overflow-hidden p-12 md:p-16 text-center shadow-2xl"
//         style={{ 
//           background: "linear-gradient(to right, #7B2FD9, #C84FD8, #3B8BF5, #60B8F0)" 
//         }}
//       >
//         <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        
//         <div className="relative z-10">
//           <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
//             Your competitor's listing looks better than yours.
//           </h2>
//           <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
//             Every day without great visuals is a day your product gets scrolled past. Let's fix that — starting with one SKU, free.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//             <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:shadow-xl transition-all w-full sm:w-auto">
//               get free sample for your product<ArrowRight size={18} />
//             </Link>
//             <Link to="/pricing" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all w-full sm:w-auto">
//               View Pricing
//             </Link>
//           </div>
//           <p className="text-white text-xs italic opacity-90">
//              Limited free slots this month — 4 remaining
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default ContactCTA;




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const ContactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl"
        >
          {/* Premium Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #0f3460 100%)",
              opacity: 1,
            }}
          />

          {/* Animated Accent Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />

          {/* Overlay Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Content Container */}
          <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-sm"
              >
                <Sparkles size={16} className="text-emerald-400" />
                <span className="text-xs sm:text-sm font-semibold text-emerald-300 tracking-wide">
                  TRANSFORM YOUR LISTINGS
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8 text-white leading-tight sm:leading-tight"
              >
                Your competitor's listing{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  looks better than yours
                </span>
                .
              </motion.h2>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed"
              >
                Every day without stunning visuals is a day your products get scrolled past. Let's
                change that — start with one SKU, completely{" "}
                <span className="text-emerald-400 font-semibold">free</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-stretch sm:items-center mb-8 sm:mb-10"
              >
                {/* Primary Button */}
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base text-white transition-all duration-300 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    Get Free Sample
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/pricing"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base text-white border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap"
                >
                  View Pricing
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>

              {/* Limited Slots Badge */}
              <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wide"
              >
                🔥 <span className="font-bold text-emerald-400">Limited free slots</span> this month —{" "}
                <span className="font-bold">4 remaining</span>
              </motion.p>
            </motion.div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;