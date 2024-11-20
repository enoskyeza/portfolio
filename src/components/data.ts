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
        The Toy Festival App was created for Wokober's annual Toy and Innovation Festival in Uganda. 
        It streamlines the registration and management of participants, payment approvals, and provides a judging dashboard 
        with an automated rubric system for awarding points and calculating winners. 
        The app is integral to the festival's success handling data of over 300 participants. Originally built with Django, 
        it is currently being updated with React, Next.js, and Django Rest Framework.`,
        rating: '300+',
        skills: ['Django', 'React', 'Next.js', 'Django Rest Framework', 'Python', 'Tailwind']
    },
    {
        id: 4,
        img_url: '/entabiro.jpg',
        name: 'Entabiro',
        description: `
        Entabiro is a robust in-house application developed for Farmer's Center Kibuye, a hub providing farm supplies and expert agricultural support. 
        The app streamlines operations by managing sales, tracking fleets, and fostering customer engagement through features like SMS promotions. 
        It also handles customer memberships, enabling discounts and rewards for loyal patrons. 
        Key modules include requisitions management, sales tracking, fleet monitoring, and a customer follow-up system. 
        Deployed on DigitalOcean with Docker, this solution has become indispensable for modernizing the agricultural supply chain.`,
        rating: '800+',
        skills: ['Django Rest Framework', 'React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'DigitalOcean', 'Docker', 'Nginx']
    },
    {
        id: 5,
        img_url: '/wealthcamp.jpg',
        name: 'Ticketing Platform for Wealth Camp Events',
        description: `
        This cutting-edge ticketing platform was created for Wealth Camp Events, a leading event management company in Uganda. 
        The application simplifies ticket sales, event promotion, and user management, providing a seamless experience for organizers and attendees. 
        Its scalable architecture handles high traffic during ticket sales, ensuring reliability. 
        Built with a modern tech stack, the platform integrates secure payment gateways, real-time ticket validation, and detailed analytics for event performance.`,
        rating: '2000+',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Django Rest Framework', 'PostgreSQL', 'DigitalOcean', 'Docker', 'Nginx']
    },
    {
        id: 6,
        img_url: '/locate.jpg',
        name: 'LocateApp',
        description: `
        LocateApp is a user-friendly application that helps individuals discover the best places around them, 
        tailored to their preferences. Whether searching for restaurants, hangout spots, or events, 
        LocateApp offers recommendations backed by detailed reviews, menus, and ticketing information. 
        The app leverages machine learning algorithms to provide personalized suggestions and integrates seamlessly 
        with third-party services to enhance user experiences. Deployed with Docker on DigitalOcean, it’s a go-to platform 
        for urban explorers.`,
        rating: '5000+',
        skills: ['React', 'Next.js', 'Tailwind CSS', 'Django Rest Framework', 'PostgreSQL', 'DigitalOcean', 'Docker', 'Nginx', 'Machine Learning']
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