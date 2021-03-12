import { useState, useEffect } from 'react'

const Comments = () => {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(data => {
            setComments(data);
            setIsDataFetched(true);
        })
        .catch(error => {
            setIsDataFetched(true);
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
                        <p>{comment.body}</p>
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