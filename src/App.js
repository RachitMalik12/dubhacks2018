import React, { Component } from 'react';
import {Tesseract} from "tesseract.ts";
import myImage from './assets/2.jpg';

import './App.css';

class App extends Component {

  componentDidMount() {
    Tesseract.recognize(myImage)
    .then(function(result){
        console.log(result)
    });
  }

  render() {
    return (
      <div className="App">
        hi
      </div>
    );
  }
}

export default App;
