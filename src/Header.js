import React from 'react';
import linea from './img/linea2.png'

const Header = ({ onMusicClick, onScienceClick }) => {
  return (
    <header>
      <div>
        <button onClick={onMusicClick}>Music</button>
        {/* <button onCLick={onBothClick}>Both</button> */}
        <img src={linea} alt="Linea"/>
        <button onClick={onScienceClick}>Science</button>
      </div>
    </header>
  );
};

export default Header;