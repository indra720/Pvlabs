import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo-removebg-preview (1).png"

interface NavLinkItem {
  label: string;
  path: string;
  children?: NavLinkItem[];
}

const navLinks: NavLinkItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Services", path: "/services",
    children: [
      {
        label: "E-Commerce",
        path: "/services#ecommerce",
        children: [
          { label: "Product Hero Images", path: "/services#product-hero-images" },
          { label: "Lifestyle & Scene", path: "/services#lifestyle-scene-images" },
          { label: "A+ Content (EBC)", path: "/services#a-content-ebc-design" },
          { label: "Infographics", path: "/services#infographics-listing-images" },
          { label: "Cataloging & RPD", path: "/services#catalog-rpd-creation" },
        ]
      },
      {
        label: "Brand & Marketing",
        path: "/services#brand",
        children: [
          { label: "Logo & Identity", path: "/services#logo-brand-identity" },
          { label: "Packaging Design", path: "/services#packaging-design" },
          { label: "Social Media", path: "/services#social-media-creatives" },
          { label: "Ad Creatives", path: "/services#ad-creatives-meta-google" },
          { label: "Pitch Decks", path: "/services#presentation-pitch-deck" },
        ]
      },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    label: "Work", path: "/portfolio",
    children: [
      { label: "Portfolio", path: "/portfolio" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Testimonials", path: "/testimonials" },
    ],
  },
  {
    label: "Company", path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Founders", path: "/founders" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "FAQ", path: "/faq" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleMobileSubMenu = (label: string) => {
    setOpenMobileSubMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="PV Labs" 
            className="h-16 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Main Nav Links Container */}
          <div className="flex items-center bg-secondary/50 p-1 rounded-full border border-border/40 shadow-sm">
            {navLinks.map((link) => (
              <div
                key={link.path + link.label}
                className="relative"
                onMouseEnter={() => link.children && setHoveredMenu(link.label)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredSubMenu(null);
                }}
              >
                <Link
                  to={link.path}
                  className={`relative text-xs font-semibold transition-colors flex items-center gap-1.5 px-5 py-2 z-10 rounded-full ${
                    (link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredMenu === link.label ? "rotate-180" : ""}`} />}
                  
                  {/* Active Pill Background - Floating Card Style */}
                  {(link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path)) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] rounded-full -z-10"
                      transition={{ 
                        type: "spring", 
                        stiffness: 380, 
                        damping: 30,
                        mass: 1
                      }}
                    />
                  )}
                </Link>

                {/* Mega menu dropdown */}
                <AnimatePresence>
                  {link.children && hoveredMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-64 glass-card p-3 shadow-xl rounded-2xl"
                    >
                      {link.children.map((child) => (
                        <div 
                          key={child.label} 
                          className="relative group/sub"
                          onMouseEnter={() => setHoveredSubMenu(child.label)}
                          onMouseLeave={() => setHoveredSubMenu(null)}
                        >
                          <Link
                            to={child.path}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                              location.pathname === child.path ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground"
                            }`}
                          >
                            {child.label}
                            {child.children && <ChevronRight size={14} className="opacity-50" />}
                          </Link>
                          
                          {/* Second level dropdown */}
                          <AnimatePresence>
                            {child.children && hoveredSubMenu === child.label && (
                              <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-full top-0 ml-1 w-64 glass-card p-3 shadow-xl rounded-2xl"
                              >
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.label}
                                    to={subChild.path}
                                    className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <Link to="/appointment" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Book Appointment
            </Link>
            <Link to="/contact" className="gradient-btn px-6 py-2.5 text-sm">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <div key={link.path + link.label}>
                  <div className="flex items-center justify-between py-2">
                    <Link
                      to={link.path}
                      onClick={() => !link.children && setOpen(false)}
                      className={`text-lg font-medium ${
                        location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button 
                        onClick={() => toggleMobileSubMenu(link.label)}
                        className="p-2 text-muted-foreground"
                      >
                        <ChevronDown size={20} className={`transition-transform ${openMobileSubMenus[link.label] ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  
                  {link.children && openMobileSubMenus[link.label] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-4 space-y-1 mb-2"
                    >
                      {link.children.map((child) => (
                        <div key={child.label}>
                          <div className="flex items-center justify-between py-1.5">
                            <Link
                              to={child.path}
                              onClick={() => !child.children && setOpen(false)}
                              className={`text-sm ${
                                location.pathname === child.path ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <button 
                                onClick={() => toggleMobileSubMenu(child.label)}
                                className="p-1.5 text-muted-foreground"
                              >
                                <ChevronDown size={16} className={`transition-transform ${openMobileSubMenus[child.label] ? "rotate-180" : ""}`} />
                              </button>
                            )}
                          </div>
                          
                          {child.children && openMobileSubMenus[child.label] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="pl-4 space-y-1 mb-2 border-l border-border/50"
                            >
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.label}
                                  to={subChild.path}
                                  onClick={() => setOpen(false)}
                                  className="block text-xs py-1.5 text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {subChild.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/appointment" onClick={() => setOpen(false)} className="flex-1 text-center py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-all">
                  Book Appointment
                </Link>
                <Link to="/contact" onClick={() => setOpen(false)} className="flex-1 gradient-btn px-6 py-3 text-center text-sm font-bold">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
