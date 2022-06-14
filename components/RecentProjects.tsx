import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CoinForge from '../public/static/images/projects/MacBook-Pro-Crypto.webp';
import TodoMVP from '/public/static/images/projects/MacBook-Todo-MVP.webp';
import Pronto from '/public/static/images/projects/pronto-coffee-co.webp';
import { SparklesIcon } from '@heroicons/react/outline';
import {
  SiHtml5,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMicrosoftazure,
  SiFirebase,
  SiGoogle
} from 'react-icons/si';
import { IoIosEye } from 'react-icons/io';
import { FaRegPaperPlane, FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'Pronto Coffee Co.',
    liveLink: 'https://pronto-coffee-co.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/pronto-coffee-co',
    imageSrc: Pronto,
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
      }
    ],
    description:
      'A full stack web application that allows a barista, login, add to an order, view pending orders, view completed orders and complete orders. Orders that have been completed will note which barista completed the order. Used EJS, Tailwind CSS for the front end and Node, Express, MongoDB for the backend. Deployed on Heroku.'
  },
  {
    name: 'Coin Forge',
    liveLink: 'https://coinforge.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/coin-forge',
    imageSrc: CoinForge,
    cardAlign: 'lg:col-start-5',
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function RecentProjects() {
  return (
    <div
      id="my-work"
      className="relative overflow-hidden bg-zinc-900 pt-16 pb-32"
    >
      {/* title */}
      <div className="relative mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-2 lg:mb-8">
          <div className="inline-block w-full py-10 lg:py-20">
            <div className="block text-left">
              <h2
                className="text-6xl font-semibold tracking-tight lg:text-8xl"
                id="projects"
              >
                Latest Projects
              </h2>
              <p className="mt-5 text-3xl font-light tracking-normal text-slate-50 lg:text-4xl">
                Selected works and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* project section */}
      <div className="relative mx-auto max-w-[100rem] ">
        {/* <ProjectCard /> */}
        <div className="space-y-20 lg:space-y-64">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl bg-transparent px-4 pb-10 lg:relative lg:z-10 lg:pb-0 "
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
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        objectFit="cover"
                        layout="fill"
                        placeholder="blur"
                        quality={65}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-4 lg:m-0 lg:px-4 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-0">
                    <div>
                      <span className="text-4xl font-semibold text-white lg:text-5xl">
                        <div>
                          <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
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
        <div className="flex justify-end py-10">
          <Link href="/projects">
            <a className="font-regular mr-2 flex w-[20rem] transform items-center justify-center space-x-3 rounded-md border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-base  text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:px-10 md:text-xl lg:mr-4 lg:w-[22rem] lg:font-semibold">
              <IoIosEye className="h-6 w-6" /> <span>View All Projects</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
