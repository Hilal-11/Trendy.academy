// ──────────────────────────────────────────────────
// All constants used in the admission form
// ──────────────────────────────────────────────────

export const COURSES = [
  "basic computer fundamentals",
  "ms office and tally",
  "advanced excel",
  "data analytics",
  "web development",
  "frontend development",
  "full stack development",
  "python programming",
  "c and c++ programming",
  "data structures and algorithms",
  "java programming",
  "ui ux design",
] as const;

export const INDIAN_STATES = [
  "jammu and kashmir",
  "other"
] as const;

export const QUALIFICATIONS = [
  "10th pass",
  "12th pass",
  "diploma",
  "bachelor's degree",
  "master's degree",
  "other",
] as const;

export const BATCH_TIMINGS = [
  "morning (7am – 10am)",
  "forenoon (10am – 1pm)",
  "afternoon (1pm – 4pm)",
  "evening (4pm – 7pm)",
  "weekend batch (sat – sun)",
] as const;

export const HOW_HEARD_OPTIONS = [
  "google search",
  "social media (instagram / facebook)",
  "friend / family referral",
  "newspaper / magazine",
  "college notice board",
  "other",
] as const;

// Generate last 30 passing years (descending)
export const PASSING_YEARS: string[] = Array.from(
  { length: 30 },
  (_, i) => (new Date().getFullYear() - i).toString()
);

export const GENDER_OPTIONS = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
  { value: "other", label: "other" },
] as const;

export const LEARNING_MODE_OPTIONS = [
  { value: "offline", label: "offline" },
] as const;

export const EXPERIENCE_LEVEL_OPTIONS = [
  { value: "beginner", label: "beginner" },
  { value: "intermediate", label: "intermediate" },
  { value: "advanced", label: "advanced" },
] as const;

// ── Info panel benefit items ──────────────────────
export const BENEFITS = [
  {
    icon: "certificate",
    title: "certified programs",
    description: "government-recognised certificates.",
  },
  {
    icon: "projects",
    title: "real world projects",
    description: "work on real-world projects during your training program",
  },
  {
    icon: "community",
    title: "Network of students",
    description: "join a vibrant community of students and alumni for support, collaboration, and networking opportunities",
  },
  {
    icon: "lifetime",
    title: "lifetime support",
    description: "our support doesn't end at graduation — get lifetime career guidance and mentorship",
  },
] as const;

// ── Hero stats ────────────────────────────────────
export const HERO_STATS = [
  { value: "10,000+", label: "students trained" },
  { value: "12", label: "courses offered" },
] as const;