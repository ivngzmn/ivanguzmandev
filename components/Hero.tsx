import Link from 'next/link';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import { IoIosRocket, IoIosEye } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import BackgroundImage from 'public/static/images/sf-sunset.jpg';

const photographer = {
  name: 'Van Mendoza',
  website: 'https://www.instagram.com/vanmfilms/'
};

export default function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-black">
      <Image
        className="filter brightness-50 contrast-150"
        alt={`Photo by ${photographer.name}`}
        src={BackgroundImage}
        layout="fill"
        objectFit="cover"
        priority
        quality={75}
      />
      <div className="max-w-7xl mx-auto flex justify-center flex-col min-h-screen">
        <div className="relative z-10 pb-10 sm:pb-20 md:pb-28 lg:max-w-4xl lg:w-full lg:pb-52 xl:pb-64">
          <main
            id="skip"
            className="mt-20 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-28 lg:px-8 xl:mt-32 2xl:mt-44 "
          >
            <div className="text-left sm:text-left lg:text-left">
              <h1 className="lg:tracking-wide font-black text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[118px]">
                <span className="xl:inline text-white">Developing</span>
                <br />
                <span className="xl:inline text-white" id="hero">
                  beautiful
                </span>
                <span className="xl:inline text-white"> web</span>
                <br />
                <span className="xl:inline text-white">experiences.</span>
              </h1>
              <div className="mt-3 lg:mt-5 max-w-prose">
                <span className="text-2xl md:text-3xl lg:text-5xl text-gray-50 leading-relaxed lg:leading-normal">
                  Full-Stack Software Engineer
                </span>
                <p className="font-light leading-relaxed text-gray-50 sm:mt-2 md:mt-3 lg:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-left sm:text-left lg:text-left lg:mx-0 lg:leading-normal">
                  I specialize on building (and occasionally designing) blazing
                  fast web applications with React and Tailwind CSS. Currently,
                  I'm focused on building accessible, human-centered products.
                </p>
                <span className="flex items-center font-light text-gray-50 sm:mt-2 md:mt-3 lg:mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-prose text-left sm:text-left lg:text-left lg:mx-0 lg:leading-loose">
                  <MdLocationOn className=" text-3xl text-red-600 mr-1" /> Based
                  in Orange County, CA.
                </span>
              </div>
              <div className="mt-5 lg:space-x-5 sm:mt-8 sm:flex sm:justify-left lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/projects">
                    <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 w-full space-x-3 flex items-center justify-center px-8 py-3 border-transparent  text-base font-regular lg:font-semibold rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:text-xl md:px-10">
                      <IoIosEye className="w-6 h-6" />
                      <span>View my work</span>
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contact">
                    <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 w-full space-x-3 flex items-center justify-center px-8 py-3 border border-transparent  text-base font-regular lg:font-semibold rounded-md text-indigo-700 bg-white hover:bg-indigo-100 md:py-4 md:text-xl md:px-10">
                      <IoIosRocket className="w-6 h-6" />
                      <span>Hire me</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative">
        <div className="text-gray-300 flex items-center space-x-2 absolute bottom-0 right-0 mb-2 mr-2">
          <CameraIcon className="w-5 h-5" />
          <span>
            Photo by{' '}
            <Link href={photographer.website}>
              <a className="cursor-pointer underline">{photographer.name}</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
