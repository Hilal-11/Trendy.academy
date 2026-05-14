import { MdOutlineComputer } from "react-icons/md";
import { PiCertificateDuotone } from "react-icons/pi";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { LiaBlogSolid } from "react-icons/lia";
import { LuMessageCircleWarning } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";

interface IMAIN_PAGE_SERCHING {
    suggesstion: string,
    suggesstion_to: string,
    Icon: React.ElementType
}

export const MAIN_PAGE_SEARCHING_CONFIG: IMAIN_PAGE_SERCHING[] = [
    {
        suggesstion: "All Courses",
        suggesstion_to: "/courses",
        Icon: LuBookOpenCheck
    },
    {
        suggesstion: "Basic Computer",
        suggesstion_to: "/courses/basic-computer",
        Icon: MdOutlineComputer
    },
    {
        suggesstion: "CCC Course",
        suggesstion_to: "/courses/ccc",
        Icon: PiCertificateDuotone
    },
    {
        suggesstion: "Data Entry",
        suggesstion_to: "/courses/data-entry",
        Icon: BsPersonWorkspace
    },
    {
        suggesstion: "Web Development",
        suggesstion_to: "/courses/web-development",
        Icon: TbDeviceDesktopCode
    },
    {
        suggesstion: "Data Analyst",
        suggesstion_to: "/courses/data-analyst",
        Icon: BsGraphUpArrow
    },
    {
        suggesstion: "Programming",
        suggesstion_to: "/courses/programming",
        Icon: TbDeviceDesktopCode
    },
    {
        suggesstion: "Admissions",
        suggesstion_to: "/admissions",
        Icon: PiStudentDuotone
    },
    {
        suggesstion: "Verify Certificate",
        suggesstion_to: "/verify-certificate",
        Icon: MdOutlineVerified
    },
    {
        suggesstion: "Results",
        suggesstion_to: "/results",
        Icon: MdOutlineVerified
    },
    {
        suggesstion: "Notice Board",
        suggesstion_to: "/notices",
        Icon: MdOutlineNotificationsActive
    },
    {
        suggesstion: "Faculty",
        suggesstion_to: "/faculty",
        Icon: GiTeacher
    },
    {
        suggesstion: "Gallery",
        suggesstion_to: "/gallery",
        Icon: MdOutlinePhotoLibrary
    },
    {
        suggesstion: "About Us",
        suggesstion_to: "/about",
        Icon: LuMessageCircleWarning
    },
    {
        suggesstion: "Our Team",
        suggesstion_to: "/team",
        Icon: RiTeamLine
    },
    {
        suggesstion: "Blogs",
        suggesstion_to: "/blogs",
        Icon: LiaBlogSolid
    },
    {
        suggesstion: "Contact Us",
        suggesstion_to: "/contact",
        Icon: LuMessageCircleWarning
    },
]