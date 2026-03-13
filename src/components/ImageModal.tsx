'use client'

import { Fragment, useEffect } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { CloseIcon } from '@/components/Icons'

interface ImageModalProps {
  isOpen: boolean
  imageSrc: string | StaticImageData | null
  imageAlt: string
  onClose: () => void
}

export function ImageModal({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      const originalOverflow = document.body.style.overflow

      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen || !imageSrc) return null

  const imageDimensions =
    typeof imageSrc === 'string'
      ? { width: 1600, height: 1200 }
      : { width: imageSrc.width, height: imageSrc.height }

  return (
    <Popover as={Fragment}>
      <Transition.Root show={isOpen} as="div" className="contents">
        <Transition.Child
          as="div"
          className="contents"
          enter="ease-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <Popover.Overlay
            onClick={onClose}
            className="fixed inset-0 z-50 bg-zinc-950/75 backdrop-blur-xl dark:bg-black/80"
          />
        </Transition.Child>
        <Transition.Child
          as="div"
          className="contents"
          enter="ease-out duration-300"
          enterFrom="translate-y-4 scale-[0.96] opacity-0"
          enterTo="translate-y-0 scale-100 opacity-100"
          leave="ease-in duration-200"
          leaveFrom="translate-y-0 scale-100 opacity-100"
          leaveTo="translate-y-2 scale-[0.98] opacity-0"
        >
          <Popover.Panel
            focus
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose()
              }
            }}
          >
            <figure className="relative m-0 flex max-h-[92vh] w-full max-w-7xl flex-col items-center justify-center gap-4">
              <button
                onClick={onClose}
                className={clsx(
                  'absolute top-1 right-0 z-10 rounded-full border border-white/15 bg-black/45 p-2 text-zinc-100 shadow-lg shadow-black/30',
                  'transition hover:scale-105 hover:bg-black/60',
                  'focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:outline-none',
                )}
                aria-label="Close image"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
              <div className="aspect-video w-full max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ring-1 shadow-black/40 ring-white/10 sm:max-w-[90vw]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-contain"
                  width={imageDimensions.width}
                  height={imageDimensions.height}
                  sizes="(max-width: 768px) 92vw, 90vw"
                  priority
                  unoptimized
                />
              </div>
              <figcaption className="px-4 text-center text-sm text-zinc-200/90">
                {imageAlt}
              </figcaption>
            </figure>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
