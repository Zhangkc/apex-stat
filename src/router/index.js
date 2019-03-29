import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/home/home'
import Profile from '../pages/profile/profile'

const BasicRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile" component={Profile}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRouter
