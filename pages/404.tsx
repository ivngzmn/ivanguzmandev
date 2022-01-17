import NextLink from 'next/link';
import Image from 'next/image';
import BackgroundImage from '/public/static/images/lost.jpg';
import { Navbar, Footer } from 'components';

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen relative">
        <Navbar />
        <div className="min-h-screen bg-cover bg-top sm:bg-top relative">
          <Image
            className="filter brightness-50 contrast-150"
            alt={`Alley with fixie bicycle in the foreground`}
            src={BackgroundImage}
            layout="fill"
            objectFit="cover"
            priority
            quality={75}
          />
          <section className="bg-black bg-opacity-5 h-screen relative">
            <div className="max-w-7xl mx-auto text-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-48 flex justify-center flex-col min-h-screen">
              <p className="font-bold text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl tracking-tight mb-6 text-white dark:text-white">
                404 error 😩
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                ${`Uh oh! I think you're lost.`}
              </h1>
              <p className="mt-2 text-lg font-medium text-white max-w-screen-lg mx-auto text-opacity-100">
                Why show a generic 404 when I can make it sound mysterious? It
                seems you've found something that used to exist, or you spelled
                something wrong. I'm guessing you spelled something wrong. Can
                you double check that URL?
              </p>
              <section className="mt-6">
                <NextLink href="/">
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Go back home
                  </a>
                </NextLink>
              </section>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
