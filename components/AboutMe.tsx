import { CameraIcon } from '@heroicons/react/solid';
// @refresh reset

export default function Aboutme() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2> <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Ivan Guzman
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627191346/Personal-Website/GitHubPic_ic42zy.png"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by David Acosta</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Hey, I’m Ivan. I'm a Software Engineer and I first got into programming when
                I working as a customer service supervisor at an e-commerce website.
                I taught myself how to use their custom content management system to
                update outdated product descriptions in order to alleviate load on
                repeated calls.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Then in I went on to work at Uber Technologies where my passion for
                programming grew further as I was persuaded by my team lead to
                pursue my dream software engineering. Unfortunately, the pandemic
                hit and the Uber in person office closed, so I shifted gears to not
                ever wanting this to happen again. So, I began to practice my
                Software Engineering skills over the past year.
              </p>
              <p>
                I grew up in small-town in California and went to school at
                Fullerton College where I studied art and dabbled a bit with
                Networking Security. When I am not deep in code I spend my free
                tending to my coral reef aquarium, being a father, and enjoying time
                with friends and family in Brea, CA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
