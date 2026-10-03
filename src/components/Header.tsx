import { NavLink } from 'react-router'

type HeaderProps = {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Skills
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
      </nav>
    </>
  )
}

export default Header