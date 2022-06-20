// TODO: import project images
import thuyenVien from '../public/static/images/projects/thuyenVien.webp';
import belenLaw from '../public/static/images/projects/belenLaw.webp';
import coinForge from '../public/static/images/projects/coinForge.webp';
import prontoCoffeeCo from '../public/static/images/projects/prontoCoffeeCo.webp';
import starTrekApi from '../public/static/images/projects/starTrekApi.webp';
import travelLandingPage from '../public/static/images/projects/travelLandingPage.webp';
import pureNotes from '../public/static/images/projects/pureNotes.webp';
import portfolio from '../public/static/images/projects/portfolio.webp';

// icons
import {
  SiHtml5,
  SiMaterialui,
  SiBootstrap,
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
  SiWordpress
} from 'react-icons/si';

// projects catagories
export const projectsNav = [
  {
    name: 'all'
  },
  {
    name: 'front-end'
  },
  {
    name: 'back-end'
  },
  {
    name: 'full-stack'
  }
];

// recent projects for homepage
export const recentProjects = [
  {
    id: '1',
    name: 'Pronto Coffee Co.',
    liveLink: 'https://pronto-coffee-co.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: prontoCoffeeCo,

    imageAlt: 'Todo App',
    icons: [
      {
        id: '1',
        name: 'Html5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500'
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      },
      {
        id: '3',
        name: 'Node.js',
        logo: SiNodedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-500'
      },
      {
        id: '4',
        name: 'MongoDB',
        logo: SiMongodb,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-700'
      },
      {
        id: '5',
        name: 'Express',
        logo: SiExpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-600'
      }
    ],
    description:
      'A full stack web application that allows a barista, login, add to an order, view pending orders, view completed orders and complete orders. Orders that have been completed will note which barista completed the order. Used EJS, Tailwind CSS for the front end and Node, Express, MongoDB for the backend. Deployed on Heroku.'
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
        iconBackground: 'bg-cyan-400'
      },
      {
        id: '2',
        name: 'Material UI',
        logo: SiMaterialui,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      },
      {
        id: '3',
        name: 'Firebase',
        logo: SiFirebase,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500'
      },
      {
        id: '4',
        name: 'Google Auth',
        logo: SiGoogle,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      }
    ],
    description: `Using React and Material UI, I created a web application that allows users to create and manage their cryptocurrency portfolios. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.js to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. Currently adding Google auth and Firebase for the backend. Deployed on Vercel.`
  }
];

// all projects for projects page

export const allProjects = [
  {
    id: '1',
    name: 'Pronto Coffee Co.',
    category: 'Full-Stack',
    liveLink: 'https://pronto-coffee-co.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: prontoCoffeeCo,
    imageAlt: 'Todo App',
    icons: [
      {
        id: '1',
        name: 'Html5',
        logo: SiHtml5,
        iconForeground: 'text-white',
        iconBackground: 'bg-orange-500'
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      },
      {
        id: '3',
        name: 'Node.js',
        logo: SiNodedotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-500'
      },
      {
        id: '4',
        name: 'MongoDB',
        logo: SiMongodb,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-700'
      },
      {
        id: '5',
        name: 'Express',
        logo: SiExpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-600'
      }
    ],
    description:
      'A full stack web application that allows a barista, login, add to an order, view pending orders, view completed orders and complete orders. Orders that have been completed will note which barista completed the order. Used EJS, Tailwind CSS for the front end and Node, Express, MongoDB for the backend. Deployed on Heroku.'
  },
  {
    id: '2',
    name: 'Pure Notes',
    category: 'Full-Stack',
    liveLink: 'https://pure-notes.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/pure-notes-azure-auth',
    imageSrc: pureNotes,
    imageAlt: 'Pure Notes App',
    icons: [
      {
        id: '1',
        name: 'React.js',
        logo: SiReact,
        iconForeground: 'text-white',
        iconBackground: 'bg-cyan-400'
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      },
      {
        id: '3',
        name: 'MongoDB',
        logo: SiMongodb,
        iconForeground: 'text-white',
        iconBackground: 'bg-green-700'
      },
      {
        id: '4',
        name: 'JavaScript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500'
      },
      {
        id: '5',
        name: 'Azure Active Directory',
        logo: SiMicrosoftazure,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      }
    ],
    description:
      'A Notes app with Azure AD authentication with use of MongoDB Atlas. Users can login to their profile and find their list of Notes. They can add new Notes through an input, which they can then edit or delete all Notes in their profile.'
  },
  {
    id: '3',
    name: 'Portfolio',
    category: 'Full-Stack',
    liveLink: '',
    githubLink: 'https://github.com/ivngzmn/ivanguzmandev',
    imageSrc: portfolio,
    imageAlt: 'Portfolio',
    icons: [
      {
        id: '1',
        name: 'Next.js',
        logo: SiNextdotjs,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700'
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      },
      {
        id: '3',
        name: 'GraphQL',
        logo: SiGraphql,
        iconForeground: 'text-white',
        iconBackground: 'bg-pink-500'
      },
      {
        id: '4',
        name: 'TypeScript',
        logo: SiTypescript,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      }
    ],
    description:
      'Personal website that you are checking out. I wanted to build a fast website and also wanted to dive deeper into Next.js and Tailwind CSS. Once I got further into development I decided to add a blog portion and integrated GraphQL with GraphCMS for the blog post delivery. Deployed on Vercel.'
  },
  {
    id: '4',
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
        iconBackground: 'bg-cyan-400'
      },
      {
        id: '2',
        name: 'Material UI',
        logo: SiMaterialui,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      },
      {
        id: '3',
        name: 'Firebase',
        logo: SiFirebase,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500'
      },
      {
        id: '4',
        name: 'Google Auth',
        logo: SiGoogle,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      }
    ],
    description: `Using React and Material UI, I created a web application that allows users to create and manage their cryptocurrency portfolios. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.js to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. Currently adding Google auth and Firebase for the backend. Deployed on Vercel.`
  },
  {
    id: '5',
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
        iconBackground: 'bg-orange-500'
      },
      {
        id: '2',
        name: 'Bootstrap CSS',
        logo: SiBootstrap,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      },
      {
        id: '3',
        name: 'Javascript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500'
      }
    ],
    description: `This is a restaurant website that I built for a local vegan restaurant. I wanted to make a website that was simple and easy to use. I used Bootstrap for the styling and Javascript for the animations.`
  },
  {
    id: '6',
    name: 'Belen Law',
    category: 'Front-End',
    liveLink: 'https://belengomezlaw.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/belen-law',
    imageSrc: belenLaw,
    imageAlt: 'Belen Gomez Attorney Website',
    icons: [
      {
        id: '1',
        name: 'React.js',
        logo: SiReact,
        iconForeground: 'text-white',
        iconBackground: 'bg-cyan-400'
      },
      {
        id: '2',
        name: 'Tailwind CSS',
        logo: SiTailwindcss,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      },
      {
        id: '3',
        name: 'WordPress',
        logo: SiWordpress,
        iconForeground: 'text-white',
        iconBackground: 'bg-zinc-700'
      }
    ],
    description: `This website is for Attorney Belen Gomez, APC. She had built her own website via WordPress but was having trouble with styling and SEO. We came of with a plan to modernize her website. We are in the works to add WordPress API as a headless CMS so that she and her team can update the website as they desire.`
  },
  {
    id: '7',
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
        iconBackground: 'bg-orange-500'
      },
      {
        id: '2',
        name: 'Bootstrap CSS',
        logo: SiBootstrap,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      },
      {
        id: '3',
        name: 'Javascript',
        logo: SiJavascript,
        iconForeground: 'text-white',
        iconBackground: 'bg-yellow-500'
      }
    ],
    description: `An Airbnb inspired landing page with emphasis on learning more about CSS Grid. When working with this project there is a ton that goes into grid as well as flex. One of the great things about grid is that you are able to quickly scaffold your columns and rows.`
  },
  {
    id: '8',
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
        iconBackground: 'bg-cyan-400'
      },
      {
        id: '2',
        name: 'CSS3',
        logo: SiCss3,
        iconForeground: 'text-white',
        iconBackground: 'bg-sky-500'
      }
    ],
    description: `This project is the front end that consumes the Star Trek Guid to Aliens api that I built. Please take a look at the repo details for the Star Trek Guid to Aliens API Repo to experience the API to its fullest. Live long and prosper.`
  }
];
