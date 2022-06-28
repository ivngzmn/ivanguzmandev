import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegPaperPlane, FaGithub } from 'react-icons/fa';

// import data
import { allProjects, projectsNav } from '../data/projectData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyProjects() {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on category
    if (item.name === 'all') {
      setProjects(allProjects);
    } else {
      const newProjects = allProjects.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div className="bg-zinc-900 pb-48">
      <div className="relative mx-auto max-w-[90rem] px-4 pb-20 sm:px-6 lg:px-8">
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
      </div>
      {/* project nav */}
      <nav className="mx-auto mb-12 max-w-xl">
        <ul className="grid grid-cols-2 items-center justify-items-center text-xl text-white lg:grid-flow-col">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index
                    ? 'font-semibold text-slate-50 underline decoration-violet-600 decoration-4 underline-offset-8'
                    : 'font-normal text-slate-400'
                } m-4 cursor-pointer capitalize`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* projects section */}

      <div className="relative mt-10 space-y-20 pt-2 lg:mt-20 lg:space-y-60">
        {/* <ProjectCard /> */}
        {projects.map((project) => (
          // adjust the image here
          <div
            key={project.name}
            className="rounded-xl bg-transparent px-4 lg:relative lg:z-10 lg:px-6 lg:pb-0"
          >
            <div className="lg:mx-auto lg:grid lg:max-w-[100rem] lg:grid-cols-12">
              <div
                className={classNames(
                  Number(project.id) % 2 === 0
                    ? 'lg:col-start-5'
                    : 'lg:col-start-1',
                  'relative z-10 lg:col-span-8 lg:row-start-1 lg:py-0'
                )}
              >
                <div className="mx-auto max-w-3xl pt-4 sm:max-w-3xl sm:px-6 lg:p-0">
                  <div className="h-[30rem] w-full duration-500 ease-in-out sm:w-full lg:h-[800px]">
                    <Image
                      className="h-full w-full rounded-xl object-center"
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
                      {project.name}
                    </span>
                    <p className="font-regular mt-6 text-lg text-white lg:text-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="my-8 lg:w-2/3">
                    <Link href={project.liveLink}>
                      <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-base text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                        <FaRegPaperPlane className="h-6 w-6" />
                        <span>Live</span>
                      </a>
                    </Link>
                  </div>
                  {/* remove link button if field empty */}
                  <div
                    className={classNames(
                      project.githubLink === '' ? 'hidden' : 'my-8',
                      ' lg:w-2/3'
                    )}
                  >
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
  );
}
