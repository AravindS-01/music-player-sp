import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Component/sidebar/SideBar';
import "./globalStyle.css";

function App() {
  return (
    <div className="App">
      <SideBar/> 
      <div className='main-container'></div>
    </div>
  );
}

export default App;
