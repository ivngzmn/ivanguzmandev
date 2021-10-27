import { FaGithub, FaTwitch, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
// import NowPlaying from '@/components/NowPlaying';
const today = new Date();
const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    {
      name: 'Blog',
      href: 'https://blog.ivanguzman.dev/',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { name: 'Uses', href: '/uses' },
    { name: 'Links', href: '/links' },
    { name: 'Resume', href: '#' }
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ivan-julian-guzman/',
      icon: () => (
        <FaLinkedinIn className="h-6 w-6" />
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/zaku_dev/',
      icon: () => (
        <FaInstagram className="h-6 w-6" />
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/zaku_dev',
      icon: () => (
        <FaTwitter className="h-6 w-6" />
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ivngzmn',
      icon: () => (
        <FaGithub className="h-6 w-6" />
      )
    },
    {
      name: 'Twitch',
      href: 'https://www.twitch.tv/zaku_dev',
      icon: () => (
        <FaTwitch className="h-6 w-6" />
      )
    }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-800">

      {/* <NowPlaying /> */}
      <div className="mx-auto max-w-md py-8 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-300 hover:text-white dark:text-gray-50 dark:hover:text-gray-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
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
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-300">
          &copy;{today.getUTCFullYear()} Made with ☕️ and ❤️ by Ivan Guzman in the 🇺🇸. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
