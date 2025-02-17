"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaNodeJs,
    FaReact,
    FaPython,
    FaStripe,
    FaSpotify
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
            company: "Freelance",
            position: "Freelance Developer",
            duration: "Nov. 2024 - Present",
        },
        {
            company: "Headstarter AI",
            position: "Software Engineering Fellow",
            duration: "Summer 2024",
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
            institution: "Cal State Fullerton",
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
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
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
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
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
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
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
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
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
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;