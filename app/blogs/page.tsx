"use client"
import { useState } from "react";

const trendyImages = [
  "/images/image1.jpeg", "/images/image2.jpeg", "/images/image3.png",
  "/images/image4.jpeg", "/images/image5.jpeg", "/images/image6.jpeg",
  "/images/image7.jpeg", "/images/image8.jpeg", "/images/image9.jpeg",
  "/images/image10.jpeg", "/images/image11.jpeg", "/images/image12.jpeg",
  "/images/image13.jpeg", "/images/image14.jpeg", "/images/image16.jpeg",
  "/images/image17.jpeg", "/images/image18.jpeg", "/images/image19.jpeg",
];

const courseImages = {
  trendy: "/images/trendyimage.png",
  webdev: "/images/webdev.png",
  ccc: "/images/ccc.png",
  dcs: "/images/dcs.png",
  dataAnalyst: "/images/data-analyst.png",
  frontend: "/images/frontend.png",
  msoffice: "/images/msoffice.png",
};

interface IBlogs {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    featured: boolean;
    tags: string[];
}
const blogs: IBlogs[] = [
    {
        id: 1,
        title: "getting started with web development in 2025",
        excerpt: "web development is one of the most in-demand skills today. whether you want to build websites, work as a freelancer, or land a job at a top company — this guide breaks down everything you need to know to begin your journey confidently.",
        
    category: "web development",
    author: "rahul sharma",
    date: "may 10, 2025",
    readTime: "6 min read",
    image: courseImages.webdev,
    featured: true,
    tags: ["html", "css", "javascript"],
  },
  {
    id: 2,
    title: "why every student should learn ms office in 2025",
    excerpt: "from writing professional reports in word to crunching numbers in excel and presenting ideas in powerpoint — ms office skills are still among the most requested by employers across every industry. here's why you shouldn't skip it.",
    category: "office tools",
    author: "priya mehta",
    date: "may 5, 2025",
    readTime: "4 min read",
    image: courseImages.msoffice,
    featured: false,
    tags: ["excel", "word", "powerpoint"],
  },
  {
    id: 3,
    title: "how to become a data analyst with no prior experience",
    excerpt: "data analysts are among the highest paid professionals right now. but what if you're starting from zero? this post walks you through the exact roadmap — tools, courses, and projects — that can help you break into data analytics even as a beginner.",
    category: "data science",
    author: "aditya kumar",
    date: "april 28, 2025",
    readTime: "8 min read",
    image: courseImages.dataAnalyst,
    featured: true,
    tags: ["excel", "sql", "python"],
  },
  {
    id: 4,
    title: "frontend development: building beautiful user interfaces",
    excerpt: "frontend development is not just about making things look pretty — it's about creating experiences that users love. in this post, we explore the foundations of modern frontend development and the tools that top developers use every day.",
    category: "web development",
    author: "sneha patel",
    date: "april 20, 2025",
    readTime: "5 min read",
    image: courseImages.frontend,
    featured: false,
    tags: ["react", "tailwind", "css"],
  },
  {
    id: 5,
    title: "ccc certification: is it worth it for government jobs?",
    excerpt: "the ccc (course on computer concepts) certification is often mandatory for government job applicants. but what exactly does it cover, how hard is the exam, and is it worth your time? we answer all of it in this detailed breakdown.",
    category: "career tips",
    author: "vikram singh",
    date: "april 15, 2025",
    readTime: "5 min read",
    image: courseImages.ccc,
    featured: false,
    tags: ["ccc", "nielit", "exam prep"],
  },
  {
    id: 6,
    title: "dcs course: a complete overview for beginners",
    excerpt: "diploma in computer science (dcs) is a popular course for students who want a structured introduction to computers. we cover what the course includes, who it's best for, and how it can help you land your first tech role.",
    category: "student life",
    author: "meera joshi",
    date: "april 8, 2025",
    readTime: "4 min read",
    image: courseImages.dcs,
    featured: false,
    tags: ["dcs", "computer basics", "diploma"],
  },
  {
    id: 7,
    title: "top 5 in-demand tech skills students should learn this year",
    excerpt: "the tech industry moves fast. knowing which skills to invest your time in can make or break your career start. here are the five most in-demand tech skills in 2025 — backed by job market data — that students should start learning today.",
    category: "career tips",
    author: "rahul sharma",
    date: "march 30, 2025",
    readTime: "7 min read",
    image: trendyImages[0],
    featured: false,
    tags: ["career", "skills", "tech"],
  },
  {
    id: 8,
    title: "how our students landed jobs within 3 months of completing courses",
    excerpt: "we sat down with four of our recent graduates to understand exactly how they went from completing their courses to landing their first jobs. their stories, timelines, and tips — everything is here for you to learn from.",
    category: "student life",
    author: "institute team",
    date: "march 22, 2025",
    readTime: "6 min read",
    image: trendyImages[3],
    featured: false,
    tags: ["placement", "success", "students"],
  },
  {
    id: 9,
    title: "understanding python for data analysis: a beginner's primer",
    excerpt: "python is the most widely used language for data analysis, and for good reason. in this post, we cover the absolute basics — variables, lists, loops, and pandas — so you can start working with real data without feeling overwhelmed.",
    category: "data science",
    author: "aditya kumar",
    date: "march 15, 2025",
    readTime: "9 min read",
    image: trendyImages[6],
    featured: false,
    tags: ["python", "pandas", "beginner"],
  },
];

const categories = ["all", "web development", "data science", "office tools", "career tips", "student life"];
const categoryColors: Record<string, string> = {
  "web development": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "data science": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "office tools": "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "career tips": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "student life": "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
};
function BlogCard({ blog, featured = false }: { blog: IBlogs; featured?: boolean }) {
  return (
    <article
      className={`group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex ${featured ? "flex-col md:flex-row" : "flex-col"}`}
    >
      <div className={`overflow-hidden ${featured ? "md:w-2/5 h-56 md:h-auto" : "h-48"} flex-shrink-0 relative`}>
       <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            (img.parentElement as HTMLElement)?.classList.add("bg-gradient-to-br", "from-orange-100", "to-orange-200", "dark:from-orange-900/30", "dark:to-orange-800/30");
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className={`p-5 flex flex-col flex-1 ${featured ? "md:p-7" : ""}`}>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full font-sans ${categoryColors[blog.category] || "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
            {blog.category}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 font-sans">{blog.readTime}</span>
        </div>

        <h3 className={`font-semibold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-orange-500 transition-colors duration-200 font-sans ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 font-sans mb-4 flex-1">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-sans">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold font-sans flex-shrink-0">
              {blog.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 font-sans">{blog.author}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-sans">{blog.date}</p>
            </div>
          </div>
          <button className="text-xs font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 flex items-center gap-1 transition-colors font-sans group/btn">
            read more
            <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredBlogs = blogs.filter((b) => b.featured);
  const filteredBlogs = blogs.filter((blog) => {
    const matchCat = activeCategory === "all" || blog.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      blog.title.includes(q) ||
      blog.excerpt.includes(q) ||
      blog.tags.some((t) => t.includes(q)) ||
      blog.author.includes(q);
    return matchCat && matchSearch && !blog.featured;
  });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 font-sans transition-colors duration-300">
      {/* Hero */}
      <section className="relative bg-neutral-100 dark:bg-neutral-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-400/10 dark:bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-orange-300/10 dark:bg-orange-600/10 blur-2xl" />

        <div className="relative container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full mb-5 font-sans border border-orange-100 dark:border-orange-800">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              institute blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 font-sans tracking-tight">
              insights, guides &{" "}
              <span className="text-orange-500">student stories</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-sans max-w-xl">
              explore articles on tech skills, career advice, course guides, and real stories from students who've transformed their careers with us.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder="search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm font-sans transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 py-12">

        {/* Featured */}
        {activeCategory === "all" && !searchQuery && (
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-sans">featured posts</h2>
            </div>
            <div className="grid gap-6">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured />
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-4 py-2 rounded-full text-sm font-medium font-sans transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-md shadow-orange-200 dark:shadow-orange-900/40"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:text-orange-500 dark:hover:text-orange-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white font-sans">
                {activeCategory === "all" ? "all posts" : activeCategory}
              </h2>
              <span className="text-xs text-gray-400 font-sans bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                {filteredBlogs.length}
              </span>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-sans text-sm">no posts found for your search.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="mt-3 text-orange-500 text-sm font-medium hover:underline font-sans">
                clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {visibleCount < filteredBlogs.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((c) => c + 6)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-md shadow-orange-200 dark:shadow-orange-900/30 font-sans"
                  >
                    load more posts
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-400 mt-2 font-sans">
                    showing {visibleCount} of {filteredBlogs.length} posts
                  </p>
                </div>
              )}
            </>
          )}
        </section>

        {/* Newsletter */}
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <div className="relative max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-sans">stay in the loop</h3>
            <p className="text-orange-100 text-sm md:text-base mb-6 font-sans leading-relaxed">
              get the latest articles, course updates, and career tips delivered straight to your inbox. no spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm font-sans backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-white text-orange-500 font-medium rounded-xl hover:bg-orange-50 transition-colors text-sm font-sans flex-shrink-0">
                subscribe
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}