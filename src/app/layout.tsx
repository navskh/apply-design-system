import { Metadata } from 'next'
import './globals.css'
import Sidebar from './components/Sidebar';

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

  return (
    <html>
      <body style={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <main style={{ flexGrow: 1, padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}