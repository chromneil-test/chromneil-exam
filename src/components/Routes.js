import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Account from '../pages/Account'
import Login from '../pages/Login'
import Blog from '../pages/Blog'


class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account' exact component={Account} />
          <Route path='/login' exact component={Login} />
          <Route path='/blog' exact component={Blog} />

        </Switch>
      );
    }
  }
  
  export default Routes;
  