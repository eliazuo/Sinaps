import React from 'react';

import Form from './Form';

import sinapsLogo from './assets/Sinaps.svg';

import './App.css';


function App() {
  return (
    <div className="App">
      
      <div className="sinaps-div">
        <img src={sinapsLogo} alt="Sinaps logo" className="sinaps-logo"/>
      </div>
      
      <Form/>

    </div>
  );
}

export default App;