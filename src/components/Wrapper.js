import React from 'react';

function Wrapper({children}){
  
    return (
      <div className="mainWrapper">
        {children}
      </div>
    );
};


export default Wrapper;
