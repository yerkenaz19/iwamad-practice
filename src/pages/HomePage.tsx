import ProfileCard from '../components/ProfileCard'
import avatar from '../assets/11.jpeg'

function HomePage() {
  return (
    <main>
      <ProfileCard
        name="Yerkenaz Sagynbayeva"
        bio="I am an IT Management student at KBTU interested in technology and web development. I enjoy learning programming and creating useful digital products."
        avatarUrl={avatar}
        email="y_sagynbayeva@kbtu.kz"
        githubUrl="https://github.com/yerkenaz19"
      />
    </main>
  )
}

export default HomePage