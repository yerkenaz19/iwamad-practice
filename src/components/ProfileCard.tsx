import LikeButton from './LikeButton'

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
    <section
      id="about"
      className="profile-card bg-white p-8 rounded-2xl shadow-md"
    >
      <div className="profile-content flex items-center gap-6">
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

          <div className="links flex gap-4 mt-4">
            <a href={`mailto:${email}`}>Email</a>

            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <LikeButton />
        </div>
      </div>
    </section>
  )
}

export default ProfileCard