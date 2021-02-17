const Comments = (props) => {
    return (
        <div id='comments'>
            <h3> Data from the comments </h3>
            {props.comments.map((comment,id) => {
                return (
                    <div key={id}>
                    <p>Post id: {comment.postId}</p>
                    <p>Name: {comment.name}</p>
                    <p>E-mail:{comment.email}</p>
                    <p>Body: {comment.body}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Comments;