import React from 'react';

function NavWrapper({children, onMouseLeave}){
  
    return (
      <div className="navWrapper" onMouseLeave={onMouseLeave}>
        {children}
      </div>
    );
};


export default NavWrapper;
