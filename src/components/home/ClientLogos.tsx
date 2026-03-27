import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const logos = [
  "Campus", "mamaearth", "XYXX", "Derma", "sparx", "kapiva",
  "noise", "MB muscleBlaze"
];

const ClientLogos = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollamount = 0;
    let animationFrameId: number;

    const scroll = () => {
      if (!container.current) return;
      scrollamount += 0.5;
      container.current.scrollLeft = scrollamount;

      if (scrollamount > container.current.scrollWidth / 2) {
        scrollamount -= container.current.scrollWidth / 2;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <>
      {/* <section className="w-full py-12 overflow-hidden border-y border-border/40 bg-secondary/30">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">Brands we've worked with</p>
        <div ref={container} className="w-full flex whitespace-nowrap">
          <div className=" flex items-center gap-16 pr-16">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-heading text-2xl font-bold text-muted-foreground/25 select-none hover:text-primary/40 transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </section> */}
      <section className="w-full py-12 border-y border-border/40 bg-secondary/30 overflow-hidden">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
          Brands we've worked with
        </p>

        {/* 👇 SCROLL CONTAINER */}
        <div
          ref={container}
          className="w-full overflow-hidden"
        >
          {/* 👇 MOVING STRIP */}
          <div className="flex gap-16 whitespace-nowrap w-max will-change-transform">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-heading text-2xl font-bold text-muted-foreground/25 select-none hover:text-primary/40 transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default ClientLogos;
