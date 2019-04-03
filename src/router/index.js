import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home/home'
import Profile from '../pages/profile/profile'
import { createHashHistory } from 'history';
let history = createHashHistory();
const BasicRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile/:platform/:id" component={Profile}></Route>
      <Route exact path="/profile" component={Profile}></Route>
    </Switch>
  </Router >
)

export default BasicRouter
