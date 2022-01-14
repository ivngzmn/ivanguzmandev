import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Background from '../public/images/links-bg.jpg';
import ProfileImage from '../public/images/profile-photo.jpg';
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
import Logo from '../public/images/guzman-logo.svg';

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
        <Image src={Background} alt="" layout="fill" objectFit="cover" />
      </div>
      <section className="flex flex-col justify-center py-12">
        <div className="relative mx-auto">
          <Image
            alt="..."
            src={ProfileImage}
            className="rounded-full h-auto align-middle border-none "
            width={100}
            height={100}
          />
        </div>
        <div className="relative mx-auto flex flex-col justify-center text-center">
          <span className="text-white text-lg font-semibold">@zaku_dev</span>

          <span className="flex justify-center items-center text-white text-sm mt-2">
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
      <section className="relative mx-auto flex flex-col justify-center bg-slate-700 mix-blend-lighten max-w-xl p-10 py-12 rounded-2xl">
        <FaQuoteLeft className="absolute top-4 left-6 text-white opacity-20 w-12 h-12" />
        <span className="text-white text-lg font-thin text-left">
          If you are working on something that you really care about, you don’t
          have to be pushed. The vision pulls you.
        </span>
        <br />
        <span className="text-white text-lg font-thin text-left mt-2">
          – Steve Jobs
        </span>
      </section>
      <section className="relative mx-auto flex flex-col justify-center text-center m-5 space-y-4 max-w-xl ">
        <Link href="/">
          <a className="text-white hover:text-slate-300 bg-slate-900 hover:bg-gray-800 h-15 py-5 rounded-2xl">
            <BiWorld className="inline-block h-5 w-5 mr-2" />
            <span>Website</span>
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-white hover:text-slate-300 bg-slate-900 hover:bg-gray-800 h-15 py-5 rounded-2xl">
            <BiBookAlt className="inline-block h-5 w-5 mr-2" />
            <span>Blog</span>
          </a>
        </Link>
      </section>
      <section className="relative bottom-0 mx-auto flex items-center justify-center text-center m-5 space-y-4 max-w-xl">
        <span className="text-white mr-2">Made with ❤️ by </span>
        <Link href="/" passHref>
          <Image src={Logo} alt="Ivan Guzman Logo" width={40} height={40} />
        </Link>
      </section>
    </div>
  );
}

export default MyLinks;
