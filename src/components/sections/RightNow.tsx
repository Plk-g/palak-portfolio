"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { label: "Reading", title: "The Courage to Be Disliked", sub: "Kishimi & Koga" },
  { label: "Listening to", title: "Huberman Lab", sub: "+ Lex Fridman on rotation" },
  { label: "Watching", title: "The Bear", sub: "Season 3. Yes, chef." },
  { label: "Eating", title: "Dal makhani", sub: "Slow-cooked, no shortcuts" },
];

export default function RightNow() {
  return (
    <section className="mb-20">
      <p className="mb-8 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        Right now
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface p-3.5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
              {item.label}
            </span>
            <p className="mt-1 text-[0.9rem] font-semibold text-text">
              {item.title}
            </p>
            <p className="mt-0.5 text-[0.75rem] text-text/45">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
