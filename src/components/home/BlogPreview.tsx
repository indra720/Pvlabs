import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import serviceWebdesign from "../../assets/Blog11.png";
import serviceBranding from "../../assets/Blog22.png";
import serviceAppdesign from "../../assets/Blog33.png";


const posts = [
  {
    id: "amazon-listing-guide-2026",
    title: "Amazon Listing Images — Complete Guide for Indian Sellers 2026",
    category: "Guide",
    readTime: "8 min",
    author: "Rudra",
    image: serviceWebdesign,
    excerpt: "Wrong images cost you sales every single day. Here's exactly what Amazon wants — and what Indian sellers keep getting wrong.",
    side: "left"
  },
  {
    id: "amazon-a-plus-content-guide",
    title: "What is A+ Content & Why Every Amazon Brand Needs It",
    category: "Education",
    readTime: "7 min",
    author: "Tankaar Sharma",
    image: serviceBranding,
    excerpt: "Most Amazon sellers have never used A+ Content. The ones who have — won't stop. Here's everything you need to know before your competitors figure it out.",
    side: "center"
  },
  {
    id: "flipkart-listing-requirements-2026",
    title: "Flipkart Listing Image Requirements — Full Size & Format Guide 2026",
    category: "Guide",
    readTime: "6 min",
    author: "Rudra",
    image: serviceAppdesign,
    excerpt: "Flipkart rejects thousands of listings every day for image errors. Here's the exact spec sheet Indian sellers need — so yours never gets rejected.",
    side: "right"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-5 bg-white overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Explore Insights</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Latest <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Expert strategies and marketplace secrets to help your brand dominate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-full mx-auto">
          {posts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${p.side === 'center' ? 'lg:scale-110 z-20' : 'lg:scale-95 z-10'}`}
            >
              <Link to={`/blog/${p.id}`} className="block h-full group">
                <div className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col border border-gray-100">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col bg-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {p.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3 font-medium">{p.excerpt}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-gray-400 flex items-center gap-1 font-bold uppercase tracking-widest"><User size={12} /> {p.author}</span>
                      <span className="text-sm text-primary flex items-center gap-1 font-bold uppercase tracking-widest">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;