"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutHero() {
  return (
    <section className="mb-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left — Text */}
        <motion.div
          className="flex-[1.5]"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-display text-[2rem] leading-[1.12] font-normal tracking-tight sm:text-[2.8rem] lg:text-[3.5rem]"
            variants={fadeUp}
          >
            More than what fits on a{" "}
            <em className="font-serif text-accent italic">resume.</em>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-[1rem] leading-[1.7] text-text"
            variants={fadeUp}
          >
            I&apos;m Palak — software engineer, AI systems builder, and someone
            who genuinely believes the best engineers are also the most curious
            people in the room. I moved to New York for grad school and stayed
            for the energy, the food, and the tech.
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-[1rem] leading-[1.7] text-text/70"
            variants={fadeUp}
          >
            When I&apos;m not shipping agents to production, I&apos;m hosting
            dinners, planning the next trip, or convincing someone that every
            sunset is worth leaving early for. Catch me debating football scores
            as easily as system design.
          </motion.p>

          <motion.p
            className="mt-6 text-[0.8rem] text-text/40"
            variants={fadeUp}
          >
            NYC · probably at a coffee shop right now
          </motion.p>
        </motion.div>

        {/* Right — Photo placeholder */}
        <motion.div
          className="flex flex-1 items-start justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[14px] lg:max-w-[380px]">
            <Image
              src="/images/about/palak-cover.jpeg"
              alt="Palak Gupta"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
