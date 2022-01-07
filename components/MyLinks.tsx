import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Background from '../public/images/links-bg.jpg';
import ProfileImage from '../public/images/profile-photo.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaInstagram
} from 'react-icons/fa';

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
    <div className="relative mx-auto min-h-screen">
      <Image src={Background} alt="" layout="fill" objectFit="cover" />
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
          <span className="text-white text-lg font-thin">@zaku_dev</span>
          <br />
          <span className="flex justify-center text-white text-sm font-thin mt-2">
            <i className="mr-1">
              <FaMapMarkerAlt />
            </i>
            Orange County, CA
          </span>
        </div>
        <div className="relative mt-8 flex justify-center space-x-6">
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
      <section></section>
    </div>
  );
}

export default MyLinks;
