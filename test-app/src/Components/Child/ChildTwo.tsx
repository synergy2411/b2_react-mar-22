import React from 'react';

const ChildTwo = (props : {titleChange : (title : string) => void}) => {
    console.log("[ChildTwo]")
    const changeHandle = (e : React.ChangeEvent<HTMLInputElement>) =>{
        props.titleChange(e.target.value)
    }
    return (
        <div>
            <h4>ChildTwo Component</h4>
            <input type="text" onChange={changeHandle} />
        </div>
    )
}

export default React.memo(ChildTwo);