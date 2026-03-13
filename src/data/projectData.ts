import thuyenVien from '../../public/projects/thuyenVien.webp'
import belenLaw from '../../public/projects/belenLaw.webp'
import coinForge from '../../public/projects/coinForge.webp'
import prontoCoffeeCo from '../../public/projects/prontoCoffeeCo.webp'
import starTrekApi from '../../public/projects/starTrekApi.webp'
import travelLandingPage from '../../public/projects/travelLandingPage.webp'
import pureNotes from '../../public/projects/pureNotes.webp'
import tillysPromo from '../../public/projects/tillys-promo.webp'
import vikingPromo from '../../public/projects/viking-promo.webp'
import marcpro from '../../public/projects/marcpro.webp'
import conversations from '../../public/projects/conversations.webp'
import risegame from '../../public/projects/risegame.webp'
import apfa from '../../public/projects/apfa.webp'
import calfund from '../../public/projects/calfund.webp'

// icons
import {
  SiHtml5,
  SiAlpinedotjs,
  SiMui,
  SiBootstrap,
  SiAstra,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMicrosoftazure,
  SiFirebase,
  SiGoogle,
  SiCss3,
  SiWordpress,
  SiElementor,
  SiWoo,
  SiHandlebarsdotjs,
  SiTwilio,
  SiMysql,
} from 'react-icons/si'
import React from 'react'
import type { StaticImageData } from 'next/image'

// project types
export type Project = {
  // id, name, category, liveLink, githubLink, imageSrc, imageAlt, icons array, description
  id: string
  name: string
  category: string
  imageSrc: string | StaticImageData
  imageAlt: string
  liveLink?: string
  githubLink?: string
  icons: Array<{
    id: string
    name: string
    logo: React.ComponentType
    iconForeground: string
    iconBackground: string
  }>
  description: string
  isPrivate?: boolean
}

// projects categories
export const projectsNav = [
  {
    name: 'all projects',
  },
  {
    name: 'front-end',
  },
  {
    name: 'back-end',
  },
  {
    name: 'full-stack',
  },
  {
    name: 'email',
  },
]

// all projects for projects page

export const allProjects: Project[] = [
  {
    id: '2',
    name: 'MarcPro.com',
    category: 'Full-Stack',
    liveLink: 'https://marcpro.com/store/',
    githubLink: '',
    imageSrc: marcpro,
    imageAlt: 'MarcPro.com Website',
    icons: [
      {
        id: '1',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },
      {
        id: '2',
        name: 'WooCommerce',
        logo: SiWoo,
        iconForeground: 'text-white',
        iconBackground: 'bg-purple-700',
      },
      {
        id: '3',
        name: 'JavaScript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
      {
        id: '4',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '5',
        name: 'MySQL',
        logo: SiMysql,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-900',
      },
    ],
    description: `Improved performance and SEO for Marc Pro’s e-commerce platform while helping redesign the shopping cart and checkout experience to reduce friction and support clearer user flows. Integrated custom APIs and front-end enhancements that contributed to a 300% increase in conversions compared with the same period the prior year.`,
    isPrivate: true,
  },
  {
    id: '3',
    name: 'Conversations with Bill Kristol',
    category: 'Front-End',
    liveLink: 'https://conversationswithbillkristol.org/',
    githubLink: '',
    imageSrc: conversations,
    imageAlt: 'Conversations with Bill Kristol Website',
    icons: [
      {
        id: '1',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },
      {
        id: '2',
        name: 'JavaScript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
      {
        id: '3',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '4',
        name: 'Alpine.js',
        logo: SiAlpinedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-700',
      },
      {
        id: '5',
        name: 'MySQL',
        logo: SiMysql,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-900',
      },
    ],
    description: `Developed a custom WordPress experience for a video-rich interview archive with a strong focus on accessibility, editorial flexibility, and content discovery. Built reusable front-end components and helped deliver an advanced search experience across 200+ episode transcripts to support research and long-form content exploration.`,
    isPrivate: true,
  },
  {
    id: '4',
    name: 'Rise Game',
    category: 'Full-Stack',
    liveLink: 'https://risegame.com/',
    githubLink: '',
    imageSrc: risegame,
    imageAlt: 'Rise Game Website',
    icons: [
      {
        id: '1',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },
      {
        id: '2',
        name: 'Astra',
        logo: SiAstra,
        iconForeground: 'text-white',
        iconBackground: 'bg-purple-700',
      },
      {
        id: '3',
        name: 'Alpine.js',
        logo: SiAlpinedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-700',
      },
      {
        id: '4',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '5',
        name: 'MySQL',
        logo: SiMysql,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-900',
      },
    ],
    description: `Led development of Rise Game’s marketing site using WordPress as the CMS, building custom components that supported scalability and an easy handoff to the marketing team. Also contributed to the launch of the Rise Game mobile app using React Native and Expo, expanding the product across web and mobile experiences.`,
    isPrivate: true,
  },
  {
    id: '5',
    name: 'APFA.org',
    category: 'Full-Stack',
    liveLink: 'https://apfa.org/',
    githubLink: '',
    imageSrc: apfa,
    imageAlt: 'APFA.org Website',
    icons: [
      {
        id: '1',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },
      {
        id: '2',
        name: 'Alpine.js',
        logo: SiAlpinedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-700',
      },
      {
        id: '3',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '4',
        name: 'MySQL',
        logo: SiMysql,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-900',
      },
    ],
    description: `Led redesign and development efforts for APFA’s member platform using WordPress, PHP, and Alpine.js, with an emphasis on usability, accessibility, and long-term maintainability. Delivered front-end and CMS improvements for a high-traffic membership site used by a national labor organization, aligning technical execution with member needs.`,
    isPrivate: true,
  },
  {
    id: '6',
    name: 'CalFund.org',
    category: 'Full-Stack',
    liveLink: 'https://calfund.org/',
    githubLink: '',
    imageSrc: calfund,
    imageAlt: 'CalFund.org Website',
    icons: [
      {
        id: '1',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },

      {
        id: '2',
        name: 'Elementor',
        logo: SiElementor,
        iconForeground: 'text-white',
        iconBackground: 'bg-red-500',
      },
      {
        id: '3',
        name: 'Alpine.js',
        logo: SiAlpinedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-700',
      },
      {
        id: '4',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '5',
        name: 'MySQL',
        logo: SiMysql,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-900',
      },
    ],
    description: `Partnered with design and development teams to launch a modern, accessible, and mobile-friendly site for the California Community Foundation. Implemented custom content structures and donation workflows under tight deadlines while maintaining strong performance and a polished editorial experience.`,
    isPrivate: true,
  },
  {
    id: '7',
    name: 'Pronto Coffee Co.',
    category: 'Full-Stack',
    liveLink: '',
    // githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: prontoCoffeeCo,
    imageAlt: 'Pronto Coffe Co. Order Management App',
    icons: [
      {
        id: '1',
        name: 'Html5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '3',
        name: 'Node.js',
        logo: SiNodedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-500',
      },
      {
        id: '4',
        name: 'MongoDB',
        logo: SiMongodb,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-700',
      },
      {
        id: '5',
        name: 'Express',
        logo: SiExpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-600',
      },
    ],
    description: `Built a full-stack order management application for a coffee shop workflow, allowing baristas to log in, create orders, track pending tickets, and complete fulfilled orders. Used EJS, Tailwind CSS, Node.js, Express, and MongoDB to build an end-to-end application with authenticated user actions and persistent order data.`,
    isPrivate: true,
  },
  {
    id: '8',
    name: 'Pure Notes',
    category: 'Full-Stack',
    liveLink: '',
    // githubLink: 'https://github.com/ivngzmn/pure-notes-azure-auth',
    imageSrc: pureNotes,
    imageAlt: 'Pure Notes App',
    icons: [
      {
        id: '1',
        name: 'HTML',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '3',
        name: 'MongoDB',
        logo: SiMongodb,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-700',
      },
      {
        id: '4',
        name: 'JavaScript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
      {
        id: '5',
        name: 'Node.js',
        logo: SiNodedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-500',
      },
      {
        id: '6',
        name: 'Express',
        logo: SiExpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-600',
      },
      {
        id: '7',
        name: 'Azure Active Directory',
        logo: SiMicrosoftazure,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
    ],
    description: `Built a notes application with Azure Active Directory authentication, giving users secure access to create, edit, and delete personal notes. Used Node.js, Express, MongoDB Atlas, and Tailwind CSS to deliver a full-stack app with enterprise-style authentication and persistent data management.`,
    isPrivate: false,
  },
  {
    id: '9',
    name: 'Coin Forge',
    category: 'Front-End',
    liveLink: 'https://coinforge.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/coin-forge',
    imageSrc: coinForge,
    imageAlt: 'Coin Forge',
    icons: [
      {
        id: '1',
        name: 'React',
        logo: SiReact,
        iconForeground: 'text-white',
        iconBackground: 'bg-cyan-400',
      },
      {
        id: '2',
        name: 'Material UI',
        logo: SiMui,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Firebase',
        logo: SiFirebase,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
      {
        id: '4',
        name: 'Google Auth',
        logo: SiGoogle,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
    ],
    description: `Created a React-based cryptocurrency portfolio application that allows users to track coins, monitor performance, and visualize historical pricing data. Integrated CoinGecko APIs, Chart.js, Material UI, and Firebase to build a polished front-end product with authentication and data-driven user flows.`,
    isPrivate: false,
  },
  {
    id: '10',
    name: 'Thuyen Vien',
    category: 'Front-End',
    liveLink: 'https://thuyenvienrestaurant.vercel.app/',
    githubLink: '',
    imageSrc: thuyenVien,
    imageAlt: 'Thuyen Vien Restaurant Website',
    icons: [
      {
        id: '1',
        name: 'Html5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'Bootstrap CSS',
        logo: SiBootstrap,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Javascript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
    ],
    description: `Designed and developed a marketing site for a local vegan restaurant with a focus on clear navigation, lightweight performance, and approachable design. Used HTML, Bootstrap, and JavaScript to create a polished front-end experience tailored to a small business audience.`,
    isPrivate: false,
  },
  {
    id: '11',
    name: 'Belen Law',
    category: 'Front-End',
    liveLink: 'https://belengomezlaw.vercel.app/',
    githubLink: '',
    imageSrc: belenLaw,
    imageAlt: 'Belen Gomez Attorney Website',
    icons: [
      {
        id: '1',
        name: 'React.js',
        logo: SiReact,
        iconForeground: 'text-white',
        iconBackground: 'bg-cyan-400',
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500',
      },
      {
        id: '3',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700',
      },
    ],
    description: `Modernized a law firm website by improving front-end presentation, styling consistency, and SEO foundations while planning for a headless WordPress integration. Built the front end with React and Tailwind CSS to create a more professional and maintainable digital presence.`,
    isPrivate: false,
  },
  {
    id: '12',
    name: 'Travel',
    category: 'Front-End',
    liveLink: 'https://travel-landing-page-omega-vert.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/travel-landing-page',
    imageSrc: travelLandingPage,
    imageAlt: 'Travel Landing Page',
    icons: [
      {
        id: '1',
        name: 'Html5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'Bootstrap CSS',
        logo: SiBootstrap,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Javascript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500',
      },
    ],
    description: `Built a travel landing page inspired by modern booking experiences, using the project to deepen my understanding of CSS Grid, layout systems, and responsive design. Focused on creating a clean front-end interface with strong visual structure and reusable styling patterns.`,
    isPrivate: false,
  },
  {
    id: '13',
    name: 'Star Trek Api',
    category: 'Back-End',
    liveLink: 'https://star-trek-beta.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/star-trek-client',
    imageSrc: starTrekApi,
    imageAlt: 'Star Trek Api Website',
    icons: [
      {
        id: '1',
        name: 'HTML5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'CSS3',
        logo: SiCss3,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Node.js',
        logo: SiNodedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-500',
      },
      {
        id: '4',
        name: 'Express.js',
        logo: SiExpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-600',
      },
    ],
    description: `Built the front end for a Star Trek-themed API project that consumes custom backend data and presents it through a simple, searchable interface. Used HTML, CSS, Node.js, and Express to strengthen my experience working across both API development and client-side consumption.`,
    isPrivate: false,
  },
  {
    id: '14',
    name: 'Viking River Cruises Promo',
    category: 'email',
    liveLink: 'https://viking-river-cruises-email.netlify.app/',
    githubLink: 'https://github.com/ivngzmn/viking-river-cruises-email',
    imageSrc: vikingPromo,
    imageAlt: 'Viking River Cruises Promo Email',
    icons: [
      {
        id: '1',
        name: 'HTML5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'CSS3',
        logo: SiCss3,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Handlebars.js',
        logo: SiHandlebarsdotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-[#F0772B]',
      },
      {
        id: '4',
        name: 'Twilio SendGrid',
        logo: SiTwilio,
        iconForeground: 'text-white',
        iconBackground: 'bg-[#F22F46]',
      },
    ],
    description: `Developed a promotional marketing email using Foundation and Handlebars.js, then prepared it for delivery through Twilio SendGrid. Built dynamic content fields and responsive email layouts to support real-world campaign workflows.`,
    isPrivate: false,
  },
  {
    id: '15',
    name: 'Tillys Promo',
    category: 'email',
    liveLink: 'https://tillyssummersale.netlify.app/',
    githubLink: 'https://github.com/ivngzmn/tillys-marketing-email',
    imageSrc: tillysPromo,
    imageAlt: 'Tillys Promo Email',
    icons: [
      {
        id: '1',
        name: 'HTML5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500',
      },
      {
        id: '2',
        name: 'CSS3',
        logo: SiCss3,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500',
      },
      {
        id: '3',
        name: 'Handlebars.js',
        logo: SiHandlebarsdotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-[#F0772B]',
      },
      {
        id: '4',
        name: 'Twilio SendGrid',
        logo: SiTwilio,
        iconForeground: 'text-white',
        iconBackground: 'bg-[#F22F46]',
      },
    ],
    description: `Developed a promotional email for Tilly’s using Foundation, Handlebars.js, and Twilio SendGrid to support responsive layouts and dynamic content insertion. Focused on clean HTML email structure and marketing-ready implementation.`,
    isPrivate: false,
  },
]
