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
            { service: "Contact Us", navigateTo: "/contact" },
            { service: "Gallery", navigateTo: "/gallery" },
            { service: "Blogs", navigateTo: "/blogs" },
            { service: "Trendy Location", navigateTo: "/contact" },


        ]
    },

    {
        id: "academics",
        service_title: "Academics",
        services: [
            { service: "All Courses", navigateTo: "/courses" },
            { service: "Upcoming Courses", navigateTo: "/upcoming-courses" },
            { service: "Admissions", navigateTo: "/admissions" },
            { service: "Fee Structure", navigateTo: "#" },
            { service: "Scholarships", navigateTo: "#" },
            { service: "Academic Calendar", navigateTo: "#" },
            { service: "Student Portal", navigateTo: "#" },
        ]
    },

    {
    id: "Courses",
    service_title: "Courses",
    services: [
        { service: "All Courses", navigateTo: "/courses" },
        { service: "Basic Computer", navigateTo: "/courses" },
        { service: "CCC Course", navigateTo: "/courses" },
        { service: "Data Entry", navigateTo: "/courses" },
        { service: "Web Development", navigateTo: "/courses" },
        { service: "Frontend Development", navigateTo: "/courses" },
        { service: "Data Analytics", navigateTo: "/courses" },
        { service: "Python Programming", navigateTo: "/courses" },
        { service: "JavaScript", navigateTo: "/courses" },
        { service: "Programming", navigateTo: "/courses" },
        { service: "MS Office", navigateTo: "/courses" },
        { service: "Tally (Accounting)", navigateTo: "/courses" },
        { service: "English Speaking", navigateTo: "/courses" },
        { service: "Teacher Training (DCA/PGDCA)", navigateTo: "/courses" },
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