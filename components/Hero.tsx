import Link from 'next/link';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import { IoIosRocket, IoIosEye } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import BackgroundImage from 'public/static/images/san-fran.jpeg';

const photographer = {
  name: '@burgessdryan',
  website: 'https://twitter.com/burgessdryan'
};

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Image
        className="brightness-75"
        alt={`Photo by ${photographer.name}`}
        src={BackgroundImage}
        layout="fill"
        objectFit="cover"
        priority
        quality={70}
      />
      <div className="mx-auto flex min-h-screen max-w-[90rem] flex-col justify-center">
        <div className="relative z-10 lg:w-full lg:max-w-4xl lg:pb-10">
          <main
            id="skip"
            className="mx-auto mt-20 px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-28 lg:px-8 xl:mt-32 2xl:mt-44 "
          >
            <div className="text-left sm:text-left lg:text-left">
              <h1 className="text-6xl font-black md:text-6xl lg:text-7xl lg:tracking-wide xl:text-8xl 2xl:text-[118px]">
                <span className="text-white xl:inline">Developing</span>
                <br />
                <span className="text-white xl:inline" id="hero">
                  beautiful
                </span>
                <span className="text-white xl:inline"> web</span>
                <br />
                <span className="text-white xl:inline">experiences.</span>
              </h1>
              <div className="mt-3 max-w-prose lg:mt-5">
                <span className="text-xl leading-relaxed text-gray-50 md:text-2xl lg:text-3xl lg:leading-normal">
                  Full-Stack Software Engineer
                </span>
                <p className="text-left text-base font-light leading-relaxed text-gray-50 sm:mt-1 sm:text-left sm:text-base md:mt-2 md:text-lg lg:mx-0 lg:mt-3 lg:text-left lg:text-xl lg:leading-normal">
                  I specialize on building (and occasionally designing) blazing
                  fast web applications with Next.js and Tailwind CSS.
                  Currently, I'm focused on building accessible, human-centered
                  products.
                </p>
                <span className="flex max-w-prose items-center text-left text-base font-light text-gray-50 sm:mt-2 sm:text-left sm:text-base md:mt-3 md:text-lg lg:mx-0 lg:mt-2 lg:text-left lg:text-xl lg:leading-loose">
                  <MdLocationOn className=" mr-1 text-3xl text-red-600" /> Based
                  in California.
                </span>
              </div>
              <div className="sm:justify-left mt-5 sm:mt-8 sm:flex lg:justify-start lg:space-x-5">
                <div className="rounded-md shadow">
                  <Link href="/#my-work" replace>
                    <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-8  py-3 text-base text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:from-purple-700 hover:to-indigo-700 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                      <IoIosEye className="h-6 w-6" />
                      <span>View my work</span>
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contact">
                    <a className="font-regular flex w-full transform items-center justify-center space-x-3 rounded-md border border-transparent bg-white px-8 py-3 text-base  text-indigo-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-indigo-100 md:py-4 md:px-10 md:text-xl lg:font-semibold">
                      <IoIosRocket className="h-6 w-6" />
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
        <div className="absolute bottom-0 right-0 mb-2 mr-2 flex items-center space-x-2 text-gray-300">
          <CameraIcon className="h-5 w-5" />
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
