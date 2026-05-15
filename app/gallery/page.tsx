"use client";

import { useState, useEffect, useRef } from "react";
import { Camera, ArrowRight, Filter } from "lucide-react";

/* ─── STORY CHAPTERS ────────────────────────────────────── */

const chapters = [
  {
    n: "01",
    year: "2009",
    tag: "The Beginning",
    title: "A Room, a Dream, and Three Computers",
    body: "In the summer of 2009, our founder rented a small room in Srinagar's old city with three second-hand computers and an unshakeable belief: that every student in Kashmir deserved world-class technology education. The first batch had 12 students. All 12 got jobs within the year.",
    quote: "We didn't start with resources. We started with resolve.",
    caption: "First batch · Old City Campus · Summer 2009",
    imgLabel: "First Classroom / Founding Photo",
    reverse: false,
  },
  {
    n: "02",
    year: "2013",
    tag: "Growing Roots",
    title: "When Students Became a Community",
    body: "By 2013, word had spread. Students were travelling from Baramulla, Anantnag, and Jammu to enroll. The institute had outgrown its first home — twice. Our placement record caught national attention, and for the first time, MNCs came to us. The 500th alumnus crossed the stage that winter.",
    quote: "Our alumni didn't just get jobs — they built careers.",
    caption: "500 Alumni Milestone Celebration · December 2013",
    imgLabel: "500 Alumni Milestone Event",
    reverse: true,
  },
  {
    n: "03",
    year: "2017",
    tag: "A New Home",
    title: "The Campus That Students Built",
    body: "The new campus didn't just add square footage — it changed the energy entirely. Dedicated labs for networking, web development, and design gave students a space that matched their ambitions. The innovation hub became the institute's heartbeat: a place for late-night projects, weekend hackathons, and ideas too big for classrooms.",
    quote: "A space designed not for teaching, but for thinking.",
    caption: "New Campus Inauguration · March 2017",
    imgLabel: "New Campus Building / Labs",
    reverse: false,
  },
  {
    n: "04",
    year: "2020",
    tag: "Student Life",
    title: "Hackathons, Late Nights, and Breakthroughs",
    body: "Some of our most important moments happened outside of scheduled classes. The annual hackathon — 48 hours, no sleep, no limits — has produced three startups, two patents, and countless friendships. Student clubs in cybersecurity, data science, and UI/UX design run entirely on student initiative. Faculty are guides here, not gatekeepers.",
    quote: "The best learning happened when no one was watching the clock.",
    caption: "Annual Hackathon 2020 · 48 Hours of Building",
    imgLabel: "Hackathon / Student Event Photo",
    reverse: true,
  },
  {
    n: "05",
    year: "2022",
    tag: "Placements",
    title: "From Srinagar to the World",
    body: "Today our alumni work at Google, Infosys, TCS, Wipro, and dozens of homegrown startups across India and abroad. The placement cell doesn't just connect students with jobs — it prepares them for careers. Resume workshops, mock interviews, and a live job board give every graduate a running start the day they leave.",
    quote: "We measure success by where our students are five years after they leave.",
    caption: "Placement Drive · Infosys Partnership · 2022",
    imgLabel: "Placement Ceremony / MNC Campus Visit",
    reverse: false,
  },
  {
    n: "06",
    year: "2024",
    tag: "Today",
    title: "The Story Is Still Being Written",
    body: "The AI and Cloud Computing centre, launched in 2024, is our boldest chapter yet. As the industry shifts beneath everyone's feet, our commitment stays fixed: students will not just adapt to the future — they will shape it. With 2,500 alumni and counting, this is not the end of our story. It is still the beginning.",
    quote: "The best chapter is always the one being written right now.",
    caption: "AI & Cloud Centre Inauguration · January 2024",
    imgLabel: "AI Lab / Cloud Computing Centre",
    reverse: true,
  },
];

/* ─── GRID GALLERY ──────────────────────────────────────── */

const gridItems = [
  { label: "Orientation Day",   cat: "Events"    },
  { label: "Web Dev Lab",       cat: "Campus"    },
  { label: "Graduation 2023",   cat: "Students"  },
  { label: "Faculty Meet",      cat: "Faculty"   },
  { label: "Hackathon Night",   cat: "Events"    },
  { label: "Placement Drive",   cat: "Students"  },
  { label: "Library Corner",    cat: "Campus"    },
  { label: "Networking Lab",    cat: "Campus"    },
  { label: "Guest Lecture",     cat: "Events"    },
  { label: "Student Projects",  cat: "Students"  },
  { label: "Director's Talk",   cat: "Faculty"   },
  { label: "Tech Seminar",      cat: "Events"    },
  { label: "Cloud Workshop",    cat: "Campus"    },
  { label: "Alumni Reunion",    cat: "Students"  },
  { label: "Design Sprint",     cat: "Events"    },
  { label: "Department Head",   cat: "Faculty"   },
];

const FILTERS = ["All", "Campus", "Students", "Events", "Faculty"];

/* ─── SCROLL REVEAL HOOK ────────────────────────────────── */

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── PHOTO FRAME ───────────────────────────────────────── */

function PhotoFrame({
  label,
  caption,
  tilt = -1,
  tall = false,
}: {
  label: string;
  caption: string;
  tilt?: number;
  tall?: boolean;
}) {
  return (
    <figure
      className="relative w-full group"
      style={{ transform: `rotate(${tilt}deg)`, transition: "transform 0.4s ease" }}
    >
      {/* outer card — the "print" border */}
      <div
        className={`bg-white p-3 sm:p-4 shadow-2xl ${
          tall ? "pb-12 sm:pb-14" : "pb-10 sm:pb-12"
        }`}
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.08)" }}
      >
        {/* image area */}
        <div
          className={`w-full bg-neutral-100 border-2 border-dashed border-neutral-300
            flex flex-col items-center justify-center gap-3
            ${tall ? "h-[320px] sm:h-[400px] lg:h-[460px]" : "h-[260px] sm:h-[320px] lg:h-[380px]"}`}
        >
          <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
            <Camera size={20} className="text-neutral-400" />
          </div>
          <span className="text-neutral-400 text-xs font-medium text-center px-4">{label}</span>
        </div>
      </div>
      {/* caption strip */}
      <figcaption className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center px-4">
        <span className="text-neutral-400 text-[11px] italic tracking-wide leading-snug">{caption}</span>
      </figcaption>
      {/* hover lift */}
      <style>{`
        figure:hover { transform: rotate(0deg) translateY(-6px) !important; }
      `}</style>
    </figure>
  );
}

/* ─── CHAPTER SECTION ───────────────────────────────────── */

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const { ref, visible } = useReveal();
  const { n, year, tag, title, body, quote, caption, imgLabel, reverse } = chapter;

  const contentEl = (
    <div className="flex flex-col justify-center py-8 lg:py-16">
      {/* chapter label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[11px] font-bold text-[#E8480A] tracking-widest uppercase">
          Chapter {n} · {year}
        </span>
        <span className="h-px flex-1 bg-neutral-200 max-w-[48px]" />
        <span className="text-[11px] text-neutral-400 tracking-widest uppercase">{tag}</span>
      </div>

      {/* big chapter number — watermark */}
      <div className="relative mb-2">
        <span
          className="sora absolute -top-6 -left-2 text-[120px] font-extrabold leading-none select-none pointer-events-none"
          style={{ color: "rgba(0,0,0,0.04)", zIndex: 0 }}
        >
          {n}
        </span>
        <h2
          className="sora relative text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight text-[#0A0F1A]"
          style={{ zIndex: 1 }}
        >
          {title}
        </h2>
      </div>

      <p className="text-neutral-500 leading-relaxed mt-5 mb-7 text-[15px] max-w-[46ch]">
        {body}
      </p>

      {/* pull quote */}
      <blockquote className="border-l-2 border-[#E8480A] pl-5 mb-8">
        <p className="sora text-[#0A0F1A] font-medium italic text-base leading-snug">
          "{quote}"
        </p>
      </blockquote>

      <a
        href="/about"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8480A] hover:gap-3 transition-all"
      >
        Read more about this era <ArrowRight size={14} />
      </a>
    </div>
  );

  const imageEl = (
    <div className="flex items-center justify-center py-8 lg:py-16">
      <div className="w-full max-w-[440px]">
        <PhotoFrame
          label={imgLabel}
          caption={caption}
          tilt={index % 2 === 0 ? -1.2 : 1.2}
          tall
        />
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {reverse
          ? (<>{imageEl}{contentEl}</>)
          : (<>{contentEl}{imageEl}</>)
        }
      </div>
    </div>
  );
}

/* ─── GRID PLACEHOLDER ───────────────────────────────────── */

function GridThumb({ label }: { label: string }) {
  return (
    <div className="group relative overflow-hidden bg-neutral-100 border border-dashed border-neutral-300 rounded-xl aspect-square flex flex-col items-center justify-center gap-2 hover:border-[#E8480A]/50 transition-colors cursor-pointer">
      <Camera size={18} className="text-neutral-300 group-hover:text-[#E8480A]/60 transition-colors" />
      <span className="text-neutral-400 text-[11px] font-medium text-center px-3 leading-snug">{label}</span>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? gridItems
      : gridItems.filter((g) => g.cat === activeFilter);

  return (
    <main className="min-h-screen px-6">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        <div className="container mx-auto">

          {/* Top label row */}
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-400 font-medium">
              <Camera size={13} /> Institute Gallery
            </span>
            <span className="h-px flex-1 bg-neutral-200" />
            <span className="text-[11px] text-neutral-400 tracking-widest uppercase">2009 – 2024</span>
          </div>

          {/* Headline */}
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-6 mb-10">
            <div>
              <h1 className="sora text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Our Story,<br />
                <em className="text-[#E8480A] not-italic">in Pictures</em>
              </h1>
              <p className="text-neutral-500 text-lg mt-5 max-w-xl leading-relaxed">
                Fifteen years of classrooms, breakthroughs, and careers — told through the
                moments that defined us. Scroll through our chapters.
              </p>
            </div>
            <a
              href="#grid"
              className="self-end inline-flex items-center gap-2 bg-[#0A0F1A] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#1a2035] transition shrink-0 mb-1"
            >
              Browse All Photos <ArrowRight size={14} />
            </a>
          </div>

          {/* Hero image — full width */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] w-full rounded-3xl overflow-hidden bg-neutral-100 border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center">
              <Camera size={28} className="text-neutral-400" />
            </div>
            <span className="text-neutral-400 font-medium">Panoramic Campus / Hero Image</span>
            <span className="text-neutral-300 text-sm">Recommended: 1600 × 700px</span>
            {/* chapter count overlay */}
            <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-4 shadow-md">
              <div className="text-center">
                <div className="sora text-2xl font-bold text-[#0A0F1A]">6</div>
                <div className="text-xs text-neutral-400">Chapters</div>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div className="text-center">
                <div className="sora text-2xl font-bold text-[#0A0F1A]">15+</div>
                <div className="text-xs text-neutral-400">Years</div>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div className="text-center">
                <div className="sora text-2xl font-bold text-[#E8480A]">∞</div>
                <div className="text-xs text-neutral-400">Memories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY TIMELINE LINE ───────────────────────────── */}
      <div className="relative container mx-auto ">
        {/* vertical rule — desktop only */}
        <div
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-neutral-200"
          style={{ left: "calc(50% - 0.5px)" }}
          aria-hidden
        />
      </div>

      {/* ── CHAPTERS ──────────────────────────────────────── */}
      <section className="pt-20">
        <div className="container mx-auto space-y-0">
          {chapters.map((ch, i) => (
            <div key={ch.n}>
              <Chapter chapter={ch} index={i} />
              {i < chapters.length - 1 && (
                <div className="flex items-center gap-6 py-4 lg:py-6">
                  <span className="h-px flex-1 bg-neutral-200" />
                  <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase">
                    {chapters[i + 1].year}
                  </span>
                  <span className="h-px flex-1 bg-neutral-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL GRID ──────────────────────────────────────── */}
      <section id="grid" className=" pt-24 pb-20">
        <div className="container mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[#E8480A] text-[11px] font-bold tracking-widest uppercase mb-2">
                Complete Collection
              </div>
              <h2 className="sora text-3xl sm:text-4xl font-bold">Every Moment,<br />Every Memory</h2>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter size={13} className="text-neutral-400" />
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all ${
                    activeFilter === f
                      ? "bg-[#0A0F1A] text-white border-[#0A0F1A]"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className="transition-all duration-300"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <GridThumb label={item.label} />
                <p className="text-xs text-neutral-400 mt-1.5 px-1">{item.label}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400">
              No photos in this category yet.
            </div>
          )}

          {/* Upload CTA */}
          <div className="mt-12 bg-white border border-neutral-100 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="sora font-bold text-xl mb-1">Have photos to share?</h3>
              <p className="text-neutral-400 text-sm max-w-md">
                Alumni and faculty can submit photos to be featured in our gallery.
                Help us complete the story.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8480A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition shrink-0"
            >
              Submit Photos <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}