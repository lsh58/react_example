import React from 'react';
import mainImg from '../asset/main.png';

function MainContents({page}){
  switch(page)
  {
    case 'main' :
    return (
      <div className="MainContents">
        <img className="mainImg" src={mainImg} alt="mainImg"></img>
      </div>
    );
    case 'NEW RELEASES':
      return (
        <div className="MainContents">
          <h2>New Releases</h2>
        </div>
      );
    case 'MEN':
      return (
        <div className="MainContents">
          <h2>Men</h2>
        </div>
      );
    case 'WOMAN':
      return (
        <div className="MainContents">
          <h2>Woman</h2>
        </div>
      );
    case 'KIDS':
      return (
        <div className="MainContents">
          <h2>Kids</h2>
        </div>
      );  
    default :
      return (
        <div className="MainContents">
        </div>
      );
  }
};


export default MainContents;
