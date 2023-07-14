import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Nav = () => {
  // const [dataId, setDataId] = useState('home')
  const { activeLink, link } = useContext(DataContext)

  // function activeLinkFn() {
  //   activeLink(dataId)
  //   setDataId(dataId)
  // }
  return (

    <div className="controls">
      <div className={link === 'home' ? "control active-btn" : 'control'}  onClick={() => activeLink('home')}>
        <i className="fas fa-home"></i>
      </div>

      <div className={link === 'about' ? "control active-btn" : 'control'}  onClick={() => activeLink('about')}>
        <i className="fas fa-user"></i>
      </div>

      <div className={link === 'portfolio' ? "control active-btn" : 'control'}  onClick={() => activeLink('portfolio')}>
        <i className="fas fa-briefcase"></i>
      </div>

      <div className={link === 'contact' ? "control active-btn" : 'control'} onClick={() => activeLink('contact')}>
        <i className="fas fa-envelope-open"></i>
      </div>

    </div>
  )
}

export default Nav