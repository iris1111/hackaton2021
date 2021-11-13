import React from 'react';
import logo from './files/logo.svg';
import './../style/App.css';
import Menu from './Menu';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />  
    </div>    
  );
}

export default App;
