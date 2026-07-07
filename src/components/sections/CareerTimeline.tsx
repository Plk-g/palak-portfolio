"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface CareerEntry {
  role: string;
  org: string;
  period: string;
  type: "education" | "work";
  current?: boolean;
}

const CAREER: CareerEntry[] = [
  { role: "B.Tech Computer Science", org: "VIT", period: "2020–2024", type: "education" },
  { role: "ML Intern", org: "Teachnook", period: "Intern", type: "work" },
  { role: "SDE Intern", org: "SAIL Bhilai", period: "Intern", type: "work" },
  { role: "Data Analyst Intern", org: "Finlatics", period: "Intern", type: "work" },
  { role: "MS Computer Science", org: "NYU", period: "2025–2026", type: "education" },
  { role: "AI Systems Engineer", org: "Symbolic Systems", period: "Dec 2025–", type: "work", current: true },
];

export default function CareerTimeline() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-0 overflow-x-auto pb-4">
        {CAREER.map((item, i) => (
          <motion.div
            key={item.org + item.role}
            className="flex shrink-0 items-center"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`flex h-3 w-3 items-center justify-center rounded-full ${
                  item.current
                    ? "bg-accent shadow-[0_0_10px_rgba(206,140,248,0.4)]"
                    : item.type === "education"
                      ? "bg-accent/50"
                      : "bg-text/30"
                }`}
              >
                {item.type === "education" && (
                  <GraduationCap size={7} className="text-bg" />
                )}
              </div>
              <p className={`mt-1.5 text-[0.8rem] leading-tight ${
                item.current
                  ? "font-bold text-accent"
                  : item.type === "education"
                    ? "font-bold text-text"
                    : "font-medium text-text"
              }`}>
                {item.role}
              </p>
              <p className={`text-[0.65rem] ${
                item.type === "education" ? "text-text/50" : "text-text/40"
              }`}>
                {item.org}
              </p>
              <p className="text-[0.55rem] text-text/30">
                {item.period}
              </p>
              {item.type === "education" && (
                <div className="mt-1 h-px w-6 bg-accent/30" />
              )}
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
