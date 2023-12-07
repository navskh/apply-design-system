import { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Control } from './Control';

export const metadata: Metadata = {
  title: 'WEB',
  description: 'Hello, Next.js!',
}

interface Topic {
  id: number;
  title: string;
  body: string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', {
    cache: 'no-store',
  })
  const topics = await response.json();

  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic: Topic) => (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  )
}