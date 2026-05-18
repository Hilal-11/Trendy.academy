"use client";
import React from 'react'
import Badge from './Badge'
import { cn } from '@/lib/utils'
import { SiFoodpanda } from 'react-icons/si'
import Link from "next/link"
import { PiStudentFill } from "react-icons/pi";
import { FAQ } from './FAQ';
import CTA from './CTA';
import Image from 'next/image';
import ContactForm from "./ContactForm"

const highlights = [
  "Recognized Certificate from Politechnique University",
  "Practical Training with Real Projects",
  "Experienced Faculty and Full Guidance Support",
  "Hands-On Learning with Industry-Level Technologies",
  "Beginner-Friendly Courses with Step-by-Step Mentorship",

];

import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss,
  SiGit,
  SiNodedotjs,
  SiTypescript,
  SiMysql,
  SiFigma,
} from 'react-icons/si'
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { LiaChartBarSolid } from "react-icons/lia";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa'


const techStack = [
  { Icon: SiHtml5,          name: "html5",      color: "#E34F26" },
  { Icon: SiCss,           name: "css3",       color: "#1572B6" },
  { Icon: SiJavascript,     name: "javascript", color: "#F7DF1E" },
  { Icon: SiReact,          name: "react",      color: "#61DAFB" },
  { Icon: SiTypescript,     name: "typescript", color: "#3178C6" },
  { Icon: SiNodedotjs,      name: "node.js",    color: "#6CC24A" },
  { Icon: SiPython,         name: "python",     color: "#3776AB" },
  { Icon: PiMicrosoftExcelLogoBold, name: "excel",      color: "#217346" },
  { Icon: LiaChartBarSolid,        name: "power bi",   color: "#F2C811" },
  { Icon: SiGit,            name: "git",        color: "#F05032" },
  { Icon: SiMysql,          name: "mysql",      color: "#4479A1" },
  { Icon: SiFigma,          name: "figma",      color: "#F24E1E" },
]

const socialLinks = [
  { Icon: FaInstagram,  href: "#", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn"  },
  { Icon: FaFacebook,   href: "#", label: "Facebook"  },
  { Icon: FaWhatsapp,   href: "#", label: "WhatsApp"  },
]

const floatingBadges = [
  { Icon: SiJavascript,     name: "JavaScript", color: "#F7DF1E", pos: { top: 18, left: 14 },     delay: "0s"   },
  { Icon: SiPython,         name: "Python",     color: "#3776AB", pos: { top: 18, right: 14 },    delay: "0.7s" },
  { Icon: SiReact,          name: "React",      color: "#61DAFB", pos: { top: "40%", left: 10 },  delay: "1.4s" },
  { Icon: PiMicrosoftExcelLogoBold, name: "Excel",      color: "#217346", pos: { top: "40%", right: 10 }, delay: "2.1s" },
  { Icon: SiNodedotjs,      name: "Node.js",    color: "#6CC24A", pos: { bottom: 18, left: 14 },  delay: "2.8s" },
  { Icon: LiaChartBarSolid,        name: "Power BI",   color: "#F2C811", pos: { bottom: 18, right: 14 }, delay: "3.5s" },
]

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        .badge-float { animation: floatBadge 3.8s ease-in-out infinite; }
      `}</style>

      <div className="w-full h-auto relative container mx-auto">
        <div className="mx-auto grid lg:grid-cols-[58%_42%] gap-6 lg:gap-12 grid-cols-1 pt-10 lg:pt-20 relative">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col ">
            <Badge aboutBadge="introducing trendy modern tech courses in ai era" />

            <div className="pt-5 lg:pr-8">
              <h1 className="text-3xl lg:text-[3.5rem] font-sans font-bold leading-[1.06] mt-3 lg:mt-5 tracking-tight text-neutral-900 dark:text-white">
                trendy empowers students with modern
                <span className="text-[#E8480A]"> skills for real tech careers</span>
              </h1>
              <p className="text-sm lg:text-base font-sans font-medium text-neutral-500 dark:text-neutral-400 mt-5 max-w-xl leading-relaxed">
                computer fundamentals, programming, web development, data analytics,
                and practical digital skills — hands-on training designed for students,
                beginners, and future tech professionals.
              </p>
            </div>

            <ul className="space-y-2.5 pt-5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs lg:text-sm font-sans font-medium text-neutral-600 dark:text-neutral-400">
                  <CheckCircle2 size={14} className="text-orange-500 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-start items-center gap-3 lg:gap-4 pt-6">
              {/* PRIMARY — Explore Courses */}
              <Link
                href="/courses"
                className={cn(
                  "group relative flex justify-between items-center gap-2 px-3",
                  "w-[190px] lg:w-[220px] h-[40px] lg:h-[46px]",
                  "rounded-full overflow-hidden",
                  "bg-[#E8480A] text-white text-xs lg:text-sm font-sans font-semibold",
                  "shadow-[0_2px_8px_rgba(232,72,10,0.35)]",
                  "hover:shadow-[0_4px_18px_rgba(232,72,10,0.45)] hover:brightness-105",
                  "hover:-translate-y-0.5 transition-all duration-200"
                )}
              >
                <span className={cn(
                  "h-8 w-8 rounded-full flex justify-center items-center shrink-0",
                  "bg-white/20 transition-all duration-300 ease-in-out",
                  "group-hover:translate-x-[168px] group-hover:rotate-[360deg]"
                )}>
                  <PiStudentFill className="w-4 h-4 text-white" />
                </span>
                <span className="flex-1 text-center transition-all duration-300 ease-in-out group-hover:-translate-x-16">
                  explore courses
                </span>
              </Link>

              {/* SECONDARY — Chat with Trendy */}
              <Link
                href="/about"
                className={cn(
                  "group relative flex justify-between items-center gap-2 px-3",
                  "w-[190px] lg:w-[220px] h-[40px] lg:h-[46px]",
                  "rounded-full overflow-hidden",
                  "bg-neutral-900 dark:bg-neutral-800 text-white text-xs lg:text-sm font-sans font-semibold",
                  "border border-white/[0.07]",
                  "shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
                  "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
                  "hover:-translate-y-0.5 transition-all duration-200"
                )}
              >
                <span className="flex-1 text-center transition-all duration-300 ease-in-out pl-2 group-hover:translate-x-14">
                  chat with trendy
                </span>
                <span className={cn(
                  "h-8 w-8 rounded-full flex justify-center items-center shrink-0",
                  "bg-[#E8480A]/15 border border-[#E8480A]/30",
                  "transition-all duration-300 ease-in-out",
                  "group-hover:-translate-x-[168px] group-hover:rotate-[-360deg]"
                )}>
                  <SiFoodpanda className="w-3.5 h-3.5 text-[#E8480A]" />
                </span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="w-full flex flex-col gap-4 lg:pt-10">

            {/* Brand header + social icons */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-sans font-semibold tracking-widest text-[#E8480A]">
                  trendy.academy
                </p>
                <p className="text-sm font-sans font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">
                  learn · build · launch
                </p>
              </div>

              <div className="flex items-center gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="
                    border dark:border-neutral-800 group relative flex items-center justify-center
                    w-8 h-8 rounded-lg
                    bg-white dark:bg-neutral-950
                    border-neutral-300 dark:hover:border-neutral-600
                    hover:-translate-y-0.5
                    active:translate-y-0 active:shadow-[0_1px_3px_rgba(0,0,0,0.06)]
                    active:scale-95
                    transition-all duration-200 ease-out
                  "
                >
                  {/* ripple ring on hover */}
                  <span className="
                    absolute inset-0 rounded-lg
                    ring-0 ring-orange-200 dark:ring-orange-700
                    group-hover:ring-4 group-hover:ring-orange-100 dark:group-hover:ring-orange-800/80
                    transition-all duration-300
                  " />

                  <Icon className="
                    relative z-10
                    w-3.5 h-3.5
                    text-neutral-700 dark:text-neutral-400
                    group-hover:text-neutral-900 dark:group-hover:text-neutral-100
                    group-hover:scale-110
                    transition-all duration-200
                  " />
                </Link>
              ))}
              </div>


            </div>

            {/* ── ILLUSTRATION ── */}
            <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden min-h-[280px] lg:min-h-[340px] flex items-center justify-center">


              {/* Subtle orange glow behind monitor */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-[#E8480A]/5 dark:bg-[#E8480A]/10 blur-3xl" />
              </div>

              {/* Monitor SVG illustration */}
              <div className="relative z-10">
                <svg
                  viewBox="0 0 340 230"
                  className="w-[210px] lg:w-[255px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer frame */}
                  <rect
                    x="6" y="6" width="328" height="197" rx="14"
                    className="fill-white dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-700"
                    strokeWidth="1.5"
                  />
                  {/* Screen surface */}
                  <rect x="20" y="20" width="300" height="169" rx="8" className="fill-neutral-50 dark:fill-neutral-950" />

                  {/* Browser chrome bar */}
                  <rect x="20" y="20" width="300" height="24" rx="8" className="fill-neutral-100 dark:fill-neutral-800" />
                  {/* Prevent double-round on bottom of bar */}
                  <rect x="20" y="36" width="300" height="8" className="fill-neutral-100 dark:fill-neutral-800" />

                  {/* Traffic-light dots */}
                  <circle cx="34" cy="32" r="4" fill="#FF5F57" />
                  <circle cx="48" cy="32" r="4" fill="#FEBC2E" />
                  <circle cx="62" cy="32" r="4" fill="#28C840" />

                  {/* Address bar */}
                  <rect x="78" y="26" width="155" height="12" rx="6" className="fill-neutral-200 dark:fill-neutral-700" />

                  {/* ── Code lines (syntax-highlighted style) ── */}
                  {/* row 1 */}
                  <rect x="34"  y="54"  width="55"  height="5" rx="2.5" fill="#E8480A" opacity="0.85" />
                  <rect x="97"  y="54"  width="40"  height="5" rx="2.5" fill="#61DAFB" opacity="0.75" />
                  <rect x="145" y="54"  width="85"  height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.5" />
                  {/* row 2 */}
                  <rect x="48"  y="67"  width="28"  height="5" rx="2.5" fill="#F7DF1E" opacity="0.85" />
                  <rect x="84"  y="67"  width="95"  height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.45" />
                  <rect x="187" y="67"  width="55"  height="5" rx="2.5" fill="#3776AB" opacity="0.7" />
                  {/* row 3 */}
                  <rect x="34"  y="80"  width="18"  height="5" rx="2.5" fill="#6CC24A" opacity="0.85" />
                  <rect x="60"  y="80"  width="115" height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.4" />
                  <rect x="183" y="80"  width="58"  height="5" rx="2.5" fill="#E8480A" opacity="0.5" />
                  {/* row 4 */}
                  <rect x="48"  y="93"  width="145" height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  {/* row 5 */}
                  <rect x="34"  y="106" width="70"  height="5" rx="2.5" fill="#3776AB" opacity="0.7" />
                  <rect x="112" y="106" width="50"  height="5" rx="2.5" fill="#F7DF1E" opacity="0.7" />
                  <rect x="170" y="106" width="75"  height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  {/* row 6 */}
                  <rect x="48"  y="119" width="110" height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  <rect x="166" y="119" width="78"  height="5" rx="2.5" fill="#E8480A" opacity="0.5" />
                  {/* row 7 */}
                  <rect x="34"  y="132" width="42"  height="5" rx="2.5" fill="#6CC24A" opacity="0.7" />
                  <rect x="84"  y="132" width="125" height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  {/* row 8 */}
                  <rect x="48"  y="145" width="80"  height="5" rx="2.5" fill="#61DAFB" opacity="0.65" />
                  <rect x="136" y="145" width="40"  height="5" rx="2.5" fill="#F7DF1E" opacity="0.6" />
                  <rect x="184" y="145" width="65"  height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  {/* row 9 */}
                  <rect x="34"  y="158" width="115" height="5" rx="2.5" className="fill-neutral-300 dark:fill-neutral-600" opacity="0.35" />
                  <rect x="157" y="158" width="55"  height="5" rx="2.5" fill="#E8480A" opacity="0.5" />

                  {/* Blinking cursor */}
                  <rect x="34" y="171" width="8" height="9" rx="1" fill="#E8480A" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite" />
                  </rect>

                  {/* Monitor stand */}
                  <rect x="152" y="203" width="36" height="16" rx="2" className="fill-neutral-200 dark:fill-neutral-700" />
                  <rect x="80" y="217" width="188" height="10" rx="5" className="fill-neutral-200 dark:fill-neutral-700" />
                </svg>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map(({ Icon, name, color, pos, delay }) => (
                <div
                  key={name}
                  className="absolute z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm badge-float"
                  style={{ ...pos, animationDelay: delay }}
                >
                  <Icon style={{ color, width: 13, height: 13, flexShrink: 0 }} />
                  <span className="text-[11px] font-sans font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Tech stack icon grid ── */}
            <div className="grid grid-cols-6 gap-1.5">
              {techStack.map(({ Icon, name, color }) => (
                <div
                  key={name}
                  title={name}
                  className="flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/70 hover:bg-[#E8480A]/10 border border-transparent hover:border-[#E8480A]/20 transition-all duration-200 cursor-default group"
                >
                  <Icon
                    style={{ color }}
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-[9px] font-sans font-medium text-neutral-400 dark:text-neutral-500 truncate w-full text-center leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        <AboutTrendy />
        <Courses />
        <FAQ />
        <ContactForm />
        <div className="pt-10 lg:pb-20">
          <CTA />
        </div>
      </div>
    </>
  )
}


import { DotPattern } from "@/components/ui/dot-pattern"
export function DotPatternDemo() {
  return (
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
  )
}




import { CheckCircle2 } from 'lucide-react';
import AboutTrendy from './AboutTrendy';
import Courses from './Courses';




