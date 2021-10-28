export default function Hero() {
  return (
    <div className="relative bg-black overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-10 sm:pb-20 md:pb-28 lg:max-w-4xl lg:w-full lg:pb-52 xl:pb-64">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-28 lg:mt-52 lg:px-8 xl:mt-64 h-5/6">
            <div className="text-left sm:text-center lg:text-left">
              <h1 className="uppercase text-transparent bg-clip-text bg-text-animation bg-left lg:bg-center text-6xl tracking-tight font-extrabold sm:text-6xl md:text-8xl lg:text-9xl">
                <span className="xl:inline">Hello World,</span>
                <br />
                <span className="xl:inline">I'm Ivan Guzman.</span>
              </h1>
              <div className="mt-3">
                <span className="text-3xl text-gray-200">
                  Full-Stack Software Engineer
                </span>
                <p className="text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I'm a father, reef aquarium enthusiast and Developer who is
                  dedicated to always be learning. Welcome to my slice of the
                  internet.
                </p>
                <p className="text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  📍 Orange County, CA
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/projects"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Projects
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <section>
          <div className="object-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-full w-full object-cover md:h-full lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1611262588019-db6cc2032da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>
        </section>
        <section>
          <div></div>
        </section>
      </div>
    </div>
  );
}
