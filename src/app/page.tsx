'use client';
import Hero from "@/components/Hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Blog from "@/components/blog";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const glow = document.querySelector('.mouse-glow') as HTMLElement | null;

        const handleMouseMove = (event: MouseEvent) => {
            if (glow) {
                const {clientX: x, clientY: y} = event;
                const scrollX = window.scrollX;
                const scrollY = window.scrollY;
                glow.style.transform = `translate(${x - 250 + scrollX}px, ${y - 250 + scrollY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <main className="bg-custom min-h-screen p-12">
            <div className="mouse-glow hidden lg:block"></div>
            <div className="relative mx-auto lg:flex max-w-6xl px-8">
                <div className="hero-container">
                    <Hero/>
                </div>
                <div className="copy-container">
                    <About/>
                    <Project/>
                    <Experience/>
                    <Blog/>
                </div>
            </div>
        </main>
    );
}
