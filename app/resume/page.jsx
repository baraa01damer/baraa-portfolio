"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    aReact,
    FaFigma,
    FaNodeJs,
    FaReact
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Baraa Damer",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) XXX XXXX",
        },
        {
            fieldName: "Experience",
            fieldValue: "12+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "skype_username",
        },
        {
            fieldName: "Nationality",
            fieldValue: "American",
        },
        {
            fieldName: "Email",
            fieldValue: "@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Arabic",
        },
    ]
}

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stacxk Developer",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "California State University, Fullerton",
            degree: "B.S. Computer Science",
            duration: "2022 - 2024",
        },
        {
            institution: "Cypress College",
            degree: "Transfer, Computer Science Major",
            duration: "2019 - 2022",
        },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;