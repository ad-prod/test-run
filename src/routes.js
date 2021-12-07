import React from "react";
import { Route } from "react-router";
import ApplicationLayout from "./layouts/ApplicationLayout/ApplicationLayout";
import People from "./containers/People/People";
import Films from "./containers/Films/Films";

export default (
  <Route path="/" component={ApplicationLayout}>
    <Route name="people" component={People} />
    <Route name="films" path="films" component={Films} />
  </Route>
);
