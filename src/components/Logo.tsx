import clsx from 'clsx'
import Link from 'next/link'
import { SiteLogo } from '@/components/Icons'

export function Logo({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <SiteLogo className="w-full h-full fill-zinc-100 dark:fill-zinc-50" />
    </Link>
  )
}
