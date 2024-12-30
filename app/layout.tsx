import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sticky Todo List App',
  description: 'A sticky note-style todo list app built with Next.js, TypeScript, MUI, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors duration-300`}>{children}</body>
    </html>
  )
}

