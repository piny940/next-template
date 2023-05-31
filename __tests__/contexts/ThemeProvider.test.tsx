import { ThemeProvider, useTheme } from '@/context/ThemeProvider'
import { expect } from '@jest/globals'
import { ReactNode } from 'react'
import { renderHook, waitFor, act } from '@testing-library/react'

describe('<ThemeProvider />', () => {
  it('正常にテーマを取得・更新できる', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => {
      return <ThemeProvider>{children}</ThemeProvider>
    }
    const { result } = renderHook(() => useTheme(), { wrapper: wrapper })

    await waitFor(() => {
      expect(result.current.theme).toBe('light')
    })

    act(() => {
      result.current.setTheme('dark')
    })
    await waitFor(() => {
      expect(result.current.theme).toBe('dark')
    })
  })
})
