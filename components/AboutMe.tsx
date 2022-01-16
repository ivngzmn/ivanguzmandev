import React from 'react';
import Image from 'next/image';
import ProfileImage from '../public/images/profile-photo.jpg';
import BackgroundImage from '../public/images/cottoncandy.jpg';
import { FaMapMarkerAlt, FaCheckCircle, FaBriefcase } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <main className="profile-page">
        <section className="absolute block w-full h-[550px] lg:h-[700px]">
          <Image
            alt="..."
            className="absolute w-full h-[550px] lg:h-[800px] object-bottom lg:object-center lg:object-scale-down"
            src={BackgroundImage}
            layout="fill"
            objectFit="cover"
          />
          <div
            id="blackOverlay"
            className="w-full h-full absolute opacity-70 bg-black"
          ></div>
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="relative mx-auto px-6">
            <div className="w-full inline-block py-10 lg:py-20">
              <div className="md:float-left block">
                <span
                  className="text-5xl lg:text-8xl font-semibold leading-8 tracking-tight"
                  id="about"
                >
                  About
                </span>
              </div>
            </div>
          </div>
          <section className="relative pt-20 ">
            <div className="max-w-7xl mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white mx-auto mb-16 -mt-10 lg:-mt-15 shadow-2xl rounded-2xl ">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center pb-6">
                    <div className="w-full lg:w-full px-4  flex justify-center">
                      <div className="relative -m-20">
                        <Image
                          alt="..."
                          src={ProfileImage}
                          className="rounded-full h-auto align-middle border-none "
                          width={160}
                          height={160}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12 pt-6">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700">
                      Ivan Guzman
                    </h3>
                    <span className="flex justify-center align-middle text-base leading-normal mt-0 mb-2 text-indigo-600 ">
                      <i className="mr-2 text-lg">
                        <FaCheckCircle />
                      </i>
                      Available for hire
                    </span>
                    <p className="flex justify-center text-base leading-normal mt-0 mb-2 text-gray-600 ">
                      <i className="mr-2 text-lg">
                        <FaMapMarkerAlt />
                      </i>
                      Orange County, California
                    </p>
                    <p className="flex justify-center text-base mb-2 text-gray-600 mt-0">
                      <i className="mr-2 text-lg">
                        <FaBriefcase />
                      </i>
                      Software Engineer - 100Devs
                    </p>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="px-4 py-1 lg:py-4 prose prose-slate lg:prose-lg leading-normal text-base lg:text-lg text-left">
                        <p>
                          Hey, I’m Ivan. I first got into programming when I
                          working as a customer service supervisor at an
                          e-commerce website. I taught myself how to use their
                          custom content management system to update outdated
                          product descriptions in order to alleviate load on
                          repeated calls.
                        </p>
                        <p className="mt-5">
                          Then in I went on to work at Uber Technologies where
                          my passion for programming grew further as I was
                          persuaded by my team lead to pursue my dream software
                          engineering. Unfortunately, the pandemic hit and the
                          Uber in person office closed, so I shifted gears to
                          not ever wanting this to happen again. So, I began to
                          practice my Software Engineering skills over the past
                          year.
                        </p>
                        <p className="mt-5">
                          I grew up in small-town in California and went to
                          school at Fullerton College where I studied art and
                          dabbled a bit with Networking Security. When I am not
                          deep in code I spend my free tending to my coral reef
                          aquarium, being a father, and enjoying time with
                          friends and family in Brea, CA.
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
