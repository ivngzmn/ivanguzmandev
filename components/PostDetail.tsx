import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import moment from 'moment';
import highlightjs from 'highlight.js';
import { HeadContainer } from 'components';
import { grpahCMSImageLoader } from '../util';

const PostDetail = ({ post }) => {
  const getModifiedElement = (obj: any, index: any, modifiedText: any) => {
    if (obj.type) {
      return (
        <React.Fragment key={index}>
          {obj.children.map((item, i) => (
            <React.Fragment key={i}>
              {getContentFragment(item, i)}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </React.Fragment>
      );
    }
  };

  const getContentFragment = (obj, index) => {
    let modifiedText = obj.text;
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{obj.text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{obj.text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{obj.text}</u>;
      }

      if (obj.code) {
        modifiedText = (
          <code
            key={index}
            className="rounded bg-[#282A36] px-1.5 py-0.5
        font-mono text-sm text-[#50fa7b]"
          >
            {obj.text}
          </code>
        );
      }
    }

    switch (obj.type) {
      case 'heading-one':
        return (
          <h1 key={index} className="mb-4 text-4xl font-semibold">
            {getModifiedElement(obj, index, modifiedText)}
          </h1>
        );
      case 'heading-two':
        return (
          <h2 key={index} className="mb-4 text-3xl font-semibold">
            {getModifiedElement(obj, index, modifiedText)}
          </h2>
        );
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {getModifiedElement(obj, index, modifiedText)}
          </h3>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {getModifiedElement(obj, index, modifiedText)}
          </h4>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8 text-base lg:text-lg">
            {getModifiedElement(obj, index, modifiedText)}
          </p>
        );
      case 'link':
        return (
          <Link href={obj.href} passHref>
            <a
              key={index}
              target={obj.openInNewTab ? '_blank' : '_self'}
              rel="noopener noreferrer"
              title={obj.title}
              className="bg-indigo-100 text-zinc-900 underline hover:bg-indigo-200 hover:decoration-2"
            >
              {getModifiedElement(obj, index, modifiedText)}
            </a>
          </Link>
        );
      case 'bulleted-list':
        return (
          <ul
            className="my-4 mx-0 block list-disc pl-10 text-base sm:text-base lg:text-lg"
            key={index}
          >
            {getModifiedElement(obj, index, modifiedText)}
          </ul>
        );
      case 'list-item':
        return (
          <li className="list-item" key={index}>
            {getModifiedElement(obj, index, modifiedText)}
          </li>
        );
      case 'list-item-child':
        return getModifiedElement(obj, index, modifiedText);
      case 'code-block':
        return (
          <pre
            key={index}
            className="my-8 block w-auto overflow-x-auto whitespace-normal rounded-lg
         bg-[#282A36] px-4 py-4 font-mono text-sm text-gray-200 sm:text-base"
          >
            <code key={index}>
              {getModifiedElement(obj, index, modifiedText)}
            </code>
          </pre>
        );
      case 'class':
        return (
          <pre
            key={index}
            className="my-8 block overflow-x-auto whitespace-normal
         rounded bg-slate-800 font-mono text-sm text-gray-200 sm:text-base"
          >
            <code key={index} className={obj.className}>
              {getModifiedElement(obj, index, modifiedText)}
            </code>
          </pre>
        );
      case 'image':
        return (
          <div className="mb-8" key={index}>
            <Image
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
              className="rounded-lg"
            />
          </div>
        );
      default:
        return <React.Fragment key={index}>{modifiedText}</React.Fragment>;
    }
  };
  useEffect(() => {
    highlightjs.highlightAll();
  }, [post.slug]);

  return (
    <>
      <HeadContainer
        title={`${post.title} | ${post.author.name}`}
        description={post.description}
        image={post.featuredImage.url}
        author={post.author.name}
        date={new Date(post.createdAt).toString()}
        type="article"
      />
      <div className="absolute -mt-10">
        <Link href={`/blog/`} passHref>
          <a className="flex items-center space-x-1 text-lg text-gray-100 transition duration-300 ease-in-out hover:text-gray-500">
            <HiArrowNarrowLeft className="h-5 w-5" />
            <span>Back to all posts</span>
          </a>
        </Link>
      </div>
      <article>
        <div className="mb-8 rounded-2xl bg-white pb-12 shadow-2xl">
          <div className="relative mb-6 inline-block h-96 w-full shadow-md md:h-[35rem] lg:h-[45rem]">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.title}
              className="rounded-t-lg shadow-lg"
              layout="fill"
              objectFit="cover"
              src={post.featuredImage.url}
            />
          </div>
          <div className="px-4 lg:px-8">
            <div className="mb-8 flex w-full items-center">
              <div className="hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
                <Image
                  alt={post.author.name}
                  height="30px"
                  width="30px"
                  className="rounded-full align-middle"
                  src={post.author.photo.url}
                />
                <p className="font-base mx-2 inline align-middle text-lg text-gray-700">
                  {post.author.name}
                </p>
              </div>
              <div className="font-medium text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="align-middle">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
            <h1 className="mb-8 text-left text-5xl font-semibold tracking-tight lg:text-6xl">
              {post.title}
            </h1>
            <div key={post.slug} className="max-w-prose lg:max-w-screen-2xl">
              {post.content.raw.children.map((typeObj, index) => {
                return getContentFragment(typeObj, index);
              })}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostDetail;
