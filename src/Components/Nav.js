import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext'
import { auth } from '../Config/Firebase';
import { signOut } from 'firebase/auth'


const Nav = () => {
    const { search, setSearch } = useContext(DataContext);

    const user = auth?.currentUser

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className="Nav">

            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="post">Post</Link></li>
                <li><Link to="about">About</Link></li>
                {!user ? <li><Link to="/signup">Login</Link></li> : <li><Link onClick={logOut}>Logout</Link></li>
                }
            </ul>
        </nav>
    )
}

export default Nav