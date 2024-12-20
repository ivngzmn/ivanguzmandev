'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegPaperPlane, FaGithub } from 'react-icons/fa'

// import data
import { allProjects, projectsNav } from '@/data/projectData'
import { Card } from '@/components/Card'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MyProjects() {
  const [item, setItem] = useState({ name: 'all projects' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    // get projects based on category
    if (item.name === 'all projects') {
      // @ts-ignore
      setProjects(allProjects)
    } else {
      const newProjects = allProjects.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      // @ts-ignore
      setProjects(newProjects)
    }
  }, [item])

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: React.SetStateAction<number>,
  ) => {
    // @ts-ignore
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  // @ts-ignore
  return (
    <div className=" pb-24">
      {/* project nav */}
      <nav className="mx-auto max-w-2xl pb-12">
        <ul className="grid grid-cols-5 items-center gap-4">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index)
                }}
                className={`${
                  active === index
                    ? 'text-base font-semibold text-zinc-800 underline decoration-violet-500 decoration-4 underline-offset-8 dark:text-zinc-100'
                    : 'text-base text-zinc-800 dark:text-zinc-100'
                } col-span-1 m-4 cursor-pointer text-nowrap text-center capitalize`}
                key={index}
              >
                <h3>{item.name}</h3>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* projects section */}

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* <ProjectCard /> */}
        {projects.map((project: any) => (
          // adjust the image here
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex aspect-square h-[300px] w-[300px] items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-full w-full rounded-xl object-cover object-center"
                placeholder="blur"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Title as="h2">{project.name}</Card.Title>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="text-white">
              {project.icons.map(
                (icon: {
                  id: React.Key | null | undefined
                  iconBackground: any
                  iconForeground: any
                  logo: any
                }) => (
                  <div
                    key={icon.id}
                    className={classNames(
                      icon.iconBackground,
                      icon.iconForeground,
                      'mr-3 mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full',
                    )}
                  >
                    <icon.logo className="h-5 w-5" aria-hidden="true" />
                  </div>
                ),
              )}
            </div>
            {/* 
            // TODO: Update the links and ensure that each project has a github link and deployed link
            // TODO: add better descriptions for each project
            <div className="flex gap-5">
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-violet-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">github.com</span>
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-violet-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">View Site</span>
              </p>
            </div> */}
          </Card>
        ))}
      </ul>

      {/* end */}
    </div>
  )
}
