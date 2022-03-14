import { useReducer } from "react";


interface CounterState {
    counter : number;
}

interface Actions {
    type : ActionTypes,
    payload? : number
}

enum ActionTypes {
    INCREMENT,
    DECREMENT
}

const initialState : CounterState = {
    counter : 101
}

const reducerFn = (state : CounterState, action : Actions) => { 
    if(action.type === ActionTypes.INCREMENT){
        return {
            counter : state.counter + 1
        }
    }
    return state;
}

const UseReducerDemo = () => {
    const [state, dispatchFn] = useReducer(reducerFn, initialState);
    return (
        <div className="container text-center">
            <p className="display-4">Counter : {state.counter}</p>
            <button className="btn btn-primary" 
                onClick={() => dispatchFn({type : ActionTypes.INCREMENT})}>
                Increment
            </button>
        </div>
    )
}

export default UseReducerDemo;