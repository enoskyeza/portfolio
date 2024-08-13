'use client';
import Hero from "@/components/Hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Blog from "@/components/blog";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const glow = document.querySelector('.mouse-glow') as HTMLElement | null;

        const handleMouseMove = (event: MouseEvent) => {
            if (glow) {
                const { clientX: x, clientY: y } = event;
                const scrollX = window.scrollX;
                const scrollY = window.scrollY;
                glow.style.transform = `translate(${x - 100 + scrollX}px, ${y - 100 + scrollY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col p-12">
            <div className="mouse-glow"></div>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Blog />
        </main>
    );
}
