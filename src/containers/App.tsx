import { useTheme } from '@/context/ThemeProvider'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div data-bs-theme={theme} id="app">
      Next template
    </div>
  )
}
