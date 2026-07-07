"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "🍰 Hates sweets",
    sub: "With one non-negotiable exception: tiramisu. That one gets a pass every time.",
  },
  {
    title: "🏸 State-level badminton",
    sub: "Played at the state championship level. Still unreasonably competitive about it.",
  },
  {
    title: "🎨 Never stopped creating",
    sub: "Engineering didn't replace the creative side — it just gave it new tools.",
  },
  {
    title: "☕ Sunday resets",
    sub: "A sacred ritual. Coffee, quiet, and a clean slate before the week begins.",
  },
];

export default function BeyondTheCode() {
  return (
    <section className="mb-20">
      <p className="mb-8 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        Tiny facts about me
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-surface p-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <p className="text-[0.95rem] font-semibold text-text">
              {card.title}
            </p>
            <p className="mt-2 text-[0.8rem] leading-relaxed text-text/50">
              {card.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
