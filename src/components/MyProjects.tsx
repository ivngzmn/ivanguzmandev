'use client'
import React, { useState, useEffect } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { FaGithub } from 'react-icons/fa'

import { allProjects, projectsNav, type Project } from '@/data/projectData'
import { Card } from '@/components/Card'
import { useProjectsCache } from '@/hooks/useProjectsCache'
import { ProjectCardSkeletonGrid } from '@/components/ProjectCardSkeleton'
import { ImageModal } from '@/components/ImageModal'

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

interface MyProjectsProps {}

export function MyProjects({}: MyProjectsProps) {
  const [item, setItem] = useState({ name: 'all projects' })
  const [projects, setProjects] = useState<typeof allProjects>([])
  const [active, setActive] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{
    src: Project['imageSrc']
    alt: string
  } | null>(null)
  const { isLoading, hasLoadedBefore, markLoaded, startLoading } =
    useProjectsCache()

  useEffect(() => {
    if (hasLoadedBefore) {
      startLoading()
    }

    const timer = setTimeout(() => {
      let filtered = allProjects

      if (item.name !== 'all projects') {
        filtered = filtered.filter(
          (project) => project.category.toLowerCase() === item.name,
        )
      }

      setProjects(filtered)
      markLoaded()
    }, 300)

    return () => clearTimeout(timer)
  }, [item, hasLoadedBefore, markLoaded, startLoading])

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: React.SetStateAction<number>,
  ) => {
    // @ts-ignore
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  const handleImageClick = (
    imageSrc: string | StaticImageData,
    imageAlt: string,
  ) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt })
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }
  // @ts-ignore
  return (
    <div className="pb-24">
      {/* project nav */}
      <nav className="mx-auto max-w-2xl pb-12">
        <ul className="grid grid-cols-3 items-center gap-4 md:grid-cols-4 lg:grid-cols-5">
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
                } col-span-1 m-4 cursor-pointer text-center text-nowrap capitalize`}
                key={index}
              >
                <h3>{item.name}</h3>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* projects section */}
      {isLoading ? (
        <ProjectCardSkeletonGrid />
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* <ProjectCard /> */}
          {projects.map((project: any) => (
            // adjust the image here
            <Card as="li" key={project.name}>
              <button
                type="button"
                className="group relative z-10 flex aspect-square h-[300px] w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl bg-white text-left shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition-transform duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus:ring-offset-zinc-900"
                onClick={() =>
                  handleImageClick(project.imageSrc, project.imageAlt)
                }
                aria-label={`Open larger image for ${project.name}`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </button>
              <div className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Title as="h2">{project.name}</Card.Title>
              </div>
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
                        'mt-4 mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full opacity-80',
                      )}
                    >
                      <icon.logo className="h-5 w-5" aria-hidden="true" />
                    </div>
                  ),
                )}
              </div>

              <div className="flex gap-5">
                {project.githubLink && project.githubLink.trim() !== '' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-violet-500 dark:text-zinc-200"
                  >
                    <FaGithub className="h-6 w-6 flex-none" />
                    <span className="ml-2">GitHub</span>
                  </a>
                )}
                {project.liveLink && project.liveLink.trim() !== '' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-violet-500 dark:text-zinc-200"
                  >
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">View Site</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </ul>
      )}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage?.src || null}
        imageAlt={selectedImage?.alt || ''}
        onClose={handleCloseModal}
      />
    </div>
  )
}
