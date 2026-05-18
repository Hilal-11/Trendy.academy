"use client";

import {
  GraduationCap, Users, Trophy, Award,
  Target, Cpu, Shield, Globe, Heart, Layers,
  Quote, ArrowRight, Zap, CheckCircle2,
} from "lucide-react";
import Link from "next/link"

/* ─── DATA ─────────────────────────────────────────────── */

const stats = [
  { n: "2,500+", label: "Students Trained",    icon: Users         },
  { n: "15+",    label: "Years of Excellence", icon: Award         },
  { n: "98%",    label: "Placement Rate",      icon: Trophy        },
  { n: "50+",    label: "Expert Faculty",      icon: GraduationCap },
];

const values = [
  { icon: Target, title: "Excellence",      body: "Highest standards in technical education — theory and practice in equal measure."                       },
  { icon: Cpu,    title: "Innovation",       body: "A curriculum that evolves with AI, cloud computing, cybersecurity, and full-stack development."         },
  { icon: Shield, title: "Integrity",        body: "Student-first policies, transparent admissions, and honest, grounded career guidance."                  },
  { icon: Globe,  title: "Industry Connect", body: "Deep partnerships with leading tech firms for internships, live projects, and guest lectures."          },
  { icon: Heart,  title: "Mentorship",       body: "Every student gets a dedicated mentor to guide them through their full learning journey."               },
  { icon: Layers, title: "Practical Focus",  body: "Hands-on labs, hackathons, and real-world projects — learning that sticks beyond the classroom."        },
];

const faculty = [
  { name: "Dr. Arjun Sharma", role: "Director & Founder",       tag: "20+ yrs · IT Education"    },
  { name: "Ms. Priya Nair",   role: "Head of Academics",         tag: "Data Science & AI Expert"  },
  { name: "Mr. Rahul Verma",  role: "Lead – Web Development",    tag: "Ex-Google Engineer"        },
  { name: "Ms. Sana Malik",   role: "Placement Director",        tag: "15+ yrs · HR & Talent"     },
];

const milestones = [
  { year: "2009", title: "Founded",         body: "Started with 3 classrooms and a vision to transform IT education in the region." },
  { year: "2013", title: "500 Alumni",       body: "Graduates began landing roles in top MNCs across India and abroad."              },
  { year: "2017", title: "New Campus",       body: "Expanded with state-of-the-art labs, a library, and an innovation hub."         },
  { year: "2021", title: "Hybrid Learning",  body: "Online programs launched with a fully flexible hybrid delivery model."           },
  { year: "2024", title: "AI & Cloud Hub",   body: "Dedicated centre for Artificial Intelligence and Cloud Computing launched."      },
];

const highlights = [
  "ISO-certified curriculum reviewed annually",
  "Dedicated placement cell with 200+ hiring partners",
  "24/7 accessible online learning portal",
  "Industry-led workshops every semester",
];

const galleryLabels = ["Campus", "Lab Session", "Graduation", "Hackathon", "Seminar"];

/* ─── IMAGE PLACEHOLDER ─────────────────────────────────── */

function Img({
  className = "",
  label = "Add Image",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative bg-neutral-100 dark:bg-neutral-950 border border-dashed border-orange-700
        flex flex-col items-center justify-center gap-2 overflow-hidden group ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-950 group-hover:bg-neutral-300 transition flex items-center justify-center">
        <svg
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#a3a3a3" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <span className="text-xs text-neutral-400">{label}</span>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pt-8 lg:pt-20 pb-14">
        <div className="container mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-1.5 text-sm text-orange-700 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Est. 2009 · Srinagar, Jammu & Kashmir
            </span>

            <h1 className="sora text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight mb-5">
              Shaping the Next Generation of{" "}
              <span className="text-[#E8480A]">IT Professionals</span>
            </h1>

            <p className="text-neutral-500 text-lg leading-relaxed mb-8 max-w-lg">
              Kashmir's premier technology institute — bridging classroom learning
              and industry reality through cutting-edge programs, expert faculty,
              and unmatched placement support.
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#E8480A] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition"
              >
                Explore Courses <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-neutral-300 px-6 py-3 rounded-full font-medium text-sm hover:border-neutral-400 transition text-black"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right — fixed height on all screens */}
          <div className="relative">
            <Img className="h-64 sm:h-[380px] lg:h-[440px] w-full rounded-2xl" label="Institute / Campus Photo" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 border border-neutral-100">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0">
                <Trophy size={16} />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm leading-tight text-neutral-600">Top Rated Institute</div>
                <div className="text-xs text-neutral-400">J&K — 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ n, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-neutral-100 dark:bg-neutral-950 rounded-2xl p-5 sm:p-6 flex flex-col items-start gap-3 border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <Icon size={20} className="text-orange-500" />
              </div>
              <div>
                <div className="sora text-3xl sm:text-4xl font-bold text-[#0D1120] dark:text-neutral-300">{n}</div>
                <div className="text-sm text-neutral-500 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENTO GRID ───────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto">

          {/* Mobile: stacked, all images have explicit heights */}
          <div className="flex flex-col gap-4 lg:hidden">

            {/* Main image — tall on mobile */}
            <Img className="h-56 sm:h-72 w-full rounded-2xl" label="Campus / Students Photo" />

            {/* Mission + Vision side by side on sm, stacked on xs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0D1120] rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Target size={20} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="sora text-white font-semibold text-lg mb-1">Our Mission</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    World-class IT education that is accessible, practical, and industry-aligned —
                    empowering every student to build a meaningful tech career.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-100 dark:border-neutral-800 min-h-[200px]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Zap size={20} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="sora font-semibold text-lg mb-1 dark:text-white">Our Vision</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    To become the most trusted technology education institution in J&K,
                    driving regional digital transformation through talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote + small lab image side by side on sm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#E8480A] rounded-2xl p-6 flex flex-col justify-between min-h-[180px]">
                <Quote size={26} className="text-white/40" />
                <div>
                  <p className="text-white text-sm leading-relaxed italic font-medium">
                    "Technology education isn't just about code — it's about building
                    the confidence to solve real problems."
                  </p>
                  <p className="text-white/60 text-xs mt-3">— Director, AIIT</p>
                </div>
              </div>
              <Img className="h-44 sm:h-full w-full rounded-2xl" label="Lab / Classroom" />
            </div>
          </div>

          {/* Desktop: true bento 4-col */}
          <div
            className="hidden lg:grid gap-4"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "260px 260px",
            }}
          >
            <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
              <Img className="h-full w-full rounded-2xl" label="Campus / Students Photo" />
            </div>

            <div
              className="bg-[#0D1120] rounded-2xl p-7 flex flex-col justify-between"
              style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Target size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="sora text-white font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  World-class IT education that is accessible, practical, and industry-aligned —
                  empowering every student to build a meaningful tech career.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-7 flex flex-col justify-between border border-neutral-100"
              style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Zap size={20} className="text-blue-500" />
              </div>
              <div>
                <h3 className="sora font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  To become the most trusted technology education institution in J&K,
                  driving regional digital transformation through talent.
                </p>
              </div>
            </div>

            <div
              className="bg-[#E8480A] rounded-2xl p-7 flex flex-col justify-between"
              style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
            >
              <Quote size={28} className="text-white/40" />
              <div>
                <p className="text-white text-sm leading-relaxed italic font-medium">
                  "Technology education isn't just about code — it's about building
                  the confidence to solve real problems."
                </p>
                <p className="text-white/60 text-xs mt-3">— Director, AIIT</p>
              </div>
            </div>

            <div style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
              <Img className="h-full w-full rounded-2xl" label="Lab / Classroom" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto bg-neutral-100 dark:bg-neutral-900 border dark:border-neutral-800 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-10">
            <div>
              <div className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</div>
              <h2 className="sora text-3xl sm:text-4xl font-bold text-black dark:text-white">
                More Than an Institute.<br />A Launch Pad.
              </h2>
            </div>
            <a
              href="/courses"
              className="self-end hidden md:inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
            >
              See Courses <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Job-Ready Programs",  body: "Courses designed with hiring managers — not just textbooks.", icon: Cpu    },
              { title: "Expert Instructors",  body: "Faculty with real industry background, not just degrees.",   icon: Users  },
              { title: "Career Support",      body: "Resume reviews, mock interviews, and placement connections.", icon: Trophy },
            ].map(({ title, body, icon: Icon }) => (
              <div key={title} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-orange-500/40 transition">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-400" />
                </div>
                <h3 className="sora text-orange-400 font-semibold text-base mb-1.5">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">What Drives Us</div>
            <h2 className="sora text-3xl sm:text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-neutral-950 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800
                           hover:border-orange-500 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-neutral-50 dark:bg-neutral-900 group-hover:bg-orange-50 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-neutral-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="sora font-semibold text-base mb-2 dark:text-white">{title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">The People Behind It</div>
              <h2 className="sora text-3xl sm:text-4xl font-bold">Our Leadership</h2>
            </div>
            <a
              href="/faculty"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-orange-500 transition"
            >
              View All Faculty <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {faculty.map(({ name, role, tag }) => (
              <div key={name} className="bg-neutral-200 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Faculty image — responsive height */}
                <Img
                  className="h-36 sm:h-44 lg:h-52 w-full rounded-none border-0 border-b border-dashed border-neutral-200 dark:border-neutral-700"
                  label="Faculty Photo"
                />
                <div className="p-3 sm:p-5">
                  <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-2 sm:px-2.5 py-1 rounded-full mb-2 sm:mb-3">
                    {tag}
                  </span>
                  <h3 className="sora font-semibold text-xs sm:text-[15px]">{name}</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES TIMELINE ──────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</div>
            <h2 className="sora text-3xl sm:text-4xl font-bold">Milestones</h2>
          </div>

          {/* Desktop horizontal */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-[18px] h-px bg-neutral-200 dark:bg-neutral-800 z-0" />
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {milestones.map(({ year, title, body }, i) => {
                const isLast = i === milestones.length - 1;
                return (
                  <div key={year} className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-4 border-2 z-10
                        ${isLast
                          ? "bg-[#E8480A] border-[#E8480A] text-white"
                          : "bg-[#F4F3EF] dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-500"
                        }`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`w-full rounded-2xl p-4 text-center
                        ${isLast
                          ? "bg-[#E8480A] text-white"
                          : "bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
                        }`}
                    >
                      <div className={`sora font-bold text-xl mb-0.5 ${isLast ? "text-white" : "text-[#0D1120] dark:text-white"}`}>
                        {year}
                      </div>
                      <div className={`font-semibold text-sm mb-1 ${isLast ? "text-white/90" : "dark:text-neutral-300"}`}>{title}</div>
                      <div className={`text-xs leading-relaxed ${isLast ? "text-white/75" : "text-neutral-400"}`}>{body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-0">
            {milestones.map(({ year, title, body }, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <div key={year} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                        ${isLast ? "bg-[#E8480A] text-white" : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"}`}
                    >
                      {i + 1}
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-700 my-1 min-h-[32px]" />}
                  </div>
                  <div className={`rounded-2xl p-4 mb-4 flex-1 ${isLast ? "bg-[#E8480A]" : "bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"}`}>
                    <div className={`sora font-bold text-lg ${isLast ? "text-white" : "text-[#0D1120] dark:text-white"}`}>{year}</div>
                    <div className={`font-semibold text-sm mb-1 ${isLast ? "text-white/90" : "dark:text-neutral-300"}`}>{title}</div>
                    <div className={`text-xs leading-relaxed ${isLast ? "text-white/75" : "text-neutral-400"}`}>{body}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-14">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-6">
            <h2 className="sora text-2xl font-bold">Life at the Institute</h2>
            <a href="/gallery" className="text-sm font-medium hover:text-orange-500 transition flex items-center gap-1">
              Full Gallery <ArrowRight size={13} />
            </a>
          </div>

          {/* 2 cols on mobile, 3 on sm, 5 on lg — all with explicit heights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {galleryLabels.map((label) => (
              <Img key={label} className="h-28 sm:h-36 lg:h-44 w-full rounded-xl" label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-20 pb-20">
        <div className="container mx-auto bg-[#0D1120] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="sora text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
              Ready to Begin Your IT Journey?
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Join thousands of students who have transformed their careers through our programs.
              Admissions for the upcoming batch are now open.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="/admissions"
              className="bg-[#E8480A] text-white px-7 py-3.5 rounded-full font-medium text-sm text-center whitespace-nowrap hover:opacity-90 transition"
            >
              Register Now
            </a>
            <a
              href="/courses"
              className="border border-neutral-600 text-white px-7 py-3.5 rounded-full font-medium text-sm text-center whitespace-nowrap hover:border-white transition"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}