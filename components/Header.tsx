"use client"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState , useRef} from "react";
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SearchingMain } from './SearchingMain';
import headerPagesConfig from "@/public/config/HeaderConfig.json"
import { HiArrowNarrowRight } from "react-icons/hi";
import { ThemeToggle } from '@/components/ToggleTheme';
function Header() {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showservices, setShowServices] = useState(true)


  return (
    <>
      {/* Mobile Pro Banner completely separate from sticky header */}
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-neutral-50 dark:bg-neutral-950 w-full">
          {/* Rest of the header content */}
          <div className="flex items-center justify-center w-full flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-b 
                            border-neutral-200 dark:border-neutral-800">
            <div
              className={`
                            w-full md:w-[100%] lg:container mx-auto
                            flex items-center justify-between
                            pr-4 pl-2  lg:px-0 py-4
                            relative
                            transition-all duration-300 ease-in-out
                        `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section with Navigation Links */}
                <div className="flex items-center gap-6">
                  <Link prefetch={true} href="/"  className="flex items-center">
                    <span className="ml-2 block lobster-regular text-2xl text-neutral-900 dark:text-neutral-100">
                      Trendy
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* Desktop Navigation Links */}
                  <div className="hidden md:hidden lg:flex items-center gap-4">
                    {
                      headerPagesConfig.header_pages.map((page , index) => (
                         <Link                            key={index}
                            href={page.link}
                            className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                            prefetch={true}
                            
                          >
                            {page.page}
                          </Link>
                      ))
                    }
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <h1 className="cursor-pointer flex gap-1 bg-transparent hover:bg-transparent font-sans font-medium text-[15px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors items-center">more<span className="text-sm"><FaAngleDown /></span></h1>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[160px] flex-col space-y-1 px-1 pt-2 pb-2 mt-2" align="start">
                        {
                          headerPagesConfig.dropdown_pages.map((page , index) => (
                            <div key={index} className="w-full hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer rounded-sm py-1 pl-1 ">
                              <Link                                href={page.link}
                              
                                className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex gap-2 items-center"
                                prefetch={true}
                              >
                                <span className="text-sm"><HiArrowNarrowRight /></span>{page.page}
                              </Link>
                            </div>
                          ))
                        }
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                {/* Right side items */}

                
                <div className="hidden md:flex sm:flex items-center gap-2">
                    <div className="lg:block xl:block h-full relative left-2">
                        <div className="flex justify-end items-center gap-1">
                            <SearchingMain />
                        </div>
                    </div>
                    <div className="ml-2 flex flex bg-neutral-100/20 dark:bg-neutral-800 rounded-sm px-2 py-[7px] text-2xl text-neutral-700 dark:text-neutral-300 border shadow-sm">
                        <span className="flex text-2xl text-neutral-700 dark:text-neutral-300 rounded-sp-1"><ThemeToggle /></span>
                    </div>
                </div>

                
                {/* Mobile Navigation remains unchanged */}
                <div className="flex md:hidden sm:hidden items-center gap-3">
                  <div className="lg:block xl:block h-full relative left-2">
                    <div className="flex justify-end gap-1">
                        <div>
                          <SearchingMain/>
                        </div>
                        <div className="flex md:flex lg:hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1 text-2xl text-neutral-700 dark:text-neutral-300">
                            <span className="flex md:flex lg:hidden text-2xl text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1"><ThemeToggle /></span>
                        </div>
                    </div>
                  </div>
                   
                  {!isMobileMenuOpen ? <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:flex lg:hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1 text-2xl text-neutral-700 dark:text-neutral-300"><IoMenu /></button> : <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:flex lg:hidden text-2xl text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1"><RiCloseFill /></button>}
                </div>
                
                
              </div>
              
                {
                  isMobileMenuOpen && 
                  <div className="lg:hidden md:flex flex absolute top-14 left-0 w-screen h-screen overflow-auto">
                    <div className="bg-neutral-100 dark:bg-neutral-950 w-full h-full ">
                    {/* Mobile Menu Content */}
                      <div className="block px-5 w-full mt-8">
                        <div className="flex justify-between w-full">
                          <div className="grid justify-between w-full gap-1">
                            {
                              headerPagesConfig.header_pages.map((page , index) => (
                                <div key={index} className="w-full hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer rounded-sm py-1">
                                  <Link                                href={page.link}
                                  
                                    className="font-sans font-medium text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex gap-2 items-center"
                                    prefetch={true}
                                  >
                                    <span className="text-sm"><HiArrowNarrowRight /></span>{page.page}
                                  </Link>
                                </div>
                              ))
                            }
                           {
                              headerPagesConfig.dropdown_pages.map((page , index) => (
                                <div key={index} className="w-full hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer rounded-sm py-1">
                                  <Link                                href={page.link}
                                  
                                    className="font-sans font-medium text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex gap-2 items-center"
                                    prefetch={true}
                                  >
                                    <span className="text-sm"><HiArrowNarrowRight /></span>{page.page}
                                  </Link>
                                </div>
                              ))
                            }
                          </div>
                              
                        </div>
                        
                      </div>
                    </div>
                  </div>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header



const TrendyIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "5px",
          background:
            "linear-gradient(145deg,#e0f2fe,#bae6fd,#7dd3fc)",
          boxShadow:
            "0 4px 20px rgba(14,165,233,.25), inset 0 1px 0 rgba(255,255,255,.9)",
        }}
      >
        {/* glass overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,.45), rgba(255,255,255,0))",
          }}
        />

        {/* icon */}
        <svg
          width="72"
          height="60"
          viewBox="0 0 72 60"
          fill="none"
          className="relative z-10"
        >
          {/* laptop */}
          <rect
            x="6"
            y="6"
            width="60"
            height="40"
            rx="5"
            fill="rgba(255,255,255,.7)"
            stroke="rgba(14,165,233,.4)"
            strokeWidth="1.5"
          />

          {/* screen */}
          <rect
            x="10"
            y="10"
            width="52"
            height="32"
            rx="3"
            fill="rgba(240,249,255,.85)"
          />

          {/* code lines */}
          <rect
            x="13"
            y="13"
            width="18"
            height="2.5"
            rx="1"
            fill="#0369a1"
          />

          <rect
            x="13"
            y="18"
            width="12"
            height="2"
            rx="1"
            fill="#7dd3fc"
          />

          <rect
            x="13"
            y="22"
            width="28"
            height="2"
            rx="1"
            fill="#bae6fd"
          />

          <rect
            x="13"
            y="26"
            width="20"
            height="2"
            rx="1"
            fill="#0ea5e9"
          />

          {/* ui blocks */}
          <rect
            x="44"
            y="13"
            width="14"
            height="2.5"
            rx="1"
            fill="#059669"
          />

          <rect
            x="44"
            y="26"
            width="11"
            height="2"
            rx="1"
            fill="#d97706"
          />

          {/* laptop base */}
          <rect
            x="16"
            y="48"
            width="40"
            height="3"
            rx="1.5"
            fill="rgba(14,165,233,.2)"
          />
        </svg>
      </div>
    </div>
  );
};

