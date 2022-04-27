import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import Reports from "./Reports";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route exact path="/Reports">
        <Reports />
      </Route>
      <Route exact path="/Pages" component={() => "Pages"} />
      <Route exact path="/Charts" component={() => "Charts"} />
      <Route exact path="/contact" component={() => "Contact"} />
    </Switch>
  </Container>
);

export default Content;
