import React from 'react';
import Image from 'next/image';
import ProfileImage from '../public/static/images/profile-photo.jpg';
import BackgroundImage from '../public/static/images/cottoncandy.jpg';
import { FaMapMarkerAlt, FaCheckCircle, FaBriefcase } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <main className="profile-page bg-zinc-900">
        <section className="absolute block h-[550px] w-full lg:h-[700px]">
          <Image
            alt="..."
            className="absolute h-[550px] w-full object-bottom lg:h-[800px] lg:object-scale-down lg:object-center"
            src={BackgroundImage}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            quality={50}
          />
          <div
            id="blackOverlay"
            className="absolute h-full w-full bg-black opacity-70"
          ></div>
        </section>
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto px-6">
            <div className="inline-block w-full py-10 lg:py-20">
              <div className="block md:float-left">
                <span
                  className="text-6xl font-semibold leading-8 tracking-tight lg:text-8xl"
                  id="about"
                >
                  About
                </span>
              </div>
            </div>
          </div>
          <section className="relative pt-20 ">
            <div className="mx-auto max-w-7xl px-4">
              <div className="lg:-mt-15 relative mx-auto -mt-10 flex min-w-0 flex-col break-words rounded-2xl bg-white pb-16 shadow-2xl ">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center pb-6">
                    <div className="flex w-full justify-center  px-4 lg:w-full">
                      <div className="relative -m-20">
                        <Image
                          alt="..."
                          src={ProfileImage}
                          className="h-auto rounded-full border-none align-middle "
                          width={160}
                          height={160}
                          quality={60}
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-6 text-center">
                    <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-700">
                      Ivan Guzman
                    </h3>
                    <span className="mt-0 mb-2 flex justify-center align-middle text-base leading-normal text-indigo-600 ">
                      <i className="mr-2 text-lg">
                        <FaCheckCircle />
                      </i>
                      Available for hire
                    </span>
                    <p className="mt-0 mb-2 flex justify-center text-base leading-normal text-gray-600 ">
                      <i className="mr-2 text-lg">
                        <FaMapMarkerAlt />
                      </i>
                      Orange County, California
                    </p>
                    <p className="mb-2 mt-0 flex justify-center text-base text-gray-600">
                      <i className="mr-2 text-lg">
                        <FaBriefcase />
                      </i>
                      Software Engineer - 100Devs
                    </p>
                  </div>
                  <div className="mt-10 border-t border-gray-200 py-10">
                    <div className="flex justify-center">
                      <div className="prose prose-slate max-w-prose px-4 py-1 text-left text-base leading-normal lg:prose-xl lg:py-4 lg:text-xl">
                        <p>
                          Hey, I’m Ivan. Before pursuing software engineering, I
                          studied fine art with an emphasis in 3D graphics. I
                          started my software engineering journey through
                          working as a customer service supervisor at an
                          e-commerce website. I taught myself how to use their
                          custom content management system that used Bootstrap
                          for styling to update outdated product descriptions in
                          order to alleviate load on repeated calls. I got
                          sucked in pretty quickly, and found myself wanting to
                          learn more and more.
                        </p>
                        <p className="mt-5">
                          Then in I went on to work at Uber Technologies where
                          my passion for programming grew further as I was
                          persuaded by my team lead to pursue my dream software
                          engineering. Unfortunately, the pandemic hit and the
                          Uber in person office closed, so I shifted gears to
                          not ever wanting this to happen again. So, I began to
                          practice my Software Engineering skills until landing
                          a role at the 100devs web development agency.
                        </p>
                        <p className="mt-5">
                          I grew up in small-town in California and went to
                          school at Fullerton College where I studied art and
                          dabbled a bit with Networking Security. When I am not
                          deep in code I spend my free tending to my coral reef
                          aquarium, being a father, and enjoying time with
                          friends and family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
