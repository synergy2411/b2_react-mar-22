import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from './Components/Expenses/Expenses';
import Todos from './Components/ClassBased/ClassBased';

function App() {
  const [showComp, setShowComp] = useState<boolean>(true)

  const changeState = () => setShowComp(!showComp)

  return (
    <div className="container">
     <p>Hello React!!</p>
     {/* <button onClick={changeState}>Change State</button> */}
     <br />
     <ExpenseList />
     {/* <hr />
     {showComp && <Todos />}  */}
    </div>
  );
}

export default App;
