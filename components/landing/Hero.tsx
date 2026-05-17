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
  // "Learn Programming, Web Development, AI, and Data Skills",
  // "Real-World Assignments to Improve Practical Knowledge",
];

function Hero() {
  
  return (
    <div className='w-full h-auto relative container mx-auto'>
      <div className='mx-auto grid lg:grid-cols-[60%_40%] gap-4 grid-cols-1 pt-10 lg:pt-20 relative'>
        <div className=''>

          {/* Badge */}
            <Badge aboutBadge="Introducing Trendy modern tech courses in AI era" />

          {/* Headings */}
          <div className='pt-5 lg:pr-5'>
            <h1 className="text-3xl lg:text-6xl font-sans font-bold leading-[1.06] mt-3 lg:mt-6 tracking-tight text-[#0A0F1A] dark:text-white">
              Trendy Empowers Students with Modern
              <span className="text-[#E8480A]"> Skills for Real Tech Careers</span>
            </h1>

            <p className="text-sm lg:text-[16px] font-sans font-medium text-neutral-500 dark:text-neutral-400 mt-5 max-w-xl leading-relaxed">
              Computer fundamentals, programming, web development, data analytics,
              and practical digital skills — hands-on training designed for students,
              beginners, and future tech professionals.
            </p>
          </div>
          <div>
            <ul className="space-y-2.5 pt-5">
                          {highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-xs lg:text-[14px] font-sans font-medium text-neutral-600">
                              <CheckCircle2 size={14} className="text-orange-500 mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
          </div>
          {/* Buttons */}
          <div className='flex flex-wrap justify-start items-center gap-3 lg:gap-4 pt-6'>

            {/* PRIMARY — Explore Courses */}
            <Link href="/courses"
              className={cn(
                "group relative flex justify-between items-center gap-2 px-3",
                "w-[190px] lg:w-[220px] h-[40px] lg:h-[46px]",
                "rounded-full overflow-hidden",
                "bg-[#E8480A] text-white text-xs lg:text-sm font-semibold",
                "shadow-[0_2px_8px_rgba(232,72,10,0.35)]",
                "hover:shadow-[0_4px_18px_rgba(232,72,10,0.45)] hover:brightness-105",
                "hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              <span className={cn(
                "h-8 w-8 rounded-full flex justify-center items-center shrink-0",
                "bg-white/20",
                "transition-all duration-300 ease-in-out",
                "group-hover:translate-x-[168px] group-hover:rotate-[360deg]"
              )}>
                <PiStudentFill className="w-4 h-4 text-white" />
              </span>
              <span className={cn(
                "flex-1 text-center transition-all duration-300 ease-in-out",
                "group-hover:-translate-x-16"
              )}>
                Explore Courses
              </span>
            </Link>

            {/* SECONDARY — Chat with Trendy */}
            <Link
              href="/about"
              className={cn(
                "group relative flex justify-between items-center gap-2 px-3",
                "w-[190px] lg:w-[220px] h-[40px] lg:h-[46px]",
                "rounded-full overflow-hidden",
                "bg-[#0A0F1A] dark:bg-neutral-900 text-white text-xs lg:text-sm font-semibold",
                "border border-white/[0.07]",
                "shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]",
                "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
                "hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              <span className={cn(
                "flex-1 text-center transition-all duration-300 ease-in-out pl-2",
                "group-hover:translate-x-14"
              )}>
                Chat with Trendy
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

        {/* Right column — untouched */}
       <div className="w-full lg:h-140 relative flex items-center justify-center">
  {/* Image with radial mask — fades out to transparent on all edges */}
  <div className="relative z-20">
    <Image
      src="/images/trendyimage.png"
      alt="Hero Image"
      width={800}
      height={800}
      className="w-full h-auto object-contain rounded-lg"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  </div>
</div>
      </div>
        <AboutTrendy />
        <Courses />
        <FAQ />
        <ContactForm />
        <div className='pt-10 lg:pb-20'>
          <CTA />
        </div>
    </div>
  )
}

export default Hero


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




