import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, User, Mail, Send, CheckCircle, Briefcase, Timer } from "lucide-react";
import { useState } from "react";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    duration: "30 Mins",
    date: "",
    time: "",
    meetingType: "Video Call",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.service) newErrors.service = "Required";
    if (!form.date) newErrors.date = "Required";
    if (!form.time) newErrors.time = "Required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20 px-6 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full glass-card p-10 text-center shadow-2xl">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">Booking Confirmed</h2>
            <p className="text-muted-foreground text-sm mb-8">
              We've scheduled your {form.duration} {form.meetingType} for {form.date} at {form.time}. Check your email for the link.
            </p>
            <button onClick={() => window.location.href = "/"} className="gradient-btn py-3 w-full text-sm font-semibold">Return Home</button>
          </motion.div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-10 px-6 gradient-bg-soft border-b border-border/20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Schedule <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">Quick, easy, and tailored to your project goals.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8">
            
            {/* Left Side: Service & Details */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card p-6 md:p-8 space-y-6 shadow-lg border-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="font-bold text-foreground">Project Discovery</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Name</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={`w-full bg-secondary/50 border ${errors.name ? 'border-red-500' : 'border-border/50'} rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 transition-all`} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Email Address</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className={`w-full bg-secondary/50 border ${errors.email ? 'border-red-500' : 'border-border/50'} rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 transition-all`} />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Choose Service</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Web UI", "App UI", "Branding", "Motion", "Packaging", "Other"].map((s) => (
                      <button key={s} type="button" onClick={() => setForm({ ...form, service: s })} className={`py-2.5 px-3 rounded-xl text-[13px] font-medium border transition-all ${form.service === s ? "bg-primary/10 border-primary text-primary shadow-sm" : "bg-secondary/50 border-border/50 text-muted-foreground hover:border-primary/30"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.service && <span className="text-xs text-red-500">{errors.service}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Briefly Describe Your Needs</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="What are your goals for this project?" className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground resize-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>
            </div>

            {/* Right Side: Scheduling */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6 md:p-8 space-y-6 shadow-lg border-primary/5 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={18} className="text-primary" />
                  <h3 className="font-bold text-foreground">Select Schedule</h3>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className={`w-full bg-secondary/50 border ${errors.date ? 'border-red-500' : 'border-border/50'} rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 transition-all`} />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1">Preferred Time</label>
                  <input type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className={`w-full bg-secondary/50 border ${errors.time ? 'border-red-500' : 'border-border/50'} rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/20 transition-all`} />
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1 flex items-center gap-1.5"><Timer size={13} /> Duration</label>
                  <div className="flex gap-2">
                    {["15 Mins", "30 Mins", "60 Mins"].map((d) => (
                      <button key={d} type="button" onClick={() => setForm({ ...form, duration: d })} className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${form.duration === d ? "bg-foreground text-background border-foreground" : "bg-secondary/50 border-border/50 text-muted-foreground hover:border-primary/30"}`}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wider ml-1 flex items-center gap-1.5"><Video size={13} /> Meeting Type</label>
                  <div className="flex gap-2">
                    {["Video Call", "Phone Call"].map((t) => (
                      <button key={t} type="button" onClick={() => setForm({ ...form, meetingType: t })} className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${form.meetingType === t ? "bg-primary text-white border-primary" : "bg-secondary/50 border-border/50 text-muted-foreground hover:border-primary/30"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="gradient-btn w-full py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    <Send size={16} /> Confirm Booking
                  </button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
