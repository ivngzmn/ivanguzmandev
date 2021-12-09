import React from 'react';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import { AiFillAudio, AiOutlineLaptop, AiFillCode } from 'react-icons/ai';
import { SiBmcsoftware } from 'react-icons/si';
import { MdOutlineDevicesOther } from 'react-icons/md';

const computer = [
  {
    id: 1,
    content: '13" MacBook Pro M1 2020',
    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  },
  {
    id: 2,
    content: '34" Dell Ultrasharp (USB-C) Monitor U3419W',

    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  },
  {
    id: 3,
    content: 'Logitech MX Master 3 Mouse',

    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  },
  {
    id: 4,
    content: 'Apple laptop keyboard / Ergo split keyboard build underway',

    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  },
  {
    id: 5,
    content: 'CalDigit TS3+ Thunderbolt 3 (USB-C) Dock',

    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  },
  {
    id: 6,
    content: 'G-Drive 6TB (USB-C) External Hard Drive',

    icon: AiOutlineLaptop,
    iconBackground: 'bg-gray-500'
  }
];

const code = [
  {
    id: 1,
    content: 'Terminal: iTerm2 with bash shell',
    icon: AiFillCode,
    iconBackground: 'bg-green-500'
  },
  {
    id: 2,
    content: 'Terminal: LunarVim as my NeoVim IDE',

    icon: AiFillCode,
    iconBackground: 'bg-green-500'
  },
  {
    id: 3,
    content: 'IDE: Visual Studio Code with vim plugin for consistent editing',

    icon: AiFillCode,
    iconBackground: 'bg-green-500'
  },
  {
    id: 4,
    content: 'Theme: Dracula Pro for LunarVim and VS Code',
    icon: AiFillCode,
    iconBackground: 'bg-green-500'
  },
  {
    id: 5,
    content: 'Font: Fira Code Nerd Font for the ligatures',
    icon: AiFillCode,
    iconBackground: 'bg-green-500'
  }
];

const software = [
  {
    id: 1,
    content:
      'Alfred to manage my MacOS applications but slowly switching to Raycast',
    icon: SiBmcsoftware,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 2,
    content:
      'Dash offline docsets for macOS accessible from Alfred and Raycast',

    icon: SiBmcsoftware,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 3,
    content:
      'Grammarly for writing and spell checking since I can sometimes suck at grammar',

    icon: SiBmcsoftware,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 4,
    content: 'Spoitify for the sweet tunes',

    icon: SiBmcsoftware,
    iconBackground: 'bg-blue-500'
  },
  {
    id: 5,
    content: 'Affinity Designer for designing and prototyping',

    icon: SiBmcsoftware,
    iconBackground: 'bg-blue-500'
  }
];

const audio = [
  {
    id: 1,
    content:
      'CAD Audio E100s Super Cardioid Microphone for those nice low notes',
    icon: AiFillAudio,
    iconBackground: 'bg-red-500'
  },
  {
    id: 2,
    content:
      'H5 Zoom handheld audio recorder for use in voice over and meetings',

    icon: AiFillAudio,
    iconBackground: 'bg-red-500'
  },
  {
    id: 3,
    content: 'Sennheiser HD300 PROtect headphones',

    icon: AiFillAudio,
    iconBackground: 'bg-red-500'
  }
];

const other = [
  {
    id: 1,
    content: 'Apple AirPods Pro for the active noise cancelling',
    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-indigo-500'
  },
  {
    id: 2,
    content: 'Apple iPhone for checking mobile web apps during development',

    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-indigo-500'
  },
  {
    id: 3,
    content: 'USB-A Fan for when I need to cool down',

    icon: MdOutlineDevicesOther,
    iconBackground: 'bg-indigo-500'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DevSetup() {
  return (
    <div>
      <section className="mb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto mb-8">
            <div className="border-b w-full inline-block border-indigo-600 py-8">
              <div className="md:float-left block">
                <span className="text-3xl lg:text-7xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  Uses
                </span>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <span className="font-light text-xl text-gray-800">
              Here is the Hardware Technologies and Software that I use to build
              my apps, do some voice over or make digital art.
            </span>
          </div>
          <figure>
            <div className="relative shadow-md inline-block w-full h-screen">
              <Image
                alt={`Black Flat Screen Computer Monitor on White Wooden Desk`}
                src={`https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627045601/Personal-Website/desk_qnmcyd.jpg`}
                layout="fill"
                objectFit="cover"
                priority
                className="shadow-lg rounded-xl"
              />
            </div>
            <figcaption className="text-gray-500 flex mt-2">
              <CameraIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-2">Photo by Roberto Nickson</span>
            </figcaption>
          </figure>

          {/* computer/ office */}
          <div className="relative text-gray-900 mt-28">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Computer</h2>
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
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                            <p className="text-sm text-gray-500">
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
          <div className="relative text-gray-900 mt-28">
            <div className="flow-root">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Coding</h2>
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
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                            <p className="text-sm text-gray-500">
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
          <div className="relative text-gray-900 mt-28">
            <div className="flow-root">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
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
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                            <p className="text-sm text-gray-500">
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
          <div className="relative text-gray-900 mt-28">
            <div className="flow-root">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Audio</h2>
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
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                            <p className="text-sm text-gray-500">
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
          <div className="relative text-gray-900 mt-28">
            <div className="flow-root">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
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
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={classNames(
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
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
                            <p className="text-sm text-gray-500">
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
        </div>
      </section>
    </div>
  );
}

export default DevSetup;
