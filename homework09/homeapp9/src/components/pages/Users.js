import { useState, useEffect } from 'react';

const Users = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setIsDataFetched(true)
            setError('Error fetching users')
        })
    }, [])


    useEffect(() => {
        for (let id = 1; id <=10; id++) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setIsDataFetched(true);
            setError('Error posts fetching...');
        })

        }
        
    }, [])
     

   


    return (
        <div>
            <h2>Users:</h2>
            {isDataFetched
            ?
            error === ''
            ?
            <div>
            <>
                {users.map(user => {
                    return (
                        <>
                        <p key={user.id}>Name: {user.name}</p> 
                        <p>Posts number: {posts.length}</p> 
                        </> 
                    )
                })
                }

                
                </>
            </div>
            :
            <h2>{error}</h2>
            :
            <h2>Fetching users...</h2>
            }
        </div>
    )
}

export default Users;