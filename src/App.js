
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';
import Login from './Pages/Login';
import About from './Pages/About';
import Missing from './Pages/Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import api from './api/posts'
// import useWindowSize from './hooks/useWindowSize';
// import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  // const [posts, setPosts] = useState([])
  // const [search, setSearch] = useState('')
  // const [searchResult, setSearchResult] = useState([])
  // const [postTitle, setPostTitle] = useState('')
  // const [postBody, setPostBody] = useState('')
  // const [editTitle, setEditTitle] = useState('')
  // const [editBody, setEditBody] = useState('');
  // const navigate = useNavigate()
  // const { width } =useWindowSize()

  // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

  // useEffect(() =>{
  //   setPosts(data)
  // }, [data])

  // // useEffect(() => {
  // //   const fetchPosts = async () => {
  // //     try {
  // //       const response = await api.get('/posts')
  // //       setPosts(response.data);
  // //     } catch (err) {
  // //       //Not in the 200 response range
  // //       if (err.response) {
  // //         console.log(err.reponse)
  // //         console.log(err.status)
  // //         console.log(err.headers)
  // //       } else {
  // //         console.log(`Error: ${err.message}`)
  // //       }
  // //     }
  // //   }
  // //   fetchPosts()
  // // }, [])


  // useEffect(() => {
  //   const filteredResults = posts.filter(post =>
  //     ((post.body).toLowerCase()).includes(search.toLowerCase())
  //     || ((post.title).toLowerCase()).includes(search.toLowerCase()));

  //   setSearchResult(filteredResults.reverse());
  // }, [posts, search])


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const newPost = { id, title: postTitle, datetime, body: postBody }; //datetime
  //   try {
  //     const response = await api.post('/posts', newPost)
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle('');
  //     setPostBody('');
  //     navigate('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`)
  //   }
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };

  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost)
  //     setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
  //     setEditBody('')
  //     setEditTitle(' ')
  //     navigate('/')
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`)
  //   }
  // }


  // const handleDelete = async (id) => {
  //   try {
      // await api.delete(`posts/${id}`)
  //     const postList = posts.filter(post => post.id !== id)
  //     setPosts(postList)
  //     navigate('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`)
  //   }
  // }


  return (
    <div className="App">
      <Header
        title="Vhickman blog"
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
          <Route path='/login' element={<Login />}>Login</Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="*" element={<Missing />}></Route>

        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
