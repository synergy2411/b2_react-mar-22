import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";

const AddPost = () => {
    const histroy = useHistory()
    const inputTitleRef = useRef<HTMLInputElement>(null)

    const onFormSubmit = () => {
        console.log(inputTitleRef.current?.value)
        axios.post("http://localhost:3001/posts", JSON.stringify({
            id : v4(),
            title : inputTitleRef.current?.value  
        }), {
            headers : {
                "Content-Type" : "application/json"
            }
        }).then(response => histroy.push("/posts"))
            .catch(console.log)

    }
    return (
        <form>
            <input type="text" ref={inputTitleRef} />
            <button onClick={onFormSubmit} type="button" className="btn btn-primary">Add Post</button>

        </form>
    )
}

export default AddPost;