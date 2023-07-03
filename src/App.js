
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';
import Login from './Pages/Login';
import AlreadyHaveAnAcc from './Pages/AlreadyHaveAnAcc';
import About from './Pages/About';
import Missing from './Pages/Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {


  return (
    <div className="App">
      <Header
        title="Vhickman Blog"
      />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>

          <Route exact path="/post" element={<NewPost />}>
          </Route>

          <Route exact path="/edit/:id" element={<EditPost />}>
          </Route>

          <Route path="/post/:id" element={<PostPage />}>
          </Route>
          <Route path='/signup' element={<Login />}></Route>

          <Route path='/login' element={<AlreadyHaveAnAcc />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="*" element={<Missing />}></Route>

        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
