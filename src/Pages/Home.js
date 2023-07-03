import React from 'react'
import Feed from './Feed'
import { useContext } from 'react';
import DataContext from '../context/DataContext'


const Home = () => {
  const { searchResult, Loading, fetchError} = useContext(DataContext);
  return (
    <main className='Home'>
      {Loading && !fetchError && <p className="statusMsg">Loading posts...</p>}
      {!Loading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
      {!Loading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : [])}
      {Loading && fetchError  && <p className="statusMsg">Don't fret 😞😞! Check if Logged in; and refresh your page.</p>}
    </main >
  )
}

export default Home