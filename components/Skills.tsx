import React from 'react';
// import data
import { skills } from '../data/skillsData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Skills() {
  return (
    <div className="bg-zinc-900 py-40">
      <div className="relative mx-auto max-w-[90rem] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-2 lg:mb-8">
          <div className="inline-block w-full py-10 lg:py-20">
            <div className="block md:float-left">
              <span
                className="text-6xl font-semibold leading-8 tracking-tight lg:text-8xl"
                id="skills"
              >
                Tech Stack
              </span>
              <h2 className="mt-5 text-3xl font-light tracking-normal text-slate-50 lg:text-4xl">
                Technologies I am currently using. Always learning.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto grid max-w-[90rem] grid-cols-2 gap-2 divide-y-0 overflow-hidden rounded-lg lg:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill.id} className={classNames()}>
            <section>
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <span
                    className={classNames(
                      skill.iconForeground,
                      'inline-flex rounded-lg p-3'
                    )}
                  >
                    <skill.icon className="h-20 w-20" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl text-white">{skill.title}</h3>
                </div>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;
