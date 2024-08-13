import React from "react";


const Experience = () => {
    return (
        <section className="section-padding" id="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="flex gap-3">
                <div className="w-1/4">
                    <p className="xp-date">2024 - PRESENT</p>
                </div>
                <div className='w-3/4'>
                    <h4 className="xp-title">Senior Frontend Engineer, Accessibility · Klaviyo</h4>
                    <p className="xp-body">
                        As a full-stack software developer, I am passionate about creating beautiful and performant
                        products
                        with delightful user experiences. I have a bachelors degree from Mbarara University of Science
                        and
                        Technology, and I have acquired multiple certifications in Git, GitHub, Python Data Structures
                        and
                        Algorithms, and Software Development Life Cycle from LinkedIn.
                    </p>
                    <div>
                        <span className="xp-skill">Javascript</span>
                        <span className="xp-skill">Typescript</span>
                        <span className="xp-skill">React</span>
                        <span className="xp-skill">Tailwind</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience