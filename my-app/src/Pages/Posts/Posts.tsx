import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, Route } from 'react-router-dom';
import MySpinner from "../../Components/Spinner/Spinner";
import { IPost } from "../../model/post.model";
import AddPost from "./AddPost/AddPost";

const Posts = () => {
    const [posts, setPosts]= useState<Array<IPost>>([])
    const history = useHistory()

    useEffect(() => {
        // setTimeout(() => {
            axios.get("http://localhost:3001/posts")
                .then(response => {
                    setPosts(response.data)
                    console.log(response);
                })
        // }, 2000)
    }, []);

    const onMoreAction = (postId : string) => {
        history.push(`/posts/post/${postId}`)
    }

    if(posts.length === 0) return <MySpinner />

    return (
        <>
        <div className="row">
            <div className="col-3">
                <Link to="/posts/add-new">Add Post</Link>
            </div>
            <div className="col-9">
            <ul className="list-group">
                {posts.map(post =>{
                return <li className="list-group-item" key={post.id}>
                    {post.title.toUpperCase()}
                    <span className="float-right"><button onClick={ () => onMoreAction(post.id)} className="btn btn-info btn-sm">More Actions</button></span>
                    </li>
                })}
            </ul>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-6 offset-3">
                <Route path="/posts/add-new">
                    <AddPost/>
                </Route>
            </div>
        </div>
        </>
    )
}

export default Posts;