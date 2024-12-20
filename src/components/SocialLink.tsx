import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export interface SocialLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: React.ReactNode
}

export function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  ...props
}: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        {...props}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
