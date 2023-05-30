import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../layouts/Layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
