import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Task from "./Pages/Task";

function App() {
  return (
       <Router>
         <Switch>
           <Route path="/">
             <Task />
           </Route>
         </Switch>
       </Router>
  );
}

export default App;
