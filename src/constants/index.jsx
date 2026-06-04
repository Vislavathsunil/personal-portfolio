import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaGitAlt,
} from "react-icons/fa6";

import projectImage1 from "../assets/projectImages/project1.png";
import projectImage2 from "../assets/projectImages/project2.png";
import projectImage3 from "../assets/projectImages/project3.png";
import projectImage4 from "../assets/projectImages/project4.png";
import projectImage5 from "../assets/projectImages/project5.png";
import projectImage6 from "../assets/projectImages/project6.png";






// Skills Icons
import { RiReactjsLine, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiShadcnui } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Certificates Images
import frontend from "../assets/Cerificates/frontend.png";
import mongodb from "../assets/Cerificates/mongodb.png";
import dynamic from "../assets/Cerificates/dynamic.png";
import aproxim from "../assets/Cerificates/aproxim.png";
// import three from "../assets/Cerificates/three.png";






export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Bio", href: "#bio" },
  { label: "Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },

  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Vislavath Sunil",
  greet: "Hello World! It's me,",
  role: "Frontend Developer|",
  description: "Frontend Developer focused on React & JavaScript.js — I build fast, accessible, and visually sharp interfaces. I care about performance as much as design. Open to exciting opportunities."

};

export const PROJECTS = [
  {
    id: 1,
    name: "Restaurant Landing Page",
    description:
      "This restaurant landing page, built with React.js, Tailwind CSS, and Framer Motion, offers a modern, responsive design with smooth animations for a seamless user experience.",
    image: projectImage1,
    githubLink: "https://restaurant-landing-page-zeta-rosy.vercel.app/",
  },

  {
    id: 2,
    name: "Ochi Landing Page",
    description: "Ochi is a modern website built with React.js, Tailwind CSS, and Framer Motion, featuring a sleek UI, smooth animations, and a fully responsive design for an engaging user experience.",
    image: projectImage2,
    githubLink: "https://ochi-landing-page.vercel.app/",
  },
  {
    id: 3,
    name: "Gym Landing Page",
    description:
      "Evogym is a modern fitness website built with React, Tailwind CSS, and Framer Motion, featuring sleek animations, responsive design, and dynamic content for an engaging user experience.",
    image: projectImage3,
    githubLink: "https://evogym-landing-page-five.vercel.app/",
  },
  {
    id: 4,
    name: "Job Portal Application",
    description:
      "This website developed using React.js, Tailwind CSS, and Shadcn for a responsive frontend, with Clerk for secure user management and Supabase for real-time backend, creating a fast and scalable platform.",
    image: projectImage4,
    githubLink: "https://hirrd-rouge.vercel.app/",
  },
  // {
  //   id: 5,
  //   name: "Google Flights",
  //   description:
  //     "Google Flights helps users search and compare flight options and prices across airlines.It allows users to search, compare, and book flights based on price, duration, and airline preferences.",
  //   image: projectImage5,
  //   githubLink: "https://google-flights-pi.vercel.app/",
  // },
  // {
  //   id: 6,
  //   name: "URL Summarizer AI",
  //   description: "Summarizer AI is a SaaS tool that turns website URLs into AI-generated summaries. Built with React JS, Tailwind CSS, and Rapid API, it offers a fast, responsive user experience for summarizing web content.",
  //   image: projectImage6,
  //   githubLink: "https://summerize-ai-sigma.vercel.app/",
  // },
];

export const BIO = [
  "Skilled in HTML, CSS, and JavaScript with hands-on experience in React.js, building responsive, interactive, and optimized web applications.",
  "Eager to step into the professional world, I’m driven to apply my technical skills and creativity toward building innovative, user-centric web applications.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    // experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    // experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    // experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    // experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    // experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    // experience: "1+ year",
  },
];

export const MySkills = [
  {
    title: "Web Technologies",
    Icons: [
      {
        icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-4xl" />,
        name: "HTML",
      },
      {
        icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-4xl" />,
        name: "CSS",
      },
      {
        icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-4xl" />,
        name: "JavaScript",
      },
  
      {
        icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-4xl" />,
        name: "React JS",
      },
      {
        icon: <SiTypescript className="text-4xl text-blue-500 lg:text-4xl" />,
        name: "TypeScript",
      },
      {
        icon: <FaNodeJs className="text-4xl text-green-600 lg:text-4xl" />,
        name: "Node.js",
      },


    ]

  },
  {
    title: "Frameworks",
    Icons: [
      {
        icon: <RiTailwindCssFill className="text-4xl text-cyan-500 lg:text-4xl" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiShadcnui className="text-4xl text-white bg-black lg:text-4xl p-2 rounded-md" />,
        name: "Shadcn"
      },
      {
        icon: <TbBrandFramerMotion className="text-4xl text-cyan-300 bg-transparent lg:text-5xl p-2 rounded-md" />,
        name: "Framer Motion"
      },
    ]
  },
  {
    title: "Databases",
    Icons: [
      {
        icon: <SiMongodb className="text-4xl text-green-600 lg:text-4xl" />,
        name: "MongoDB Atlas"
      },
      // {
      //   icon: <RiSupabaseFill className="text-4xl text-green-600 lg:text-5xl" />,
      //   name: "Supabase"
      // },
    ]
  },
  {
    title: "Technical Tools",
    Icons: [
      {
        icon: <VscVscode className="text-4xl text-cyan-500 lg:text-4xl" />,
        name: "VS Code"
      },
      {
        icon: <FaGithub className="text-4xl text-white lg:text-4xl" />,
        name: "Github"
      },
      {
        icon: <FaGitAlt className="text-4xl text-orange-600 lg:text-4xl" />,
        name: "Git"
      },


    ]

  }
]


export const EXPERIENCES = [
  {
    title: "Graduate Engineering Trainee",
    company: "Sagar Defence Engineering  ",
    duration: "March 2026 - Present",
    description: [
      "Developed interactive web applications using React.js, integrating dynamic UI components with efficient state management",
      "Built real-time 3D visualizations using React Fiber, enabling immersive and responsive graphical experiences in the browser",
      "Integrated physics-based simulations using cannon-es, implementing realistic motion, collision detection, and object interactions",
      "Optimized rendering performance and asset handling in complex 3D environments, ensuring smooth user experience and reduced latency"
    ],

  },
  {
    title: "MERN Stack",
    company: "Cipher Schools ",
    duration: "June 2024 - August 2024",
    description: [
      " Engineered end-to-end web features using React.js and Node.js, delivering responsive interfaces for 1000+ users, connected to reliable backend APIs with 99% uptime",
      "Built and optimized RESTful APIs with efficient MongoDB database queries, reducing data fetch times by 40% across high-traffic sections handling 50,000+ daily requests",
      "Implemented role-based authentication for student, instructor, and admin users, managing secure session handling and reducing unauthorized access incidents by 90% across the application",
      "Streamlined frontend component structure and state management across 20+ reusable components, reducing redundant code by 35% and cutting average feature delivery time by 25%",


    ]

  },
  // {
  //   title: "Frontend Engineer",
  //   company: "Digital Creations",
  //   duration: "February 2016 - June 2020",
  //   description:
  //     "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  // },
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "August 2014 - January 2016",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University  ",
    duration: "September 2022 - Jun 2026",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Intermediate ",
    institution: "Prathibha Junior College",
    duration: "June 2020 - May 2022",
    description:
      "Completed Intermediate education with a strong foundation in Mathematics, Physics, and Chemistry, fostering analytical and problem-solving skills essential for a career in technology."
  },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80 text-4xl md:text-2xl" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80 text-4xl md:text-2xl" />,
  // },
  {
    href: "https://www.linkedin.com/in/sunil2004/",
    icon: <FaLinkedin fontSize={25} className="hover:text-blue-600 text-3xl sm:text-3xl " />,
  },
  {
    href: "https://github.com/Vislavathsunil",
    icon: <FaGithub fontSize={25} className=" text-3xl sm:text-3xl" />,
  },
  {
    href: "https://www.instagram.com/the_darkhacker010",
    icon: <FaInstagram fontSize={25} className="hover:text-red-500 text-3xl sm:text-3xl" />,
  },
  {
    href: "https://x.com/i/flow/login?redirect_after_login=%2Fmrsunil0101",
    icon: <FaXTwitter fontSize={25} className="hover:text-black text-3xl sm:text-3xl" />,
  },
];

export const Certificates_details = [
  {
    link: "https://www.coursera.org/account/accomplishments/verify/MXJ3JF5KQ8Z8",
    image: frontend,
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    duration: "Duration: January 2024 - May 2022",
  },
  {
    link: "https://learn.mongodb.com/c/qA1Ad8vJTn2AO1a_UD27Qw",
    image: mongodb,
    title: "MongoDB and Document Mode",
    duration: "Duration: April 2024 - Jun 2024",
  },
  {
    link: "https://coursera.org/verify/BGMTJNLPDJ2F",
    image: dynamic,
    title: "Dynamic Programming, Greedy Algorithms",
    duration: "Duration: March 2024 - April 2024",
  },
  {
    link: "https://coursera.org/verify/A42MQ3SUQ92S",
    image: aproxim,
    title: "Approximation Algorithms",
    duration: "Duration: April 2024 - May 2024",
  },
]
