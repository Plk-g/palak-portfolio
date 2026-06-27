"use client";

import { motion } from "framer-motion";

const CAREER = [
  { role: "VIT", period: "2020–2024", sub: "B.Tech CS" },
  { role: "Teachnook", period: "Intern", sub: "ML" },
  { role: "SAIL Bhilai", period: "Intern", sub: "SDE" },
  { role: "Finlatics", period: "Intern", sub: "Data Analyst" },
  { role: "NYU", period: "2025–2026", sub: "MS CS" },
  { role: "Symbolic Systems", period: "Dec 2025–", sub: "AI Systems Engineer", current: true },
];

export default function CareerTimeline() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-0 overflow-x-auto pb-4">
        {CAREER.map((item, i) => (
          <motion.div
            key={item.role}
            className="flex shrink-0 items-center"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`h-2 w-2 rounded-full ${
                  item.current
                    ? "bg-accent shadow-[0_0_10px_rgba(206,140,248,0.4)]"
                    : "bg-text/30"
                }`}
              />
              <p className={`mt-1.5 text-[0.75rem] font-medium ${item.current ? "text-accent" : "text-text"}`}>
                {item.role}
              </p>
              <p className="text-[0.6rem] text-text/40">
                {item.period}
              </p>
              <p className="text-[0.55rem] text-text/30">
                {item.sub}
              </p>
            </div>

            {i < CAREER.length - 1 && (
              <div className="mx-3 h-px w-8 bg-gradient-to-r from-text/20 to-transparent sm:mx-5 sm:w-14" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
