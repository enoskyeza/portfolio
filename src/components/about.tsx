import React from "react";

const About = () => {
    return (
        <section className="section-padding" id="about-section">
            <h2 className="uppercase pb-8">About</h2>
            <p className="font-extralight text-gray-400"
               style={{lineHeight:"1.6"}}>
                As a full-stack software developer, I am passionate about creating beautiful and performant products
                with delightful user experiences. I have a bachelors degree from Mbarara University of Science and
                Technology, and I have acquired multiple certifications in Git, GitHub, Python Data Structures and
                Algorithms, and Software Development Life Cycle from LinkedIn.
                <br /> <br />

                Currently, I am working as a Django Developer at <a href="#" className="font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 ease-in-out">FemiSpace</a>, a platform that connects women with health
                and wellness professionals, and as a Software Developer at <a href="#" className="font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 ease-in-out">FineLife Laboratories</a>, a leading provider of
                clinical and diagnostic services. At FineLife Laboratories, I architectured and implemented <a href="#" className="font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 ease-in-out">LabPro</a>, a
                laboratory management system that automates and streamlines many processes, such as report generation,
                sample collection, and test requesting. I solely worked on both the back-end and front-end of LabPro,
                using Python, Django, MySQL, HTML, CSS, Bootstrap, React, and Git. I also packaged the application with
                Docker and deployed it on AWS with Nginx.
                <br /> <br />

                LabPro is currently in production and has improved the
                efficiency and quality of the laboratory operations. I am also maintaining the system, utilizing the Git
                workflow to manage issue reporting, testing, and deployment.
            </p>
        </section>
    )
}

export default About