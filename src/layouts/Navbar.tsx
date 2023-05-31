import { TestID } from '@/resources/TestID'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  return (
    <nav
      data-testid={TestID.NAVBAR}
      className="navbar navbar-expand navbar-dark bg-dark"
    >
      <div className="container-fluid px-5">
        <Link href="/">
          <h1 className="navbar-brand">Next Template</h1>
        </Link>
      </div>
    </nav>
  )
}
