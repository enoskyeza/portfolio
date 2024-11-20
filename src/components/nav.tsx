import React, {useEffect, useState} from "react";

const Nav = () => {
    const [activeLink, setActiveLink] = useState('about-section');

    const handleLinkClick = (sectionId: string) => {
        setActiveLink(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth"})
    };


    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSectionId = 'about-section';

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 150) {
                currentSectionId = section.getAttribute('id') as string;
            }
        });

        setActiveLink(currentSectionId);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                className={`nav-link-custom ${activeLink === 'experience-section' ? 'active' : ''}`}
                onClick={() => handleLinkClick('experience-section')}
            >
                Experience
            </a>
        </div>
    )
}

export default Nav