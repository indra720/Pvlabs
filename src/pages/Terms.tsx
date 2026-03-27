import React, { useState } from "react";
import { ChevronDown, Shield, Mail, MapPin, Lock, Eye, ShieldCheck, Database, Globe, Bell, Fingerprint, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    icon: UserCheck,
    subtitle: "Binding Agreement",
    content: "By accessing and using the PV Labs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    title: "Services Description",
    icon: Globe,
    subtitle: "Our Offerings",
    content: "PV Labs provides creative design services including but not limited to logo design, brand identity, UI/UX design, packaging design, motion graphics, and marketing creatives. Service scope, deliverables, and timelines are defined in individual project proposals.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Project Engagement",
    icon: Database,
    subtitle: "Smooth Start",
    content: "Each project begins with a signed proposal or statement of work. Projects commence upon receipt of the agreed deposit. Changes to scope after project start may result in additional fees and timeline adjustments.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Payment Terms",
    icon: Lock,
    subtitle: "Fair & Secure",
    content: "Payment terms are outlined in your project proposal. Standard terms are 50% upfront and 50% upon delivery. Enterprise clients may qualify for invoicing with Net-30 terms. Late payments may incur a 1.5% monthly fee.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "Intellectual Property",
    icon: Fingerprint,
    subtitle: "Ownership Rights",
    content: "Upon full payment, all intellectual property rights for the final delivered designs transfer to you. PV Labs retains the right to showcase the work in our portfolio unless otherwise agreed. Pre-existing elements and stock assets may have separate licensing terms.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Revisions & Modifications",
    icon: Eye,
    subtitle: "Fine-Tuning",
    content: "Revision rounds are included as specified in your package. Revisions must be consolidated and submitted within 5 business days of receiving designs. Additional revision rounds beyond the included amount are billed at our hourly rate.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    id: 7,
    title: "Confidentiality",
    icon: ShieldCheck,
    subtitle: "Total Privacy",
    content: "We treat all client information and project details as confidential. We will not share your business information, strategies, or unpublished designs with any third party without your written consent.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 8,
    title: "Limitation of Liability",
    icon: Shield,
    subtitle: "Mutual Protection",
    content: "PV Labs' total liability for any claim shall not exceed the total fees paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from the use of our designs.",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: 9,
    title: "Termination",
    icon: Bell,
    subtitle: "Project Conclusion",
    content: "Either party may terminate a project with 14 days written notice. In case of termination, payment is due for all work completed to date. Completed deliverables will be transferred upon payment.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 10,
    title: "Governing Law",
    icon: Globe,
    subtitle: "Legal Framework",
    content: "These terms are governed by the laws of the State of California. Any disputes shall be resolved through arbitration in San Francisco, CA, under the rules of the American Arbitration Association.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 11,
    title: "Contact Information",
    icon: Mail,
    subtitle: "Reach Out",
    content: "For questions about these Terms of Service, contact us at legal@pvlabs.design or write to: PV Labs, 123 Design Street, San Francisco, CA 94105, USA.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const Terms = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-pink-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent text-sm font-semibold uppercase tracking-[4px] mb-4 block">
                LEGAL FRAMEWORK
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 tracking-tight text-gray-900">
                Terms of <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">Service.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                Last updated: March 1, 2026. Please read these terms carefully before using our website and design services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Pillar */}
        <section className="px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-12 relative overflow-hidden group border-primary/10 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <Shield size={180} />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#7B2FD9] to-[#60B8F0] flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                  <ShieldCheck size={36} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment to Clarity</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    At PV Labs, we believe in transparent partnerships. These terms are designed to protect both parties and ensure a smooth, professional creative process from start to finish.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Grid */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                  className={`cursor-pointer relative group p-8 rounded-[32px] border transition-all duration-500 flex flex-col h-full ${
                    expandedId === section.id 
                      ? "glass-card-dark text-white border-white/10 ring-2 ring-primary/20" 
                      : "glass-card text-gray-900 border-gray-100 hover:border-primary/30"
                  }`}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ${
                      expandedId === section.id ? "bg-white/10" : "bg-primary/10"
                    }`}>
                      <section.icon size={28} className={expandedId === section.id ? "text-white" : "text-primary"} />
                    </div>

                    <div className="mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-[2px] mb-1 block ${
                        expandedId === section.id ? "text-white/60" : "text-primary/60"
                      }`}>
                        {section.subtitle}
                      </span>
                      <h3 className={`text-xl font-bold font-heading leading-tight ${
                        expandedId === section.id ? "text-white" : "text-gray-900"
                      }`}>
                        {section.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {expandedId === section.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4"
                        >
                          <p className="text-sm leading-relaxed text-gray-200">
                            {section.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!expandedId && (
                      <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-bold text-primary group-hover:translate-x-1 transition-transform">
                        READ MORE <ChevronDown size={14} />
                      </div>
                    )}
                  </div>

                  {/* Decorative Icon */}
                  <div className={`absolute bottom-6 right-6 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-500 ${
                    expandedId === section.id ? "text-white" : "text-primary"
                  }`}>
                    <section.icon size={64} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -mr-32 -mt-32 md:-mr-48 md:-mt-48" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center text-left">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Legal Questions?</h2>
                  <p className="text-gray-400 text-base md:text-lg mb-8">
                    If you have any questions about our terms or project engagement, our team is here to help.
                  </p>
                  <div className="space-y-4 md:space-y-6">
                    <motion.a 
                      href="mailto:legal@pvlabs.design"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <Mail size={18} className="text-primary group-hover:text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Legal Dept</p>
                        <p className="text-base md:text-lg font-bold truncate">growth@pvlabs.ai</p>
                      </div>
                    </motion.a>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      {/* <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors flex-shrink-0">
                        <MapPin size={18} className="text-blue-500 group-hover:text-white" />
                      </div> */}
                      {/* <div>
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Address</p>
                        <p className="text-base md:text-lg font-bold">San Francisco, CA 94105</p>
                      </div> */}
                    </motion.div>
                  </div>
                </div>
                
                <div className="relative mt-4 md:mt-0">
                  <div className="aspect-square md:aspect-square rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <ShieldCheck size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">Secure Agreement</h3>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                        Our terms are built on industry standards to protect your rights and our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Terms;
