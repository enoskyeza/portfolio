import { Experience } from "@/types/experience";
import { Project } from "@/types/project"

export const experiences: Experience[] = [
    {
        id: 1,
        start: '2024',
        end: 'Present',
        position: 'Senior Frontend Engineer, Accessibility',
        company: 'Klaviyo',
        responsibility: `
                        As a full-stack software developer, I am passionate about creating beautiful and performant
                        products
                        with delightful user experiences. I have a bachelors degree from Mbarara University of Science
                        and
                        Technology, and I have acquired multiple certifications in Git, GitHub, Python Data Structures
                        and
                        Algorithms, and Software Development Life Cycle from LinkedIn.`,
        skills: ['Javascript', 'Typescript', 'React', 'Tailwind']
    },
    {
        id: 1,
        start: '2024',
        end: 'Present',
        position: 'Senior Frontend Engineer, Accessibility',
        company: 'Klaviyo',
        responsibility: `
                        As a full-stack software developer, I am passionate about creating beautiful and performant
                        products
                        with delightful user experiences. I have a bachelors degree from Mbarara University of Science
                        and
                        Technology, and I have acquired multiple certifications in Git, GitHub, Python Data Structures
                        and
                        Algorithms, and Software Development Life Cycle from LinkedIn.`,
        skills: ['Javascript', 'Typescript', 'React', 'Tailwind']
    }
]

export const projects: Project[] = [
    {
        id: 1,
        img_url: '/spotify-profile.webp',
        name: 'Spotify Profile',
        description: `
        Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently 
        played tracks, and detailed audio information about each track. Create and save new playlists of 
        recommended tracks based on your existing playlists and more.`,
        rating: '636',
        skills: ['Javascript', 'Typescript', 'React', 'Tailwind']
    }
]