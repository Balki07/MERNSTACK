import styles from '../styles/About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>

      <h3>Education</h3>
      <p>B.Tech in Computer Science Engineering</p>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  )
}

export default About