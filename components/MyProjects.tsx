import Image from 'next/image';
import Link from 'next/link';
import { FaRegPaperPlane, FaGithub } from 'react-icons/fa';
import CoinForge from '/public/static/images/projects/MacBook-Pro-Crypto.webp';
import TodoMVP from '/public/static/images/projects/MacBook-Todo-MVP.webp';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { ProjectCard } from 'components';

const projects = [
  {
    name: 'Coin Forge',
    liveLink: 'https://coinforge.netlify.app/',
    githubLink: 'https://github.com/ivngzmn/coin-forge',
    imageSrc: CoinForge,
    imageAlt: 'Coin Forge',
    description: `Used React-Redux for state management of the API calls. For the API's I went to Rapid API where I used the Coin Ranking API and the Bing News Search API. For the individual coins I went and used Chart.JS to have each coin show the 24 Hour, 7 Day, 30 Day, 1 Year, and 5 Year charts. `
  },
  {
    name: 'Todo App',
    liveLink: 'https://todo-auth-mvc.herokuapp.com/',
    githubLink: 'https://github.com/ivngzmn/todo-microsoft-auth-mvc',
    imageSrc: TodoMVP,
    imageAlt: 'Todo App',
    description:
      'It was my first time building a web app that included a database and authentication. With MongoDB Atlas it was nice and straightforward to set up and get things communicating with my developer build. Once I got to authentication with Microsoft Azure Active Directory it got really hard as there are quite a few steps required to get the web app working such as registering your application.'
  }
];

export default function myProjects() {
  return (
    <div className="bg-zinc-900">
      <div className="relative max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-2 lg:mb-8">
          <div className="w-full inline-block py-10 lg:py-20">
            <div className="md:float-left block">
              <span
                className="text-6xl lg:text-8xl font-semibold leading-8 tracking-tight"
                id="projects"
              >
                Projects
              </span>
              <h2 className="text-3xl lg:text-4xl font-light tracking-normal text-slate-50 mt-5">
                Selected works and client projects.
              </h2>
            </div>
          </div>
        </div>

        {/* projects section */}

        <div className="pt-2 space-y-6 lg:space-y-40 relative">
          {/* <ProjectCard /> */}
          {projects.map((project) => (
            <div
              key={project.name}
              className=" pb-10 bg-transparent lg:pb-0 lg:z-10 lg:relative rounded-xl"
            >
              <div className="lg:mx-auto lg:max-w-full lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-8 lg:py-0">
                  <div className="mx-auto max-w-3xl px-4 pt-4 sm:max-w-3xl sm:px-6 lg:p-0">
                    <div className="w-full h-[30rem] sm:w-full lg:h-[800px] duration-500 ease-in-out">
                      <Image
                        className="w-full h-full object-center rounded-xl"
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:px-4 lg:col-span-4 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <div>
                      <span className="text-white text-4xl lg:text-5xl font-regular">
                        {project.name}
                      </span>
                      <p className="mt-6 text-lg lg:text-xl font-regular text-white">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-8 lg:w-2/3">
                      <Link href={project.liveLink}>
                        <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 w-full space-x-3 flex items-center justify-center px-8 py-3 border-transparent text-base font-regular lg:font-semibold rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-xl md:px-10">
                          <FaRegPaperPlane className="w-6 h-6" />
                          <span>Live</span>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-8 lg:w-2/3">
                      <Link href={project.githubLink}>
                        <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 w-full space-x-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-regular lg:font-semibold rounded-md text-indigo-700 bg-white hover:bg-indigo-100 md:py-4 md:text-xl md:px-10">
                          <FaGithub className="w-6 h-6" /> <span>Source</span>
                        </a>
                      </Link>
                    </div>
                    <div className="h-12 w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* end */}

        {/* <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project) => (
            <a key={project.name} href={project.href} className="group block">
              <div
                aria-hidden="true"
                className=" rounded-lg overflow-hidden group-hover:opacity-75"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-center object-cover"
                  width={900}
                  height={1200}
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
}
