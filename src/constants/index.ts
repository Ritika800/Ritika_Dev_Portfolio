import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  plantsproject,
  web3project,
  dxc,
  threejs,
  WeVerve,
  neodove,
  cubane,
  web3,
  reactproject,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "web3",
    icon: web3,
  },
];

const experiences: TExperience[] = [
  {
    title: "Linux Admin",
    companyName: "Dxc Technology",
    icon: dxc,
    iconBg: "#383E56",
    date: "Feb 2022 - May 2023",
    points: [
      "Administering and maintaining Linux-based servers and infrastructure, ensuring optimal performance and system stability.",
      "Collaborating with development and operations teams to deploy and support applications and services on Linux environments.",
      "Implementing and managing system security measures, including user access controls, firewalls, and intrusion detection systems.",
      "Participating in system audits and providing feedback on infrastructure improvements and security best practices."
    ],
  },
  {
    title: "Web Developer",
    companyName: "Weverve Technology",
    icon: WeVerve,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Developing and maintaining user-facing web applications leveraging HTML, CSS, JavaScript, and related frontend frameworks.",
      "Collaborating with designers and product teams to translate mockups and requirements into functional and engaging interfaces.",
      "Implementing responsive web designs and ensuring optimal user experiences across different screen sizes and browsers.",
      "Participating in code reviews to ensure code quality, maintainability, and adherence to established development standards."
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "neodove",
    icon: neodove,
    iconBg: "#383E56",
    date: "April 2024 - April 2025",
    points: [
      "Architecting, developing, and deploying comprehensive web applications encompassing frontend, backend, and databases for optimal performance.",
      "Collaborating effectively with designers, product owners, and fellow engineers to deliver seamless and high-quality user experiences.",
      "Implementing responsive layouts and ensuring consistent functionality and appearance across various browsers and devices.",
      "Actively participating in thorough code reviews, providing insightful feedback, and fostering a collaborative team environment."

    ],
  },
  {
    title: "Blockchain Developer Intern",
    companyName: "Cubane",
    icon: cubane,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Exploring and contributing to the development of blockchain solutions, including smart contracts and decentralized platforms.",
      "Working alongside a team of blockchain experts to learn about the full development lifecycle of blockchain-based products.",
      "Assisting in testing and ensuring the reliability and security of smart contracts and other blockchain components.",
      "Engaging in discussions and code reviews to gain practical experience in blockchain development methodologies."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ritika proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ritika does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ritika optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "React_Ecommerce",
    description:
      "A modern and scalable e-commerce solution crafted with React, this platform provides users with a visually appealing and highly functional online storefront. From effortless product discovery to streamlined order management, it delivers a contemporary shopping experience designed for efficiency and growth.It represents a robust and user-friendly solution for online retail.The platform is built using cutting-edge technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: reactproject,
    sourceCodeLink: "https://github.com/Ritika800/React_E-Commerce",
  },
  {
    name: "Greenary_Website",
    description:
      "This engaging web application serves as a comprehensive resource for plant enthusiasts. Users can effortlessly explore a diverse catalog of plant species, discover detailed information including estimated care requirements, and locate nearby nurseries or online vendors based on their current location, fostering a deeper connection with the plant world.Users can also connect with other plant lovers to exchange tips and advice",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: plantsproject,
    sourceCodeLink: "https://github.com/Ritika800/Greenery-Plants-UI-Design",
  },
  {
    name: "Web3 Project",
    description:
      "A decentralized platform that connects users' portfolios to the blockchain, enabling the trading of tokenized stocks and other financial assets across various markets. It provides a transparent and secure peer-to-peer system, fractional ownership, and a comprehensive view of purchase details within the user's portfolio.It is also designed for scalability, handling increased traffic and transactions as the business grows. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "web3 js",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
    ],
    image: web3project,
    sourceCodeLink: "https://github.com/Ritika800/web3-stock-trading",
  },
];

export { services, technologies, experiences, testimonials, projects };
