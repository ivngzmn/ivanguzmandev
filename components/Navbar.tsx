import { Fragment } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import ProfilePic from '/public/images/profile-photo.jpg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            Available for Hire
          </p>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NextLink href="/">
                    <a>
                      <NextImage
                        className="h-8 w-auto"
                        src="/images/ig-logo.svg"
                        alt="Logo"
                        width="40"
                        height="40"
                      />
                    </a>
                  </NextLink>
                </div>
                <div className="sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <NextLink href="/">
                      <a className="hidden lg:inline-block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Home
                      </a>
                    </NextLink>
                    <NextLink href="/about">
                      <a className="hidden lg:inline-block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                    </NextLink>
                    <NextLink href="/projects">
                      <a className="hidden lg:inline-block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Projects
                      </a>
                    </NextLink>
                    <NextLink href="/contact">
                      <a className="hidden lg:inline-block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </NextLink>
                    <NextLink href="/blog">
                      <a className="hidden lg:inline-block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Blog
                      </a>
                    </NextLink>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="hidden lg:inline-block  bg-gray-800 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>

                        <div className="space-x-8 flex items-center rounded-full pr-1 pl-4 pt-1 bg-gray-700">
                          <span className="text-gray-300">
                            <span className="sr-only">Open main menu</span>
                            <span>Ivan G.</span>
                            <ChevronDownIcon className="hidden lg:inline-block h-5 w-5 ml-2 -mr-1" />
                          </span>
                          <span>
                            <NextImage
                              className="h-8 w-8 rounded-full mr-2"
                              src={ProfilePic}
                              alt="Ivan Guzman Profile Photo"
                              quality="85"
                              height={35}
                              width={35}
                            />
                          </span>
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://github.com/ivngzmn"
                              className={classNames(
                                active ? 'bg-gray-700' : '',
                                'block px-4 py-2 text-sm text-gray-300 space-x-4'
                              )}
                            >
                              <FaGithub className="inline-block h-4 w-4 mr-2" />
                              Github
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://www.linkedin.com/in/ivan-julian-guzman/"
                              className={classNames(
                                active ? 'bg-gray-700' : '',
                                'block px-4 py-2 text-sm text-gray-300'
                              )}
                            >
                              <FaLinkedinIn className="inline-block h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="https://twitter.com/zaku_dev"
                              className={classNames(
                                active ? 'bg-gray-700' : '',
                                'block px-4 py-2 text-sm text-gray-300'
                              )}
                            >
                              <FaTwitter className="inline-block h-4 w-4 mr-2" />
                              Twitter
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NextLink href="/">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </a>
              </NextLink>
              <NextLink href="/about">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </a>
              </NextLink>
              <NextLink href="/projects">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </a>
              </NextLink>
              <NextLink href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
              </NextLink>

              <NextLink href="/blog">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </a>
              </NextLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <NextImage
                    className="h-10 w-10 rounded-full"
                    src={ProfilePic}
                    alt="Ivan Guzman's Profile Photo"
                    quality="85"
                    height={35}
                    width={35}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Ivan Guzman
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    ivanguzmandev@gmail.com
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="https://github.com/ivngzmn"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <FaGithub className="inline-block h-4 w-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ivan-julian-guzman/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <FaLinkedinIn className="inline-block h-4 w-4 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/zaku_dev"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <FaTwitter className="inline-block h-4 w-4 mr-2" />
                  Twitter
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
