import { useState, useEffect } from 'react'


const Posts = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setIsDataFetched(true);
            setError('error fetching data')
        })
    },[])

    return (
        <div>
            {isDataFetched
            ?
            error === ''
            ?
            <div className='posts'>
                <>
                <h2>Posts from userId 1:</h2>
                {posts.map(post => {
                  return (
                     <p>{post.body}</p> 
                 )
             })}
             </>
            </div>
            :
            {error}
            :
            <p>Fetching data...</p>
            }
        </div>
    )
}

export default Posts;