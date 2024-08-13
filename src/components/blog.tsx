import React from "react";
import { blogs } from "@/components/data";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";

const Blog = () => {
    return (
        <section className="section-padding" id="blog-section">
            <h2 className="section-title">Blog</h2>

            {blogs.map((item) => (
                <div key={item.id} className="flex gap-3 pb-16">
                    <div className="w-1/4">
                        <Image
                            src={item.thumbnail}
                            alt={item.date}
                            width={200}
                            height={200}
                            className="project-img"
                        />
                    </div>
                    <div className='w-3/4 flex flex-col justify-center'>
                        <p className="xp-date"> {item.date} </p>
                        <h4 className="xp-title">{item.title}</h4>
                    </div>
                </div>
            ))}
            <h4 className="xp-link items-center hover:gap-5">
                View All Posts
                <FaArrowRight />
            </h4>
        </section>
    )
}

export default Blog