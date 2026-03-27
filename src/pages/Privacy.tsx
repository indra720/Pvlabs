import React, { useState } from "react";
import { ChevronDown, Shield, Mail, MapPin, Lock, Eye, ShieldCheck, Database, Globe, Bell, Fingerprint, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    icon: Eye,
    subtitle: "Transparency first",
    content:
      "We collect only the information necessary to communicate with you and deliver our services effectively. This may include: name and contact details (such as email address), product information shared for review or image creation, messages or inquiries submitted through forms or email, and basic usage data (such as page visits) collected via standard analytics tools. We do not collect sensitive personal data.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    title: "How We Use Your Information",
    icon: Lock,
    subtitle: "Purposeful processing",
    content:
      "We use your information solely to respond to inquiries and requests, review your product images or requirements, deliver product image services, improve our website and service experience, and communicate important updates related to your request or engagement. We do not sell, rent, or trade your information to third parties.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Product Images & Confidentiality",
    icon: ShieldCheck,
    subtitle: "Your IP is safe",
    content:
      "Any product images, references, or materials shared with us are used only for the purpose agreed upon, handled confidentially, and will not be shared publicly without explicit permission. Spec case studies shown on our website are created independently or with permission and do not disclose confidential client data.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Cookies & Tracking",
    icon: Fingerprint,
    subtitle: "Smart & simple",
    content:
      "Our website may use basic cookies or analytics tools to understand how visitors interact with the site. This helps us improve usability and performance. You can control or disable cookies through your browser settings.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "Data Security",
    icon: Database,
    subtitle: "Bank-grade protection",
    content:
      "We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. While no system is 100% secure, we follow industry-standard practices to safeguard data.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Your Rights",
    icon: UserCheck,
    subtitle: "You are in control",
    content:
      "You may request access to the information you've shared with us, correction or deletion of your information, and more. To exercise these rights, contact us using the details below.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    id: 7,
    title: "Third-Party Tools",
    icon: Globe,
    subtitle: "Trusted partners only",
    content:
      "We may use trusted third-party tools (such as hosting platforms or analytics services) to operate our website. These providers are obligated to handle data responsibly and securely.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 8,
    title: "Policy Updates",
    icon: Bell,
    subtitle: "Always informed",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. We recommend checking back periodically to stay informed.",
    gradient: "from-sky-500/20 to-blue-500/20",
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

const Privacy = () => {
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
                TRUST & SAFETY
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 tracking-tight text-gray-900">
                Privacy <span className="bg-gradient-to-r from-[#7B2FD9] to-[#60B8F0] bg-clip-text text-transparent">Matters.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                At Product Visual Lab, your trust is our most valuable asset. We've simplified our policy to be transparent, honest, and easy to understand.
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
                  <Shield size={36} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Operated by Ravellia Designs, we ensure that every interaction, every image, and every piece of data is handled with the highest standard of confidentiality. We don't just follow laws; we follow principles of respect and integrity.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Privacy Questions?</h2>
                  <p className="text-gray-400 text-base md:text-lg mb-8">
                    If you have any questions about how your data is handled, our team is ready to provide all the answers.
                  </p>
                  <div className="space-y-4 md:space-y-6">
                    <motion.a 
                      href="mailto:pvlabs.ai@gmail.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                        <Mail size={18} className="text-primary group-hover:text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
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
                        <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-widest">Global HQ</p>
                        <p className="text-base md:text-lg font-bold">San Francisco, CA</p>
                      </div> */}
                    </motion.div>
                  </div>
                </div>
                
                <div className="relative mt-4 md:mt-0">
                  <div className="aspect-square md:aspect-square rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <ShieldCheck size={32}  className="text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">Secure by Design</h3>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                        We use industry standard encryption and security protocols to keep your data safe.
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

export default Privacy;
