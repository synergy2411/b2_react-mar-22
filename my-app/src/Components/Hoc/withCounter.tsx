import React, { useState } from "react";

interface withCounterProps {
    counter? : number;
    onIncrease? : () => void
}
const withCounter = <P extends Object>(
    Component : React.FC<P>
    ) : React.FC<P & withCounterProps> => {
        return ({...props} : withCounterProps) => {
            const [counter, setCounter] = useState<number>(0);
            const onIncrease = () => setCounter(counter + 1)
            return <Component counter={counter} onIncrease={onIncrease} {...props as P}/>
        }
    }

export default withCounter;