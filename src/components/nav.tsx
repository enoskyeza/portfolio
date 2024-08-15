import React, { useState } from "react";

const Nav = () => {
    const [activeLink, setActiveLink] = useState('about-section');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };


    return (
        <div className="flex flex-col">
            <a
                className={`nav-link-custom ${activeLink === 'about-section' ? 'active' : ''}`}
                onClick={() => handleLinkClick('about-section')}
            >
                About
            </a>
            <a
                className={`nav-link-custom ${activeLink === 'project-section' ? 'active' : ''}`}
                onClick={() => handleLinkClick('project-section')}
            >
                Projects
            </a>
            <a
                className={`nav-link-custom ${activeLink === 'exp-section' ? 'active' : ''}`}
                onClick={() => handleLinkClick('exp-section')}
            >
                Experience
            </a>
        </div>
    )
}

export default Nav