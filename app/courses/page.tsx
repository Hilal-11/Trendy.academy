"use client"
import React from 'react'
import Badge from '@/components/landing/Badge'
import { TextFlip } from '@/components/TextFlip'
import { cn } from '@/lib/utils'
import { motion} from "motion/react";
import { NoiseTexture } from '@/components/ui/noise-texture'
import Link from 'next/link'
import { StripedPattern } from '@/components/magicui/striped-pattern'
import TRENDYCOURSES from "@/public/config/TrendyCourses.json"
import  { useRouter } from 'next/navigation'

function Page() {

const router = useRouter();

const handleOpen = (e: React.MouseEvent<HTMLElement>, courseId: string) => {
  e.stopPropagation();
  router.push(`/courses/course/${courseId}`);
};


  return (
    <div className='container w-full h-auto mx-auto'>
      {/* header */}
      <div className="w-full h-auto px-0 lg:px-4 py-6 mx-auto">
        <Badge aboutBadge={"Enroll in trendy.academy - make your career"}/>
        <div className="mt-8 text-center flex-col gap-4 lg:px-20 overflow-hidden">
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
       
      <div className='w-full h-auto pt-6 pb-10 grid grid-cols-1 lg:grid-cols-4 justify-between gap-10 px-5 mx-auto'>
        
        {TRENDYCOURSES.courses.map((item) => (
            <div key={item.id} onClick={(e) => handleOpen(e, item.id)} className='mx-auto cursor-pointer relative lg:w-[360px] h-[420px] w-full rounded-xl overflow-hidden border
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
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Bottom 40% — Info */}
                <div className="z-50 h-[40%] w-full px-4 py-3 flex flex-col justify-between">
                    
                <div>
                    <h3 className="font-sans text-lg font-semibold text-base">{item.title}</h3>
                    <p className="font-sans text-sm mt-1">
                      {item.description.split(" ").slice(0, 12).join(" ")}
                      {item.description.split(" ").length > 12 && (
                        <>
                          {"... "}
                          <Link
                            href={`/courses/course/${item.id}`}
                            className="text-orange-600 hover:underline font-medium"
                          >
                            Read more
                          </Link>
                        </>
                      )}
                    </p>
                </div>

                <div className="flex justify-between gap-2">
                    <Link href={`/courses/course/${item.id}`}
                        className={cn(
                        "cursor-pointer font-sans font-medium text-[12px] lg:text-xs px-2 py-1 rounded-lg",
                        "border-t-[2px] border-l-[2px] border-r-[2px] border-red-600 dark:border-red-600",
                        "bg-linear-to-r from-orange-500 to-orange-700 dark:from-orange-500 dark:to-orange-700",
                        "text-neutral-100",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                        "transition-all duration-200"
                        )}>Check Course Details</Link>
                    <Link href={`/admission`}
                        className={cn(
                        "cursor-pointer font-sans font-medium text-[12px] lg:text-xs px-2 py-1 rounded-lg",
                        "border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-700",
                        "bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950",
                        "text-neutral-100",
                        "shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]",
                        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
                        "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                        "transition-all duration-200"
                        )}>Register | Enroll now</Link>
                </div>
                </div>
            </div>
            ))}
      </div>
    </div>
  )
}

export default Page
