import { useState } from 'react'

function Projects() {
  const [showDesc, setShowDesc] = useState(false)

  const projects = [
    {
      name: 'Portfolio Website',
      desc: 'Personal portfolio built with React.'
    },
    {
      name: 'Weather App',
      desc: 'Shows weather using API.'
    },
    {
      name: 'Todo App',
      desc: 'Task management application.'
    }
  ]

  return (
    <section id="projects" style={{ padding: '40px' }}>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={cardStyle}>
          <h3>{project.name}</h3>

          {showDesc && <p>{project.desc}</p>}

          <button onClick={() => setShowDesc(!showDesc)}>
            {showDesc ? 'Show Less' : 'Show More'}
          </button>
        </div>
      ))}
    </section>
  )
}

const cardStyle = {
  border: '1px solid gray',
  padding: '20px',
  margin: '15px 0',
  borderRadius: '8px'
}

export default Projects