import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import SkillBadge from './components/SkillBadge'
import profileImage from './assets/11.jpeg'
import '../style.css'

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

function App() {
  return (
    <>
      <Header
        title="Yerkenaz Sagynbayeva - Week2"
        subtitle="IT Management Student & Web Developer"
      />

      <main>
        <ProfileCard
          name="Yerkenaz Sagynbayeva"
          bio="I am an IT Management student at KBTU interested in technology and web development. I enjoy learning programming and creating useful digital products."
          avatarUrl={profileImage}
          email="y_sagynbayeva@kbtu.kz"
          githubUrl="https://github.com/yerkenaz19"
        />

        <section id="skills">
          <h2>My Skills</h2>

          <ul>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <SkillBadge key={skill.id} skill={skill} />
              ))
            ) : (
              <li>No skills available</li>
            )}
          </ul>
        </section>

        <section id="goals">
          <h2>My Learning Goals</h2>

          <table border={1}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Current Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>HTML</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td>Git & GitHub</td>
                <td>Basic</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>

          <p>
            Email:{' '}
            <a href="mailto:y_sagynbayeva@kbtu.kz">
              y_sagynbayeva@kbtu.kz
            </a>
          </p>

          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <br />

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <br />

            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                rows={5}
                cols={30}
              />
            </div>

            <br />

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <Footer copyright="© 2026 Yerkenaz Sagynbayeva. All rights reserved." />
    </>
  )
}

export default App