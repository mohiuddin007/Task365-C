import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./Pages/Counter";
import Task from "./Pages/Task";
import Posts from "./Pages/Posts";

export const AllContextData = createContext();

function App() {
  const [allTask, setAllTask] = useState([]);

  return (
    <AllContextData.Provider
      value={{
        allTask,
        setAllTask,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Task />
          </Route>
          <Route path="/counter">
            <Counter/>
          </Route>
          <Route path='/posts'>
            <Posts/>
          </Route>
        </Switch>
      </Router>
    </AllContextData.Provider>
  );
}

export default App;
