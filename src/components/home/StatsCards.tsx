import { motion, Variants } from "framer-motion";
import { Boxes, RefreshCw, Image as ImageIcon, Globe, CheckCircle2 } from "lucide-react";

const stats = [
  {
    title: "Product Categories",
    subtitle: "Handled with care",
    icon: Boxes,
    content: ["Wellness", "Fashion", "Utility", "Lifestyle", "Consumer Goods"],
    isBlack: false,
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Repeat Usage",
    subtitle: "Trust in quality",
    icon: RefreshCw,
    content: "Sellers reuse our images across multiple listings and global campaigns. 85% client retention rate.",
    isBlack: true,
    gradient: "from-[#7B2FD9]/40 to-[#60B8F0]/40",
  },
  {
    title: "Images Delivered",
    subtitle: "Scale & Quality",
    icon: ImageIcon,
    content: "10,000+ premium product images created for listings, high-impact ads, and brand stores.",
    isBlack: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Marketplaces",
    subtitle: "Omnichannel ready",
    icon: Globe,
    content: ["Amazon", "Flipkart", "Myntra", "Meesho", "Nykaa", "D2C"],
    isBlack: false,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  },
};

const StatsCards = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full sm:max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 }
              }}
              className={`relative group p-8 rounded-[32px] border transition-all duration-500 ${
                stat.isBlack 
                  ? "glass-card-dark text-white border-white/10" 
                  : "glass-card text-gray-900 border-gray-100"
              } h-full flex flex-col`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ${
                  stat.isBlack ? "bg-white/10" : "bg-[#7B2FD9]/10"
                }`}>
                  <stat.icon size={28} className={stat.isBlack ? "text-white" : "text-[#7B2FD9]"} />
                </div>
                
                <div className="mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-[2px] mb-1 block ${
                    stat.isBlack ? "text-white/60" : "text-[#7B2FD9]/60"
                  }`}>
                    {stat.subtitle}
                  </span>
                  <h3 className={`text-2xl font-extrabold font-heading leading-tight ${
                    stat.isBlack ? "text-white" : "text-gray-900"
                  }`}>
                    {stat.title}
                  </h3>
                </div>

                {Array.isArray(stat.content) ? (
                  <div className="flex flex-wrap gap-2">
                    {stat.content.map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border ${
                          stat.isBlack 
                            ? "bg-white/5 border-white/10 text-white/80" 
                            : "bg-gray-50 border-gray-100 text-gray-600 group-hover:bg-white group-hover:border-[#7B2FD9]/20"
                        }`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <div className="relative">
                    <p className={`text-sm leading-relaxed font-medium ${
                      stat.isBlack ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {stat.content}
                    </p>
                    {stat.isBlack && (
                      <div className="mt-4 flex items-center gap-2 text-white/80">
                        <CheckCircle2 size={16} className="text-green-400" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">Verified Success</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute bottom-6 right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 ${
                stat.isBlack ? "text-white" : "text-[#7B2FD9]"
              }`}>
                <stat.icon size={64} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCards;
