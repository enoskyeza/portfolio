import React, { useState } from "react";

const Nav = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const links = [
        'About', 'Projects', 'Experience'
    ]

    return (
        <div className="flex flex-col">
            {links.map(link => (
            <a
                key={link}
                className={`nav-link-custom ${activeLink === link ? 'active' : ''}`}
                onClick={() => handleLinkClick(link)}
            >
                {link}
            </a>
            ))}
        </div>
    )
}

export default Nav