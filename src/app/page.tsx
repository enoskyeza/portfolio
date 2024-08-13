import Hero from "@/components/Hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/project";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-12">
            <Hero/>
            <About/>
            <Project />
            <Experience />
        </main>
    );
}
