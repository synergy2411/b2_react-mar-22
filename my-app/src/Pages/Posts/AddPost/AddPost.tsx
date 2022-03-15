import axios from "axios";
import { useRef, useState } from "react";
import { useHistory, Prompt } from "react-router-dom";
import { v4 } from "uuid";

const AddPost = () => {
    const histroy = useHistory()
    const inputTitleRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const onFormSubmit = () => {
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
        <>
        <Prompt when= { isFocused } message={() => "Are you sure to navigate?"}></Prompt>
        <form onFocus={() => setIsFocused(true)}>
            <div className="row">
                <div className="col-7">
            <input type="text" ref={inputTitleRef} className="form-control" />
                </div>
                <div className="col-5">
            <button onClick={onFormSubmit} type="button" className="btn btn-primary">Add Post</button>

                </div>
            </div>
        </form>
        </>
    )
}

export default AddPost;