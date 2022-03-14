import withCounter from "../Hoc/withCounter"

const HoverCounter = (props : {counter? :number, onIncrease? : () => void}) => {
    return (
        <div>
            <h3 onMouseEnter={() => props.onIncrease!()}>Counter : {props.counter}</h3>
        </div>
    )
}
export default withCounter(HoverCounter);