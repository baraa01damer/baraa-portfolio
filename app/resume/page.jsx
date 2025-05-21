"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaNodeJs,
    FaReact,
    FaPython,
    FaStripe,
    FaSpotify,
    FaChevronDown
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiFirebase,
    SiVercel,
    SiMui,
    SiShadcnui,
    SiOpenai,
    SiClerk,
    SiTypescript,
    SiSupabase
} from "react-icons/si";

// about data
const about = {
    title: "About me",
    //    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Baraa Damer",
        },
        //        {
        //            fieldName: "Experience",
        //            fieldValue: "12+ Years",
        //        },
        {
            fieldName: "Email",
            fieldValue: "baraa01damer@gmail.com",
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
    title: 'My Experience',
    //    description:
    //        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            company: "STEM Heroes Academy",
            position: "Software Developer & Robotics Programming Instructor",
            duration: "Jan 2025 - Present",
        },
        {
            company: "Headstarter",
            position: "Software Engineering Fellow",
            duration: "June 2024 - Sep 2024",
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    //    description:
    //        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "CSU Fullerton",
            degree: "B.S. in Computer Science",
            duration: "May 2025",
            coursework: [
                {
                    name: "Artificial Intelligence",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=91&coid=575067"
                },
                {
                    name: "Game Design and Production",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=80&coid=538070"
                },
                {
                    name: "Machine Learning",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=91&coid=575068"
                },
                {
                    name: "Network Security",
                    url: "https://catalog.nocccd.edu/search/?edition=2022-2023&archivepath=%2Farchive%2F2022-2023&caturl=%2Fcypress-college&search=CIS+195"
                },
                {
                    name: "Software Development with Open Source Systems",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=80&coid=538063"
                },
                {
                    name: "Web Back-End Engineering",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=91&coid=575066"
                },
                {
                    name: "Web Front-End Engineering",
                    url: "https://catalog.fullerton.edu/preview_course.php?catoid=80&coid=540712"
                }
            ]
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    categories: [
        {
            category: "Languages",
            skillList: [
                {
                    icon: <FaHtml5 />,
                    name: "HTML"
                },
                {
                    icon: <FaCss3 />,
                    name: "CSS"
                },
                {
                    icon: <FaJs />,
                    name: "JavaScript"
                },
                {
                    icon: <FaPython />,
                    name: "Python"
                },
                {
                    icon: <SiTypescript />,
                    name: "Typescript"
                },
            ],
        },
        {
            category: "Frameworks & Libraries",
            skillList: [
                {
                    icon: <SiNextdotjs />,
                    name: "Next.js"
                },
                {
                    icon: <FaNodeJs />,
                    name: "Node.js"
                },
                {
                    icon: <FaReact />,
                    name: "React"
                },
            ],
        },
        {
            category: "UI Libraries",
            skillList: [
                {
                    icon: <SiMui />,
                    name: "Material UI"
                },
                {
                    icon: <SiShadcnui />,
                    name: "shadcn/ui"
                },
                {
                    icon: <SiTailwindcss />,
                    name: "Tailwind CSS"
                },
            ],
        },
        {
            category: "APIs",
            skillList: [
                {
                    icon: <SiClerk />,
                    name: "Clerk API"
                },
                {
                    icon: <SiOpenai />,
                    name: "OpenAI API"
                },
                {
                    icon: <FaSpotify />,
                    name: "Spotify API"
                },
                {
                    icon: <FaStripe />,
                    name: "Stripe API"
                },
            ],
        },
        {
            category: "Hosting & Backend Services",
            skillList: [
                {
                    icon: <SiFirebase />,
                    name: "Firebase"
                },
                {
                    icon: <SiSupabase />,
                    name: "Supabase"
                },
                {
                    icon: <SiVercel />,
                    name: "Vercel"
                },
            ],
        },
    ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

const Resume = () => {
    const [expandedEducation, setExpandedEducation] = useState(null);

    const toggleEducation = (index) => {
        if (expandedEducation === index) {
            setExpandedEducation(null);
        } else {
            setExpandedEducation(index);
        }
    };

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
                    </TabsList>

                    {/* content */}
                    <ScrollArea className="h-[80vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full pr-4">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between text-left gap-2"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl font-mono break-words">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full pr-4">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    <ScrollArea className="h-[400px] w-full rounded-xl">
                                        <ul className="pr-4">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.degree}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                        {item.coursework && (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleEducation(index)}
                                                                    className="mt-2 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                                                                >
                                                                    <span>Relevant Coursework</span>
                                                                    <motion.div
                                                                        animate={{ rotate: expandedEducation === index ? 180 : 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        <FaChevronDown className="text-sm" />
                                                                    </motion.div>
                                                                </button>
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{
                                                                        height: expandedEducation === index ? "auto" : 0,
                                                                        opacity: expandedEducation === index ? 1 : 0,
                                                                    }}
                                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                    className="overflow-hidden w-full"
                                                                >
                                                                    <div className="pt-4 grid grid-cols-1 gap-2 text-sm text-white/80">
                                                                        {item.coursework.map((course, courseIndex) => (
                                                                            <div key={courseIndex} className="flex items-center gap-2 text-left w-full">
                                                                                <span className="w-[4px] h-[4px] rounded-full bg-accent flex-shrink-0"></span>
                                                                                <a
                                                                                    href={course.url}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="text-left hover:text-accent transition-colors"
                                                                                >
                                                                                    {course.name}
                                                                                </a>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            </>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full pr-4">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                {skills.categories.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="mb-8">
                                        <h4 className="text-2xl font-semibold mb-4">{category.category}</h4>
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                            {category.skillList.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left pr-4">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </ScrollArea>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;