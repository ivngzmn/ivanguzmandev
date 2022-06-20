import React from 'react';
import Image from 'next/image';
// import FrontImage from '/public/static/images/projects/MacBook-Pro-Crypto.webp';
// import BackImage from '/public/static/images/projects/MacBook-Todo-MVP.webp';

function ProjectCard() {
  return (
    <div className="bg-zinc-600">
      {/* test */}
      <div className="grid items-start justify-center gap-8">
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 via-yellow-600 to-purple-600 opacity-75 blur-lg filter transition duration-200 group-hover:opacity-100"></div>
          <button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-gray-100">
                We don't get got, we go get!
              </span>
            </span>
            <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100">
              See what's new &rarr;
            </span>
          </button>
        </div>
      </div>
      {/* end test */}
      <div className="container mx-auto flex h-screen w-[600px] items-center justify-center">
        <div className="project h-[550px] w-[400px]">
          <div className="project-inner relative h-full w-full">
            <div className="project-front absolute h-full w-full rounded-xl bg-white">
              <div className="project-top h-1/2 w-full rounded-t-xl text-white">
                <h1 className=" ml-5 text-[5rem] font-semibold italic">
                  New Balance
                </h1>
              </div>
              <div className="project-bottom p-14">
                <p className="text-xs">New Balance running shoes</p>
                <h2 className="mb-9 text-xl font-semibold tracking-tight text-[#008394]">
                  Made in USA 990v5
                </h2>
                <h1 className=" mb-2 text-3xl text-gray-600">
                  Cost <span className="text-[#008394]">$</span>
                </h1>
                <div className=" space-x-2">
                  <button
                    type="button"
                    className="rounded-full border-2 border-[#008394] bg-transparent px-2 py-2 text-xl text-[#008394]"
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    className="rounded-full border-2 border-[#008394] bg-transparent px-2 py-2 text-xl text-[#008394]"
                  >
                    Code
                  </button>
                </div>
                <div className="select-size display-flex float-right -mt-3">
                  <div className="toggle select-mobile cursor-pointer text-center">
                    <Image
                      width={50}
                      height={50}
                      src={FrontImage}
                      alt={''}
                      className="image rounded-full"
                    />
                  </div>
                  <div className="toggle select-desktop cursor-pointer text-center">
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
