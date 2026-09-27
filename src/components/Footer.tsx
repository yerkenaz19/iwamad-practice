type FooterProps = {
  copyright: string
}

function Footer({ copyright }: FooterProps) {
  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  )
}

export default Footer