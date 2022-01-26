import React from 'react';
import Image from 'next/image';
import FrontImage from '/public/static/images/projects/MacBook-Pro-Crypto.webp';
import BackImage from '/public/static/images/projects/MacBook-Todo-MVP.webp';

function ProjectCard() {
  return (
    <div className="bg-zinc-600">
      {/* test */}
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-yellow-600 to-purple-600 rounded-lg filter blur-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-gray-100">
                We don't get got, we go get!
              </span>
            </span>
            <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
              See what's new &rarr;
            </span>
          </button>
        </div>
      </div>
      {/* end test */}
      <div className="container w-[600px] h-screen flex items-center justify-center mx-auto">
        <div className="project w-[400px] h-[550px]">
          <div className="project-inner relative w-full h-full">
            <div className="project-front absolute w-full h-full bg-white rounded-xl">
              <div className="project-top h-1/2 w-full text-white rounded-t-xl">
                <h1 className=" text-[5rem] ml-5 font-semibold italic">
                  New Balance
                </h1>
              </div>
              <div className="project-bottom p-14">
                <p className="text-xs">New Balance running shoes</p>
                <h2 className="mb-9 text-[#008394] tracking-tight text-xl font-semibold">
                  Made in USA 990v5
                </h2>
                <h1 className=" text-3xl text-gray-600 mb-2">
                  Cost <span className="text-[#008394]">$</span>
                </h1>
                <div className=" space-x-2">
                  <button
                    type="button"
                    className="px-2 py-2 bg-transparent border-2 border-[#008394] rounded-full text-xl text-[#008394]"
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    className="px-2 py-2 bg-transparent border-2 border-[#008394] rounded-full text-xl text-[#008394]"
                  >
                    Code
                  </button>
                </div>
                <div className="select-size display-flex float-right -mt-3">
                  <div className="toggle select-mobile text-center cursor-pointer">
                    <Image
                      width={50}
                      height={50}
                      src={FrontImage}
                      alt={''}
                      className="image rounded-full"
                    />
                  </div>
                  <div className="toggle select-desktop text-center cursor-pointer">
                    <Image
                      width={50}
                      height={50}
                      src={BackImage}
                      alt={''}
                      className="image rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="project-back"></div>
            <div className="left-side"> </div>
            <div className="right-side"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
