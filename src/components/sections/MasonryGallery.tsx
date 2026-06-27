"use client";

import { motion } from "framer-motion";

interface GalleryItem {
  height: number;
  title: string;
  subtitle: string;
  tag: string;
  italic?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { height: 190, title: "Grace Hopper '23", subtitle: "First tech conference. Got hooked.", tag: "conferences" },
  { height: 100, title: "Passport stamps", subtitle: "If there's a window seat, I'm taking it.", tag: "travel" },
  { height: 140, title: "Where it started", subtitle: "School captain. First taste of leadership.", tag: "the arc" },
  { height: 140, title: "Sunday host mode", subtitle: "Cooking for 8 is my love language.", tag: "hosting" },
  { height: 220, title: "NYC chapter", subtitle: "The city earns its rent. Most days.", tag: "life" },
  { height: 100, title: "Game day energy", subtitle: "Opinions? Strong. Volume? Louder.", tag: "sports" },
  { height: 140, title: "VIT days", subtitle: "Built my first app. Broke my first prod server.", tag: "the arc" },
  { height: 190, title: "NYU Tech Week", subtitle: "Spoke on agentic AI. Didn't faint.", tag: "conferences" },
  { height: 100, title: "", subtitle: "", tag: "ask me", italic: true },
];

export default function MasonryGallery() {
  return (
    <section className="mb-20">
      <p className="mb-8 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        Life, curated
      </p>

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.tag + i}
            className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {/* Image placeholder */}
            <div
              className="w-full bg-gradient-to-br from-surface to-[#2a2230]"
              style={{ height: item.height }}
            />

            {/* Caption */}
            <div className="p-3.5">
              {item.italic ? (
                <p className="font-serif text-[0.9rem] leading-snug text-accent italic">
                  Behind every great engineer is a few too many cups of coffee.
                </p>
              ) : (
                <>
                  <p className="text-[0.85rem] font-semibold text-text">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[0.75rem] text-text/45">
                    {item.subtitle}
                  </p>
                </>
              )}
              <span className="mt-2 inline-block rounded-[10px] bg-[rgba(206,140,248,0.1)] px-2 py-0.5 text-[0.7rem] text-accent">
                {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
