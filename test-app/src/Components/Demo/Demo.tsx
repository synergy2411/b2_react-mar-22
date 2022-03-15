import { useState } from "react";

const Demo = () => {

    const [showEl, setShowEl] = useState<boolean>(false)

    return (
        <div>
            <h3 role="heading">Hello World</h3>
            {showEl && <p>Hello React</p>}
            {!showEl && <p>Goodbye</p>}
            <button onClick={() => setShowEl(true)}>Change State</button>
        </div>
    )
}

export default Demo;