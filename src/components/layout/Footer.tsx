import { Link } from "react-router-dom";
import { Mail, Phone, Clock } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import logo from "../../assets/logo-removebg-preview (1).png"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src={logo} 
                alt="PV Labs" 
                className="h-16 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105" 
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-[280px]">
              PV Labs helps Indian sellers and brands create studio-quality visuals — without a studio. Amazon, Flipkart & Myntra ready.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ icon: Icon, label, href, hoverColor }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`group w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 transition-all ${hoverColor}`}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <span className="text-background/40 text-xs ml-1">@pvlabs</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Product Hero Images", path: "/services" },
                { label: "Lifestyle Images", path: "/services" },
                { label: "A+ Content & EBC", path: "/services" },
                { label: "Infographics", path: "/services" },
                { label: "Packaging Design", path: "/services" },
                { label: "Logo & Brand Identity", path: "/services" },
                { label: "All Services →", path: "/services" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Work", path: "/portfolio" },
                // { label: "Testimonials", path: "/testimonials" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-background/60 hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact - Replacing Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-white uppercase tracking-wider text-xs">Talk to us</h4>
            <div className="flex flex-col gap-4 text-sm text-background/60">
              <a href="mailto:growth@pvlabs.ai" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> growth@pvlabs.ai
              </a>
              <a href="tel:+917417791003" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> +91 74177 91003
              </a>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" /> Mon–Sat · 10am–7pm IST
              </div>
              <a 
                href="https://wa.me/917417791003" 
                className="mt-2 gradient-bg-vivid text-white px-6 py-2.5 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all w-fit"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <p className="flex items-center gap-1">© 2026 PV Labs. Made for Indian E-Commerce 🇮🇳</p>
          <div className="flex gap-6 items-center">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            {/* <a href="https://pvlabs.ai" className="hover:text-primary transition-colors font-medium">pvlabs.ai</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
