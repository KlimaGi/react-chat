import React from 'react';
import ReactDOM from 'react-dom';
//import Chat from './components/Chat';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
//ReactDOM.render(<Chat />, document.getElementById('app'));
