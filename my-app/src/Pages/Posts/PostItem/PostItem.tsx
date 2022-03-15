import { IPost } from "../../../model/post.model";
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
const PostItem  = () => {
    const params = useParams<{postId : string}>()
    const histroy = useHistory()
    const [post, setPost] = useState<IPost|null>(null)

    useEffect(() => {
        axios.get("http://localhost:3001/posts/"+params.postId)
            .then(response => setPost(response.data))
    }, [])

    const onDeletePost=() =>{
        axios.delete("http://localhost:3001/posts/"+params.postId)
            .then(response => histroy.replace("/posts"));
    }
    return (
        <div>
            <h3>Title : {post?.title}</h3>
            <h3>Body : {post?.body}</h3>
            <button onClick={onDeletePost} className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}

export default PostItem;