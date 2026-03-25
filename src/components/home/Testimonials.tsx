import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  { name: "Rahul M.", role: "Amazon Seller, Electronics Category", text: "Our Amazon listing CTR doubled within the first week of uploading the new visuals. Worth every rupee.", rating: 5, metric: "2x CTR Increase" },
  { name: "Priya S.", role: "Flipkart Brand, Home & Kitchen", text: "Finally a team that understands what Flipkart listings actually need. Fast delivery, zero back and forth. Will definitely order again.", rating: 5, metric: "3-Day Delivery" },
  { name: "Arjun K.", role: "D2C Brand, Skincare", text: "We were spending ₹40,000 per shoot. PV Labs gave us better results at a fraction of the cost. Game changer for our brand.", rating: 5, metric: "80% Cost Saving" },
  { name: "Neha R.", role: "Amazon Brand, Fashion & Apparel", text: "The A+ content they designed increased our conversion rate significantly. Our competitors still don't know what hit them.", rating: 5, metric: "Conversion Rate Up 38%" },
  { name: "Vikram T.", role: "Myntra Seller, Sports & Fitness", text: "Sent them my product reference and brief — got back catalog-ready visuals in 4 days. No studio, no hassle. Impressive.", rating: 5, metric: "Listed & Live in 5 Days" },
  { name: "Sana A.", role: "Meesho Brand, Ethnic Wear", text: "Professional, fast, and they actually understand e-commerce. Not just designers — they think like sellers.", rating: 5, metric: "First Order Within 48hrs of Listing" },
  { name: "Amit D.", role: "Amazon Seller, Personal Care", text: "I was skeptical at first — no studio shoot, no physical sample sent. But the final visuals looked more premium than anything we'd shot before. Truly remarkable work.", rating: 5, metric: "Best Seller Tag Within 3 Weeks" },
  { name: "Kavya M.", role: "Flipkart Brand, Home Decor", text: "Our Flipkart return rate dropped after we updated our listing images. Customers now know exactly what they're getting. PV Labs understood our product better than we expected.", rating: 5, metric: "Returns Reduced by 30%" },
  { name: "Rohit B.", role: "Amazon Brand, Kitchen Appliances", text: "Launched 12 SKUs in one go. PV Labs handled every single visual — hero images, infographics, A+ banners. Delivered everything in 8 days. Unbelievable turnaround.", rating: 5, metric: "12 SKUs Live in 8 Days" },
  { name: "Deepak S.", role: "Flipkart Seller, Baby Products", text: "Our old images were clicked on a phone camera. PV Labs transformed our listing overnight. Sales jumped the very next week. I wish I had found them sooner.", rating: 5, metric: "Sales Up 55% Week 1" },
  { name: "Ananya G.", role: "Myntra Brand, Women's Fashion", text: "What impressed me most was how well they understood our target customer. The visuals don't just look good — they speak directly to the buyer. That's rare.", rating: 5, metric: "Wishlist Adds Up 70%" },
  { name: "Suresh P.", role: "Amazon Seller, Tools & Hardware", text: "Three agencies before PV Labs. None of them got it right. PV Labs nailed it on the first revision. That's the difference between designers and e-commerce specialists.", rating: 5, metric: "First-Try Approval" },
  { name: "Ritu K.", role: "Meesho Seller, Jewellery", text: "Budget was tight, expectations were high. PV Labs delivered on both. Premium quality at a price that actually makes sense for a growing brand like ours.", rating: 5, metric: "ROI Positive Within 2 Weeks" },
  { name: "Manish T.", role: "Amazon Brand, Supplements", text: "Sent a brief on Monday. Had final files by Thursday. Everything Amazon-compliant, pixel perfect. This is how every agency should operate.", rating: 5, metric: "Zero Revision Needed" },
  { name: "Ishaan V.", role: "D2C Brand, Men's Grooming", text: "Our packaging design and listing visuals now look like a ₹10 crore brand. We're a 2-year-old startup. PV Labs made that possible.", rating: 5, metric: "Brand Perceived as Premium" },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Trusted by <span className="gradient-text">500+ sellers</span> worldwide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it — hear what our clients have to say about working with PV Labs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <Quote size={24} className="text-primary/20 mb-3" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">"{t.text}"</p>
            
            <div className="pt-4 border-t border-border/50 mt-auto">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
               </div>
               <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/5 px-3 py-2 rounded-lg w-full">
                  <CheckCircle size={14} />
                  {t.metric}
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 max-w-4xl mx-auto"
      >
         <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">Ready to Transform Your Listings?</h3>
         <p className="text-muted-foreground mb-8">Join sellers and brands already winning on Amazon & Flipkart.</p>
         <Link to="/contact" className="gradient-btn px-8 py-3 text-sm inline-flex items-center gap-2 font-semibold">
           Get Your Free 1-SKU Makeover →
         </Link>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
