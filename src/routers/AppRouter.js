import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Chat from '../components/Chat';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
  <div>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/profile" component={Profile} />
        <Route path="/chat" component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
