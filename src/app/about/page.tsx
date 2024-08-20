import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'
import { SocialLink } from '@/components/SocialLink'

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Ivan Guzman. I live in Orange County, CA.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Image of Ivan Guzman"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square h-36 w-36 rounded-xl bg-zinc-100 dark:bg-zinc-800 md:h-full md:w-full"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Ivan Guzman. I live in Orange County, CA.
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              I started my software engineering journey through working as a
              customer service supervisor at an e-commerce website. I taught
              myself how to use their bespoke content management system that
              used Bootstrap for styling to update outdated product descriptions
              in order to alleviate email load on the customer agent team.
              Having the power to make changes on the fly got me hooked, and I
              found myself wanting to learn more and more.
            </p>
            <p>
              Then in I went on to work at Uber Technologies where my passion
              for programming grew further as I was persuaded by my team manager
              to pursue my dream of software engineering. Unfortunately, during
              my time at Uber the pandemic had hit and the Uber in person office
              closed, so I shifted gears to not ever wanting this to happen
              again. So, I began to practice my Software Engineering skills
              until landing a role at the 100devs web development agency. Now
              with this new knowledge, I am looking to join a new role where I
              can continue to learn and grow further.
            </p>
            <p>
              I grew up in small-town in California and went to school at
              Fullerton College where I studied art and dabbled a bit with
              Networking Security. When I am not deep in code I spend my free
              tending to my coral reef aquarium, being a father, and enjoying
              time with friends and family.
            </p>
            <p>
              Today, I&apos;m a Software Engineer at of Zeek Interactive, where
              I&apos;m working on developing and maintain applications with PHP,
              JavaScript, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/inadequate_dev"
              target="_blank"
              icon={XIcon}
            >
              Follow on X/Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/ivngzmn"
              target="_blank"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ivan-j-guzman/"
              target="_blank"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hello@ivanguzman.dev"
              icon={MailIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              Send Me an Email
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
