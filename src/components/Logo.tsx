import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import LogoIcon from '@/images/logos/logo.svg'

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
      <Image
        src={LogoIcon}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-sm bg-zinc-900 object-cover p-1 dark:bg-zinc-800',
          large ? 'h-14 w-14' : 'h-12 w-12',
        )}
        priority
        unoptimized
      />
    </Link>
  )
}
