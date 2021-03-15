import { useState, useEffect } from 'react';

const Posts = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setIsDataFetched(true);
            setError('Error posts fetching...');
        })
    }, [])

    

   

    return (
        <div>
            <h2>Posts:</h2>
            {isDataFetched
            ?
            error === ''
            ?
            <div>
                {posts.map(post =>{
                    return (
                        <p key={post.id}>Title: {post.title}</p>
                    )
                })
                }
            </div>
            
            :
            <h2>{error}</h2>
            :
            <h2>Error fetching posts...</h2>
            }
        </div>
    )
}

export default Posts;