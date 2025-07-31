import thuyenVien from '../../public/projects/thuyenVien.webp'
import belenLaw from '../../public/projects/belenLaw.webp'
import coinForge from '../../public/projects/coinForge.webp'
import prontoCoffeeCo from '../../public/projects/prontoCoffeeCo.webp'
import starTrekApi from '../../public/projects/starTrekApi.webp'
import travelLandingPage from '../../public/projects/travelLandingPage.webp'
import pureNotes from '../../public/projects/pureNotes.webp'
import tillysPromo from '../../public/projects/tillys-promo.webp'
import onyxPromo from '../../public/projects/onyx-promo.webp'
import placeHolder from '../../public/projects/placeholder.webp'
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
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
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

// recent projects for homepage
export const recentProjects = [
  {
    id: '1',
    name: 'Pronto Coffee Co.',
    liveLink: '',
    githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: prontoCoffeeCo,

    imageAlt: 'Todo App',
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
    description:
      'A full stack web application that allows a barista, login, add to an order, view pending orders, view completed orders and complete orders. Orders that have been completed will note which barista completed the order. Used EJS, Tailwind CSS for the front end and Node, Express, MongoDB for the backend. Deployed on Heroku.',
  },
  {
    id: '2',
    name: 'Coin Forge',
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
    description: `Using React and Material UI, I created a web application that allows users to create and manage their cryptocurrency portfolios. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.js to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. Currently adding Google auth and Firebase for the backend. Deployed on Vercel.`,
  },
]

// all projects for projects page

export const allProjects: Project[] = [
  // {
  //   id: '1',
  //   name: 'Zeek.com',
  //   category: 'Full-Stack',
  //   liveLink: 'https://zeek.com/',
  //   githubLink: '',
  //   imageSrc: placeHolder,
  //   imageAlt: 'Zeek.com Website',
  //   icons: [
  //     {
  //       id: '1',
  //       name: 'WordPress',
  //       logo: SiWordpress,
  //       iconForeground: 'text-white',
  //       iconBackground: 'bg-zinc-700',
  //     },
  //     {
  //       id: '2',
  //       name: 'JavaScript',
  //       logo: SiJavascript,
  //       iconForeground: 'text-white',
  //       iconBackground: 'bg-yellow-500',
  //     },
  //     {
  //       id: '3',
  //       name: 'Tailwind CSS',
  //       logo: SiTailwindcss,
  //       iconForeground: 'text-white',
  //       iconBackground: 'bg-sky-500',
  //     },
  //     {
  //       id: '4',
  //       name: 'Astra',
  //       logo: SiAstra,
  //       iconForeground: 'text-white',
  //       iconBackground: 'bg-purple-700',
  //     },
  //     {
  //       id: '5',
  //       name: 'MySQL',
  //       logo: SiMysql,
  //       iconForeground: 'text-white',
  //       iconBackground: 'bg-sky-900',
  //     },
  //   ],
  //   description: `Rebuilt Zeek’s web presence in close collaboration with a team, using WordPress as the CMS. Translated Figma designs into a responsive and accessible UI with Alpine.js, custom components, and the Astra theme. Delivered a high-performance, SEO-optimized site with a streamlined content management experience.`,
  //   isPrivate: true,
  // },
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
    description: `Improved performance and SEO for the Marc Pro e-commerce platform while leading a redesign of the shopping cart to support clearer user stories and a more intuitive checkout experience. Integrated custom APIs to ensure a seamless shopping journey from product selection to order completion.`,
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
    description: `Took ownership of implementing a custom WordPress theme and reusable components for a video-rich interview archive, with a strong emphasis on accessibility and editorial flexibility. Collaborated with the team to realize the updated design vision and led development of an advanced search experience across 200+ episode transcripts to support scholarly research and content discovery.`,
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
    description: `Led the development of Rise Game’s marketing site, leveraging WordPress as a CMS and crafting custom components to support scalability and ease of use. Ensured a smooth handoff to the marketing team while delivering a maintainable platform aligned with the brand’s vision and growth strategy.`,
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
    description: `Played a key role in redesigning and developing APFA’s member portal using Beaver Builder, PHP, and Alpine.js. Led efforts to improve usability, accessibility, and editorial workflows, while ensuring the site remained performant and reliable under high daily traffic. Collaborated closely with the team to align technical execution with member needs and organizational goals.`,
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
    description: `Worked closely with a team to bring complex design concepts from the design team to life, implementing a modern, accessible, and mobile-friendly site for the California Community Foundation. Integrated custom content types and donation workflows, successfully delivering the project under tight deadlines without compromising quality or performance.`,
    isPrivate: true,
  },
  {
    id: '7',
    name: 'Pronto Coffee Co.',
    category: 'Full-Stack',
    liveLink: '',
    githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: prontoCoffeeCo,
    imageAlt: 'Todo App',
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
    description:
      'A full stack web application that allows a barista, login, add to an order, view pending orders, view completed orders and complete orders. Orders that have been completed will note which barista completed the order. Used EJS, Tailwind CSS for the front end and Node, Express, MongoDB for the backend. Deployed on Heroku.',
    isPrivate: true,
  },
  {
    id: '8',
    name: 'Pure Notes',
    category: 'Full-Stack',
    liveLink: '',
    githubLink: 'https://github.com/ivngzmn/pure-notes-azure-auth',
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
    description:
      'A Notes app with Azure AD authentication with use of MongoDB Atlas. Users can login to their profile and find their list of Notes. They can add new Notes through an input, which they can then edit or delete all Notes in their profile.',
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
    description: `Using React and Material UI, I created a web application that allows users to create and manage their cryptocurrency portfolios. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.js to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. Currently adding Google auth and Firebase for the backend. Deployed on Vercel.`,
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
    description: `This is a restaurant website that I built for a local vegan restaurant. I wanted to make a website that was simple and easy to use. I used Bootstrap for the styling and Javascript for the animations.`,
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
    description: `This website is for Attorney Belen Gomez, APC. She had built her own website via WordPress but was having trouble with styling and SEO. We came of with a plan to modernize her website. We are in the works to add WordPress API as a headless CMS so that she and her team can update the website as they desire.`,
    isPrivate: false,
  },
  {
    id: '12',
    name: 'Travel',
    category: 'Front-End',
    liveLink: 'https://travel-landing-page-omega-vert.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/travel-landing-page',
    imageSrc: travelLandingPage,
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
    description: `An Airbnb inspired landing page with emphasis on learning more about CSS Grid. When working with this project there is a ton that goes into grid as well as flex. One of the great things about grid is that you are able to quickly scaffold your columns and rows.`,
    isPrivate: false,
  },
  {
    id: '13',
    name: 'Star Trek Api',
    category: 'Back-End',
    liveLink: 'https://star-trek-beta.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/star-trek-client',
    imageSrc: starTrekApi,
    imageAlt: 'Thuyen Vien Restaurant Website',
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
    description: `This project is the front end that consumes the Star Trek Guid to Aliens api that I built. Please take a look at the repo details for the Star Trek Guid to Aliens API Repo to experience the API to its fullest. Live long and prosper.`,
    isPrivate: false,
  },
  {
    id: '14',
    name: 'Onyx Coffee Promo',
    category: 'email',
    liveLink: 'https://onyxcoffee.netlify.app/',
    githubLink: '',
    imageSrc: onyxPromo,
    imageAlt: 'Thuyen Vien Restaurant Website',
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
    description: `Promotional email for Onyx Coffee Lab made with foundation and exported to Twilio Sendgrid for image linking. Felids also dynamically filled with Handlebars.js.`,
    isPrivate: false,
  },
  {
    id: '15',
    name: 'Tillys Promo',
    category: 'email',
    liveLink: 'https://tillyssummersale.netlify.app/',
    githubLink: '',
    imageSrc: tillysPromo,
    imageAlt: 'Thuyen Vien Restaurant Website',
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
    description: `Promotional email for Tilly's made with foundation and exported to Twilio Sendgrid for image linking. Felids also dynamically filled with Handlebars.js.`,
    isPrivate: false,
  },
]
