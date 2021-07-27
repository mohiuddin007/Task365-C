import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Task from "./Pages/Task";

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
          <Route path="/">
            <Task />
          </Route>
        </Switch>
      </Router>
    </AllContextData.Provider>
  );
}

export default App;
