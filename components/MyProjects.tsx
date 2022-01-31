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
    liveLink: 'https://coinforge.vercel.app/',
    githubLink: 'https://github.com/ivngzmn/coin-forge',
    imageSrc: CoinForge,
    imageAlt: 'Coin Forge',
    description: `I have been getting deeper into React and wanted to see how I could push myself to use a different UI library such as Material UI. Material UI has great docs and allowed for me to use create a nice UI to display the project. I used Axios for the API calls. For the API's I went to Coin Gecko where they list over 12,279 coins. For the individual coins I went and used Chart.JS to have each coin show the 24 Hour, 30 Day, 3 Month, 1 Year charts. `
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

        <div className="relative space-y-6 pt-2 lg:space-y-40">
          {/* <ProjectCard /> */}
          {projects.map((project) => (
            <div
              key={project.name}
              className=" rounded-xl bg-transparent pb-10 lg:relative lg:z-10 lg:pb-0"
            >
              <div className="lg:mx-auto lg:grid lg:max-w-full lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:py-0">
                  <div className="mx-auto max-w-3xl px-4 pt-4 sm:max-w-3xl sm:px-6 lg:p-0">
                    <div className="h-[30rem] w-full duration-500 ease-in-out sm:w-full lg:h-[800px]">
                      <Image
                        className="h-full w-full rounded-xl object-center"
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:col-span-4 lg:m-0 lg:px-4 lg:pl-8">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                    <div>
                      <span className="font-regular text-4xl text-white lg:text-5xl">
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
                    <div className="mt-8 lg:w-2/3">
                      <Link href={project.githubLink}>
                        <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border border-transparent bg-white px-8 py-3 text-base text-indigo-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-indigo-100 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                          <FaGithub className="h-6 w-6" /> <span>Source</span>
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
