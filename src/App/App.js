import React from "react";
import Create from "../Create/Create.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Eval from "../Eval/Eval.js";
import Login from "../Login/Login.js";
import Reset from "../Reset/Reset.js";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App(props) {
  console.log(props);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dash" render={(props) => <Dashboard {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/eval" render={(props) => <Eval {...props} />} />
          <Route path="/reset" render={(props) => <Reset {...props} />} />
          <Route path="/create" render={(props) => <Create {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
