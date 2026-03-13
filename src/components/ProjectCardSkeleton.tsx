'use client'

import { Card } from '@/components/Card'

export function ProjectCardSkeleton() {
  return (
    <Card as="li">
      {/* Image skeleton */}
      <div className="relative z-10 flex aspect-square h-[300px] w-full animate-pulse items-center justify-center rounded-xl bg-zinc-200 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-600/50 dark:bg-zinc-700 dark:ring-0" />

      {/* Title skeleton */}
      <div className="mt-6">
        <div className="h-4 w-60 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
      </div>

      {/* Description skeleton */}
      <div className="fle mt-2 grid gap-y-1">
        <div className="h-2 w-79.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-2 w-78.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-2 w-79.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-2 w-76.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-2 w-74.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-2 w-76.5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
      </div>

      {/* Icon badges skeleton */}
      <div className="mt-4 flex gap-2">
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
      </div>

      {/* Links skeleton */}
      <div className="mt-6 flex gap-5">
        <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
      </div>
    </Card>
  )
}

export function ProjectCardSkeletonGrid() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </ul>
  )
}
