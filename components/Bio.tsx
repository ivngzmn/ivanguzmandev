import React, { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-yellow-200 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-50">{title}</p>
      </div>
      <p className="text-gray-100 ml-6">{children}</p>
    </li>
  );
};

const FullBio = () => {
  return (
    <>
      <Year>2003</Year>
      <ul>
        <Step title="Started repairing my neighbors computers 🛠">
          Word got around my apt complex that I fixed computers and so I started
          the side hustle.
        </Step>
      </ul>
      <Year>2005</Year>
      <ul>
        <Step title="Started College 🏫">
          Didn't know what I wanted to do, but knew that I wanted to do
          something with computers.
        </Step>
        <Step title="Jumped into CIS head first 💿">
          Started dabbling with computer networking and game development.
        </Step>
      </ul>
      <Year>2008</Year>
      <ul>
        <Step title="Majored in Art">
          Since math was just not doing it for me I ended up doing art and
          started to work with 3D modeling.
        </Step>
      </ul>
      <Year>2015</Year>
      <ul>
        <Step title="Had my Daughter 👧🏽">
          I was ecstatic that the our little munchkin Justice-Rose was born.
        </Step>
        <Step title="Worked at MarineDepot 🐠">
          This is where I started to get into programming. As a supervisor I
          would constantly get complaints about issues with website descriptions
          from our CSR team. I reached out to a higher up manager and was
          granted access to our CMS as we were a small company. From that first
          time I pushed a change to our website I was hooked and wanted to learn
          more.
        </Step>
      </ul>
      <Year>2019</Year>
      <ul>
        <Step title="Started at Uber Technologies 🚕">
          I was super excited to work for a Tech company even if it was as as a
          Customer Service Rep. I was able to see how the internal tools worked
          and was also able to work for the Uber Eats team as well. Had great
          manager that inspired me to pursue my passions.
        </Step>
      </ul>
      <Year>2020 to Present</Year>
      <ul>
        <Step title="2nd Daughter was born 👯‍♀️">
          Our second bundle of joy came to the world
        </Step>
        <Step title="COVID-19 Pandemic 🦠">
          Unfortunately, due to the COVID-19 pandemic I was let go from Uber.
          But I decided that from that point on I would not let this happen to
          me. So I started pushing and working on practicing Software
          Engineering.
        </Step>
        <Step title="Joined 100devs 🚀">
          Excited to get a role where I could work with other developers and
          build web applications from concept to completion.
        </Step>
      </ul>
    </>
  );
};

export default function Bio() {
  const [isShowingFullBio, showFullBio] = useState(false);

  return (
    <>
      <section className="bg-zinc-900">
        <div className="max-w-7xl px-4 mx-auto p-16">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-700 rounded-2xl shadow-2xl max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Timeline
              </h3>
              <Divider />
              <Year>1986</Year>
              <ul>
                <Step title="Born 👶🏽🍼">Xalapa, Veraruz, MX 🇲🇽</Step>
              </ul>
              <Year>1996</Year>
              <ul>
                <Step title="Became a video game addict 🕹">
                  Every time we'd go to Toys R Us, I would beg my mom for a
                  Nintendo 64, until I finally convinced her. Sorry, mom.
                </Step>
              </ul>
              <Year>1997</Year>
              <ul>
                <Step title="First Computer 💾">
                  Since we did not have much money my mom purchased an old
                  computer from a garage sale. It was so arcane that it had a
                  green screen and not printer for school work but it sparked my
                  love for computers.
                </Step>
              </ul>
              <Year>2002</Year>
              <ul>
                <Step title="Purchased my first desktop PC ⌨️">
                  I remember it like it was yesterday. The pure power of the
                  Athelon XP still brings a tear to my eye.
                </Step>
              </ul>
              {isShowingFullBio ? (
                <FullBio />
              ) : (
                <button
                  type="button"
                  className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-white"
                  onClick={() => showFullBio(true)}
                >
                  Show More
                  <svg
                    className="h-4 w-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
