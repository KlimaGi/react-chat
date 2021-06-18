import React from 'react';
import Header from './Header';
import AsideList from './AsideList';

export default class Chat extends React.Component {
state = {
  contacts: []
}

componentDidMount() {
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    //console.log(req.responseText);
    let data = JSON.parse(req.responseText);
    this.setState({contacts: data});
    console.log(typeof data[0]);
    console.log(data[0].users[0].name);
    
  }
};

req.open("GET", "https://api.jsonbin.io/b/60cc71a95ed58625fd138356", true);
req.setRequestHeader("secret-key", "$2b$10$j9/f4SpIHRRyy1IfvpRCXuLEicKJINln.mw6UzvUwXiVrZy2gy3JK");
req.send();
        
      }

  render () {
    return (
      <div>
        <Header />
        <main>
          <section>
          </section>
          
          <AsideList />
          
        </main>
      </div>
    )
  }
}