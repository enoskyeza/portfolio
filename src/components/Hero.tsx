import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <h1>Mitti Enos Kyeza</h1>
            <h3>Senior FullStack Engineer</h3>
            <p>I build functional and user-friendly software solutions</p>
            <div className="socials flex">
                <a href="#"><FaGithub height={20}/></a>
                <a href="#"><FaLinkedin height={20}/></a>
                <a href="#"><FaInstagram height={20}/></a>
            </div>
        </div>
    )
}

export default Hero