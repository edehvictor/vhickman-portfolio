import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import DataContext from '../context/DataContext'
import { db, auth } from "../Config/Firebase";
import { deleteDoc, doc } from "firebase/firestore";

const PostPage = () => {
    const { posts, getPostData } = useContext(DataContext);
    const { id } = useParams();
    const navigate = useNavigate()
    const post = posts.find(post => (post.id).toString() === id);

    const user = auth?.currentUser?.uid

    const handleDelete = async (id) => {
        try {

            const postDoc = doc(db, "Post", id)
            if (postDoc.id === id) {
                await deleteDoc(postDoc)
            }
            getPostData()
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        {user === post.userId && <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>}
                        {user === post.userId && <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>}
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage