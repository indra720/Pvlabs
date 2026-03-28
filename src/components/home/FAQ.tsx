import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/Faq";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="section-padding">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleFaqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>

          ))}
          <div className="text-center  rounded-md flex items-center justify-start">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-primary font-semibold"
            >
              {showAll ? "Show Less" : "+ More"}
            </button>
          </div>
        </Accordion>

        {/*  Show More Button */}

      </div>
    </section>
  );
};

export default FAQ;