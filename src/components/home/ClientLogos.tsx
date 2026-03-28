import { useEffect, useRef } from "react";
import campus from "@/assets/marquelogo/campus.jpeg";
import xyxx from "@/assets/marquelogo/xyxx.jpeg";
import derma from "@/assets/marquelogo/derm2.jpeg";
import sparx from "@/assets/marquelogo/sparx2.avif";
import kapiva from "@/assets/marquelogo/kapiva2.jpeg";
import noise from "@/assets/marquelogo/noise.jpeg";
import mbmuscle from "@/assets/marquelogo/mbmuscle.jpeg";
import boat from "@/assets/marquelogo/boat2.jpeg";
import snitch from "@/assets/marquelogo/snitch.jpeg";
import hrx from "@/assets/marquelogo/hrx.jpeg";
import bewkoof from "@/assets/marquelogo/Bewkoof.jpeg";
import wakefit from "@/assets/marquelogo/wakefit.jpeg";
import healtkart from "@/assets/marquelogo/health.jpeg";


const logos = [
  campus, xyxx, derma, sparx, kapiva, noise, mbmuscle, boat, snitch, hrx, bewkoof, wakefit, healtkart
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
    <section className="w-full py-12 border-y border-border/40 bg-secondary/30 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
        Brands we've worked with
      </p>

      {/*  SCROLL CONTAINER */}
      <div
        ref={container}
        className="w-full overflow-hidden"
      >
        {/*  MOVING STRIP */}
        <div className="flex items-center gap-16 whitespace-nowrap w-max will-change-transform">
          {[...logos, ...logos].map((l, i) => (
            <img
              key={i}
              src={l}
              alt="Client Logo"
              className="h-12 w-auto   transition-all duration-300 select-none object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
