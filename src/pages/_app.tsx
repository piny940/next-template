import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AlertsProvider } from '../contexts/AlertsProvider'
import { Layout } from '../layouts/Layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // import('bootstrap')
  }, [])

  return (
    <AlertsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertsProvider>
  )
}

export default MyApp
