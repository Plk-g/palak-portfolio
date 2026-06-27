"use client";

import { motion } from "framer-motion";

const OPTIONS = [
  { emoji: "💅", label: "Slay" },
  { emoji: "📉", label: "-ve aura" },
  { emoji: "💀", label: "Cooked" },
];

export default function RoastOrToast() {
  return (
    <motion.div
      className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface p-5 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <span className="text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
        Feedback Game
      </span>

      <h2 className="mt-2 font-display text-[1.5rem] font-normal tracking-tight sm:text-[1.8rem]">
        Roast or{" "}
        <em className="font-serif text-accent italic">Toast</em>
      </h2>

      <p className="mx-auto mt-3 max-w-sm text-[0.85rem] leading-relaxed text-text/55">
        60 seconds. Screenshots of every section. Swipe or tap your honest
        reaction.
      </p>

      <div className="mt-6 flex items-center justify-center gap-8">
        {OPTIONS.map((opt) => (
          <button
            key={opt.label}
            disabled
            className="flex flex-col items-center gap-1.5 opacity-60 transition-opacity hover:opacity-100"
          >
            <span className="text-3xl">{opt.emoji}</span>
            <span className="text-[0.7rem] text-text/50">{opt.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
