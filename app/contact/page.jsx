"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaClock, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { motion } from "framer-motion";

const info = [
    {
        icon: <MdEventAvailable />,
        title: "Availability",
        description: "Open to work",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "baraa01damer@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Greater Los Angeles Area, USA",
    },
    {
        icon: <FaClock />,
        title: "Time Zone",
        description: "Pacific Time",
    },
];

// emailjs
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone || "N/A",
            service: formData.service || "Not specified",
            message: formData.message,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,  // Read from .env.local
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Failed to send message.");
            });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Interested in working together? Whether you have a project in mind, need a developer, or just want to connect, please feel free to reach out.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                                <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                                <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
                                <Input type="text" name="phone" placeholder="Phone (optional)" onChange={handleChange} />
                            </div>
                            {/* select */}
                            <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Freelancing">Freelancing</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here."
                                onChange={handleChange}
                            />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;