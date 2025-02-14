import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/baraadamer/" },
    { icon: <FaGithub />, path: "https://github.com/Baraa01Damer" },
    // { icon: <FaYoutube />, path: "" },
    // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containterStyles, iconStyles }) => {
    return (
        <div className={containterStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social