import { useState } from 'react'

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
  const [liked, setLiked] = useState(false)

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

          <button
            type="button"
            className="mt-5 px-5 py-2 rounded-lg bg-black text-white"
            onClick={() => setLiked(!liked)}
          >
            {liked ? '♥ Liked' : '♡ Like'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard