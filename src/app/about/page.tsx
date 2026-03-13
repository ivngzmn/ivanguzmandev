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
  description: 'I’m Ivan Guzman. Based in Orange County, CA.',
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
              className="aspect-square h-36 w-36 rounded-xl bg-zinc-100 object-cover md:h-full md:w-full dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ivan Guzman. Based in Orange County, CA.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My path into software engineering started from the operations side
              of digital work. Early on, I saw how much better products perform
              when the people building them understand the customer experience
              behind them. That curiosity pushed me to keep learning, keep
              building, and eventually move into software engineering full-time.
            </p>
            <p>
              Over the last 4+ years, I’ve worked across front-end and
              full-stack development, building websites, internal tools, and
              customer-facing applications with React, Next.js, TypeScript, PHP,
              Node.js, and WordPress. My work has included improving
              performance, modernizing legacy codebases, shipping new user
              experiences, and helping teams deliver projects more efficiently.
            </p>
            <p>
              More recently, I’ve also worked on mobile app delivery using React
              Native and Expo, which expanded my interest in building polished
              experiences across platforms.
            </p>
            <p>
              Today, I bring together two perspectives that shape how I build
              software: engineering execution and real-world customer
              understanding. Through my current role at AAA, I’ve gained a
              stronger appreciation for member needs, service workflows, and the
              kinds of digital friction that good software should eliminate.
            </p>
            <p>
              When I’m not working, I’m usually spending time with family,
              tending to my aquarium, writing about development, or enjoying
              life with our recently rescued Boston terrier.
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
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Send Me an Email
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
