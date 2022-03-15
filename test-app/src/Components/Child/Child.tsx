import React from 'react';

const Child = (props : {showEl : boolean}) => {
    console.log("[Child]")
    return (
        <div>
            <h4>Child Component</h4>
            {props.showEl && <p>This will conditionally display</p>}
        </div>
    )
}

export default React.memo(Child);