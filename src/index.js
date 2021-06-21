import React from 'react';
import ReactDOM from 'react-dom';
//import Chat from './components/Chat';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

const Login = () => (
  <div>
   This is from login page.
   <Link to="chat">Chat</Link>
  </div>
);

const Acount = () => (
  <div>
  This is from Acount page
    <p>
      <Link to="chat">Chat</Link>
    </p>
  </div>
);

const Chat = () => (
  <div>
    <p>
        <NavLink to="/" activeClassName="is-active">Sign out</NavLink>
        <NavLink to="/acount" activeClassName="is-active">Acount</NavLink>
    </p>
  
      This is chat page.
  </div>
);

const NotFound = () => (
  <div>
      404! - <Link to="/">Go home</Link>
  </div>
);

const Headertop = () => (
  <header>
      <h1>Header</h1>
      
      <NavLink to="/acount" activeClassName="is-active">Acount</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
  <div>
      <Headertop />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/acount" component={Acount} />
        <Route path="/chat" component={Chat} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>

)

ReactDOM.render(routes, document.getElementById('app'));
//ReactDOM.render(<Chat />, document.getElementById('app'));
