import React from 'react'

const Footer = () => {
  const thisYear =new Date()
  return (
    <footer className='Footer'>
      <p style={{fontStyle:'cursive'}}> Copyright &copy; {thisYear.getFullYear()} VhickThor .</p>
    </footer>
  )
}

export default Footer