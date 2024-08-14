import React from "react";
import {experiences} from "@/components/data";
import {FaCloudDownloadAlt} from "react-icons/fa";
import {MdOutlineArrowOutward} from "react-icons/md";

const Experience = () => {
    return (
        <section className="section-padding" id="experience-section">
            <h2 className="section-title">Experience</h2>
            {experiences.map((exp) => (
                <div key={exp.id} className="sm:flex gap-3 pb-16">
                    <div className="sm:w-1/4 mb-3 sm:mb-0">
                        <p className="xp-date"> {exp.start} — {exp.end} </p>
                    </div>
                    <div className='sm:w-3/4'>
                        <h4 className="xp-title">
                            {exp.position} · {exp.company}
                            <MdOutlineArrowOutward  className="mb-0.5 ms-1"/>
                        </h4>
                        <p className="xp-body">
                            {exp.responsibility}
                        </p>
                        <div className="flex flex-wrap">
                            {exp.skills.map((item) => (
                                <div key={item} className="xp-skill">{item}</div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            ))}
            <h4 className="xp-link flex items-end hover:items-start hover:gap-3.5">
                Download Full Résumé
                <MdOutlineArrowOutward  className="mb-0.5 -ms-1.5"/>
            </h4>
        </section>
    )
}

export default Experience