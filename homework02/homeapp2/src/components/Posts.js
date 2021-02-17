const Posts = (props) => {
    return (
        <div>
            {props.postsList.map((post,id) => {
                return (
                    <div key={id}>
                        <p>User id :{post.userId}</p>
                        <p> title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <div key={id}>
                            {post.comments.map((comment, id) =>{
                                return (
                                    <div key={id}>
                                        <p>Comment body : {comment.body}</p>
                                        <p>Email : {comment.email}</p>
                                        <p>Comment id: {comment.id}</p>
                                        <p>Comment name: {comment.name}</p>
                                        <p>Post id: {comment.postId}</p>
                                        <p>{comment.userId}</p>
                                        <p>{comment.title}</p>
                                        
                                    </div>
                                )
                            })
                            }
                        </div>
                    
                    </div>
                   
                )
            })}
        </div>
    )
}

export default Posts;