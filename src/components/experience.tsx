import React from "react";
import { experiences } from "@/components/data";

const Experience = () => {
    return (
        <section className="section-padding" id="experience-section">
            <h2 className="section-title">Experience</h2>
            {experiences.map((exp) => (
                <div key={exp.id} className="flex gap-3 pb-16">
                    <div className="w-1/4">
                        <p className="xp-date"> {exp.start} — {exp.end} </p>
                    </div>
                    <div className='w-3/4'>
                        <h4 className="xp-title">{exp.position} · {exp.company}</h4>
                        <p className="xp-body">
                            {exp.responsibility}
                        </p>
                        <div>
                            {exp.skills.map((item) => (
                                <span key={item} className="xp-skill">{item}</span>
                            ))
                            }
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experience