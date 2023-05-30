import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'

export interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <Link href="/">
          <h1 className="navbar-brand" id={styles.title}>
            Clubroom
          </h1>
        </Link>
      </div>
    </nav>
  )
}
