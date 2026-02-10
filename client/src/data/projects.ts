import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSupabase, SiHtml5, SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.gif"

export const PROJECTS = [
    {
        id: 1,
        title: "PORTFOLIO WEBSITE",
        link: "https://github.com/Hubertcior/portfoliov2",
        description: "A personal portfolio website built with React and .Net, showcasing projects and skills with a modern design.",
        imageSrc: proj1,
        imgAlt: "Portfolio Website",
        techs: [
            { icon: FaReact, name: "React", color: "text-blue-500 border-blue-500/20" },
            { icon: SiTypescript, name: "TypeScript", color: "text-blue-600 border-blue-600/20" }, 
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500 border-teal-500/20" },
            { icon: AiOutlineDotNet, name: ".Net", color: "text-gray-500 border-gray-500/20" },
            { icon: TbBrandCSharp, name: "C#", color: "text-purple-500 border-purple-500/20" },
        ]
    },
    {
        id: 2,
        title: "WORLD WAR II TIME LINE",
        link: "https://github.com/Hubertcior/ww2-timeline",
        description: "A World War II timeline application built with React, providing historical insights and interactive features.",
        imageSrc: proj2,
        imgAlt: "World War II Time Line",
        techs: [
            { icon: FaReact, name: "React", color: "text-blue-500 border-blue-500/20" },
            { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-500 border-yellow-500/20" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500 border-teal-500/20" },
        ]
    },
    {
        id: 3,
        title: "FOOTBALL EXPLORER",
        link: "https://github.com/Hubertcior/footballcards",
        description: "A football exploration application built with React and SupaBase, providing insights and interactive features.",
        imageSrc: proj3,
        imgAlt: "Football Explorer",
        techs: [
            { icon: FaReact, name: "React", color: "text-blue-500 border-blue-500/20" },
            { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-500 border-yellow-500/20" },
            { icon: SiSupabase, name: "Supabase", color: "text-green-500 border-green-500/20" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500 border-teal-500/20" },
        ]
    },
]

export const TECH_STACK = [
    { icon: SiHtml5, name: "HTML5", color: "text-red-500 border-red-500/20" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500 border-blue-500/20" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600 border-blue-600/20" }, 
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-yellow-500 border-yellow-500/20" },
    { icon: FaReact, name: "React", color: "text-blue-500 border-blue-500/20" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500 border-teal-500/20" },   
    { icon: SiSupabase, name: "Supabase", color: "text-green-500 border-green-500/20" },
    { icon: TbSql, name: "SQL", color: "text-orange-500 border-orange-500/20" },
    { icon: AiOutlineDotNet, name: ".Net", color: "text-gray-500 border-gray-500/20" },
    { icon: TbBrandCSharp, name: "C#", color: "text-purple-500 border-purple-500/20" },
]