import React, { Component } from 'react';
import {Tesseract} from "tesseract.ts";
import myImage from './assets/2.jpg';

import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    ocrText: null
  };
}

  componentDidMount() {
    Tesseract.recognize(myImage)
    .then(function(result){
        console.log(result.text);
    }).then(result =>{
      this.setState({
        ocrText: result.text
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.ocrText}
      </div>
    );
  }
}

export default App;
