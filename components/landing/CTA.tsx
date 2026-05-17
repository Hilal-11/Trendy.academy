"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});




function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium cursor-pointer border-none"
      style={{
        background: "linear-gradient(135deg,#ea6c10,#f97316 55%,#fb923c)",
        boxShadow: "0 4px 18px rgba(249,115,22,0.35)",
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05) translateY(-1px)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(249,115,22,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 18px rgba(249,115,22,0.35)";
      }}
    >
      <span
        className="absolute top-0 left-0 h-full pointer-events-none"
        style={{
          width: "35%",
          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)",
        }}
      />
      {children}
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium cursor-pointer text-neutral-800 dark:text-white"
      style={{
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.background = "rgba(255,255,255,0.1)";
        b.style.borderColor = "rgba(255,255,255,0.28)";
        b.style.transform = "scale(1.03)";
      }}
      onMouseLeave={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.background = "rgba(255,255,255,0.05)";
        b.style.borderColor = "rgba(255,255,255,0.14)";
        b.style.transform = "";
      }}
    >
      {children}
    </button>
  );
}

const stats = [
  { num: "400+", label: "active learners" },
  { num: "20+", label: "expert courses" },
  { num: "80%", label: "satisfaction rate" },
];

export default function CTA() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex flex-wrap border font-sans font-medium bg-neutral-100 dark:bg-neutral-950"
      style={{minHeight: 340 }}
    >
      {/* Left content */}
      <div className="relative z-10 flex flex-col justify-center px-4 lg:px-12 py-4 lg:py-12 flex-1 w-full">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full mb-5 px-2 py-1.5 font-sans text-xs font-medium w-fit"
          style={{
            background: "rgba(251,146,60,0.12)",
            border: "1px solid rgba(251,146,60,0.28)",
            color: "#fb923c",
          }}
          {...fadeUp(0.1)}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#fb923c" }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          new courses just dropped
        </motion.div>

        <motion.h2
          className="leading-tight mb-3 text-neutral-900 dark:text-neutral-100 text-2xl lg:text-5xl font-sans font-bold "
          {...fadeUp(0.15)}
        >
          learn from the best,{" "}
          <br />
          grow{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            without limits
          </span>
        </motion.h2>

        <motion.p
          className="leading-relaxed mb-8 font-sans text-sm font-medium text-neutral-800 dark:text-neutral-100"
          style={{ maxWidth: 500 }}
          {...fadeUp(0.25)}
        >
          Trendy Institute brings you industry-led courses designed for the real world.
          From design to development — find your path and start building skills that actually matter.
        </motion.p>

        <motion.div className="flex gap-3 flex-wrap" {...fadeUp(0.35)}>
          <PrimaryButton>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            register in course
          </PrimaryButton>
          <OutlineButton>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            explore courses
          </OutlineButton>
        </motion.div>

        <motion.div className="flex gap-6 mt-7" {...fadeUp(0.45)}>
          {stats.map((s, i) => (
            <div key={i} className="flex items-stretch gap-6">
              {i > 0 && <div style={{ width: 1, background: "rgba(255,255,255,0.1)", alignSelf: "stretch" }} />}
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold" style={{ fontSize: 18, color: "#f5f5f5", lineHeight: 1.1 }}>{s.num}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right orb column */}
        
        <div className="relative mask-l-from-60% mask-r-from-60% top-90% flex justify-center items-center ">
          <h1 className='text-center font-mono text-[5rem] md:text-[10rem] whitespace-nowrap lg:text-[10rem] font-bold text-orange-400 dark:text-orange-700 flex'>TRENDY</h1>
        </div>
    </div>
  );
}