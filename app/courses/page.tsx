"use client"
import React from 'react'
import Badge from '@/components/landing/Badge'
import { TextFlip } from '@/components/TextFlip'
import { cn } from '@/lib/utils'
import { motion} from "motion/react";
import { NoiseTexture } from '@/components/ui/noise-texture'
import Link from 'next/link'
import { StripedPattern } from '@/components/magicui/striped-pattern'
const COURSES = [
    {
        id: 1,
        component_name: "Draggable Card",
        about_component: "A visual diary of my journey through code, travel, and everyday thoughts",
        component_image: "https://assets.aceternity.com/cloudinary_bkp/Hero_Scroll_xzhqrj.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 2,
        component_name: "Shaders",
        about_component: "A set of customizable shader components for advanced visual effects",
        component_image: "https://assets.aceternity.com/pro/shaders.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 3,
        component_name: "Parallax Hero Images",
        about_component: "A set of parallax hero image components for dynamic web design",
        component_image: "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 4,
        component_name: "Terminal",
        about_component: "A customizable terminal component for interactive command-line interfaces",
        component_image: "https://assets.aceternity.com/compare.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 5,
        component_name: "3D Card Effect",
        about_component: "A set of 3D card effect components for engaging user interfaces",
        component_image: "https://assets.aceternity.com/cloudinary_bkp/3d-card.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 6,
        component_name: "Feature Sections",
        about_component: "A collection of feature section components for showcasing product features",
        component_image: "https://assets.aceternity.com/components/features-section-with-skeletons.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 7,
        component_name: "Testimonials",
        about_component: "A set of testimonial components for displaying customer feedback",
        component_image: "https://assets.aceternity.com/world-map.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 8,
        component_name: "3D World Globe",
        about_component: "A customizable 3D world globe component for interactive maps and data visualization",
        component_image: "https://assets.aceternity.com/components/3d-globe.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 9,
        component_name: "Animated Backgrounds",
        about_component: "A collection of animated background components for dynamic web design",
        component_image: "https://assets.aceternity.com/background-ripple-effect.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 10,
        component_name: "Custom Scrollbars",
        about_component: "A set of customizable scrollbar components for enhanced user experience",
        component_image: "https://assets.aceternity.com/draggable-card.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",

    },
    {
        id: 11,
        component_name: "Interactive Maps",
        about_component: "A collection of interactive map components for geospatial data visualization",
        component_image: "https://assets.aceternity.com/pro/testimonials.png",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    },
    {
        id: 12,
        component_name: "Loading Spinners",
        about_component: "A set of customizable loading spinner components for indicating progress",
        component_image: "https://assets.aceternity.com/components/scales.webp",
        component_docs_link: "https://lokalhost-io-i2di.vercel.app/docs",
    }
   
]
function page() {
  return (
    <div className='container w-full h-auto mx-auto'>
      {/* header */}
      <div className="w-full h-auto px-0 lg:px-4 py-6 mx-auto">
        <Badge aboutBadge={"Enroll in trendy.academy - make your career"}/>
        <div className="mt-8 text-center flex-col gap-4 lg:px-20">
          <h1 className="lg:w-5xl px-5 lg:px-5 mx-auto ont-sans font-bold text-2xl lg:text-[46px] text-neutral-800 dark:text-neutral-200 pb-2 leading-tight whitespace-break-spaces ">Choose the Right Course and Start Building Your Future with  
            <motion.span
                          className="font-sans text-orange-500 dark:text-orange-500 relative inline-block"
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                           trendy.academy
                          <motion.span
                            className="absolute -bottom-0.5 left-0 h-px w-full bg-linear-to-r from-transparent via-orange-500 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{ originX: 0.5 }}
                          />
                        </motion.span>{" "}
          </h1>
          <TextFlip/>
            <p className={cn(
            "font-sans font-medium text-[15px] lg:text-[16px] pt-8",
            "text-neutral-500 dark:text-neutral-400",
            "leading-relaxed max-w-2xl mx-auto",
            "px-4 lg:px-0"
          )}>
        </p>
        </div>
      </div>
       <div className="lg:mt-5 w-full h-[40px] relative border-b border-t border-neutral-300 dark:border-neutral-800">
          <StripedPattern/>
        </div>
      {/* Courses */}
      <div className='pt-5 lg:pt-16 pb-4 px-5'>
            <h1 className='font-sans font-bold text-xl lg:text-5xl mx-auto text-left text-neutral-700 dark:text-neutral-300'>
              <motion.span
                          className="font-sans text-orange-500 dark:text-orange-500 relative inline-block"
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                           trendy.academy
                          <motion.span
                            className="absolute -bottom-0.5 left-0 h-px w-full bg-linear-to-r from-transparent via-orange-500 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{ originX: 0.5 }}
                          />
                        </motion.span>{" "}
              courses
            </h1>
            <p className='font-sans font-medium text-sm mx-auto text-left text-neutral-600 dark:text-neutral-400 pt-2'>Explore the best in class, shadcn compatible components with microinteractions and animations.</p>
        </div>
       
      <div className='w-full h-auto pt-6 pb-10 grid grid-cols-1 lg:grid-cols-4 justify-center gap-10 px-5 mx-auto'>
        
        {COURSES.map((item) => (
            <div key={item.id} className='mx-auto cursor-pointer relative lg:w-[360px] h-[420px] w-full rounded-xl border overflow-hidden border
    transition-all duration-300 ease-in-out
    hover:scale-[1.03]
    hover:shadow-sm
    hover:bg-neutral-200 hover:dark:bg-neutral-900'>
                <NoiseTexture
                        className={cn(
                        "dark:hidden absolute inset-0 z-10",
                        "mask-[radial-gradient(420px_circle_at_center,white,transparent)]"
                        )}
                    />
                {/* Top 60% — Image */}
                <div className="h-[60%] w-full border-b z-40">
                <img
                    src={item.component_image}
                    alt={item.component_name}
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Bottom 40% — Info */}
                <div className="z-50 h-[40%] w-full px-4 py-3 flex flex-col justify-between">
                    
                <div>
                    <h3 className="font-sans text-lg font-semibold text-base">{item.component_name}</h3>
                    <p className="font-sans text-sm mt-1">
                    {item.about_component}
                    </p>
                </div>

                <div className="flex justify-end gap-4">
                    <Link href="https://lokalhost-io-i2di.vercel.app/docs" target="_blank"
                        className={cn(
                        "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                        "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                        "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                        "text-neutral-100",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                        "transition-all duration-200"
                        )}>Lokalhost.io</Link>
                    <Link href="https://lokalhost-io-i2di.vercel.app/docs" target="_blank"
                        className={cn(
                        "cursor-pointer font-sans font-medium text-sm px-2 py-px rounded-lg",
                        "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                        "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                        "text-neutral-100",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                        "transition-all duration-200"
                        )}>Docs </Link>
                </div>
                </div>
            </div>
            ))}
      </div>
    </div>
  )
}

export default page
