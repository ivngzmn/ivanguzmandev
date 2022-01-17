import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Desk from '../public/static/images/desk.jpg';
import { CameraIcon } from '@heroicons/react/solid';
import { AiFillAudio, AiOutlineLaptop, AiFillCode } from 'react-icons/ai';
import { SiBmcsoftware } from 'react-icons/si';
import { MdOutlineDevicesOther } from 'react-icons/md';

const computer = [
  {
    id: 1,
    content: '13" MacBook Pro M1 2020',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 2,
    content: '34" Dell Ultrasharp (USB-C) Monitor U3419W',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 3,
    content: 'BenQ ScreenBar Halo Monitor Light',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 4,
    content: 'Logitech MX Master 3 Mouse',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 5,
    content: 'Apple laptop keyboard / Breeze Split Keyboard',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 6,
    content: 'CalDigit TS3+ Thunderbolt 3 (USB-C) Dock',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  },
  {
    id: 7,
    content: 'G-Drive 6TB (USB-C) External Hard Drive',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-pink-500'
  }
];

const code = [
  {
    id: 1,
    content: 'Terminal: iTerm2 with bash shell',
    icon: AiFillCode,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-cyan-500'
  },
  {
    id: 2,
    content: 'Terminal: LunarVim as my NeoVim IDE',
    icon: AiFillCode,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-cyan-500'
  },
  {
    id: 3,
    content: 'IDE: Visual Studio Code with vim plugin for consistent editing',
    icon: AiFillCode,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-cyan-500'
  },
  {
    id: 4,
    content: 'Theme: Dracula Pro for LunarVim and VS Code',
    icon: AiFillCode,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-cyan-500'
  },
  {
    id: 5,
    content: 'Font: Fira Code Nerd Font for the ligatures',
    icon: AiFillCode,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-cyan-500'
  }
];

const software = [
  {
    id: 1,
    content:
      'Alfred to manage my MacOS applications but slowly switching to Raycast',
    icon: SiBmcsoftware,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-indigo-500'
  },
  {
    id: 2,
    content:
      'Dash offline docsets for macOS accessible from Alfred and Raycast',
    icon: SiBmcsoftware,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    content:
      'Grammarly for writing and spell checking since I can sometimes suck at grammar',
    icon: SiBmcsoftware,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    content: 'Spoitify for the sweet tunes',
    icon: SiBmcsoftware,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-indigo-500'
  },
  {
    id: 5,
    content: 'Affinity Designer and Pixelmator Pro for prototyping and mockups',
    icon: SiBmcsoftware,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-indigo-500'
  }
];

const audio = [
  {
    id: 1,
    content:
      'CAD Audio E100s Super Cardioid Microphone for those nice low notes.',
    icon: AiFillAudio,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-red-500'
  },
  {
    id: 2,
    content: 'Wave XLR for use in voice over and meetings.',
    icon: AiFillAudio,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-red-500'
  },
  {
    id: 3,
    content: 'Sennheiser HD300 PROtect headphones',
    icon: AiFillAudio,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-red-500'
  }
];

const other = [
  {
    id: 1,
    content: 'Apple AirPods Pro for the active noise cancelling',
    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-blue-500'
  },
  {
    id: 2,
    content: 'Apple iPhone for checking mobile web apps during development',
    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-blue-500'
  },
  {
    id: 3,
    content: 'USB Fan for when I need my Macbook to cool down',
    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-gradient-to-tr from-purple-500 to-blue-500'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DevSetup() {
  return (
    <div className="bg-zinc-900">
      <section className="pb-28">
        <div className="relative max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mb-2 lg:mb-8">
            <div className="w-full inline-block py-10 lg:py-20">
              <div className="md:float-left block">
                <h1
                  className="text-6xl lg:text-8xl font-semibold leading-8 tracking-tight"
                  id="blog"
                >
                  Uses
                </h1>
                <h2 className="text-3xl lg:text-4xl font-light tracking-normal text-slate-100 mt-5">
                  Here is the Hardware and Software that I use to build my apps,
                  do some voice over or make digital art.
                </h2>
              </div>
            </div>
          </div>
          <figure>
            <div className="relative mx-auto shadow-2xl inline-block w-full h-72 lg:w-full lg:h-[500px]">
              <Image
                alt={`Black Flat Screen Computer Monitor on White Wooden Desk`}
                src={Desk}
                layout="fill"
                objectFit="cover"
                priority
                className="shadow-xl rounded-xl"
              />
            </div>
            <figcaption className="text-zinc-200 flex mt-2 lg:justify-end">
              <CameraIcon
                className="flex-none w-5 h-5 text-zinc-200"
                aria-hidden="true"
              />
              <span className="ml-2">Photo by Roberto Nickson</span>
            </figcaption>
          </figure>

          {/* computer/ office */}
          <section className="rounded-xl shadow-2xl p-8 lg:p-14 mt-10 lg:mt-28">
            <div className="relative text-zinc-100">
              <div className="mb-4">
                <h2 className="text-3xl font-semibold text-zinc-100">
                  Computer
                </h2>
              </div>
              <div className="flow-root">
                <ul role="list" className="-mb-8">
                  {computer.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== computer.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-4">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                              )}
                            >
                              <event.icon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-lg text-zinc-200">
                                {event.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coding */}
            <div className="relative text-zinc-100 mt-28">
              <div className="flow-root">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-zinc-100">
                    Coding
                  </h2>
                </div>
                <ul role="list" className="-mb-8">
                  {code.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== code.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-4">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                              )}
                            >
                              <event.icon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-lg text-zinc-200">
                                {event.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Software */}
            <div className="relative text-zinc-100 mt-28">
              <div className="flow-root">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-zinc-100">
                    Software
                  </h2>
                </div>
                <ul role="list" className="-mb-8">
                  {software.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== software.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-4">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                              )}
                            >
                              <event.icon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-lg text-zinc-200">
                                {event.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* audio */}
            <div className="relative text-zinc-100 mt-28">
              <div className="flow-root">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-zinc-100">
                    Audio
                  </h2>
                </div>
                <ul role="list" className="-mb-8">
                  {audio.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== audio.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-4">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                              )}
                            >
                              <event.icon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-lg text-zinc-200">
                                {event.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Technologies */}
            <div className="relative text-zinc-100 mt-28">
              <div className="flow-root">
                <div className="mb-6">
                  <h2 className="text-3xl font-semibold text-zinc-100">
                    Other Tech
                  </h2>
                </div>
                <ul role="list" className="-mb-8">
                  {other.map((event, eventIdx) => (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== other.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-4">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-white'
                              )}
                            >
                              <event.icon
                                className="h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-lg text-zinc-200">
                                {event.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default DevSetup;
