import LikeButton from './LikeButton'
import Card from './ui/Card'

type ProfileCardProps = {
  name: string
  bio: string
  avatarUrl: string
  email: string
  githubUrl: string
}

function ProfileCard({
  name,
  bio,
  avatarUrl,
  email,
  githubUrl,
}: ProfileCardProps) {
  return (
    <Card>
      <section id="about" className="profile-card">
        <div className="profile-content">
          <div className="avatar">
            <img
              src={avatarUrl}
              alt={`Profile photo of ${name}`}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="profile-info">
            <h2 className="profile-name">{name}</h2>

            <p>{bio}</p>

            <div className="links">
  <a href={`mailto:${email}`}>Email</a>

  <a href={githubUrl} target="_blank" rel="noreferrer">
    GitHub
  </a>
</div>

            <LikeButton />
          </div>
        </div>
      </section>
    </Card>
  )
}

export default ProfileCard