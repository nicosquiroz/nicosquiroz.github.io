import React from 'react';
import linea from './img/linea2.png'
import punto from './img/punto.png'
const Header = ({ onMusicClick, onScienceClick }) => {
  return (
    <header className="header">
      <div>
      <div>
        <img src={punto} alt="Punto" className='Punto'/>
      </div>
        <button className="buttonHeader" onClick={onMusicClick}>Music</button>
        {/* <button onCLick={onBothClick}>Both</button> */}
        <img src={linea} alt="Linea"/>
        
        <button className="buttonHeader" onClick={onScienceClick}>Science</button>
      </div>
    </header>
  );
};

export default Header;