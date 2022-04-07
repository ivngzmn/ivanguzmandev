import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Background from '../public/static/images/links-bg.jpg';
import ProfileImage from '../public/static/images/profile-photo.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaInstagram,
  FaQuoteLeft,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { BiBookAlt, BiWorld } from 'react-icons/bi';
import Logo from '../public/static/images/guzman-logo.svg';

const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/zaku_dev',
    icon: () => <FaTwitter className="h-6 w-6" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ivngzmn',
    icon: () => <FaGithub className="h-6 w-6" />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ivan-julian-guzman/',
    icon: () => <FaLinkedin className="h-6 w-6" />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zaku_dev/',
    icon: () => <FaInstagram className="h-6 w-6" />
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/zaku_dev',
    icon: () => <FaTwitch className="h-6 w-6" />
  }
];

function MyLinks() {
  return (
    <div className="relative mx-auto min-h-screen px-4">
      <div className="bg-slate-900">
        <Image
          src={Background}
          alt="rain on a window"
          layout="fill"
          objectFit="cover"
          quality={60}
          className="min-h-screen w-full"
        />
      </div>
      <section className="flex flex-col justify-center py-12 px-4">
        <div className="relative mx-auto">
          <Image
            alt="..."
            src={ProfileImage}
            className="h-auto rounded-full border-none align-middle "
            width={100}
            height={100}
          />
        </div>
        <div className="relative mx-auto flex flex-col justify-center text-center">
          <span className="text-lg font-semibold text-white">@zaku_dev</span>

          <span className="mt-2 flex items-center justify-center text-sm text-white">
            <i className="mr-1 text-red-500">
              <FaMapMarkerAlt />
            </i>
            Orange County, CA
          </span>
        </div>
        <div className="relative mt-8 flex justify-center space-x-4">
          {social.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 dark:text-gray-50 dark:hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon />
              </a>
            </Link>
          ))}
        </div>
      </section>
      <section className="relative mx-auto flex max-w-xl flex-col justify-center rounded-2xl bg-slate-700 p-10 py-12 mix-blend-lighten">
        <FaQuoteLeft className="absolute top-4 left-6 h-12 w-12 text-white opacity-20" />
        <span className="text-left text-lg font-thin text-white">
          If you are working on something that you really care about, you don’t
          have to be pushed. The vision pulls you.
        </span>
        <br />
        <span className="mt-2 text-left text-lg font-thin text-white">
          – Steve Jobs
        </span>
      </section>
      <section className="relative m-5 mx-auto flex max-w-xl flex-col justify-center space-y-4 text-center ">
        <Link href="/">
          <a className="h-15 rounded-2xl bg-slate-900 py-5 text-white hover:bg-gray-800 hover:text-slate-300">
            <BiWorld className="mr-2 inline-block h-5 w-5" />
            <span>Website</span>
          </a>
        </Link>
        <Link href="/blog">
          <a className="h-15 rounded-2xl bg-slate-900 py-5 text-white hover:bg-gray-800 hover:text-slate-300">
            <BiBookAlt className="mr-2 inline-block h-5 w-5" />
            <span>Blog</span>
          </a>
        </Link>
      </section>
      <section className="relative bottom-0 mx-auto flex max-w-xl items-center justify-center space-y-4 p-5 text-center">
        <span className="mr-2 text-white">Made with ❤️ by </span>
        <Link href="/" passHref>
          <Image src={Logo} alt="Ivan Guzman Logo" width={40} height={40} />
        </Link>
      </section>
    </div>
  );
}

export default MyLinks;
