"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 md:px-16 lg:px-24">
      <div className="flex w-full max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <motion.h1
            className="text-6xl font-bold tracking-tight lg:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Palak Gupta
          </motion.h1>
          <motion.p
            className="text-xl font-light text-foreground/60 lg:text-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            I build AI systems that actually work.
          </motion.p>
        </div>

        {/* TODO: replace with Spline character */}
        <div className="h-[500px] w-[400px] shrink-0 rounded-[12px] bg-white/[0.04]" />
      </div>
    </section>
  );
}
