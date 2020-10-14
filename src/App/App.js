import React from "react";
import Create from "../Create/Create.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Eval from "../Eval/Eval.js";
import Info from "../Info/Info.js";
import {Login} from "../Login/Login.js";
import Registration from "../Login/Registration.js";
import Reset from "../Reset/Reset.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dash" render={(props) => <Dashboard {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/register" render={(props) => <Registration {...props} />} />
          <Route path="/eval" render={(props) => <Eval {...props} />} />
          <Route path="/reset" render={(props) => <Reset {...props} />} />
          <Route path="/create" render={(props) => <Create {...props} />} />
          <Route path="/info/" render={(props) => <Info {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
