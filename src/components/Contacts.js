import React from 'react';
    
    const Contacts = ({ contacts }) => (
        <div className="main-block"> 
        {contacts[0].users[1].id}
       {
         contacts[0].users.map((user) => (
           <p>{user.name}</p>
         ))
       }
        </div>
    );

    export default Contacts;