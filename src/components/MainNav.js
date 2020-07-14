import React from 'react';

const MainNav = ({ mainEl, onMouseEnter, onClick}) => {
  
    return (
      <>
      <ul className="mainNav" ref={mainEl}>
        <li id="mainNav01" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>NEW RELEASES</li>
        <li id="mainNav02" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>MEN</li>
        <li id="mainNav03" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>WOMAN</li>
        <li id="mainNav04" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>KIDS</li>
      </ul>
      </>
    );
};


export default MainNav;
