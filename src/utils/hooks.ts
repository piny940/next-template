import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { UrlObject } from 'url'
import { useAlerts } from '../contexts/AlertsProvider'
import { AlertInput } from '../resources/types'

export const usePageChange = (handler: () => void) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handler)

    return () => {
      router.events.off('routeChangeComplete', handler)
    }
  })
}

export const useMovePage = () => {
  const router = useRouter()
  const { setAlerts } = useAlerts()
  return async (url: string | UrlObject, ...alerts: AlertInput[]) => {
    await router.push(url)
    setAlerts(...alerts)
  }
}
