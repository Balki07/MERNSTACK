import { useState } from 'react'

function Home() {
  const [showRole, setShowRole] = useState(true)

  return (
    <section
      id="home"
      style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #0f172a, #1e293b)',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 style={{ color: '#38bdf8', fontSize: '42px' }}>
        Hi, I'm Balaganesh
      </h1>

      {showRole && <h3 style={{ fontSize: '22px' }}>Frontend Developer</h3>}

      <p style={{ maxWidth: '600px', margin: '15px 0' }}>
        I am a Computer Science student passionate about web development.
      </p>

      <button
        onClick={() => setShowRole(!showRole)}
        style={{
          background: '#38bdf8',
          color: '#0f172a',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Toggle Role
      </button>
    </section>
  )
}

export default Home