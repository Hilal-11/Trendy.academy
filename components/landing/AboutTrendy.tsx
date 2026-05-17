"use client"
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import TrendyButton from './TrendyButton'
import { StripedPattern } from '@/components/magicui/striped-pattern';
import { GoFileZip } from "react-icons/go";
import { LuCodeXml } from "react-icons/lu";
import { RxFigmaLogo } from "react-icons/rx";
import { LuMessageCircleHeart } from "react-icons/lu";
interface TemplatesCategories{
  id: number,
  name: string
}
export default function TemplatesShowcaseBento() {
  return (
    <div className='w-full h-full pt-28'>
        <div className="w-full mx-auto pb-8 relative overflow-hidden  rounded-t-lg py-10 px-2 ">
          {/* dot grid – light */}
          <div className="pointer-events-none absolute inset-0 z-0 dark:hidden"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
          {/* dot grid – dark */}

          {/* radial fade – light */}
          <div className="pointer-events-none absolute inset-0 z-[1] dark:hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, white 100%)" }} />
          {/* radial fade – dark */}

          <div className="pointer-events-none absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] rounded-t-full blur-3xl opacity-25 dark:opacity-15"
            style={{ background: "radial-gradient(ellipse, rgba(163,163,163,0.5) 0%, transparent 70%)" }} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3 tracking-tight"
          >
            Why you Choose{" "}
            <motion.span
              className="font-mono text-orange-500 dark:text-orange-500 relative inline-block"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Trendy.adademy
              <motion.span
                className="absolute -bottom-0.5 left-0 h-px w-full bg-linear-to-r from-transparent via-orange-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ originX: 0.5 }}
              />
            </motion.span>{" "}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-center text-sm lg:text-[17px] font-sans font-medium text-neutral-500 dark:text-neutral-400 mx-auto lg:w-1/2 px-2 pb-8 lg:pb-0 leading-relaxed"
          >
            we provide high quality, job oriented courses in computer fundamentals, programming, web development, data analytics, and practical digital skills — hands-on training designed for students, beginners, and future tech professionals.
          </motion.p>
      </div>
        <div className="relative h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-px">
          
            <div className="relative h-[340px] w-full overflow-hidden bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg border">
              <div className='space-y-1 pt-5 px-5 lg:px-7'>
                <h1 className='text-left font-sans text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200'>Our Mission</h1>
                <p className='text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2'>we provide high quality, job oriented computer education, designed to prepair students for real-world IT careers. Our mission is to empower students with practical digital sakills, industry-ready knowledge, and hands-on training.</p>
              </div>
              <div className='lg:px-10 px-5 [perspective:800px] [transform-style:preserve-3d]'>
                <motion.div
                  initial={{
                      rotateX: 0,
                      translateZ: "0px",
                      y: 60,
                      opacity: 0
                  }}
                   style={{
                        rotateX: 0,
                        translateZ: "0px",
                        y: 6
                        
                    }}
                    whileInView={{
                        rotateX: 24,
                        translateZ: "0px",
                        y: 6,
                        opacity: 1 ,
                    }}
                   whileHover={{
                      rotateX: 0,
                      translateZ: "0px",
                      y: 0,
                      scale: 1.05,
                      opacity: 1 ,
                   }}

                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                 className="flex w-full h-full items-start justify-center px-4 pt-5 relative ">
                  <Image width={200} height={200} className="z-10 rounded-sm object-cover w-[200px] absolute left-0 top-18 border " alt="templates" src="/images/image14.jpeg" />
                  <img  className="border-2 z-20 rounded-sm object-cover w-[380px]" alt="templates" src="/images/image16.jpeg" />
                  <Image width={200} height={200} className="z-10 rounded-sm object-cover w-[200px] absolute right-0 top-18 border" alt="templates" src="/images/image18.jpeg" />
                </motion.div>
              </div>
            </div>


            <div className="lg:row-span-2 relative h-auto w-full grid grid-cols-1 p-2 overflow-hidden gap-5 lg:gap-1 bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg border">
              <div className='flex flex-col justify-sttart overflow-hidden px-2 pt-3'>
                <h1 className='text-left font-sans text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200'>Build Real Technical Skills Through Practical Projects and Hands-On Learning</h1>
                <p className='text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2'>Trendy Academy provides beginner-friendly courses in Excel, Word, Tally, programming, web development, DSA, and modern technologies with practical learning.</p>
              </div>
              <div className='flex justify-end items-center relative overflow-hidden lg:bottom-20'>
                <TemplatesList />
              </div>
              <div className='hidden lg:flex justify-center items-center relative top-8'>
                  <TechEcosystemOrbit />
              </div>
            </div>


            <div className="relative h-[340px] w-full  overflow-hidden bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg border" >
              <div className='space-y-1 pt-5 px-5 lg:px-7'>
                <h1 className='text-left font-sans text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200'>Message from Coordinators Desk</h1>
                <p className='text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2'>Every movement in life is a fresh beginning, that brings with it the boundless joy of new possiblities. </p>
              </div>
              <div className="flex justify-center items-start w-full h-auto px-3 gap-4 pt-5 lg:px-8">
                 <Image className="w-full object-cover rounded-lg" src="/images/image8.jpeg" alt="Trendy.academy" width={400} height={400}/>
              </div>
            </div>

            <div className="relative overflow-hidden h-[340px] w-full bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg border">
              <div className='space-y-1 pt-5 px-5 lg:px-4'>
                <h1 className='text-left font-sans text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200'>Expert Faculty & Mentorship</h1>
                <p className='text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2'>Learn from experienced trainers who provide complete guidance, doubt support, and personalized mentorship throughout your journey.</p>
              </div>
              <div className='flex flex-col gap-2 px-6 pl-10'>
                  <ul className='space-y-2 text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2 list-none mt-3'>
                    <li className='flex gap-1 items-center '><span><LuMessageCircleHeart className='text-lg text-orange-500'/></span>Recognized Certificate from Politechnique University</li>
                    <li className='flex gap-1 items-center '><span><LuMessageCircleHeart className='text-lg text-orange-500'/></span> Practical Training with Real Projects</li>
                    <li className='flex gap-1 items-center '><span><LuMessageCircleHeart className='text-lg text-orange-500'/></span> Experienced Faculty and Full Guidance Support</li>
                    <li className='flex gap-1 items-center '><span><LuMessageCircleHeart className='text-lg text-orange-500'/></span> Hands-On Learning with Industry-Level Technologies</li>
                    <li className='flex gap-1 items-center '><span><LuMessageCircleHeart className='text-lg text-orange-500'/></span> Beginner-Friendly Courses with Step-by-Step Mentorship</li>
                  </ul>
              </div>
            </div>

             <div className="relative h-[340px] w-full bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg border">
              <div className='space-y-1 pt-5 px-5 lg:px-4'>
                <h1 className='text-left font-sans text-xl lg:text-2xl font-bold text-neutral-800 dark:text-neutral-200'>Explore the Trendy Learning Environment</h1>
                <p className='text-left font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400 lg:px-2'>Explore our classrooms, practical sessions, workshops, and student experiences that create a modern and inspiring learning environment.</p>
              </div>
              <div>
                <ComponentsMarquee/>
              </div>
            </div>
        </div> 
            <div className="w-full flex justify-center mt-5">
              <TrendyButton buttonContent="Read more Trendy.academy" buttonLink="/about" />
            </div>
    </div>
  )
}







import { TbBrandFramerMotion } from "react-icons/tb";
import { PiTerminalFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { FaSquareJs } from "react-icons/fa6";
import { TemplatesList, ComponentsMarquee } from '@/components/landing/scrollingEffects';
import Link from 'next/dist/client/link';
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { VscPython } from "react-icons/vsc";
import { TbTallymark4 } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";
function TechEcosystemOrbit() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30} radius={160}>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><FaReact className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><TbBrandFramerMotion className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><FaSquareJs className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><VscPython className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><TbTallymark4 className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><RiTailwindCssFill className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><GrAnalytics className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><PiMicrosoftWordLogoFill className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><RiNextjsFill className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><PiMicrosoftExcelLogoFill className='text-3xl'/></span>
          <span className='p-2 rounded-full border shadow-sm bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'><PiMicrosoftPowerpointLogoFill className='text-3xl'/></span>

      </OrbitingCircles>
        <div className="flex justify-center items-center"><h1 className="text-3xl font-sans font-bold">Trendy</h1></div>
    </div>
  )
}