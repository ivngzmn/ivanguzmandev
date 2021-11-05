import NextImage from 'next/image';
import NextLink from 'next/link';
import { CameraIcon } from '@heroicons/react/solid';
import { FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <div>
        {/* Header */}
        <div className="py-24 bg-gray-700 sm:py-32 lg:max-w-screen-2xl lg:mx-auto lg:rounded-2xl lg:mb-6">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-100 text-center sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-300 text-center">
              Feel free to use the form below to reach out or the link below the
              form to reach out via Twitter.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative text-base mx-auto max-w-prose mt-6 lg:max-w-none">
          <figure>
            <div className="aspect-none">
              <NextImage
                className="rounded-xl shadow-lg object-cover object-center"
                src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1635409171/Personal-Website/alvin-engler-bIhpiQA009k-unsplash_q5ylhi.jpg"
                alt="Ivan with a huge smile"
                width={1184}
                height={1376}
              />
            </div>
            <figcaption className="flex text-sm text-gray-500">
              <CameraIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-2">Photograph by Lorem Ipsum</span>
            </figcaption>
          </figure>
        </div>
        <div className="relative bg-red-500 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:py-32 lg:rounded-2xl lg:row-start-1 lg:col-start-1 lg:col-span-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's work together
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us. We’d love to hear from you! Send us a
                message using the form opposite, or email us.
              </p>
              <form
                action="#"
                method="POST"
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <span
                      id="phone-description"
                      className="text-sm text-gray-500"
                    >
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="how-can-we-help"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your message.
                    </label>
                    <span
                      id="how-can-we-help-description"
                      className="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-500 lg:max-w-screen-2xl lg:mx-auto lg:rounded-2xl lg:m-6">
        <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block text-indigo-50">Reach out via Twitter</span>
            <span className="block text-grape-800">DM's are open.</span>
          </h2>
          <NextLink href="https://twitter.com/zaku_dev">
            <a className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-indigo-50 border border-transparent rounded-md shadow-md text-base font-medium text-indigo-500 hover:bg-indigo-700 hover:text-white sm:w-auto">
              <span>Come say hi.</span>
              <FaTwitter
                className="ml-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
