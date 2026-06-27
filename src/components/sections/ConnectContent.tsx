"use client";

import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ConnectContent() {
  return (
    <motion.div
      className="flex flex-1 flex-col items-center justify-center px-6 py-20"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="max-w-2xl text-center font-display text-[1.6rem] leading-[1.2] font-normal tracking-tight sm:text-[2rem] lg:text-[2.5rem]"
        variants={fadeUp}
      >
        Good ideas deserve great{" "}
        <em className="font-serif text-accent italic">execution.</em>
        <br />
        Let&apos;s build,{" "}
        <em className="font-serif text-accent italic">together.</em>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-[480px] text-center text-[0.9rem] leading-[1.6] text-text/55"
        variants={fadeUp}
      >
        Some of the best opportunities begin as conversations. Whether
        you&apos;re building, hiring, or simply exploring an idea, I&apos;d love
        to hear what you&apos;re working on.
      </motion.p>

      {/* Email button */}
      <motion.a
        href="mailto:pg2820@nyu.edu"
        className="mt-8 rounded-lg bg-accent px-7 py-2.5 text-[0.9rem] font-semibold text-[#0A0A0A] transition-opacity hover:opacity-90"
        variants={fadeUp}
      >
        pg2820@nyu.edu
      </motion.a>

      {/* Social links */}
      <motion.div
        className="mt-8 flex items-center gap-6"
        variants={fadeUp}
      >
        <a
          href="https://github.com/Plk-g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text/50 transition-colors hover:text-accent"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/palakg008/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text/50 transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a
          href="https://instagram.com/apaneerproblem"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text/50 transition-colors hover:text-accent"
          aria-label="Instagram"
        >
          {/* Instagram gradient icon */}
          <div
            className="flex h-5 w-5 items-center justify-center rounded-md"
            style={{
              background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <div className="h-2.5 w-2.5 rounded-[3px] border border-white/80" />
          </div>
        </a>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="mt-16 text-center text-[0.7rem] text-text/20"
        variants={fadeUp}
      >
        Built with Next.js, GSAP, and questionable amounts of coffee
      </motion.p>
    </motion.div>
  );
}
