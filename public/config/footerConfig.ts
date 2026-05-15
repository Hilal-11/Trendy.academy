import { IconType } from "react-icons"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { RiTwitterXLine } from "react-icons/ri"


interface ServiceConfig {
    service: string,
    navigateTo: string,

}
interface FooterConfigTypes {
    id: number | string
    service_title: string
    services: ServiceConfig[]
}


export const footerConfig: FooterConfigTypes[] = [
    {
        id: "quick-links",
        service_title: "Quick Links",
        services: [
            { service: "Home", navigateTo: "/" },
            { service: "About Us", navigateTo: "/about" },
            { service: "Courses", navigateTo: "/courses" },
            { service: "Admissions", navigateTo: "/admissions" },
            { service: "Faculty", navigateTo: "/faculty" },
            { service: "Software Services", navigateTo: "/software-services" },
            { service: "Contact Us", navigateTo: "/contact" },
        ]
    },

    {
        id: "academics",
        service_title: "Academics",
        services: [
            { service: "All Courses", navigateTo: "/courses" },
            { service: "Upcoming Courses", navigateTo: "/upcoming-courses" },
            { service: "Admissions", navigateTo: "/admissions" },
            { service: "Fee Structure", navigateTo: "/admissions#fee-structure" },
            { service: "Scholarships", navigateTo: "/admissions#scholarships" },
            { service: "Academic Calendar", navigateTo: "/admissions#calendar" },
            { service: "Student Portal", navigateTo: "/student-portal" },
        ]
    },

    {
        id: "explore",
        service_title: "Explore",
        services: [
            { service: "Blog", navigateTo: "/blog" },
            { service: "Gallery", navigateTo: "/gallery" },
            { service: "Testimonials", navigateTo: "/testimonials" },
            { service: "Faculty", navigateTo: "/faculty" },
            { service: "Placement Record", navigateTo: "/placements" },
            { service: "Events", navigateTo: "/events" },
            { service: "Campus Life", navigateTo: "/campus-life" },
        ]
    },

    {
        id: "software-services",
        service_title: "Software Services",
        services: [
            { service: "Web Development", navigateTo: "/software-services#web" },
            { service: "Mobile App Development", navigateTo: "/software-services#mobile" },
            { service: "UI/UX Design", navigateTo: "/software-services#design" },
            { service: "IT Consulting", navigateTo: "/software-services#consulting" },
            { service: "Custom Software", navigateTo: "/software-services#custom" },
            { service: "Request a Quote", navigateTo: "/software-services#quote" },
        ]
    },

    {
        id: "legal",
        service_title: "Legal & Info",
        services: [
            { service: "Privacy Policy", navigateTo: "/privacy-policy" },
            { service: "Terms & Conditions", navigateTo: "/terms" },
            { service: "Refund Policy", navigateTo: "/refund-policy" },
            { service: "Grievance Cell", navigateTo: "/grievance" },
            { service: "Sitemap", navigateTo: "/sitemap" },
        ]
    },
];


interface SocialLinks {
    id: number | string,
    social: string,
    socialIcon?: string,
    link: string,
}

export const socialLinks: SocialLinks[] = [
    {
        id: 1,
        social: "Github",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 2,
        social: "X",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 3,
        social: "Instagram",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 4,
        social: "Discord",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
]


interface ISocialLinks {
    id: string | number,
    Icon: IconType,
    social_name: string,
    social_link: string,

}
export const SOCIAL_LINKS:ISocialLinks[] = [
    {
        id: 1, 
        Icon: FaGithub,
        social_name: 'Github',
        social_link: 'https://github.com/Hilal-11'

    },
        {
        id: 2, 
        Icon: FaInstagram,
        social_name: 'Leetcode',
        social_link: 'https://leetcode.com/u/hilal-11/'
    },
    {
        id: 3, 
        Icon: FaLinkedin,
        social_name: 'Linkedin',
        social_link: 'https://www.linkedin.com/in/hilal-ab5466347/'
    },
    {
        id: 4, 
        Icon: RiTwitterXLine,
        social_name: 'X',
        social_link: 'https://x.com/Hilal3884871845'
    },
    {
        id: 5, 
        Icon: FaInstagram,
        social_name: 'Instagram',
        social_link: 'https://www.instagram.com/local_host_404/'
    },


]