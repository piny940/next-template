import { useTheme } from '@/context/ThemeProvider'
import { TestID } from '@/resources/TestID'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div data-bs-theme={theme} id="app" data-testid={TestID.APP}>
      Next template
    </div>
  )
}
