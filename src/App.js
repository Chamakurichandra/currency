import React from "react";
import Login from "./component/Login";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Converter from './component/converter';
import SignUp from "./component/SignUp";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/SignUp">
            <SignUp/>
          </Route>
          <Route path="/Converter">
          <Converter/>
          </Route>
          <Route path="">
          <Login/>
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
