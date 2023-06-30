import React from 'react'
import Feed from './Feed'
import { useContext } from 'react';
import DataContext from '../context/DataContext'


const Home = () => {
  const { searchResult, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className='Home'>
      


      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> : <p className="statusMsg">Check if your Logged in; and refresh your page.</p>)}
    </main >
  )
}

export default Home