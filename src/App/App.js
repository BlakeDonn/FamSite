import React from "react";
import Login from "../Login/Login.js";
import Create from "../Create/Create.js";
import Reset from "../Reset/Reset.js";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Login />
          </Route>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/eval" render={(props) => <Login {...props} />} />
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
