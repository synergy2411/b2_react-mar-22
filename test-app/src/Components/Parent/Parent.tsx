
import { useCallback, useMemo, useState } from "react";
import Child from "../Child/Child";
import ChildThree from "../Child/ChildThree";
import ChildTwo from "../Child/ChildTwo";

const Parent = () => {
    const [showEl, setShowEl] = useState<boolean>(false)
    const [toggle, setToggle] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    console.log("[Parent]")
    
    const titleChange = useCallback((title : string) => {
        if(toggle){
            setTitle(title);
        }
        console.log(title);
    },[toggle])

    let numbers = useMemo(()=> [2,4,2,5,3,6], [])

    return (
        <div>
            <h2>Parent Component</h2>
            <button onClick={() => setShowEl(!showEl)}>Change State</button>
            <button onClick={() => setToggle(!toggle)}>Toggle State</button>
            
            <Child showEl={showEl} />
            <hr />
            <ChildTwo titleChange={titleChange} />
            <hr />
            <ChildThree numbers={numbers}/>
        </div>
    )
}

export default Parent;