import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import logo100Devs from '@/images/logos/100devs.png'
import logoUber from '@/images/logos/uber.png'
import logoZeek from '@/images/logos/zeek.png'
import logoMarineDepot from '@/images/logos/marineDepot.jpeg'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'
import {Button} from "@/components/Button";

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
function BriefcaseIcon(props) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          {...props}
      >
        <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
  )
}
function ArrowDownIcon(props) {
  return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  )
}
function Resume() {
  let resume = [
    {
      company: 'Zeek Interactive',
      title: 'Software Engineer',
      logo: logoZeek,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: '100Devs',
      title: 'Software Engineer',
      logo: logo100Devs,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Uber',
      title: 'Customer Service Specialist',
      logo: logoUber,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Marine Depot',
      title: 'Shift Supervisor',
      logo: logoMarineDepot,
      start: '2016',
      end: '2019',
    },
  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
              <li key={roleIndex} className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                      src={role.logo}
                      alt=""
                      className="h-7 w-7 rounded-full"
                      unoptimized
                  />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label={`${role.start.label ?? role.start} until ${
                          role.end.label ?? role.end
                      }`}
                  >
                    <time dateTime={role.start.dateTime ?? role.start}>
                      {role.start.label ?? role.start}
                    </time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={role.end.dateTime ?? role.end}>
                      {role.end.label ?? role.end}
                    </time>
                  </dd>
                </dl>
              </li>
          ))}
        </ol>
        <Button
            href="https://www.linkedin.com/in/ivan-j-guzman/"
            variant="secondary"
            className="group mt-6 w-full"
        >
          View my LinkedIn
          <ArrowDownIcon className="h-4 w-4 rotate-[-90deg] stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ivan Guzman</title>
        <meta
          name="description"
          content="I’m Ivan Guzman. I live in Orange County, CA."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-fit mx-auto lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Black and White Portrait of Ivan Guzman"
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
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
          <div className="lg:pl-0">
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
