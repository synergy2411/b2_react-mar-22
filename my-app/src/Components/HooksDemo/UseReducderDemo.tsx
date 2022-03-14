import { useReducer } from "react";
import styles from './UseReducerDemo.module.css';

interface CounterState {
  counter: number;
  result: Array<number>;
}

interface Actions {
  type: ActionTypes;
  payload?: number;
}

enum ActionTypes {
  INCREMENT,
  DECREMENT,
  ADD_COUNTER,
  STORE_RESULT,
  DELETE_RESULT
}

const initialState: CounterState = {
  counter: 101,
  result: [],
};

const reducerFn = (state: CounterState, action: Actions) => {
  if (action.type === ActionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === ActionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === ActionTypes.ADD_COUNTER) {
    return {
      ...state, // {counter, result}
      counter: state.counter + action.payload!,
    };
  } else if (action.type === ActionTypes.STORE_RESULT) {
    return {
      ...state,
      result: [state.counter, ...state.result],
    };
  }else if(action.type === ActionTypes.DELETE_RESULT){
      const duplicateResult = [...state.result];
      duplicateResult.splice(action.payload!, 1)
      return {
          ...state,
          result : duplicateResult
      }
  }
  return state;
};

const UseReducerDemo = () => {
  const [state, dispatchFn] = useReducer(reducerFn, initialState);
  return (
    <div className="container text-center">
      <p className="display-4">Counter : {state.counter}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatchFn({ type: ActionTypes.INCREMENT })}
      >
        Increment
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatchFn({ type: ActionTypes.DECREMENT })}
      >
        Decrement
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          dispatchFn({ type: ActionTypes.ADD_COUNTER, payload: 10 })
        }
      >
        Add (10)
      </button>
      <br />
      <div className="row">
        <div className="col-4 offset-4">
          <button
            onClick={() => dispatchFn({ type: ActionTypes.STORE_RESULT })}
            className="btn btn-block btn-warning"
          >
            {" "}
            Store Counter{" "}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-4">
          <ul className="list-group">
            {state.result.map((r, i) => (
              <li className={`list-group-item ${styles['my-list']}`} 
                onDoubleClick={() => dispatchFn({type : ActionTypes.DELETE_RESULT, payload : i})} key={i}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseReducerDemo;
