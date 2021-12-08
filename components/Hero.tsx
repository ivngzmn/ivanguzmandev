import NextLink from 'next/link';
import NextImage from 'next/image';
import BackgournImage from 'public/images/sf-sunset.jpg';

export default function Hero() {
  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      <NextImage
        className="filter brightness-50 contrast-150"
        alt={`Decorative background`}
        src={BackgournImage}
        layout="fill"
        objectFit="cover"
        priority
        quality={70}
      />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-10 sm:pb-20 md:pb-28 lg:max-w-4xl lg:w-full lg:pb-52 xl:pb-64">
          <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-28 lg:mt-28 lg:px-8 xl:mt-28 ">
            <div className="text-left sm:text-left lg:text-left">
              <h1 className="filter contrast-150 text-transparent bg-clip-text bg-text-animation bg-center md:bg-center lg:bg-center lg:bg-no-repeat bg-cover text-5xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <span className="xl:inline">Building</span>
                <br />
                <span className="xl:inline">Beautiful web experiences.</span>
              </h1>
              <div className="mt-3">
                <span className="text-3xl text-gray-200">
                  Full-Stack Software Engineer
                </span>
                <p className="text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl text-left sm:text-left lg:text-left md:mt-5 md:text-xl lg:text-xl lg:mx-0">
                  I’m a reef nerd and Jamstack enthusiast. I love working with
                  Next.js and Tailwind CSS. Making the web faster and more
                  accessible for small businesses. Welcome to my corner of the
                  digital ocean.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-left lg:justify-start">
                <div className="rounded-md shadow">
                  <NextLink href="/projects">
                    <a className="w-full space-x-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10">
                      <div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                            fill="white"
                          />
                          <path
                            d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <span>View my work</span>
                    </a>
                  </NextLink>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <NextLink href="/contact">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 md:py-4 md:text-lg md:px-10">
                      Hire me
                    </a>
                  </NextLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
