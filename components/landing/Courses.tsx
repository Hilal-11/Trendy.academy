"use client"
import React from 'react'
import { motion } from 'motion/react'
import TrendyButton from './TrendyButton'
import Image from 'next/image';
import Link from 'next/link';
const coursesBentoList = [
  {
    id: 1,
    courseTitle: "Data Analyst",
    courseDescription: "Learn the skills needed to analyze data and make informed business decisions.",
    courseImage: "/images/data-analyst.png"
  },
  {
    id: 2,
    courseTitle: "Web Development",
    courseDescription: "Master the art of building modern, responsive websites and web applications.",
    courseImage: "/images/webdev.png"
  },
  {
    id: 3,
    courseTitle: "Frontend Development",
    courseDescription: "Learn how to create stunning user interfaces and interactive web experiences.",
    courseImage: "/images/frontend.png"
  },
  {
    id: 4,
    courseTitle: "Python Programming",
    courseDescription: "Get hands-on experience with Python, one of the most popular programming languages.",
    courseImage: "/images/python.png"
  },
  {
    id: 5,
    courseTitle: "Tally ERP 9",
    courseDescription: "Learn how to use Tally ERP 9 for accounting and financial management.",
    courseImage: "/images/tally.png"
  },
  {
    id: 6,
    courseTitle: "C/C++ - DSA Foundation",
    courseDescription: "Build a strong foundation in Data Structures and Algorithms using C/C++.",
    courseImage: "/images/dsa.png"
  },
]

function Courses() {

  return (
    <div className='w-full h-auto pb-10 mt-8 lg:pt-20 border-t border-orange-600/50 dark:border-orange-700/50 relative overflow-hidden'>
      <div className="w-full mx-auto pb-8 relative overflow-hidden pt-10 rounded-t-lg py-10">
          {/* dot grid – light */}
          <div className="pointer-events-none absolute inset-0 z-0 dark:hidden"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
          {/* dot grid – dark */}

          {/* radial fade – light */}
          <div className="pointer-events-none absolute inset-0 z-[1] dark:hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, white 100%)" }} />

          <div className="pointer-events-none absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] rounded-t-full blur-3xl opacity-25 dark:opacity-15"
            style={{ background: "radial-gradient(ellipse, rgba(163,163,163,0.5) 0%, transparent 70%)" }} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3 tracking-tight"
          >
            Professional Courses by {" "}
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
            className="relative z-10 text-center text-sm lg:text-[17px] font-sans font-medium text-neutral-500 dark:text-neutral-400 mx-auto lg:w-6xl px-2 pb-8 lg:pb-0 leading-relaxed"
          >
            Learn practical and industry-relevant skills through hands-on courses designed for students, beginners, and future professionals. From programming and web development to data analytics, AI, and digital tools, Trendy helps you build real knowledge with guided training and practical experience.
          </motion.p>
      </div>
      {/*  Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        {
          coursesBentoList.map((course) => (
            <div key={course.id} className='relative w-full h-80 border bg-neutral-100/20 dark:bg-neutral-900/20 rounded-lg overflow-hidden px-2 lg:px-8 lg:mask-b-from-30 lg:mask-b-from-50'>
             <Link href="/courses">
              <div>
                <h2 className="text-lg lg:text-xl font-sans font-semibold text-neutral-800 dark:text-neutral-200 pt-5 tracking-tight">
                  {course.courseTitle}
                </h2>
                <p className="text-sm lg:text-[15px] font-sans font-medium text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                  {course.courseDescription}
                </p>
                <div className='flex justify-end mt-0'>
                  <Link href="/courses" className='bg-orange-500 hover:bg-orange-600 text-xs font-sans font-medium py-1 px-4 rounded-xl cursor-pointer text-white shadow-[0_2px_8px_rgba(232,72,10,0.35)] hover:shadow-[0_4px_18px_rgba(232,72,10,0.45)] transition-all duration-200'>
                    Explore Course
                  </Link>
                </div>
              </div>
              <div className='[perspective:800px] [transform-style:preserve-3d]'>
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
                        y: 6,
                        
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
                 className="flex w-full h-full items-start justify-center lg:px-4 relative ">
                  <Image className="w-full h-full object-cover relative -bottom-5 rounded-lg" src={course.courseImage} alt="" width={4000} height={600}/>
                </motion.div>
              </div></Link>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center mt-5">
       <TrendyButton buttonContent="Explore Courses" buttonLink="/courses" />
      </div>
    </div>
  )
}

export default Courses

