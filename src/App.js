import React, { Component, Fragment } from "react";
import { Tesseract } from "tesseract.ts";
import myImage from "./assets/Annotation.png";
import "./App.css";

const mainLink = "https://www.amazon.com/gp/aws/cart/add.html?";
class App extends Component {
  constructor() {
    super();
    this.state = {
      link: mainLink
    };
  }

  getASIN(item) {
    return "";
  }

  apendASIM(item, qty) {
    if (qty === null) qty = 1;
    let tASIN = this.getASIN(item);
    let tstr = "&ASIN.1=" + tASIN + "&Quantity.1=" + qty;
    return tstr;
  }

  componentDidMount() {
    Tesseract.recognize(myImage, {
      lang: "eng",
      tessedit_ambigs_training: 1
    })
      .then(function(result) {
        console.log(result);
      })
      .then(result => {
        for (let index = 0; index < result.lines.length; index++) {
          let bkLink = this.state.link;
          bkLink += this.apendASIM(result.lines[index].text);
          this.setState({
            lnik: bkLink
          });
        }
      });
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <p>{this.state.ocrText}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
