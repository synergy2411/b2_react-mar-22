import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./Components/Expenses/Expenses";
import Todos from "./Components/ClassBased/ClassBased";
import Login from "./Components/Login/Login";
import UseEffectDemo from "./Components/HooksDemo/UseEffectDemo";
import UseReducerDemo from "./Components/HooksDemo/UseReducderDemo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CharacterList from "./Components/CharacterList/CharacterList";
import Counter from "./Components/Counter/Counter";
import HoverCounter from "./Components/Counter/HoverCounter";

const apolloClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [showComp, setShowComp] = useState<boolean>(true);

  const changeState = () => setShowComp(!showComp);

  return (
    <ApolloProvider client={apolloClient}>
      <div className="container">
          <HoverCounter />
          <hr />
          <Counter />
        {/* <CharacterList /> */}
        {/* <UseReducerDemo /> */}
        {/* <UseEffectDemo /> */}
        {/* <Login /> */}
        {/* <button onClick={changeState}>Change State</button> */}
        {/* <br /> */}
        {/* <ExpenseList /> */}
        {/* <hr />
     {showComp && <Todos />}  */}
      </div>
    </ApolloProvider>
  );
}

export default App;
