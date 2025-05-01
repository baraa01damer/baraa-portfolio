"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Baraa01Damer";

{/* get # of code commits from github */ }
const Stats = () => {
    const [commitCount, setCommitCount] = useState(0);

    useEffect(() => {
        const fetchCommitCount = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
                    {
                        headers: {
                            Accept: "application/vnd.github.v3+json",
                        },
                    }
                );
                const data = await response.json();
                if (data.total_count) {
                    setCommitCount(data.total_count);
                }
            } catch (error) {
                console.error("Error fetching commit count:", error);
            }
        };

        fetchCommitCount();
    }, []);

    const stats = [
        {
            num: 4,
            text: "Projects completed",
        },
        {
            num: commitCount || 172, // Fallback to this number if the API fails
            text: "Code commits",
        },
    ];

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                        } leading-snug text-white/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};

export default Stats;