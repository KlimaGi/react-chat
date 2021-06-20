import React from 'react';

const AsideList = ({ contacts }) => {
  return (
        
          <div className="aside-list p-3">
            
              <h5>{typeof contacts}</h5>
                { contacts[0].users.map((user) => (
                  <p>{user.name}</p>
                  ))}
            
          </div>
        
);
}

export default AsideList;