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

    if (typeof node === 'object' && 'props' in node) {
      return extractText(node.props.children)
    }

    return ''
  }

  const copyToClipboard = () => {
    if (code && code.props && code.props.children) {
      const textToCopy = extractText(code.props.children)
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
        className="absolute p-2 rounded-md right-2 top-2 bg-zinc-700 hover:bg-zinc-600"
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </button>
    </div>
  )
}
