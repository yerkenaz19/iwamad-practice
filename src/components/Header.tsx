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
        <a href="#about">About</a> |{' '}
        <a href="#skills">Skills</a> |{' '}
        <a href="#goals">Goals</a> |{' '}
        <a href="#contact">Contact</a>
      </nav>
    </>
  )
}

export default Header