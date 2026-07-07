"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AspectRatio = "landscape" | "portrait";

interface GalleryItem {
  title: string;
  subtitle: string;
  tag: string;
  italic?: boolean;
  src: string;
  alt: string;
  aspect: AspectRatio;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { title: "Grace Hopper '23", subtitle: "First tech conference. Got hooked.", tag: "conferences", src: "/images/about/ghc.jpeg", alt: "Grace Hopper Conference 2023", aspect: "landscape" },
  { title: "Passport stamps", subtitle: "If there's a window seat, I'm taking it.", tag: "travel", src: "/images/about/travel.jpeg", alt: "Travel adventures", aspect: "landscape" },
  { title: "Where it started", subtitle: "School captain. First taste of leadership.", tag: "the arc", src: "/images/about/school.jpeg", alt: "School days", aspect: "landscape" },
  { title: "Sunday host mode", subtitle: "Cooking for 8 is my love language.", tag: "hosting", src: "/images/about/host.jpeg", alt: "Hosting friends", aspect: "landscape" },
  { title: "NYC chapter", subtitle: "The city earns its rent. Most days.", tag: "life", src: "/images/about/nyc.jpeg", alt: "New York City life", aspect: "portrait" },
  { title: "Game day energy", subtitle: "Opinions? Strong. Volume? Louder.", tag: "sports", src: "/images/about/game.jpeg", alt: "Game day", aspect: "landscape" },
  { title: "VIT days", subtitle: "Built my first app. Broke my first prod server.", tag: "the arc", src: "/images/about/VIT.jpeg", alt: "VIT campus days", aspect: "landscape" },
  { title: "NYU Tech Week", subtitle: "Spoke on agentic AI. Didn't faint.", tag: "conferences", src: "/images/about/nyu.jpeg", alt: "NYU campus and events", aspect: "portrait" },
  { title: "Pixie", subtitle: "The CEO of my apartment.", tag: "family", src: "/images/about/pixie-dog.jpeg", alt: "Pixie the dog", aspect: "portrait" },
  { title: "", subtitle: "", tag: "ask me", italic: true, src: "/images/about/coffee.jpeg", alt: "Coffee moment", aspect: "landscape" },
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
            <div className={`relative w-full overflow-hidden ${
              item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="min-h-[5.5rem] p-5">
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
