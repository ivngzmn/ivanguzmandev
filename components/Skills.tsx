import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiGithub,
  SiGit,
  SiIterm2,
  SiVisualstudiocode
} from 'react-icons/si';

const tech = [
  {
    title: 'HTML5',

    icon: SiHtml5,
    iconForeground: 'text-white',
    iconBackground: 'bg-orange-500'
  },
  {
    title: 'CSS3',

    icon: SiCss3,
    iconForeground: 'text-white',
    iconBackground: 'bg-blue-500'
  },
  {
    title: 'Tailwind CSS',

    icon: SiTailwindcss,
    iconForeground: 'text-white',
    iconBackground: 'bg-sky-500'
  },
  {
    title: 'JavaScript',

    icon: SiJavascript,
    iconForeground: 'text-white',
    iconBackground: 'bg-yellow-500'
  },
  {
    title: 'React',

    icon: SiReact,
    iconForeground: 'text-white',
    iconBackground: 'bg-cyan-400'
  },
  {
    title: 'Next.js',

    icon: SiNextdotjs,
    iconForeground: 'text-white',
    iconBackground: 'bg-zinc-900'
  },
  {
    title: 'Node.js',

    icon: SiNodedotjs,
    iconForeground: 'text-white',
    iconBackground: 'bg-green-500'
  },
  {
    title: 'Express.js',

    icon: SiExpress,
    iconForeground: 'text-white',
    iconBackground: 'bg-zinc-700'
  },
  {
    title: 'GraphQL',

    icon: SiGraphql,
    iconForeground: 'text-white',
    iconBackground: 'bg-pink-500'
  },
  {
    title: 'MongoDB',

    icon: SiMongodb,
    iconForeground: 'text-white',
    iconBackground: 'bg-green-700'
  },
  {
    title: 'GitHub',

    icon: SiGithub,
    iconForeground: 'text-white',
    iconBackground: 'bg-zinc-800'
  },
  {
    title: 'Git',

    icon: SiGit,
    iconForeground: 'text-white',
    iconBackground: 'bg-red-500'
  },
  {
    title: 'iTerm2',

    icon: SiIterm2,
    iconForeground: 'text-white',
    iconBackground: 'bg-zinc-700'
  },
  {
    title: 'Visual Studio Code',

    icon: SiVisualstudiocode,
    iconForeground: 'text-white',
    iconBackground: 'bg-blue-500'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Skills() {
  return (
    <div className="bg-zinc-900">
      <div className="relative max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mb-2 lg:mb-8">
          <div className="w-full inline-block py-10 lg:py-20">
            <div className="md:float-left block">
              <span
                className="text-6xl lg:text-8xl font-semibold leading-8 tracking-tight"
                id="projects"
              >
                Skills
              </span>
              <h2 className="text-3xl lg:text-4xl font-light tracking-normal text-slate-50 mt-5">
                Technologies I am using. Always learning.
              </h2>
            </div>
          </div>
        </div>
        <section className="rounded-lg bg-zinc-700 overflow-hidden shadow divide-y divide-zinc-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          {tech.map((item, itemIdx) => (
            <div
              key={item.title}
              className={classNames(
                itemIdx === 0
                  ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                  : '',
                itemIdx === 1 ? 'sm:rounded-tr-lg' : '',
                itemIdx === tech.length - 2 ? 'sm:rounded-bl-lg' : '',
                itemIdx === tech.length - 1
                  ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                  : '',
                'relative group bg-zinc-800 p-6'
              )}
            >
              <section>
                <div className="flex items-center justify-center flex-col">
                  <div className="">
                    <span
                      className={classNames(
                        item.iconBackground,
                        item.iconForeground,
                        'rounded-lg inline-flex p-3'
                      )}
                    >
                      <item.icon className="h-10 w-10" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-2xl text-white">{item.title}</h3>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
