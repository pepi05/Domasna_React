import { useState, useEffect } from 'react'

const Bonus = () => {
    const [post, setPost] = useState([]);
    const [error, setError] = useState('');
    const [album, setAlbum] = useState([])
    const [comment, setComment] = useState([])
    
    
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ title: 'New title', body: 'Hello world asddsadas' })
    //   })
    //     .then(response => response.json())
    //     .then(data => setPost(data))
    //     .catch(error => {
    //       setError('Error fetching data')
    //     })
    // }, []);
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title: 'Hello world new title',
          body: 'bla bla blaaa'
        })
      })
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => {
        setError('error fetching data')
      })
    }, [])
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums/1', {
        method: 'DELETE'
      })
      .then(setAlbum('Successfully deleted'))
    }, [])
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments/2', {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: 'This is corrected name'
        })
      })
      .then(response => response.json())
      .then(data => {
        setComment(data)
      })
    }, [])
    
     return (
        <div className="App">
         <h3>{post.title}</h3>
         <p>{post.body}</p>
         <p>{post.id}</p>
    
         <p>{album}</p>
    
         <p>Changed comment name: {comment.name}</p>
         <p>Comment id: {comment.id}</p>
        </div>
      );
    }

export default Bonus;