import { useEffect, useState } from "react";

export function fetchPost(){
    return fetch("/api").then(response => response.json())
}

const Async = () => {

    const [posts, setPosts] = useState<Array<{id : string, title : string}>>([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
            fetchPost()
            .then(posts=> setPosts(posts))
    }, [])
    
    return (
        <div>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Async;