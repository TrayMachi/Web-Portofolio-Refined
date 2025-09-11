export const PERSONAL_INFO = {
    name: "Tristan Agra Yudhistira",
    title: "Software Engineer",
    subtitle: "Computer Science Student",
    email: "tristanagraa@gmail.com",
    cv: "/CV_TristanAgraYudhistira.pdf",
    image: "/Profile/tristan.png",
    imageAlt: "/Profile/tristan2.jpg",
} as const;

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/tristanagra/",
    github: "https://github.com/TrayMachi",
    instagram: "https://www.instagram.com/tristan.agra/",
    x: "https://x.com/TrayMachi",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=tristanagraa@gmail.com",
} as const;

export const EXPERIENCE = [
    {
        id: 1,
        title: "COMPFEST 17 Fasilkom UI",
        position: "Vice Manager of IT-Development Field",
        period: "Jan 2025 – Present",
        description: [
            "Led two divisions, Software Engineering and UI/UX, managing a total of 24 members.",
            "Created and monitored development timelines using Scrum methodology.",
            "Collaborated directly with product owners to understand and refine product requirement documents.",
        ],
    },
    {
        id: 2,
        title: "BETIS Fasilkom UI",
        position: "Vice Person in Charge of Web Development Division",
        period: "Oct 2024 – Mar 2025",
        description: [
            "Led a team of six developers, ensuring smooth code integration and timely delivery to the product owner.",
            "Collaborated closely with other divisions, especially product owners, to align development with project goals.",
            "Implemented a tryout system using Markdown for questions and WebSocket for real-time exam interactions.",
            "Conducted code reviews and provided mentorship to team members to enhance development quality.",
        ],
    },
    {
        id: 3,
        title: "Fasilkom UI",
        position: "Teaching Assistant of Programming Basics 2",
        period: "Jan 2025 – Jun 2025",
        description: [
            "Reviewed students' practice exercises and provided constructive feedback.",
            "Supervised the lab weekly and answered students' questions during lab sessions.",
            "Prepared assistance sessions for exam preparation.",
        ],
    },
    {
        id: 4,
        title: "Economic Space",
        position: "Web Developer Associate (Part Time)",
        period: "Aug 2024 – Apr 2025",
        description: [
            "Developed a website for tutor services in economic fields using Laravel PHP.",
            "Implemented user registration and payment functionalities, including static QR code integration, to enhance user experience.",
            "Led a team of 7 Web Developer Associates, managing code merging and ensuring the delivery of fully functional features.",
        ],
    },
    {
        id: 5,
        title: "Lucas Djaja",
        position: "Backend Developer (Freelancer)",
        period: "Oct 2024 – Jan 2025",
        description: [
            "Developed backend architecture using NestJS and created API documentation for seamless development.",
            "Designed a database following company standards.",
            "Implemented Admin and E-Commerce APIs, integrating a payment gateway, order status management, and a delivery system.",
        ],
    },
    {
        id: 6,
        title: "Ilmu Padi Bisnis TIK Gemastik Team",
        position: "Fullstack Developer Web Project (Freelancer)",
        period: "Aug 2024 – Sep 2024",
        description: [
            "Developed a website to monitor blood sugar levels based on food intake, resulting in 2nd place in the competition.",
            "Implemented barcode OCR to track sugar and calorie intake, visualized with charts.",
            "Developed a membership system with basic and pro user tiers.",
        ],
    },
    {
        id: 7,
        title: "BEM Fasilkom UI",
        position: "Software Engineer Division at Business & Partnership",
        period: "Jun 2024 – Dec 2024",
        description: [
            "Developed a tailored website for an external client, delivering a customized and user-friendly solution that met their specific needs.",
            "Collaborated closely with the client to understand project requirements, ensuring successful implementation and client satisfaction.",
            "Provided training and mentorship to BEM intern staff, enhancing their technical skills and knowledge in web development.",
        ],
    },
    {
        id: 8,
        title: "BEM UI",
        position: "Software Engineer of Multimedia Bureau",
        period: "Mar 2024 – Dec 2024",
        description: [
            'Developed a Multi-Event Recruitment Platform "Sistem Perekrutan Terbuka" using Next.js, enabling multiple organizers to efficiently manage open recruitment for various events.',
            "Integrated Firebase NoSQL for robust data storage and real-time updates, ensuring a scalable and responsive user experience.",
            "Implemented a modern and intuitive user interface utilizing ShadCN and Framer Motion, enhancing the platform's visual appeal and interactivity.",
        ],
    },
    {
        id: 9,
        title: "Open House Fasilkom UI",
        position: "Software Engineer Expert Staff",
        period: "Jul 2024 – Nov 2024",
        description: [
            "Built and optimized a dynamic user interface using Next.js and Tanstack Query, enhancing performance and data handling on the web platform.",
            "Developed a website to introduce Fasilkom UI to the general public, expected to be viewed by over 800 users.",
            "Managed the backend using Hono, Prisma ORM, and Neon for efficient and robust functionality.",
        ],
    },
] as const;

export const EDUCATION = [
    {
        id: 1,
        institution: "Universitas Indonesia",
        degree: "Bachelor of Computer Science",
        period: "2023 - Present",
        description: "Computer Science undergraduate student with focus on Software Engineering",
        gpa: "3.48/4.0",
    },
] as const;

export const PROJECTS = [
    {
        id: 1,
        title: "COMPFEST 17",
        description:
            "Compfest is the biggest student-held IT event in Indonesia. Served as Vice IT Development Manager, leading a cross-functional team of 28 software engineers and UI/UX designers.",
        image: "/Project/COMPFEST.png",
        technologies: ["Scrum", "React Router", "NestJs", "TypeScript"],
        github: "https://compfest.id/",
        isPrivate: true,
        demo: "https://compfest.id/",
    },
    {
        id: 2,
        title: "BETIS 2025",
        description:
            "BETIS is the biggest student-held IT event in Indonesia. Served as Vice IT Development Manager, leading a cross-functional team of 28 software engineers and UI/UX designers.",
        image: "/Project/BETIS.png",
        technologies: ["NextJs", "NestJs", "TypeScript"],
        github:  "https://betis.id/",
        isPrivate: true,
        demo: "https://betis.id/",
    },
    {
        id: 3,
        title: "BinaGuru",
        description:
            "Binaguru, an AI-powered educational platform that empowers teachers to enhance their teaching skills through personalized, auto-generated course content.",
        image: "/Project/BINAGURU.png",
        technologies: ["React Router", "HonoJs", "TypeScript"],
        github: "https://github.com/TrayMachi/binaguru-fe",
        isPrivate: false,
        demo: "https://binaguru-fe.fly.dev/",
    },
] as const;

export const SKILLS = {
    frontend: [
        { name: "React", icon: "/Skills/fe/react.png" },
        { name: "React Router", icon: "/Skills/fe/rr7.svg" },
        { name: "Next.js", icon: "/Skills/fe/nextjs.png" },
        { name: "Expo React Native", icon: "/Skills/fe/expo.svg" },
        { name: "SvelteKit", icon: "/Skills/fe/svelte.png" },
        { name: "Nuxt", icon: "/Skills/fe/nuxt.svg" },
        { name: "TypeScript", icon: "/Skills/fe/typescript.png" },
        { name: "Tailwind CSS", icon: "/Skills/fe/tailwind.png" },
        { name: "Framer Motion", icon: "/Skills/fe/framer.png" },
        { name: "Shadcn UI", icon: "/Skills/fe/shadcnui.png" },
        { name: "GSAP", icon: "/Skills/fe/gsap.png" },
    ],
    backend: [
        { name: "NestJS", icon: "/Skills/be/nestjs.png" },
        { name: "HonoJS", icon: "/Skills/be/hono.png" },
        { name: "Spring Boot", icon: "/Skills/be/springboot.png" },
        { name: "Laravel", icon: "/Skills/be/laravel.png" },
        { name: "Ruby on Rails", icon: "/Skills/be/rubyrails.png" },
        { name: "Golang", icon: "/Skills/be/golang.webp" },
        { name: "ElysiaJS", icon: "/Skills/be/elysia.svg" },
        { name: "Express.js", icon: "/Skills/be/expressjs.png" },
        { name: "Python", icon: "/Skills/be/python.png" },
        { name: "TypeScript", icon: "/Skills/fe/typescript.png" },
        { name: "Django", icon: "/Skills/be/django.svg" },
        { name: "Java", icon: "/Skills/be/java.png" },
    ],
    devops: [
        { name: "Google Cloud", icon: "/Skills/devops/gcp.webp" },
        { name: "Firebase", icon: "/Skills/devops/firebase.png" },
        { name: "AWS", icon: "/Skills/devops/amazon.png" },
        { name: "Docker", icon: "/Skills/devops/docker.png" },
        {name: "Kubernetes", icon: "/Skills/devops/kubernetes.png" },
        {name: "NGINX", icon: "/Skills/devops/nginx.png" },
        {name: "Cloudflare", icon: "/Skills/devops/cloudflare.png" },
        

    ],
} as const;

export const TYPING_STRINGS = [
    "Software Engineer.",
    "Mobile Developer.",
    "Full Stack Developer.",
    "Dev Ops.",
    "Computer Science Student.",
] as const;

export const SECTION_IDS = {
    home: "home",
    about: "about",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    contact: "contact",
} as const;
