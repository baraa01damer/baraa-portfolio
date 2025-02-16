import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/baraadamer/" },
    { icon: <FaGithub />, path: "https://github.com/Baraa01Damer" },
];

const Social = ({ containterStyles, iconStyles }) => {
    return (
        <div className={containterStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
