import { IconButton } from '@/components/Navbar/IconButton'
import { useTheme } from '@/context/ThemeProvider'
import { TestID } from '@/resources/TestID'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  const { theme } = useTheme()

  return (
    <nav
      data-testid={TestID.NAVBAR}
      className={
        'navbar navbar-expand-lg ' +
        (theme === 'light' ? 'navbar-light bg-light ' : 'navbar-dark bg-dark')
      }
    >
      <div className="container-fluid px-5">
        <Link
          href="/"
          className="title fw-bold d-flex align-items-center text-body"
        >
          <div>Next Template</div>
        </Link>
        <IconButton theme="dark" onClick={() => undefined} />
      </div>
    </nav>
  )
}
