import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ivan Guzman</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets that I love, and other things I use on the daily."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13-inch MacBook Pro, M1, (2020)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even when launching Docker Desktop.
            </Tool>
            <Tool title="34-inch Dell Ultrasharp (USB-C) Monitor U3419W">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="BenQ ScreenBar Halo Monitor Light">
              This light comes in great for those long hours in front of the screen.
              My eyes are thankful for it.
            </Tool>
            <Tool title="Kinesis Advantage360 Split Ergonomic Keyboard KB360">
              When it comes to all day comfort while coding away this keyboard is a life
              saver on my wrists. It only took a few weeks to get used to the split keyboard layout.
              Never going back to a regular keyboard.
            </Tool>
            <Tool title="Logitech MX Master 3 Mouse">
              Something about using the MX moues feels so natural. I love the
              scroll wheel and the thumb buttons. I use it for everything.
            </Tool>
            <Tool title="G-Drive 6TB (USB-C) External Hard Drive">
              Backing up your data is important. Backup, backup, backup.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="PhpStorm">
              I use PhpStorm for all my PHP development. It’s fast, has great
              support for Laravel, and has a great ecosystem of plugins.
            </Tool>
            <Tool title="Visual Studio Code">
              I use VS Code for all other project outside of PHP. It&apos;s a text editor
              what more can I say.
            </Tool>
            <Tool title="Fira Code NerdFont">
              I love this font. It has great ligatures and is a great font for
              coding.
            </Tool>
            <Tool title="Warp">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but It&apos;s fast and it&apos;s
              simple. What more could you ask for? A great alternative to iTerm2.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Great for just getting ideas out of your head and into the browser.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It&apos;s not the newest kid on the block but it’s still the fastest.
            </Tool>
            <Tool title="Raycast">
              It&apos;s the new kid on the block. It has great support for custom plugins from the community.
            </Tool>
            <Tool title="Notion">
              I use Notion for everything. It&apos;s my personal wiki, my todo lists, my calendar, and my notes.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
