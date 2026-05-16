import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Clock, DollarSign, ArrowRight, Heart, Zap, Globe, Coffee, Palette, Users, GraduationCap, Briefcase, Send } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const perks = [
  { icon: Globe, title: "Work Counts", desc: "Every visual you make goes live on Amazon, Flipkart, Myntra. Real stores. Real buyers." },
  {
    icon: Clock, title: "Own Your Time", desc: "No one's watching the clock. Deliver well, work when you're sharp."
  },
  { icon: DollarSign, title: "No Salary Games", desc: "What we offer, we pay. No we'll revisit in 6 months stories." },
  { icon: Heart, title: "Talk to the Top", desc: "Your idea reaches the decision-maker the same day. Not next quarter." },
  { icon: GraduationCap, title: "Deep Work Only", desc: "We don't do pointless meetings. Your focus stays yours." },
  { icon: Coffee, title: "Grow or Stagnate", desc: "Small team means nowhere to hide — and nowhere to stop learning." },
  { icon: Palette, title: "Real Brands. Real Stakes", desc: "You'll see your work on actual product listings people buy from." },
  { icon: Zap, title: "Tools That Work", desc: " We don't make you fight bad software. Right tools, from day one." },
];

const jobs = [
  {
    title: "Visual Content Intern",
    dept: "Creative",
    type: "Full-time",
    location: "Remote",

    desc: "Create premium product visuals for Indian e-commerce brands using advanced digital tools and proprietary workflows.",
    requirements: [
      "Strong visual sense — you know what looks premium and what doesn't",
      "Expert in crafting detailed creative briefs and visual direction",
      "Strong command over digital content generation tools",
      "Ability to translate a client brief into precise visual output",
      "Deadline-driven, no hand-holding needed"
    ]
  },

  {
    title: "Operations Executive",
    dept: "Operations",
    type: "Full-time",
    location: "Remote",

    desc: "Keep everything running smoothly — client communication, project tracking, delivery coordination, and record maintenance.",
    requirements: [
      "Clear communicator in Hindi and English both",
      "Genuinely organized, not just on paper",
      "Can handle multiple ongoing projects without dropping things",
      "Comfortable sending follow-ups and client emails independently"
    ]
  },

  {
    title: "Etsy & Marketplace Specialist",
    dept: "E-commerce + Design",
    type: "Full-time",
    location: "Remote",

    desc: "Manage Etsy store operations while creating fresh, on-demand listing visuals and product graphics using Canva and similar tools — as per project requirements.",
    requirements: [
      "Canva expert — fast, clean, creative output",
      "Can create new designs from scratch based on brief, not just templates",
      "Understands what visually sells on Etsy and international platforms",
      "Detail-oriented with listing titles, tags, and descriptions",
      "Comfortable communicating in English with international customers",
      "Can handle orders, queries, and store health without supervision"
    ]
  },

  {
    title: "Accounts & Payments",
    dept: "Finance",
    type: "Full-time / Part-time",
    location: "Remote",

    desc: "Track transactions, manage payment follow-ups, maintain GST records and invoices.",
    requirements: [
      "Basic accounting knowledge",
      "Confident with Excel or Tally",
      "Not uncomfortable chasing payments when needed"
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12 gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Careers</span>
              <h1 className="font-heading text-5xl  font-extrabold mt-3 mb-6 text-foreground">
                We're building something real. <span className="gradient-text text-4xl italic">Come to be part of it</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PV Labs is a visual services team working with Indian e-commerce brands-Amazon,Flipkart,Myntra,Ajio,D2C.We are small focused,and growing.You won't get lost here.Every person on the team directly impacts what we deliver.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="glass-card px-4 py-2">Open Roles</span>
                <span className="glass-card px-4 py-2">Work From Home</span>
                <span className="glass-card px-4 py-2">India-based Team</span>
              </div>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-xl">
              <img src={aboutTeam} alt="Our team" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Why work at <span className="gradient-text">PV Labs</span>?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-bg-soft">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Our <span className="gradient-text">Culture</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quality Over Speed", desc: "We don't rush work out the door. Every visual we deliver represents a brand — and we treat it that way. One good image beats five average ones." },
              { title: "No Hidden Agendas", desc: "Small team means no room for politics. What's working, what's not — everyone knows. We talk straight, fix fast, move on." },
              { title: "Builder's Mindset", desc: "We're still building — systems, processes, client base. If you're someone who sees a problem and fixes it without being asked, you'll fit right in." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-padding" id="positions">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">Open <span className="gradient-text">Positions</span></h2>
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card overflow-hidden">
                <button onClick={() => setSelectedJob(selectedJob === i ? null : i)} className="w-full p-6 text-left flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{j.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Briefcase size={12} /> {j.dept}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {j.type}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin size={12} /> {j.location}</span>
                      {/* <span className="text-xs text-primary font-semibold flex items-center gap-1"><DollarSign size={12} /> {j.salary}</span> */}
                    </div>
                  </div>
                  <span className={`text-primary text-xl transition-transform ${selectedJob === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {selectedJob === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground mt-4 mb-4">{j.desc}</p>
                    <h4 className="font-heading font-bold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {j.requirements.map((r, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight size={14} className="text-primary mt-0.5 flex-shrink-0" /> {r}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="gradient-btn px-6 py-3 text-sm inline-flex items-center gap-2">
                      Apply Now <Send size={14} />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto  section-padding bg-gradient-to-r from-slate-900 to-slate-800 text-center m-5 rounded-md shadow-sm">
        <div className="max-w-3xl mx-auto ">
          <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">Don't see your role?</h2>
          <p className="text-primary-foreground/80 mb-8">If you think you can add value to what we're building — just reach out. Send your work to growth@pvlabs.in
          </p>
          <Link to="/contact" className="bg-background text-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl transition-all">
            Send Your Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
