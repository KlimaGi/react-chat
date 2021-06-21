import React from 'react';
import ReactDOM from 'react-dom';
//import Chat from './components/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

const Login = () => (
  <div>
   This is from login page.
  </div>
);

const Acount = () => (
  <div>
  This is from Acount page
  </div>
);

const Chat = () => (
  <div>
  This is chat page.
  </div>
);

const NotFound = () => (
  <div>
  404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
       <Route path="/" component={Login} exact={true} />
       <Route path="/acount" component={Acount} />
       <Route path="/chat" component={Chat} />
       <Route component={NotFound} />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(routes, document.getElementById('app'));
//ReactDOM.render(<Chat />, document.getElementById('app'));
