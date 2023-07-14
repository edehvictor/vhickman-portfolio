import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Blogs = () => {
  const { link }=useContext(DataContext)
    return (
        < section className={link === 'blogs' ? 'section sec4 blogs active' : 'section sec4 blogs'} id='blogs' style={{backgroundColor:'red'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vitae.
        </section>

    )
}

export default Blogs