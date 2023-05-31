import Head from 'next/head'
import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next Template</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}
