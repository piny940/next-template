import { TestID } from '@/resources/TestID'

export const App: React.FC = () => {
  return (
    <div id="app" data-testid={TestID.APP}>
      Next template
    </div>
  )
}
