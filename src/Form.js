import React from 'react'

import googleLogo from './assets/Google.svg';
import appleLogo from './assets/Apple.svg';
import facebookLogo from './assets/Facebook.svg';

import './Form.css';


const Form = () => {

  function formSubmit() {
    console.log("Form submitted");
  }

  return (
    <form onSubmit={formSubmit} className="form-container">

      <h1>CREATE ACCOUNT</h1>
      <p className="welcome">Welcome on Sinaps!</p>

      <div className="button-row">
        <button>
          <img src={googleLogo} alt="Google logo"/>
        </button>
        <button>
          <img src={appleLogo} alt="Apple logo"/>
        </button>
        <button>
          <img src={facebookLogo} alt="Facebook logo"/>
        </button>
      </div>

      <p className="or-text">Or</p>
      
      <div>
        <input type='text' placeholder="Email"/>
      </div>
      <div>
        <input type='text' placeholder="Password"/>
      </div>
      <div>
        <input type='text' placeholder="Confirm password"/>
      </div>
      
      <button id="create-button">Create</button>

      <p className="form-text">You already have an account? <a href="#">Click here</a></p>
      
    </form>

  );
};

export default Form