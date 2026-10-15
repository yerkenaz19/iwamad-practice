import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <>
      <header>
        <div className="site-brand">
          <img src={logo} alt="" width={32} height={32} />
          <h1>{title}</h1>
        </div>
        <p>{subtitle}</p>
      </header>

      <nav className="site-nav">
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
        {' '} | {' '}
<NavLink
  to="/register"
  className={({ isActive }) => (isActive ? 'active' : '')}
>
  Register
</NavLink>
      </nav>

      <p>♥ {likes}</p>
    </>
  )
}

export default Header