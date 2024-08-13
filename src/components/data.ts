import { Experience } from "@/types/experience";
import { Project } from "@/types/project"
import { Blog } from "@/types/blog";

export const experiences: Experience[] = [
    {
        id: 1,
        start: 'Mar 2023',
        end: 'Sep 2023',
        position: 'Remote Django Developer',
        company: 'FemiSpace',
        responsibility: `
            As a Django Developer at FemiSpace, I contributed to the development, deployment and maintenance of RESTful APIs 
            using Django Rest Framework. My role also involved engaging in team code reviews to ensure code quality and 
            integrity, and implementing Swagger for comprehensive API documentation.
        `,
        skills: ['Python', 'Django', 'Django Rest Framework', 'API Development', 'Swagger', 'Code Reviews', 'CI/CD', 'Digital Ocean' ]

    },
    {
        id: 2,
        start: '2022',
        end: 'Present',
        position: 'CEO & Senior Developer',
        company: 'Jitu Technologies',
        responsibility: `
            Led Jitu Technologies, managing and executing a range of project-based contracts for various clients. 
            Key projects include:
             **LabPro:** A lab management system.
             **Certification and Verification Software:** Developed for Prestige Driving School Uganda.
             **Toy Festival App:** developed for Wokober. 
             **Websites** for various clients from 2020 to present. 
            Oversaw project planning, development, and delivery, ensuring high-quality results and client satisfaction.`,
        skills: ['Project Management', 'Leadership', 'Python', 'Django', 'React', 'Next.js', 'Tailwind CSS', 'Docker', 'AWS', 'Git']
    }
]



export const projects: Project[] = [
    {
        id: 1,
        img_url: '/labpro.jpg',
        name: 'LabPro',
        description: `
        LabPro is a comprehensive lab management system that has been in production since August 2022. 
        It automates and improves key laboratory processes, including report generation, sample collection, and test requests. 
        Built with a robust stack including Python, Django, MySQL, and Docker. LabPro is deployed on AWS with Nginx. 
        The system has significantly increased the efficiency and quality of laboratory operations.`,
        rating: '10950+',
        skills: ['Python', 'Django', 'MySQL', 'Docker', 'Nginx', 'AWS', 'JavaScript', 'Bootstrap']
    },
    {
        id: 2,
        img_url: '/certapp.jpg',
        name: 'Certification and Verification Software',
        description: `
        This software, developed for Prestige Driving School Uganda, addresses the issue of certificate fraud by implementing a secure certification process. 
        The system includes student management, course enrollment, and certificate generation with secure QR codes for authentication. 
        It also features a verification portal where users can verify the authenticity of certificates either through an ID or by scanning the QR code. 
        The software is actively handling over 600 students.`,
        rating: '600+',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Django Rest Framework', 'Python', 'PostgreSQL']
    },
    {
        id: 3,
        img_url: '/toyapp.jpg',
        name: 'Toy Festival App',
        description: `
        The Toy Festival App was created for Wokober's annual Toy Making and Innovation Festival in Uganda. 
        It streamlines the registration and management of participants, payment approvals, and provides a judging dashboard 
        with an automated rubric system for awarding points and calculating winners. 
        The app is integral to the festival's success handling data of over 300 participants. Originally built with Django, 
        it is currently being updated with React, Next.js, and Django Rest Framework.`,
        rating: '300+',
        skills: ['Django', 'React', 'Next.js', 'Django Rest Framework', 'Python', 'Tailwind']
    }
]


export const blogs: Blog[] = [
    {
        id: 1,
        thumbnail: '/algolia-search.webp',
        date: '2024',
        title: 'Creating my first portfolio'
    }
]