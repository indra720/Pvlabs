import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Play, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Agarwal",
    role: "Amazon Seller · Lucknow",
    text: "Humara serum 3 mahine se Amazon pe pada tha. Traffic tha, clicks nahi the. PV Labs ne images dekhi aur bola — 'yeh product acha hai, presentation kharab hai.' Ek hafte mein naye images live the. Dusre hafte clicks shuru.",
    rating: 5,
    result: "Personal Care Category",
    featured: true
  },

  {
    name: "Ramesh Nair",
    role: "Flipkart Seller · Kochi",
    text: "My pressure cooker listing had 11 returns in one month. All saying 'not as described.' I thought the product was the problem. PV Labs told me the images were the problem — buyers couldn't see what they were actually getting. New images, zero returns next month.",
    rating: 5,
    result: "Home & Kitchen Category",
    featured: true
  },

  {
    name: "Farheen Siddiqui",
    role: "Ajio Seller · Surat",
    text: "Ajio ne 2 baar reject kiya. Unhone kaha image quality nahi hai. Maine socha product hi nahi bikega is platform pe. PV Labs ko diya — unhone poora catalog banaya, sabse pehle ek baar mein approve.",
    rating: 5,
    result: "Ethnic Wear Category"
  },

  {
    name: "Karthik Menon",
    role: "Amazon Brand · Pune",
    text: "I run a small protein brand out of Pune. Couldn't afford a proper studio — quotes I got were ₹25,000 minimum per shoot. PV Labs did my entire listing set for less than half that. And honestly? It looks better than what the studio would have done.",
    rating: 5,
    result: "Health & Supplements"
  },

  {
    name: "Divya Krishnamurthy",
    role: "Nykaa Brand · Bangalore",
    text: "Nykaa pe listed thi lekin koi brand identity nahi thi. Baaki brands ke saamne hum bilkul invisible the. PV Labs ne brand store banaya — pehle mahine mein Nykaa ne khud humein Beauty Edit mein feature kiya. Humne unhe request nahi ki thi.",
    rating: 5,
    result: "Skincare Category"
  },

  {
    name: "Gurpreet Singh",
    role: "D2C Brand · Amritsar",
    text: "We launched our honey brand on our own website. First two months — almost no sales. A friend suggested maybe the product photos were the issue. Found PV Labs. They delivered in 4 days. Third month was our best month. I don't know what changed but I know what changed.",
    rating: 5,
    result: "Organic Food"
  },

  {
    name: "Meera Joshi",
    role: "Flipkart Seller · Nagpur",
    text: "Baby products mein trust bahut important hota hai. Meri images dekh ke koi nahi khareedta tha — phone se li hui thi, background bhi sahi nahi tha. PV Labs ne jo images banayi — mere relative ne website dekhi aur bola 'yeh brand trusted lagta hai.' Wahi chahiye tha mujhe.",
    rating: 5,
    result: "Baby Products Category"
  },

  {
    name: "Aditya Shah",
    role: "Amazon Seller · Ahmedabad",
    text: "Listing quality score was stuck at 47 for months. Amazon keeps pushing down low quality listings in search. After PV Labs redid our images and infographics — score went to 91. Organic rank improved without changing a single rupee in ad spend.",
    rating: 5,
    result: "Electronics & Accessories"
  },

  {
    name: "Lakshmi Venkatesh",
    role: "Myntra Brand · Chennai",
    text: "Hamare earrings handcrafted hain — har ek piece mein mehnat hai. Lekin Myntra pe woh dikh nahi raha tha. PV Labs ne RPD banaya — close ups, material details, styling shots. Ab buyers comments mein likhte hain 'quality is even better than photos.' Pehle aisa kabhi nahi hua tha.",
    rating: 5,
    result: "Handcrafted Jewellery"
  },

  {
    name: "Rohan Deshmukh",
    role: "D2C Brand · Nashik",
    text: "Ayurvedic products mein buyers bahut sceptical hote hain. Certification dikhana zaroori hai, ingredients explain karne padte hain. Meri website pe yeh sab tha — lekin visuals weak the isliye koi read nahi karta tha. PV Labs ke baad bounce rate half ho gaya. Same content, better visuals.",
    rating: 5,
    result: "Ayurvedic Wellness"
  },

  {
    name: "Ella Furniture",
    role: "Amazon Seller · Delhi NCR",
    text: "I was about to give up on Amazon. My sofa listing had been live for 4 months with barely any orders. Competitor was selling the same product at higher price — their images were just better. PV Labs fixed mine. First order came 9 days after new images went live. Haven't looked back since.",
    rating: 5,
    result: "Home & Furniture Category"
  },

  {
    name: "Ashok Gupta",
    role: "Flipkart Seller · Bikaner",
    text: "Mera dry fruits brand 2 saal se chal raha hai. Packaging bilkul basic thi — koi poochta bhi nahi tha. PV Labs ne packaging aur listing dono sath banaye. Ek cheez jo unhone boli woh yaad hai — 'aapka product premium hai, aapki packaging wholesale lagti hai.' Sahi kaha tha unhone.",
    rating: 5,
    result: "Dry Fruits & Nuts"
  },

  {
    name: "Zara Merchant",
    role: "D2C Brand · Mumbai",
    text: "Ad budget tha, results nahi the. Agency se creatives banwaye the — generic the, convert nahi kar rahe the. PV Labs se banwaye — same budget, pehle campaign mein hi difference dikh gaya. Unhone explain kiya ki buyer kya dekhna chahta hai ad mein. Woh perspective nahi tha pehle.",
    rating: 5,
    result: "Women's Fashion"
  },

  {
    name: "Hardeep Chawla",
    role: "Amazon Brand · Ludhiana",
    text: "Honestly I was sceptical. No studio shoot, no physical sample — just send reference images and brief. Thought the output would look fake. When I got the files I showed my wife without telling her anything. She asked which studio we went to. That was enough for me.",
    rating: 5,
    result: "Men's Apparel Category"
  }
];

const TestimonialsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 px-6 md:px-12 gradient-bg-soft">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          <h1 className="font-heading text-5xl font-semibold mt-3 mb-6 text-foreground">
            What our clients <span className="gradient-text">say</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what 100+ clients have to say about working with PV Labs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { num: "4.8/5", label: "Average Rating" },
              { num: "96%", label: "Would Recommend" },
              { num: "50+", label: "Brands Served" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-3xl font-bold gradient-text">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured */}
    <section className="px-6 md:px-12 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.filter(t => t.featured).map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="glass-card p-8 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} className="text-primary fill-primary" />)}
            </div>
            <Quote size={24} className="text-primary/30 mb-2" />
            <p className="text-foreground text-lg leading-relaxed mb-6 italic ">"{t.text}"</p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">{t.name.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  <div className="font-heading font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>


    {/* All */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">All <span className="gradient-text">Reviews</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter(t => !t.featured).map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass-card p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} className="text-primary fill-primary" />)}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">{t.name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-xs text-primary font-semibold">{t.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center mx-auto max-w-4xl mt-5 rounded-md shadow-sm">
        <div className="max-w-x4l mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Join 100+ sellers and brands already winning with PV Labs</h2>
          <p className="text-primary-foreground/80 mb-8">Your product deserves better visuals.Let's build them together.</p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Start Your Project
          </Link>
        </div>
      </section>
    </section>



    <Footer />
  </div>
);

export default TestimonialsPage;
