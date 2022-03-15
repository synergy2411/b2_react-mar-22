import React, { useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
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
import Posts from "./Pages/Posts/Posts";
import PostItem from "./Pages/Posts/PostItem/PostItem";
import Header from "./Components/Header/Header";
import MyAlertBox from "./Components/AlertBox/AlertBox";

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
        <Header />
        <br />

      <Switch>
        <Route path="/" exact>
          {/* {isAuthenciated && <Redirect to="/posts"/>} */}
        </Route>
        <Route path="/posts/alert/:postId">
          <MyAlertBox />
        </Route>
      <Route path="/posts/post/:postId">
        <PostItem/>
      </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/expenses">
        <ExpenseList />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      </Switch>
          {/* <HoverCounter />
          <hr />
          <Counter /> */}
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
