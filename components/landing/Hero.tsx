import React from 'react'
import Badge from './Badge'
import { cn } from '@/lib/utils'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { SiFoodpanda } from 'react-icons/si'
import Link from "next/link"
import { PiStudentFill } from "react-icons/pi";
import { ThemeToggle } from '@/components/ToggleTheme';

function Hero() {
  return (
    <div className='w-full h-screen lg:container mx-auto grid lg:grid-cols-[60%_40%] gap-4 grid-cols-1 pt-10 lg:pt-20 relative'>
        <div className=''>
            {/* Badge */}
            <div className='w-full mx-auto flex justify-start items-start'>
                <Badge aboutBadge="Introducing Trendy modern tech courses in AI era" />
            </div>
            {/* Headings */}
            <div className='pt-5 lg:pr-5'>
               <h1 className="text-3xl lg:text-6xl font-sans font-bold leading-[1.05] mt-3 lg:mt-6 tracking-tight">
                Learn Modern Tech Skills, Build Real Experience, and Shape Your Future
                </h1>
                <p className="text-sm lg:text-[16px] font-sans font-medium text-neutral-600 dark:text-neutral-300 mt-5 max-w-3xl">
                    Learn computer fundamentals, programming, web development, data analytics,
                and practical digital skills through hands-on training designed for students,
                beginners, and future tech professionals preparing for real-world careers and industry opportunities.
                </p>
            </div>
            {/* Buttons */}
            <div className='flex flex-wrap justify-start items-center gap-4 lg:gap-5 pt-5 lg:pt-10'>
                <button
                className={cn(
                    "group relative flex justify-between items-center gap-2 px-3 w-[190] lg:w-[220px] h-[36px] lg:h-[44px] rounded-xl text-xs lg:text-sm font-sans font-semibold overflow-hidden",
                    "border border-neutral-800/60",
                    "bg-linear-to-r from-[hsl(236,100%,8%)] to-[hsl(211,100%,28%)]",
                    "text-neutral-100",
                    "shadow-sm hover:shadow-md hover:brightness-105",
                    "hover:-translate-y-0.5",
                    "transition-all duration-200"
                )}
                >
                <span className={cn(
                    "border shadow-sm rounded-sm h-8 w-8 flex justify-center items-center shrink-0",
                    "bg-linear-to-b from-neutral-100 to-neutral-200",
                    "border-t border-l border-r border-neutral-800 dark:border-neutral-700 text-neutral-100",
                    "transition-all duration-300 ease-in-out",
                    "group-hover:translate-x-[170px] group-hover:rotate-[360deg]"
                )}>
                    <PiStudentFill className="w-5 h-5 text-black" />
                </span>
                <span className={cn(
                    "transition-all duration-300 ease-in-out",
                    "group-hover:-translate-x-20"
                )}>
                    Explore Courses
                </span>
                </button>
                <Link href="https://www.instagram.com/hilal_11_n" target='_blank'
                    className={cn(
                        "group relative flex justify-between items-center gap-2 px-3 w-[190] lg:w-[220px] h-[36px] lg:h-[44px] rounded-xl text-xs lg:text-sm font-sans font-semibold overflow-hidden",
                        "border-t border-l border-r border-neutral-800 dark:border-neutral-700",
                        "bg-linear-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                        "text-neutral-100",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)]",
                        "hover:-translate-y-0.5",
                        "transition-all duration-200"
                    )}
                    >
                    <span className={cn(
                        "transition-all duration-300 ease-in-out",
                        "group-hover:translate-x-14"
                    )}>
                        Chat with Trendy
                    </span>
                    <span className={cn(
                        "border shadow-sm rounded-sm h-8 w-8 flex justify-center items-center flex-shrink-0",
                        "bg-gradient-to-r from-[#F6D5F7] to-[#FBE9D7] text-neutral-900",
                        "transition-all duration-300 ease-in-out",
                        "group-hover:-translate-x-[170px] group-hover:rotate-[-360deg]"
                    )}>
                        <SiFoodpanda className="w-3.5 h-3.5" />
                    </span>
                </Link>

            </div>
        </div>
        <div className='boredr w-full h-full relative'>
            <div className='flex'> 
                <DotPatternDemo />
            </div>
            <div className='flex '>
                <OrbitingCirclesDemo />
            </div>
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
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] absolute -top-10 lg:-top-28"
        )}
      />
  )
}




import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { GrAnalytics } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
const techColors = [
  {
    name: "Excel",
    color: "#217346", // Microsoft Excel Green
  },
  {
    name: "Microsoft",
    color: "#00A4EF", // Microsoft Blue
  },
  {
    name: "Analytics",
    color: "#FF6B00", // Analytics Orange
  },
  {
    name: "Python",
    color: "#3776AB", // Python Blue
  },
  {
    name: "JavaScript",
    color: "#F7DF1E", // JS Yellow
  },
  {
    name: "HTML",
    color: "#E34F26", // HTML Orange
  },
  {
    name: "Node.js",
    color: "#339933", // Node Green
  },
  {
    name: "NumPy",
    color: "#4DABCF", // NumPy Blue
  },
];
export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={100} reverse radius={240}>
        <SiNumpy className='text-5xl text-[#4DABCF]'/>
        <TfiMicrosoftAlt className='text-5xl text-[#00A4EF]'/>
        <PiMicrosoftExcelLogoFill className='text-5xl text-[#217346]'/>
        <GrAnalytics className='text-5xl text-[#FF6B00]'/>
        <FaPython className='text-5xl text-[#3776AB]'/>
        <FaHtml5 className='text-5xl text-[#E34F26]'/>
        <FaNodeJs className='text-5xl text-[#339933]'/>
        <SiNumpy className='text-5xl text-[#4DABCF]'/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={100}>
        <SiNumpy className='text-4xl text-[#4DABCF]'/>
        <TfiMicrosoftAlt className='text-4xl text-[#00A4EF]'/>
        <PiMicrosoftExcelLogoFill className='text-4xl text-[#217346]'/>
        <GrAnalytics className='text-4xl text-[#FF6B00]'/>
        <FaPython className='text-4xl text-[#3776AB]'/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={70} radius={100} reverse speed={2}>
        <FaJsSquare className='text-3xl text-[#F7DF1E]'/>
        <FaHtml5 className='text-3xl text-[#E34F26]'/>
        <FaNodeJs className='text-3xl text-[#339933]'/>
        <SiNumpy className='text-3xl text-[#4DABCF]'/>
      </OrbitingCircles>
      <OrbitingCircles radius={0}>
        <span className='text-2xl font-bold'>Trendy</span>
      </OrbitingCircles>
    </div>
  )
}