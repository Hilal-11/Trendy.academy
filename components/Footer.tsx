"use client"
import React from 'react'
import { footerConfig } from "@/public/config/footerConfig"
import { SOCIAL_LINKS } from '@/public/config/footerConfig';
import Link from 'next/link';
import { motion } from "motion/react"
import { StripedPattern } from '@/components/magicui/striped-pattern';
import { useTheme } from 'next-themes';
function Footer() {
  return (
    <div className='relative h-auto w-[100%] bg-neutral-100 dark:bg-neutral-900 lg:border-t border-neutral-400 dark:border-neutral-600 mx-auto'>
      <StripedPattern
      direction="right"
      className="absolute inset-0 z-10 mask-l-from-70% mask-l-to-100% mask-r-from-70% mask-r-to-100%"
    />
      <div className='relative container mx-auto !important border-dashed z-30 !important bg-neutral-100 dark:bg-neutral-950
       h-auto lg:border-l lg:border-r border-neutral-400 dark:border-neutral-700 py-20 px-10'>
        {/*  start footer boxes */}

        <div className='pt-4 lg:pt-10 grid lg:grid-cols-5 md:grid-cols-4 gap-4 justify-between grid-cols-2'>
          <div className='w-full'>
            <div>
              <h1 className="font-sans text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[0].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[0].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='w-full'>
            <div>
              <h1 className="font-sans text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[1].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[1].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>


         
           <div className='w-full'>
            <div>
              <h1 className="font-sans text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[2].service_title}</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig[2].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='w-full'>
            <div>
              <h1 className="font-sans text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[3].service_title}</h1>
            </div>
             <div className='pl-1 py-3'>
              {
                footerConfig[3].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className='w-full'>
            <div>
              <h1 className="font-sans text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">Social Links</h1>
            </div>
            <div className='pl-1 py-3'>
              {
                SOCIAL_LINKS.map(({id , Icon , social_link , social_name }) => (
                  <div key={id}>
                    <Link href={social_link}>
                      <motion.p 
                      initial={{ scale: 1 }}
                        transition={{ duration: 0.26, ease: "easeInOut" }}
                        whileHover={{ scale: 1.03, }}
                        whileTap={{ scale: 1.03 }}
                        className='cursor-pointer flex items-center gap-2 py-1 text-neutral-500 dark:text-neutral-500 text-sm font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><span><Icon /></span>{social_name}</motion.p>
                      </Link>
                      
                  </div>
                  
                ))
              }
            </div>
          </div>




        </div>
        <div className='mx-auto border-t border-b border-neutral-300 dark:border-neutral-800 w-full h-full flex justify-center items-center mask-l-from-60% mask-r-from-60% top-90%'>
          <h1 className='font-mono text-[5rem] md:text-[10rem] whitespace-nowrap lg:text-[14rem] font-bold text-orange-400 dark:text-orange-700 flex'>TRENDY</h1>
      </div>
      </div>
    </div>
  )
}

export default Footer