'use client'

import React, { Children, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const Pre = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) => {
  const [isCopied, setIsCopied] = useState(false)

  const code = Children.toArray(props.children).filter(
    (child) =>
      typeof child === 'object' && 'type' in child && child.type === 'code',
  )[0] as React.ReactElement

  const extractText = (node: React.ReactNode): string => {
    if (node == null) {
      return ''
    }

    if (typeof node === 'string') {
      return node
    }

    if (Array.isArray(node)) {
      return node.map(extractText).join('')
    }

    if (typeof node === 'object' && node !== null && 'props' in node) {
      // `node` may be a React element; cast to any to access props safely
      return extractText((node as any).props?.children)
    }

    return ''
  }

  const copyToClipboard = () => {
    if (code && (code as any).props && (code as any).props.children) {
      const textToCopy = extractText((code as any).props.children)
      navigator.clipboard.writeText(textToCopy).then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      })
    }
  }

  return (
    <div className="relative">
      <pre {...props}>{props.children}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 rounded-md bg-zinc-700 p-2 hover:bg-zinc-600"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-300" />
        )}
      </button>
    </div>
  )
}
