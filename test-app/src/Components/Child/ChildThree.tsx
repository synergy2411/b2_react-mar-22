import React from 'react';

const ChildThree = (props : {numbers : Array<number>} ) => {
    console.log("[ChildThree]")
    return (
        <div>
            <h5>Child Three</h5>
        </div>
    )
}

export default React.memo(ChildThree);