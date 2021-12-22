import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import ProfilePic from '/public/images/profile-photo.jpg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { VscTriangleDown } from 'react-icons/vsc';
import { RiExternalLinkLine } from 'react-icons/ri';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from '/public/images/ig-logo.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-50 underline underline-offset-8 decoration-4 decoration-violet-600'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden lg:flex px-3 py-2 rounded-lg hover:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-500 ease-in-out'
        )}
      >
        <span>{text}</span>
      </a>
    </Link>
  );
}

function MobileNav({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-50 underline underline-offset-8 decoration-4 decoration-violet-600'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'px-3 py-2 rounded-lg hover:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-500 ease-in-out'
        )}
      >
        <span className="block px-3 py-5 rounded-md text-5xl font-medium">
          {text}
        </span>
      </a>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="bg-black">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center align-middle">
                  <div className="flex-shrink-0 pt-2">
                    <Link href="/">
                      <a>
                        <Image
                          src={Logo}
                          alt="Ivan Guzman Logo"
                          width={40}
                          height={40}
                          className="h-8 w-auto"
                        />
                      </a>
                    </Link>
                  </div>
                  <nav className="sm:block sm:ml-6 pb-5">
                    <a href="#skip" className="skip-nav">
                      Skip to content
                    </a>
                    <div className="flex space-x-4">
                      <NavItem href="/" text="Home" />
                      <NavItem href="/about" text="About" />
                      <NavItem href="/projects" text="Projects" />
                      <NavItem href="/contact" text="Contact" />
                      <NavItem href="/blog" text="Blog" />
                    </div>
                  </nav>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="hidden lg:inline-block  bg-black text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>

                          <div className="space-x-3 flex items-center rounded-full pr-1 pl-1 pt-1 bg-slate-900">
                            <span className="">
                              <Image
                                className="h-6 w-6 rounded-full -mr-2"
                                src={ProfilePic}
                                alt="Ivan Guzman Profile Photo"
                                quality="85"
                                height={30}
                                width={30}
                              />
                            </span>

                            <span className="text-gray-300">
                              <span className="sr-only">Open main menu</span>
                              <span className="text-sm">Ivan G.</span>
                              <VscTriangleDown className="hidden lg:inline-block h-4 w-4 ml-3 mr-1" />
                            </span>
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://github.com/ivngzmn"
                                className={classNames(
                                  active ? 'bg-gray-700' : '',
                                  'flex items-center px-4 py-2 text-sm text-gray-300'
                                )}
                              >
                                <FaGithub className="h-4 w-4 mr-2" />
                                <span className="">GitHub</span>
                                <RiExternalLinkLine className=" h-4 w-4 absolute right-2" />
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://www.linkedin.com/in/ivan-julian-guzman/"
                                className={classNames(
                                  active ? 'bg-gray-700' : '',
                                  'flex items-center px-4 py-2 text-sm text-gray-300'
                                )}
                              >
                                <FaLinkedinIn className="flex h-4 w-4 mr-2" />
                                <span className="flex">LinkedIn</span>
                                <RiExternalLinkLine className="flex h-4 w-4 absolute right-2" />
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://twitter.com/zaku_dev"
                                className={classNames(
                                  active ? 'bg-gray-700' : '',
                                  'flex items-center px-4 py-2 text-sm text-gray-300'
                                )}
                              >
                                <FaTwitter className="flex h-4 w-4 mr-2" />
                                <span className="flex">Twitter</span>
                                <RiExternalLinkLine className="flex h-4 w-4 absolute right-2" />
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
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-700 ease-in-out">
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
            <Transition
              show={open}
              enter="transition duration-400 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel static className="lg:hidden">
                <div className="flex flex-col col-span-1 px-2 pt-2 pb-3 space-y-1">
                  <MobileNav href="/" text="Home" />
                  <MobileNav href="/about" text="About" />
                  <MobileNav href="/projects" text="Projects" />
                  <MobileNav href="/contact" text="Contact" />
                  <MobileNav href="/blog" text="Blog" />
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
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
                      <div className="text-sm font-medium text-gray-400 cursor-pointer">
                        <Link href="/contact">hello@ivanguzman.dev</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <a
                      href="https://github.com/ivngzmn"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <FaGithub className="inline-block h-4 w-4 mr-2" />
                      <span className="">GitHub</span>
                      <RiExternalLinkLine className="h-4 w-4 absolute right-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ivan-julian-guzman/"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <FaLinkedinIn className="inline-block h-4 w-4 mr-2" />
                      <span className="">LinkedIn</span>
                      <RiExternalLinkLine className="h-4 w-4 absolute right-4" />
                    </a>
                    <a
                      href="https://twitter.com/zaku_dev"
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <FaTwitter className="inline-block h-4 w-4 mr-2" />
                      <span className="">Twitter</span>
                      <RiExternalLinkLine className="h-4 w-4 absolute right-4" />
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
