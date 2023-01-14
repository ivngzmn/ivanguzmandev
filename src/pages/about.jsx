import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto rounded-md bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ivan Guzman. I live in Orange County, CA.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey, I’m Ivan. I started my software engineering journey through working
                as a customer service supervisor at an e-commerce website. I taught myself
                how to use their bespoke content management system that used Bootstrap for
                styling to update outdated product descriptions in order to alleviate email
                load on the customer agent team. Having the power to make changes on the fly
                got me hooked, and I found myself wanting to learn more and more.
              </p>
              <p>
                Then in I went on to work at Uber Technologies where my passion for programming
                grew further as I was persuaded by my team manager to pursue my dream of software
                engineering. Unfortunately, during my time at Uber the pandemic had hit and the
                Uber in person office closed, so I shifted gears to not ever wanting this to happen
                again. So, I began to practice my Software Engineering skills until landing a role
                at the 100devs web development agency. Now with this new knowledge, I am looking to
                join a new role where I can continue to learn and grow further.
              </p>
              <p>
                I grew up in small-town in California and went to school at Fullerton College
                where I studied art and dabbled a bit with Networking Security. When I am not
                deep in code I spend my free tending to my coral reef aquarium, being a father,
                and enjoying time with friends and family.
              </p>
              <p>
                Today, I’m a Software Engineer at of Zeek Interactive, where I&apos;m working on developing
                and maintaingn applications with PHP, JavaScript.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/inadequate_Dev" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/ivngzmn" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/ivan-j-guzman" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@ivanguzman.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Send Me an Email
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
