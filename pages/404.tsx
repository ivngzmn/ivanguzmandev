import NextLink from 'next/link';

export default function NotFound() {
  return (
    <>
      <div
        className="min-h-screen 2xl:max-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1417816491410-d61e1546e539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-white dark:text-white">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-white text-opacity-100">
            Why show a generic 404 when I can make it sound mysterious? It seems
            you've found something that used to exist, or you spelled something
            wrong. I'm guessing you spelled something wrong. Can you double
            check that URL?
          </p>
          <section className="mt-6">
            <NextLink href="/">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-80 sm:hover:bg-opacity-80">
                Go back home
              </a>
            </NextLink>
          </section>
        </div>
      </div>
    </>
  );
}
