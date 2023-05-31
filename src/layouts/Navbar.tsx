import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <Link href="/">
          <h1 className="navbar-brand" id={styles.title}>
            Next Template
          </h1>
        </Link>
      </div>
    </nav>
  )
}
