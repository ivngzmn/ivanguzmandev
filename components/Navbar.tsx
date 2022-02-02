import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import ProfilePic from '../public/static/images/profile-photo.jpg';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { VscTriangleDown } from 'react-icons/vsc';
import { RiExternalLinkLine } from 'react-icons/ri';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from '../public/static/images/guzman-logo.svg';

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
            ? 'font-semibold text-gray-50 underline decoration-violet-600 decoration-4 underline-offset-8'
            : 'font-normal text-gray-400',
          'hidden rounded-lg px-3 py-2 transition duration-500 ease-in-out hover:bg-gray-700 hover:text-gray-50 lg:flex'
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
            ? 'font-semibold text-gray-800 underline decoration-violet-600 decoration-4 underline-offset-8'
            : 'font-normal text-gray-600',
          'rounded-lg px-3 py-2 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-50'
        )}
      >
        <span className="block rounded-md px-3 py-5 text-5xl font-medium">
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center align-middle">
                  <div className="flex-shrink-0 pt-2">
                    <Link href="/">
                      <a>
                        <Image
                          src={Logo}
                          alt="Ivan Guzman Logo"
                          width={70}
                          height={70}
                          className="h-8 w-auto"
                        />
                      </a>
                    </Link>
                  </div>
                  <nav className="pb-5 sm:ml-6 sm:block">
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
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="hidden rounded-full  bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 lg:inline-block">
                          <span className="sr-only">Open user menu</span>

                          <div className="flex items-center space-x-3 rounded-full bg-zinc-900 pr-1 pl-1 pt-1">
                            <span className="">
                              <Image
                                className="-mr-2 h-6 w-6 rounded-full"
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
                              <VscTriangleDown className="ml-3 mr-1 hidden h-4 w-4 lg:inline-block" />
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
                        <Menu.Items className="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://github.com/ivngzmn"
                                className={classNames(
                                  active ? 'bg-gray-700' : '',
                                  'flex items-center px-4 py-2 text-sm text-gray-300'
                                )}
                              >
                                <FaGithub className="mr-2 h-4 w-4" />
                                <span className="">GitHub</span>
                                <RiExternalLinkLine className=" absolute right-2 h-4 w-4" />
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
                                <FaLinkedinIn className="mr-2 flex h-4 w-4" />
                                <span className="flex">LinkedIn</span>
                                <RiExternalLinkLine className="absolute right-2 flex h-4 w-4" />
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
                                <FaTwitter className="mr-2 flex h-4 w-4" />
                                <span className="flex">Twitter</span>
                                <RiExternalLinkLine className="absolute right-2 flex h-4 w-4" />
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
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-700 ease-in-out hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="col-span-1 flex flex-col space-y-1 px-2 pt-2 pb-3">
                  <MobileNav href="/" text="Home" />
                  <MobileNav href="/about" text="About" />
                  <MobileNav href="/projects" text="Projects" />
                  <MobileNav href="/contact" text="Contact" />
                  <MobileNav href="/blog" text="Blog" />
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
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
                      <div className="cursor-pointer text-sm font-medium text-gray-400">
                        <Link href="/contact">hello@ivanguzman.dev</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <a
                      href="https://github.com/ivngzmn"
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <FaGithub className="mr-2 inline-block h-4 w-4" />
                      <span className="">GitHub</span>
                      <RiExternalLinkLine className="absolute right-4 h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ivan-julian-guzman/"
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <FaLinkedinIn className="mr-2 inline-block h-4 w-4" />
                      <span className="">LinkedIn</span>
                      <RiExternalLinkLine className="absolute right-4 h-4 w-4" />
                    </a>
                    <a
                      href="https://twitter.com/zaku_dev"
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      <FaTwitter className="mr-2 inline-block h-4 w-4" />
                      <span className="">Twitter</span>
                      <RiExternalLinkLine className="absolute right-4 h-4 w-4" />
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
