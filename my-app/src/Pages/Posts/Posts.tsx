import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../../model/post.model";
import PostItem from "./PostItem/PostItem";
import { useHistory } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts]= useState<Array<IPost>>([])
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(response => {
                setPosts(response.data)
                console.log(response);
            })
    }, []);

    const onMoreAction = (postId : string) => {
        history.push(`/posts/${postId}`)
    }
    return (
        <div>
            <ul className="list-group">
                {posts.map(post =>{
                return <li className="list-group-item" key={post.id}>
                    {post.title}
                    <button onClick={ () => onMoreAction(post.id)} className="btn btn-info btn-sm">More Actions</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Posts;