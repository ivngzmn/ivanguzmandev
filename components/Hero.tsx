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
              <h1 className="filter contrast-150 uppercase text-transparent bg-clip-text bg-text-animation bg-center md:bg-center lg:bg-center lg:bg-no-repeat bg-cover text-6xl tracking-tight font-extrabold sm:text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <span className="xl:inline">Hello World,</span>
                <br />
                <span className="xl:inline">I'm Ivan Guzman.</span>
              </h1>
              <div className="mt-3">
                <span className="text-3xl text-gray-200">
                  Full-Stack Software Engineer
                </span>
                <p className="text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:text-xl lg:mx-0">
                  I’m a reef nerd and Jamstack enthusiast. I love working with
                  Next.js and Tailwind CSS. Making the web faster and more
                  accessible for small businesses. Welcome to my corner of the
                  digital ocean.
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <NextLink href="/projects">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Projects
                    </a>
                  </NextLink>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <NextLink href="/contact">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 md:py-4 md:text-lg md:px-10">
                      Get in Touch
                    </a>
                  </NextLink>
                </div>
              </div>
            </div>
          </main>
        </div>
        <section>
          <div></div>
        </section>
      </div>
    </div>
  );
}
