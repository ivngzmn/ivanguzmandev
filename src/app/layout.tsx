import { type Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleTagManager } from '@next/third-parties/google'

import '@/styles/tailwind.css'
import { Suspense } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ivanguzman.dev'),
  title: {
    template: '%s - Ivan Guzman',
    default:
      'Ivan Guzman - Software engineer, father, and mechanical keyboard enthusiast.',
  },
  description:
    'I’m a Software Engineer at Zeek Interactive. I’m focused on building accessible, human-centered products.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '%s - Ivan Guzman',
    description:
      'Software engineer, father, and mechanical keyboard enthusiast.',
    creator: '@inadequate_Dev',
    images: ['https://www.ivanguzman.dev/opengraph-image.png'],
  },
}
const CrispWithNoSSR = dynamic(() => import('@/components/Crisp'))
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      {process.env.NODE_ENV === 'production' && (
        <GoogleTagManager gtmId="GTM-NQGNPP7" />
      )}
      <CrispWithNoSSR />

      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
