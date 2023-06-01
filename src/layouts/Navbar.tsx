import { ProfileButton } from '@/components/Navbar/ProfileButton'
import { TestID } from '@/resources/TestID'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  return (
    <nav
      data-testid={TestID.NAVBAR}
      className="navbar navbar-expand navbar-light bg-light"
    >
      <div className="container-fluid px-5">
        <Link href="/">
          <div className="navbar-brand title fw-bold">Next Template</div>
        </Link>
        <ProfileButton theme="dark" onClick={() => undefined} />
      </div>
    </nav>
  )
}
