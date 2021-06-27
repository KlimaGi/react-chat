import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../components/Profile";
import Login from "../components/Login";
import ChatRoom from "../components/ChatRoom";
import NotFound from "../components/NotFound";
import { UserContext } from "../context/UserContext";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/styles.css";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      color: null,
      roomId: null,
      roomName: null,
      rooms: [],
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(userEmail, userColor) {
    console.log(userEmail);
    console.log(userColor);
    this.setState({ user: userEmail, color: userColor });
  }

  logout() {
    this.setState({ user: null, color: null });
  }

  render() {
    const userContextValue = {
      user: this.state.user,
      color: this.state.color,
      login: this.login,
      logout: this.logout,
    };
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <UserContext.Provider value={userContextValue}>
            <Switch>
              <Route path="/" component={Login} exact={true} />
              <Route path="/profile" component={Profile} />
              <Route path="/chatroom" component={ChatRoom} />
              <Route component={NotFound} />
            </Switch>
          </UserContext.Provider>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
