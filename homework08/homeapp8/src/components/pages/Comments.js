import { useState, useEffect } from 'react'

const Comments = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            setComments(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setError('Error fetching data');
        })
    })

    return (
        <div>
            {isDataFetched
            ?
            error === ''
            ?
            <div className='comments'>
                <>
                <h2>Comments for post 1:</h2>
                {comments.map(comment => {
                    return (
                        <div>
                        {comment.postId === 1 && <p>{comment.body}</p>}
                        </div> 
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

export default Comments;