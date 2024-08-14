import React from "react";
import {projects} from "@/components/data";
import {FaArrowRight} from "react-icons/fa6";
import {FaStar} from "react-icons/fa";
import {MdOutlineArrowOutward} from "react-icons/md";
import Image from "next/image";

const Project = () => {
    return (
        <section className="section-padding" id="project-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects">
                {projects.map((item) => (
                    <div key={item.id} className="sm:flex gap-3 pb-16 lg:lg-hover group">
                        <div className='order-last sm:w-3/4'>
                            <h4 className="xp-title">
                                {item.name}
                                <MdOutlineArrowOutward className="mb-0.5 ms-1"/>
                            </h4>
                            <p className="xp-body">
                                {item.description}
                            </p>

                            {item.rating &&
                                <div
                                    className="font-extralight text-sm -mt-3 mb-5 leading-relaxed text-gray-300
                                            items-center flex gap-2">
                                    <FaStar/>
                                    <p className="pt-1">{item.rating}</p>
                                </div>
                            }

                            <div className="flex flex-wrap">
                                {item.skills.map((skill, index) => (
                                    <div key={index} className="xp-skill">{skill}</div>
                                ))
                                }
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:w-1/4">
                            <Image
                                src={item.img_url}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="project-img"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <h4 className="xp-link items-center hover:gap-5 lg:mt-6">
                View Full Projects Archive
                <FaArrowRight/>
            </h4>
        </section>
    )
}

export default Project