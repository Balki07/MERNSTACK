import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')

  function handleClick() {
    setMessage('Thank you for contacting me!')
  }

  return (
    <section id="contact" style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Contact</h2>

      <p>Email: balaganesh@gmail.com</p>
      <p>Phone: 9876543210</p>

      <button onClick={handleClick}>
        Contact Me
      </button>

      {message && <p>{message}</p>}
    </section>
  )
}

export default Contact