import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is PV Labs?", a: "PV Labs is India's dedicated e-commerce visual studio. We create product hero images, A+ content, lifestyle visuals, infographics, packaging design, and brand identity — everything your listing needs to convert on Amazon, Flipkart, Myntra, and Meesho. No studio shoot required." },
  { q: "Do I need to send my physical product?", a: "No. Just share clear reference images of your product + your brief. Our team handles everything from there. No shipping, no delays." },
  { q: "Are your visuals Amazon and Flipkart compliant?", a: "Yes. All images are delivered in platform-specific dimensions and specifications — white background hero images for Amazon, Flipkart-ready formats, and A+ content as per Amazon's guidelines." },
  { q: "How long does a typical project take?", a: "Most projects are delivered within 3–5 business days. Larger projects (10+ SKUs, full A+ content) may take 7–10 days. We always confirm the timeline before starting." },
  { q: "What does your design process look like?", a: "Simple 4-step process: 1. You share your product details + brief. 2. Our design team creates initial concepts. 3. You review and share feedback. 4. We deliver final files, Amazon & Flipkart ready." },
  { q: "How much does a project cost?", a: "Pricing depends on the number of SKUs and type of visuals needed. We offer per-SKU pricing as well as custom packages for brands. Get a free quote — no commitment required." },
];

const FAQ = () => (
  <section className="section-padding">
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold  mb-4 text-foreground">
          Common <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted-foreground">Everything you need to know about working with PV Labs.</p>
      </motion.div>

      <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;