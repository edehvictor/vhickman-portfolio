import React from 'react';
import Nav from './Components/Nav'
import About from './Pages/About';
import Home from './Pages/Home'
import Blogs from './Pages/Blogs';
import Contacts from './Pages/Contacts';
import Portfolio from './Pages/Portfolio';
import { DataProvider } from './context/DataContext';

function App() {


  return (
    <div className="main-content">
      <DataProvider>
        <Nav />
        <Home />
        <Portfolio />
        <Blogs />
        <About />
        <Contacts />
      </DataProvider>
    </div>
  );
}

export default App;
