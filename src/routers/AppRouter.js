import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Chat from '../components/Chat';
import NotFound from '../components/NotFound';
import { UserContext } from '../context/UserContext';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(userEmail) {
    console.log("dasd");
    console.log(userEmail);
    this.setState({ user: userEmail });
  }

  logout() {
    this.setState({ user: null });
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }
    return (
      <BrowserRouter>
        <UserContext.Provider value={userContextValue}>
          <Header />
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
