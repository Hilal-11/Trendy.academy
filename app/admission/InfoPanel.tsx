"use client";

import { BENEFITS, HERO_STATS } from "@/public/config/admission";
import {
  FiBriefcase,
  FiAward,
  FiMonitor,
  FiZap,
  FiGlobe,
  FiShield,
  FiPhone,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────
// Map benefit icon keys → react-icons components
// ──────────────────────────────────────────────────
const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  placement: <FiBriefcase size={16} />,
  certificate: <FiAward size={16} />,
  projects: <FiMonitor size={16} />,
  flexible: <FiZap size={16} />,
  community: <FiGlobe size={16} />,
  lifetime: <FiShield size={16} />,
};

// ──────────────────────────────────────────────────
// InfoPanel — sticky right sidebar shown on desktop
// ──────────────────────────────────────────────────
export function InfoPanel() {
  return (
    <aside
      aria-label="why choose techvision institute"
      className={cn(
        "rounded-[20px] border border-blue-100 dark:border-blue-950",
        "bg-blue-50/60 dark:bg-blue-950/30 p-6",
        "lg:sticky lg:top-[72px] self-start"
      )}
    >
      {/* heading */}
      <div className="flex items-center gap-2 mb-1">
        <FiAward className="text-primary" size={18} />
        <h2 className="text-[15px] font-bold text-foreground">why choose us?</h2>
      </div>
      <p className="text-[12px] text-muted-foreground mb-5">
        join 10,000+ successful graduates
      </p>

      {/* benefits list */}
      <ul className="space-y-0 divide-y divide-blue-100 dark:divide-blue-950">
        {BENEFITS.map((b) => (
          <li key={b.title} className="flex gap-3 items-start py-3">
            <div className="w-9 h-9 rounded-[10px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              {BENEFIT_ICONS[b.icon]}
            </div>
            <div>
              <p className="text-[13px] font-600 text-foreground">{b.title}</p>
              <p className="text-[12px] text-muted-foreground leading-snug mt-0.5">
                {b.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* contact box */}
      <div className="mt-5 p-4 bg-background rounded-[14px] border border-border">
        <div className="flex items-center gap-2 mb-1.5">
          <FiPhone size={13} className="text-primary" />
          <span className="text-[13px] font-semibold text-foreground">
            need help?
          </span>
        </div>
        <p className="text-[12px] text-muted-foreground mb-2">
          speak to our admissions counsellor
        </p>
        <a
          href="tel:+919876543210"
          className="text-[15px] font-bold text-primary hover:underline"
          aria-label="call admissions at plus 91 98765 43210"
        >
          +91 98765 43210
        </a>
        <p className="text-[11px] text-muted-foreground mt-1">
          mon – sat &nbsp;·&nbsp; 9am to 6pm
        </p>
      </div>

      {/* assurance note */}
      <div className="mt-3 flex gap-2 items-start p-3 rounded-[10px] bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
        <FiShield size={14} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
        <p className="text-[12px] text-muted-foreground leading-snug">
          your application will be reviewed within 24 hours and you'll receive a
          confirmation call.
        </p>
      </div>
    </aside>
  );
}

// ──────────────────────────────────────────────────
// HeroSection
// ──────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      aria-label="admission hero"
      className={cn(
        "bg-linear-to-br from-orange-100 to-background dark:from-orange-900/50 dark:to-background",
        "border-b border-border py-12 px-5"
      )}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5",
            "bg-primary/10 border border-primary/20 text-primary text-[12px] font-semibold"
          )}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          batch 2025 – admissions now open
        </div>

        <h1 className="text-[clamp(26px,5vw,42px)] font-bold text-foreground leading-tight tracking-tight mb-4">
          Begin your tech career journey
        </h1>
        <p className="text-[15px] text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
          fill out the form below and our admissions counsellor will contact you
          within 24 hours with personalised guidance.
        </p>

        {/* stats */}
        <div className="flex justify-center gap-8 flex-wrap">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[20px] font-bold text-primary">{s.value}</div>
              <div className="text-[12px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────
// SuccessScreen — shown after successful submission
// ──────────────────────────────────────────────────
interface SuccessScreenProps {
  applicationId: string;
  course: string;
  name: string;
  email: string;
  phone: string;
  batch: string;
  onReset: () => void;
}

export function SuccessScreen({
  applicationId,
  course,
  name,
  email,
  phone,
  batch,
  onReset,
}: SuccessScreenProps) {
  const details = [
    { label: "applicant", value: name },
    { label: "email", value: email },
    { label: "phone", value: phone },
    { label: "batch", value: batch },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div
        className={cn(
          "bg-card border border-border rounded-[24px]",
          "p-10 max-w-lg w-full text-center",
          "shadow-lg"
        )}
        role="status"
        aria-live="polite"
      >
        {/* icon */}
        <div className="w-20 h-20 rounded-full bg-green-50 dark:bg-green-950/40 flex items-center justify-center mx-auto mb-6">
          <FiShield size={36} className="text-green-600 dark:text-green-400" />
        </div>

        <h2 className="text-[24px] font-bold text-foreground mb-2">
          application received!
        </h2>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
          thank you for applying. our admissions team will review your application
          and reach out within 24–48 hours.
        </p>

        {/* application id */}
        <div className="bg-primary/10 border border-primary/20 rounded-[12px] p-4 mb-6">
          <p className="text-[12px] text-muted-foreground mb-1">
            application id
          </p>
          <p className="text-[18px] font-bold text-primary tracking-wide">
            {applicationId}
          </p>
        </div>

        {/* course badge */}
        <div className="bg-muted/50 rounded-[12px] p-4 mb-6 text-left">
          <p className="text-[12px] text-muted-foreground mb-1">
            course applied for
          </p>
          <p className="text-[15px] font-semibold text-foreground capitalize">
            {course}
          </p>
        </div>

        {/* detail grid */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          {details.map(({ label, value }) => (
            <div
              key={label}
              className="bg-muted/40 rounded-[10px] p-3 border border-border"
            >
              <p className="text-[11px] text-muted-foreground mb-1">{label}</p>
              <p className="text-[13px] font-semibold text-foreground break-words">
                {value || "—"}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onReset}
          className={cn(
            "w-full py-3 rounded-[12px] bg-primary text-primary-foreground",
            "text-[14px] font-semibold transition-opacity hover:opacity-90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          )}
        >
          submit another application
        </button>
      </div>
    </main>
  );
}