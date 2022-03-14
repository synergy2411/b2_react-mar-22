import withCounter from "../Hoc/withCounter"

const Counter = (props : {counter? :number, onIncrease? : () => void}) => {
    return (
        <div>
            Counter : {props.counter}
            <br />
            <button onClick={() => props.onIncrease!()}>Increase</button>
        </div>
    )
}
export default withCounter(Counter);