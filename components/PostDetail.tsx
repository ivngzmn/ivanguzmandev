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
            className="text-[#50fa7b] bg-[#282A36] px-1.5 py-0.5
        rounded font-mono text-sm"
          >
            {obj.text}
          </code>
        );
      }
    }

    switch (obj.type) {
      case 'heading-one':
        return (
          <h1 key={index} className="text-4xl font-semibold mb-4">
            {getModifiedElement(obj, index, modifiedText)}
          </h1>
        );
      case 'heading-two':
        return (
          <h2 key={index} className="text-3xl font-semibold mb-4">
            {getModifiedElement(obj, index, modifiedText)}
          </h2>
        );
      case 'heading-three':
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {getModifiedElement(obj, index, modifiedText)}
          </h3>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
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
              className="text-indigo-500 hover:text-indigo-800 hover:underline"
            >
              {getModifiedElement(obj, index, modifiedText)}
            </a>
          </Link>
        );
      case 'bulleted-list':
        return (
          <ul
            className="block list-disc my-4 mx-0 pl-10 text-base lg:text-lg sm:text-base"
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
            className="my-8 px-4 py-4 block overflow-x-auto rounded-lg
         bg-[#282A36] text-sm sm:text-base text-gray-200 font-mono w-auto whitespace-pre"
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
            className="my-8 block overflow-x-auto rounded
         bg-slate-800 text-sm sm:text-base font-mono text-gray-200 whitespace-normal"
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
        image={post.image}
        date={moment(post.date).format('MMMM DD, YYYY')}
        type="article"
      />
      <div className="absolute -mt-10">
        <Link href={`/blog/`} passHref>
          <a className="text-lg text-gray-100 hover:text-gray-500 flex items-center space-x-1 transition duration-300 ease-in-out">
            <HiArrowNarrowLeft className="w-5 h-5" />
            <span>Back to all posts</span>
          </a>
        </Link>
      </div>
      <article>
        <div className="bg-white shadow-2xl rounded-2xl pb-12 mb-8">
          <div className="relative shadow-md inline-block w-full h-96 md:h-[35rem] lg:h-[45rem] mb-6">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.title}
              className="shadow-lg rounded-t-lg"
              layout="fill"
              objectFit="cover"
              src={post.featuredImage.url}
            />
          </div>
          <div className="px-4 lg:px-8">
            <div className="flex items-center mb-8 w-full">
              <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto">
                <Image
                  alt={post.author.name}
                  height="30px"
                  width="30px"
                  className="align-middle rounded-full"
                  src={post.author.photo.url}
                />
                <p className="inline align-middle text-gray-700 mx-2 font-base text-lg">
                  {post.author.name}
                </p>
              </div>
              <div className="font-medium text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-indigo-600"
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
            <h1 className="mb-8 text-5xl lg:text-6xl text-left tracking-tight font-semibold">
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
