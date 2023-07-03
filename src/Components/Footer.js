import React from 'react'

const Footer = () => {
  const thisYear =new Date()
  return (
    <footer className='Footer'>
      <p style={{fontStyle:'monospace'}}>  &copy; {thisYear.getFullYear()} created with 💖 by Vhickman.</p>
    </footer>
  )
}

export default Footer