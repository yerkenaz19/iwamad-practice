import SkillBadge from '../components/SkillBadge'

type Skill = {
  id: number
  label: string
}

const skills: Skill[] = [
  { id: 1, label: 'HTML and Web Development' },
  { id: 2, label: 'Python Programming' },
  { id: 3, label: 'C++ Programming' },
  { id: 4, label: 'SQL and Databases' },
  { id: 5, label: 'Git and GitHub' },
]

function SkillsPage() {
  return (
    <main>
      <h1>Skills</h1>

      {skills.length > 0 ? (
        <ul>
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      ) : (
        <p>No skills available</p>
      )}
    </main>
  )
}

export default SkillsPage