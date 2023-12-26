import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CollabaroNote',
  description: 'Collaboration meets note-taking in CollaboraNote. Foster teamwork, share insights, and stay organized as you work together towards common goals.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-light.png",
        href: "/logo-light.png"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
