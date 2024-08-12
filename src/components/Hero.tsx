import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="py-8">
            <h1 className="text-5xl font-bold pb-4">Mitti Enos Kyeza</h1>
            <h3 className="text-xl font-medium pb-4">Senior FullStack Engineer</h3>
            <p className="font-extralight text-gray-400"
               style={{ width: "280px", lineHeight:"1.6"}}>
                I build software solutions that deliver exceptional user experiences.</p>
            <div className="socials flex gap-5 pt-8">
                <a href="https://github.com/enoskyeza" target="_blank">
                    <FaGithub
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out"
                        size={25}/>
                </a>
                <a href="https://www.linkedin.com/in/enos-kyeza-a48447131/" target="_blank">
                    <FaLinkedin
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out"
                        size={25}/>
                </a>
                <a href="https://www.instagram.com/enoskyeza/" target="_blank">
                    <FaInstagram
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out"
                        size={25}/>
                </a>
            </div>
        </div>
    )
}

export default Hero