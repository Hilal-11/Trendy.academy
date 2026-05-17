'use client';


import TRENDYCOURSES from '@/public/config/TrendyCourses.json';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { RiArrowRightLongLine } from "react-icons/ri";
import Image from 'next/image';
import { use } from "react"
import { useRouter } from 'next/navigation';
/* ─── types ─── */
interface Module {
  moduleNo: number;
  title: string;
  duration?: string;
  topics: string[];
}

interface Course {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  language: string;
  mode: string[];
  level: string;
  thumbnail: string;
  eligibility: {
    minimumQualification: string;
    ageLimit?: string;
    prerequisites?: string[];
    additionalNote?: string;
  };
  duration: {
    total: string;
    totalHours?: number;
    practicalHours?: number;
    theoryHours?: number;
  };
  batchInfo: {
    batchSize: string;
    batchTimings: string[];
    startDates: string[];
    daysPerWeek: string;
  };
  feeStructure: {
    totalFee: number;
    registrationFee?: number;
    admissionFee?: number;
    tuitionFee?: number;
    examFee?: number;
    materialFee?: number;
    NIELITExamFee?: number;
    note?: string;
    installmentOptions?: { plan: string; amount: number | string; discount?: string }[];
    scholarshipAvailable?: boolean;
    scholarshipDetails?: string;
  };
  syllabus: {
    modules?: Module[];
    detailedModules?: Module[];
    semester1?: string[];
    semester2?: string[];
  };
  projects?: string[];
  specialActivities?: string[];
  toolsAndTechnologies?: string[];
  instructor: {
    name?: string;
    qualification?: string;
    experience?: string;
    specialization?: string;
    certifications?: string[];
    note?: string;
  };
  certification: {
    certifiedBy: string;
    certificateTitle: string;
    governmentRecognized: boolean;
    industryRecognized: boolean;
    digitalCertificate: boolean;
    marksheet: boolean;
  };
  learningOutcomes?: string[];
  careerOpportunities?: string[];
  averageSalary?: string;
  ratings: { averageRating: number; totalReviews: number };
}

/* ─── helpers ─── */
function getCourse(id?: string): Course | undefined {
  if (!id) return TRENDYCOURSES.courses[0] as Course;
  return (TRENDYCOURSES.courses.find(
    (c: any) => c.id === id || c.slug === id
  ) ?? TRENDYCOURSES.courses[0]) as Course;
}


interface PageProps {
  params: Promise<{ id?: string }>;
}

export default function CoursePage({ params }: PageProps) {
  const { id } = use(params);
  const course = getCourse(id);

  const router = useRouter();

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950">
        <p className="text-stone-500">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="container w-full h-auto py-4 px-4 mx-auto pb-10">

     {/* Making a navigation home --> courses --> course */}
     <div className='w-full h-auto flex justify-start font-sans font-medium text-[15px] flex text-neutral-400 cursor-pointer'>
        <span onClick={() => router.push('/')} className='flex gap-1 items-center '>home <MdKeyboardArrowRight /></span><span onClick={() => router.back()} className='flex gap-1 items-center'>courses <MdKeyboardArrowRight /></span><span className='flex gap-1 items-center'>course <MdKeyboardArrowRight /></span>
     </div>
     <div className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 gap-2 pt-6'>
      <div className="space-y-6">
      
        {/* Badge + Rating row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-sans text-orange-600 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            {course.badge}
          </span>
      
          {/* Stars + review count */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(course.ratings.averageRating)
                      ? "text-amber-400"
                      : "text-neutral-300 dark:text-neutral-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold font-sans text-neutral-700 dark:text-neutral-200">
              {course.ratings.averageRating}
            </span>
            <span className="text-sm font-sans text-neutral-400">
              ({course.ratings.totalReviews} reviews)
            </span>
          </div>
        </div>
      
        {/* Title */}
        <div className="space-y-1">
          <h1 className="lg:text-5xl text-3xl font-sans font-bold leading-tight text-neutral-900 dark:text-neutral-50">
            {course.title}
          </h1>
          <p className="text-base font-sans font-medium text-orange-500">
            {course.subtitle}
          </p>
        </div>
      
        {/* Description */}
        <p className="font-sans font-medium text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          {course.description}
        </p>
      
        {/* Quick-facts pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { icon: <FaCircleCheck />, label: course.language },
            { icon: <FaCircleCheck />, label: Array.isArray(course.mode) ? course.mode.join(", ") : course.mode },
            { icon: <FaCircleCheck />, label: course.level },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-full"
            >
              <span className="text-orange-500 text-[13px]">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      
        {/* ── Stat grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Duration */}
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <span className="text-[11px] font-sans font-semibold text-neutral-400 dark:text-neutral-500 tracking-wide">
              Duration
            </span>
            <span className="text-base font-sans font-bold text-neutral-800 dark:text-neutral-100">
              {course.duration.total}
            </span>
            <span className="text-[11px] font-sans text-neutral-400">
              {course.duration.total} week
            </span>
          </div>
      
          {/* Batch size */}
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <span className="text-[11px] font-sans font-semibold text-neutral-400 dark:text-neutral-500 tracking-wide">
              Batch size
            </span>
            <span className="text-base font-sans font-bold text-neutral-800 dark:text-neutral-100">
              {course.batchInfo.batchSize}
            </span>
            <span className="text-[11px] font-sans text-neutral-400">
              {course.batchInfo.daysPerWeek}
            </span>
          </div>
      
          {/* Instructor */}
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <span className="text-[11px] font-sans font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              Instructor
            </span>
            <span className="text-base font-sans font-bold text-neutral-800 dark:text-neutral-100 truncate">
              {course?.instructor?.name || "TBA"}
            </span>
            <span className="text-[11px] font-sans text-neutral-400">
              {course?.instructor?.experience}
            </span>
          </div>
      
          {/* Certificate */}
          <div className="flex flex-col gap-1 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <span className="text-[11px] font-sans font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              Certificate
            </span>
            <span className="text-base font-sans font-bold text-neutral-800 dark:text-neutral-100">
              Included
            </span>
            {course.certification.governmentRecognized && (
              <span className="text-[11px] font-sans text-emerald-500 font-medium">
                Govt. recognized ✓
              </span>
            )}
          </div>
        </div>
      
        {/* Career paths */}
        <div className="space-y-2">
          <p className="text-[12px] font-sans font-semibold tracking-widest text-neutral-400 dark:text-neutral-500">
            Career opportunities
          </p>
          <div className="flex flex-wrap gap-2">
            {course?.careerOpportunities?.map((role: string) => (
              <span
                key={role}
                className="text-xs font-sans font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-md"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      

        {/* Eligibility note */}
        <p className="text-[13px] font-sans text-neutral-400 dark:text-neutral-500 flex items-center gap-2">
          <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
          </svg>
          {course?.eligibility?.additionalNote} · {course?.eligibility?.ageLimit}
        </p>
         {/* Technologies and tools */}
        <div className="space-y-2">
          <p className="text-[12px] font-sans font-semibold tracking-widest text-neutral-400 dark:text-neutral-500">
            Technologies and tools
          </p>
          <div className="flex flex-wrap gap-2">
            {course?.toolsAndTechnologies?.map((tool: string) => (
              <span
                key={tool}
                className="text-xs font-sans font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 px-2.5 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      
      
      </div>
      <div className='w-full h-full flex justify-end mt-5'>
        <div className='max-w-100 overflow-hidden h-auto border shadow-sm flex flex-col justify-start mx-auto rounded-lg'>
          <div>
            <Image className='rounded-t-lg object-center' src={course.thumbnail} alt={course.title} width={400} height={192} />
          </div>
          <div className='pt-4 flex justify-between items-center px-2'>
            <h1 className='font-sans text-xl font-medium text-wrap white'>{course.title}</h1>
            <span className='text-xs font-sans font-medium text-orange-600 px-2 py-1 rounded-full bg-neutral-300 border'>{course.badge}</span>
          </div>
          <div className='flex px-2 pt-2 justify-between items-center'>
            <button className="px-6 py-2 rounded-lg border bg-orange-600 font-sans text-sm font-medium flex items-center justify-center gap-2">
              Enroll Now
            </button>
            <span className='text-xl font-bold font-sans'>${course.feeStructure.totalFee}</span>
          </div>
          <div className='flex flex-wrap text-wrap px-3 pt-2 justify-between items-center'>
            <p className='font-sans font-medium text-xs'>{course.batchInfo.batchTimings}</p>
            <p className='font-sans font-medium text-xs'>{course.batchInfo.startDates}</p>
          </div>
          <div className='flex flex-col gap-2 pl-2 font-sans text-xs pt-5'>
            <h1 className='font-sans font-medium text-lg text-neutral-600'>What you will get</h1>
        {
          course.learningOutcomes?.map((item, index ) => (
            <span key={index} className='text-neutral-400 flex items-center gap-2'><span className='text-orange-400 text-xs'><RiArrowRightLongLine /></span>{item}</span>
          ))
        }
      </div>
        </div>
      </div>
     </div>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between lg:px-5'>
        <SyllabusAccordion modules={course.syllabus.modules || []} />
        <div className='pt-10 px-4 lg:pt-20 flex justify-center lg:px-10  '>
          <FAQ />
        </div>
      </div>

    </div>
  );
}








import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCircle } from "react-icons/fa";


interface Module {
  moduleNo: number;
  title: string;
  duration?: string;
  topics: string[];
}

interface SyllabusAccordionProps {
  modules: Module[];
}

function SyllabusAccordion({ modules }: SyllabusAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const totalWeeks = modules.reduce((sum, m) => {
    const n = parseInt(m.duration || "0");
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  const totalTopics = modules.reduce((sum, m) => sum + m.topics.length, 0);

  return (
    <section className="w-full mt-12 font-sans">
      {/* ── Section header ── */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Course syllabus
        </h2>
        <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {modules.length} modules &middot; {totalTopics} topics &middot;{" "}
          {totalWeeks} weeks total
        </p>
      </div>

      {/* ── Timeline + Accordion ── */}
      <div className="relative">
        {/* Vertical line — sits behind the dots */}
        <div
          className="
            absolute left-[10px] top-[10px]
            w-[2px] bg-neutral-200 dark:bg-neutral-700
            rounded-full
          "
          style={{ bottom: "10px" }}
          aria-hidden="true"
        />

        <ol className="space-y-3">
          {modules.map((mod, idx) => {
            const isOpen = openIndex === idx;

            return (
              <li key={mod.moduleNo} className="relative flex gap-1">
                {/* ── Timeline dot + number ── */}
                <div className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => toggle(idx)}
                    aria-label={`Toggle module ${mod.moduleNo}`}
                    className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center
                      text-xs font-bold transition-all duration-200 shrink-0
                      ${
                        isOpen
                          ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-200 dark:shadow-orange-900/40"
                          : "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 hover:border-orange-400 hover:text-orange-500"
                      }
                    `}
                  >
                    {mod.moduleNo}
                  </button>
                </div>

                {/* ── Accordion card ── */}
                <div className="flex-1 mb-1">
                  {/* Header row */}
                  <button
                    onClick={() => toggle(idx)}
                    className="
                      w-full flex items-center justify-between gap-3
                      px-4 py-3 rounded-xl
                      bg-neutral-100 dark:bg-neutral-800/60
                      hover:bg-neutral-200 dark:hover:bg-neutral-800
                      border border-transparent
                      hover:border-neutral-300 dark:hover:border-neutral-700
                      transition-all duration-200
                      text-left group
                    "
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 min-w-0">
                      <span className="block text-[13px] font-semibold text-orange-600 dark:text-orange-500 mb-0.5">
                        module {mod.moduleNo}
                      </span>
                      <span className="block text-[15px] font-semibold text-neutral-800 dark:text-neutral-100 leading-snug">
                        {mod.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700 px-2 py-0.5 rounded-full">
                        <FaCircle className="text-[5px] text-orange-500" />
                        {mod.duration}
                      </span>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                        {mod.topics.length} topics
                      </span>
                      <MdKeyboardArrowDown
                        className={`text-neutral-500 dark:text-neutral-400 text-lg transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Collapsible body */}
                  <div
                    className={`
                      overflow-auto transition-all duration-300 ease-in-out
                      ${isOpen ? "lg:max-h-[600px] max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <ul
                      className="
                        mx-1 mt-2 mb-1 px-4 py-3 space-y-2
                        rounded-xl border
                        border-neutral-200 dark:border-neutral-700/60
                        bg-white dark:bg-neutral-900/60
                      "
                    >
                      {mod.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-3 text-[14px] font-medium text-neutral-700 dark:text-neutral-300 leading-snug"
                        >
                          {/* Small numbered badge */}
                          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] font-bold text-neutral-400 dark:text-neutral-500 flex items-center justify-center">
                            {tIdx + 1}
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Duration badge — mobile only (shows inside body) */}
                    <p className="sm:hidden mx-2 mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      Duration: {mod.duration}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}



import { GENERAL_QUESTIONS } from '@/public/config/faqConfig'
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'


export const FAQ = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
        <div className='pb-3'>
            <h1 className='font-sans font-bold text-2xl lg:text-2xl relative -left-2'>Courses related FAQ'S</h1>
        </div>
      {GENERAL_QUESTIONS.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className='flex items-center gap-2'>
            <AccordionPrimitive.Trigger
              data-slot='accordion-trigger'
              className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
            >
              {item.question}
              <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className='font-sans text-xs text-muted-foreground'>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}