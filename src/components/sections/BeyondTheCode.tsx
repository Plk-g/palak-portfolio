"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "School Captain",
    sub: "Led a team of 40 prefects. First real lesson in rallying people behind a shared goal.",
  },
  {
    title: "Event Lead — VIT",
    sub: "Organized tech fests with 2,000+ attendees. Logistics, speakers, sponsors — all of it.",
  },
  {
    title: "Teaching Assistant",
    sub: "Mentored 30+ students through data structures. Learned more teaching than studying.",
  },
  {
    title: "Community Builder",
    sub: "The person who organizes the group chat, the study session, the dinner after. Every time.",
  },
];

export default function BeyondTheCode() {
  return (
    <section className="mb-20">
      <p className="mb-8 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
        Beyond the code
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
