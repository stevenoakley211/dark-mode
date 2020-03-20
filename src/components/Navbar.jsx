import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode.js';
const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [value, setValue] =useState()
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const handleChange = event => {
    props.setChoosenCoin(event.target.value)
  }
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <form>
      <select onChange={handleChange}>
        {props.coinData.map(coin =>(
          <option value ={coin.id}>{coin.id}</option>
        ))}
      </select>
      </form>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
