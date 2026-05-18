import { MdOutlineComputer } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { CiSignpostDuo1 } from "react-icons/ci";
import { LuMessageCircleWarning } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMicrosoftFill } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { MdOutlineCalculate } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { MdOutlineDesktopMac } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";

// ─── Types ───────────────────────────────────────────────────────────────────

type SearchCategory =
  | "page"
  | "course"
  | "social"
  | "location"
  | "theme"
  | "action";

export interface ISearchItem {
  /** Display label shown in the search dropdown */
  suggesstion: string;
  /** Route or external URL to navigate to */
  suggesstion_to: string;
  /** React icon component */
  Icon: React.ElementType;
  /** Groups items so you can filter/section the results */
  category: SearchCategory;
  /** Optional keywords to improve search matching (not displayed) */
  keywords?: string[];
  /** For social/external links open in new tab */
  external?: boolean;
  /** For theme toggle: pass a handler key instead of a URL */
  action?: "toggle-theme";
}

// ─── Pages ───────────────────────────────────────────────────────────────────

const PAGE_ITEMS: ISearchItem[] = [
  {
    suggesstion: "All Courses",
    suggesstion_to: "/courses",
    Icon: LuBookOpenCheck,
    category: "page",
    keywords: ["courses", "learn", "study", "class"],
  },
  {
    suggesstion: "Admissions",
    suggesstion_to: "/admission",
    Icon: PiStudentDuotone,
    category: "page",
    keywords: ["admission", "enroll", "register", "join", "apply"],
  },
  {
    suggesstion: "About Us",
    suggesstion_to: "/about",
    Icon: LuMessageCircleWarning,
    category: "page",
    keywords: ["about", "institute", "info", "story", "history"],
  },
  {
    suggesstion: "Contact Us",
    suggesstion_to: "/contact",
    Icon: MdOutlineContactPhone,
    category: "page",
    keywords: ["contact", "phone", "email", "reach", "support"],
  },
  {
    suggesstion: "Gallery",
    suggesstion_to: "/gallery",
    Icon: MdOutlinePhotoLibrary,
    category: "page",
    keywords: ["gallery", "photos", "images", "pictures", "media"],
  },
  {
    suggesstion: "Upcoming Courses",
    suggesstion_to: "/upcoming-courses",
    Icon: MdOutlineUpcoming,
    category: "page",
    keywords: ["upcoming", "new courses", "future", "schedule", "batch"],
  },
  {
    suggesstion: "Blog",
    suggesstion_to: "/blog",
    Icon: CiSignpostDuo1,
    category: "page",
    keywords: ["blog", "articles", "posts", "news", "updates"],
  },
  {
    suggesstion: "Notice Board",
    suggesstion_to: "/notices",
    Icon: MdOutlineNotificationsActive,
    category: "page",
    keywords: ["notice", "announcement", "notification", "news", "board"],
  },
  {
    suggesstion: "Results",
    suggesstion_to: "/results",
    Icon: MdOutlineVerified,
    category: "page",
    keywords: ["result", "marks", "score", "exam", "grade"],
  },
  {
    suggesstion: "Verify Certificate",
    suggesstion_to: "/verify-certificate",
    Icon: MdOutlineVerified,
    category: "page",
    keywords: ["verify", "certificate", "check", "validate", "authentic"],
  },
  {
    suggesstion: "Faculty",
    suggesstion_to: "/faculty",
    Icon: GiTeacher,
    category: "page",
    keywords: ["faculty", "teacher", "staff", "instructor", "professor"],
  },
  {
    suggesstion: "Our Team",
    suggesstion_to: "/team",
    Icon: RiTeamLine,
    category: "page",
    keywords: ["team", "members", "people", "staff", "management"],
  },
];

// ─── Courses ─────────────────────────────────────────────────────────────────

const COURSE_ITEMS: ISearchItem[] = [
  {
    suggesstion: "Basic Computer",
    suggesstion_to: "/courses/basic-computer",
    Icon: MdOutlineComputer,
    category: "course",
    keywords: ["basic", "computer", "beginner", "fundamentals", "intro"],
  },
  {
    suggesstion: "CCC Course",
    suggesstion_to: "/courses/ccc",
    Icon: PiCertificateDuotone,
    category: "course",
    keywords: ["ccc", "certificate", "nielit", "govt", "government"],
  },
  {
    suggesstion: "Data Entry",
    suggesstion_to: "/courses/data-entry",
    Icon: BsPersonWorkspace,
    category: "course",
    keywords: ["data entry", "typing", "operator", "ms word", "excel"],
  },
  {
    suggesstion: "Web Development",
    suggesstion_to: "/courses/web-development",
    Icon: TbDeviceDesktopCode,
    category: "course",
    keywords: ["web", "development", "html", "css", "javascript", "react", "fullstack"],
  },
  {
    suggesstion: "Frontend Development",
    suggesstion_to: "/courses/frontend-development",
    Icon: MdOutlineDesktopMac,
    category: "course",
    keywords: ["frontend", "ui", "html", "css", "react", "tailwind", "design"],
  },
  {
    suggesstion: "Data Analytics",
    suggesstion_to: "/courses/data-analytics",
    Icon: BsGraphUpArrow,
    category: "course",
    keywords: ["data", "analytics", "analyst", "excel", "sql", "power bi", "tableau"],
  },
  {
    suggesstion: "Python Programming",
    suggesstion_to: "/courses/python",
    Icon: TbBrandPython,
    category: "course",
    keywords: ["python", "programming", "coding", "script", "automation", "django"],
  },
  {
    suggesstion: "JavaScript",
    suggesstion_to: "/courses/javascript",
    Icon: RiJavascriptLine,
    category: "course",
    keywords: ["javascript", "js", "node", "react", "coding", "web", "frontend"],
  },
  {
    suggesstion: "Programming",
    suggesstion_to: "/courses/programming",
    Icon: TbDeviceDesktopCode,
    category: "course",
    keywords: ["programming", "coding", "c", "c++", "java", "development"],
  },
  {
    suggesstion: "MS Office",
    suggesstion_to: "/courses/ms-office",
    Icon: RiMicrosoftFill,
    category: "course",
    keywords: ["ms office", "microsoft", "word", "excel", "powerpoint", "outlook"],
  },
  {
    suggesstion: "Tally (Accounting)",
    suggesstion_to: "/courses/tally",
    Icon: MdOutlineCalculate,
    category: "course",
    keywords: ["tally", "accounting", "gst", "finance", "erp", "bookkeeping"],
  },
  {
    suggesstion: "English Speaking",
    suggesstion_to: "/courses/english-speaking",
    Icon: IoLanguageOutline,
    category: "course",
    keywords: ["english", "speaking", "communication", "language", "fluency", "grammar"],
  },
  {
    suggesstion: "Graphic Design",
    suggesstion_to: "/courses/graphic-design",
    Icon: BsStars,
    category: "course",
    keywords: ["graphic", "design", "photoshop", "illustrator", "canva", "creative"],
  },
  {
    suggesstion: "Digital Marketing",
    suggesstion_to: "/courses/digital-marketing",
    Icon: TbMathFunction,
    category: "course",
    keywords: ["digital", "marketing", "seo", "social media", "ads", "google"],
  },
  {
    suggesstion: "Teacher Training (DCA/PGDCA)",
    suggesstion_to: "/courses/dca-pgdca",
    Icon: PiChalkboardTeacherDuotone,
    category: "course",
    keywords: ["dca", "pgdca", "diploma", "computer applications", "teacher"],
  },
];

// ─── Location ─────────────────────────────────────────────────────────────────

const LOCATION_ITEMS: ISearchItem[] = [
  {
    suggesstion: "Find Us on Map",
    suggesstion_to: "https://maps.google.com/?q=Your+Institute+Name", // ← replace with your Google Maps link
    Icon: MdOutlineLocationOn,
    category: "location",
    keywords: ["location", "address", "map", "directions", "find", "where", "navigate"],
    external: true,
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

const SOCIAL_ITEMS: ISearchItem[] = [
  {
    suggesstion: "Instagram",
    suggesstion_to: "https://instagram.com/your-handle", // ← replace
    Icon: FaInstagram,
    category: "social",
    keywords: ["instagram", "social", "follow", "photos", "reels"],
    external: true,
  },
  {
    suggesstion: "Facebook",
    suggesstion_to: "https://facebook.com/your-page", // ← replace
    Icon: FaFacebookF,
    category: "social",
    keywords: ["facebook", "fb", "social", "page", "community"],
    external: true,
  },
  {
    suggesstion: "YouTube",
    suggesstion_to: "https://youtube.com/@your-channel", // ← replace
    Icon: FaYoutube,
    category: "social",
    keywords: ["youtube", "video", "channel", "tutorials", "classes"],
    external: true,
  },
  {
    suggesstion: "WhatsApp",
    suggesstion_to: "https://wa.me/91XXXXXXXXXX", // ← replace with your number
    Icon: FaWhatsapp,
    category: "social",
    keywords: ["whatsapp", "chat", "message", "contact", "enquiry"],
    external: true,
  },
  {
    suggesstion: "LinkedIn",
    suggesstion_to: "https://linkedin.com/company/your-page", // ← replace
    Icon: FaLinkedinIn,
    category: "social",
    keywords: ["linkedin", "professional", "network", "jobs", "career"],
    external: true,
  },
  {
    suggesstion: "Twitter / X",
    suggesstion_to: "https://twitter.com/your-handle", // ← replace
    Icon: FaTwitter,
    category: "social",
    keywords: ["twitter", "x", "tweet", "social", "updates"],
    external: true,
  },
];

// ─── Theme Toggle ─────────────────────────────────────────────────────────────
// Wire `action: "toggle-theme"` in your search handler to call your
// theme context toggle instead of navigating.

const THEME_ITEMS: ISearchItem[] = [
  {
    suggesstion: "Switch to Dark Mode",
    suggesstion_to: "#",
    Icon: MdOutlineDarkMode,
    category: "theme",
    keywords: ["dark", "mode", "theme", "night", "black"],
    action: "toggle-theme",
  },
  {
    suggesstion: "Switch to Light Mode",
    suggesstion_to: "#",
    Icon: MdOutlineLightMode,
    category: "theme",
    keywords: ["light", "mode", "theme", "day", "white"],
    action: "toggle-theme",
  },
];

// ─── Master Export ────────────────────────────────────────────────────────────

export const MAIN_PAGE_SEARCHING_CONFIG: ISearchItem[] = [
  ...PAGE_ITEMS,
  ...COURSE_ITEMS,
  ...LOCATION_ITEMS,
  ...SOCIAL_ITEMS,
  ...THEME_ITEMS,
];

// ─── Category Labels (for section headers in the dropdown) ────────────────────

export const SEARCH_CATEGORY_LABELS: Record<SearchCategory, string> = {
  page: "Pages",
  course: "Courses",
  location: "Location",
  social: "Follow Us",
  theme: "Appearance",
  action: "Actions",
};

// ─── Search Helper ────────────────────────────────────────────────────────────
// Drop-in fuzzy search — call this with the raw input string.

export function searchConfig(query: string): ISearchItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return MAIN_PAGE_SEARCHING_CONFIG;

  return MAIN_PAGE_SEARCHING_CONFIG.filter((item) => {
    const inLabel = item.suggesstion.toLowerCase().includes(q);
    const inKeywords = item.keywords?.some((kw) => kw.includes(q)) ?? false;
    const inCategory = item.category.includes(q);
    return inLabel || inKeywords || inCategory;
  });
}