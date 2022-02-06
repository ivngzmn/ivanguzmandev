import Image from 'next/image';
import Link from 'next/link';
import { FaRegPaperPlane, FaGithub } from 'react-icons/fa';
import CoinForge from '/public/static/images/projects/MacBook-Pro-Crypto.webp';
import TodoMVP from '/public/static/images/projects/MacBook-Todo-MVP.webp';
import Portfolio from '/public/static/images/projects/MacBook-Pro-Portfolio.webp';
import Thuyen from '/public/static/images/projects/iPhone-Thuyen-Vien.webp';
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
  SiGoogle
} from 'react-icons/si';
import { ProjectCard } from 'components';

const projects = [
  {
    name: 'Coin Forge',
    liveLink: 'https://coinforge.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/coin-forge',
    imageSrc: CoinForge,
    cardAlign: 'lg:col-start-1',
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
    description: `Using React and Material UI, I created a web application that allows users to create and manage their cryptocurrency portfolios. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.js to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. Currently adding Google auth and Firebase for the backend.`
  },
  {
    name: 'Portfolio',
    liveLink: '#',
    githubLink: 'https://github.com/ivngzmn/ivanguzmandev',
    imageSrc: Portfolio,
    cardAlign: 'lg:col-start-5',
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
        iconBackground: 'bg-blue-600'
      }
    ],
    description:
      'Personal website that you are checking out. I wanted to build a fast website and also wanted to dive deeper into Next.js and Tailwind CSS. Once I got further into development I decided to add a blog portion and integrated GraphQL with GraphCMS for the blog post delivery.'
  },
  {
    name: 'Pure Todo',
    liveLink: 'https://todo-auth-mvc.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/todo-microsoft-auth-mvc',
    imageSrc: TodoMVP,
    cardAlign: 'lg:col-start-1',
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
      },
      {
        id: '6',
        name: 'Microsoft Azure',
        logo: SiMicrosoftazure,
        iconForeground: 'text-white',
        iconBackground: 'bg-blue-500'
      }
    ],
    description:
      'Users can login to their profile and find their list of notes. They can add new notes through an input, which they can then edit or delete all notes in their profile.'
  },
  {
    name: 'Thuyen Vien',
    liveLink: 'https://thuyenvienrestaurant.vercel.app/',
    githubLink: '',
    imageSrc: Thuyen,
    cardAlign: 'lg:col-start-5',
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
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function myProjects() {
  return (
    <div className="bg-zinc-900">
      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-2 lg:mb-8">
          <div className="inline-block w-full py-10 lg:py-20">
            <div className="block md:float-left">
              <span
                className="text-6xl font-semibold leading-8 tracking-tight lg:text-8xl"
                id="projects"
              >
                Projects
              </span>
              <h2 className="mt-5 text-3xl font-light tracking-normal text-slate-50 lg:text-4xl">
                Selected works and client projects.
              </h2>
            </div>
          </div>
        </div>

        {/* projects section */}

        <div className="relative space-y-6 pt-2 lg:space-y-48">
          {/* <ProjectCard /> */}
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl bg-transparent pb-10 lg:relative lg:z-10 lg:pb-0"
            >
              <div className="lg:mx-auto lg:grid lg:max-w-full lg:grid-cols-12">
                <div
                  className={classNames(
                    project.cardAlign,
                    'relative z-10 lg:col-span-8 lg:row-start-1 lg:py-0'
                  )}
                >
                  <div className="mx-auto max-w-3xl px-4 pt-4 sm:max-w-3xl sm:px-6 lg:p-0">
                    <div className="h-[30rem] w-full duration-500 ease-in-out sm:w-full lg:h-[800px]">
                      <Image
                        className="h-full w-full rounded-xl object-center"
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        objectFit="cover"
                        layout="fill"
                        placeholder="blur"
                        quality={70}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-4 lg:m-0 lg:px-4 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-0">
                    <div>
                      <span className="text-4xl font-semibold text-white lg:text-5xl">
                        {project.name}
                      </span>
                      <p className="font-regular mt-6 text-lg text-white lg:text-xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-8 lg:w-2/3">
                      <Link href={project.liveLink}>
                        <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-base text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                          <FaRegPaperPlane className="h-6 w-6" />
                          <span>Live</span>
                        </a>
                      </Link>
                    </div>
                    <div className="my-8 lg:w-2/3">
                      <Link href={project.githubLink}>
                        <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border border-transparent bg-white px-8 py-3 text-base text-indigo-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-indigo-100 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                          <FaGithub className="h-6 w-6" /> <span>Source</span>
                        </a>
                      </Link>
                    </div>
                    <span className="text-2xl font-semibold text-white lg:text-3xl">
                      Tech Stack:
                    </span>
                    <div className="text-white">
                      {project.icons.map((icon) => (
                        <div
                          key={icon.id}
                          className={classNames(
                            icon.iconBackground,
                            icon.iconForeground,
                            'mt-8 mr-4 inline-flex rounded-lg p-3'
                          )}
                        >
                          <icon.logo className="h-10 w-10" aria-hidden="true" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* end */}
      </div>
    </div>
  );
}
