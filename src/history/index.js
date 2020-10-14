import {createBrowserHistory, createMemoryHistory} from "history";
import {Urls} from "../types/urls";
import React from "react";
import {render} from "@testing-library/react";
import {Router} from "react-router-dom";
const isTest = process.env.NODE_ENV === "test";

export const history = isTest
  ? createMemoryHistory({initialEntries: ["/"]})
  : createBrowserHistory();

export const renderInRouter = (Comp: React.FC) =>
  render(
    <Router history={history}>
      <Comp />
    </Router>
  );
