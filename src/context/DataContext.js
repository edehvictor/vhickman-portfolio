import { createContext, useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Config/Firebase'



const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [Loading, setLoading] = useState(true)
    const [fetchError, setFetchError] = useState(false)


    const postCollectionRef = collection(db, 'Post')

    const getPostData = async () => {
        try {
            setLoading(true)
            const data = await getDocs(postCollectionRef)
            const filterData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setLoading(false)
            setFetchError(false)
            setPosts(filterData.reverse())
           
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getPostData()
    }, [])

    useEffect(() => {
        const filteredResults = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));
        setSearchResult(filteredResults.reverse());
        // console.log("done and cleared on useffect")
    }, [posts, search])




    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResult, 
            posts, setPosts, getPostData,Loading,fetchError
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext; 