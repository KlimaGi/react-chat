import React from 'react';
import Header from './Header';
//import { BrowserRouter, Route } from 'react-router-dom';
import AsideList from './AsideList';
import ChatBlock from './ChatBlock';

export default class Chat extends React.Component {
state = {
  contacts: []
}

componentDidMount() {
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    var data = JSON.parse(req.responseText);
    // console.log(this.state.contacts[0].users[1].password);
  }
  this.setState({contacts: data});
};

req.open("GET", "https://api.jsonbin.io/b/60cce7b18a4cd025b7a06b4a", true);
req.setRequestHeader("secret-key", "$2b$10$j9/f4SpIHRRyy1IfvpRCXuLEicKJINln.mw6UzvUwXiVrZy2gy3JK");
req.send();
        
      }

  render () {
    return (
      <div>
        <Header />
        <main className="m-2">
          <ChatBlock />
          <AsideList contacts={this.state.contacts}/>
        </main>
        
      </div>
    )
  }
}