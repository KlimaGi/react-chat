import React from 'react';
import Header from './Header';
import AsideList from './AsideList';
import Contacts from './Contacts';

export default class Chat extends React.Component {
state = {
  contacts: []
}

componentDidMount() {
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    //console.log(req.responseText);
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
        <main>
            <Contacts contacts={this.state.contacts}/>
          
          <AsideList />
          
        </main>
      </div>
    )
  }
}