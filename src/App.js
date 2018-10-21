import React, { Component, Fragment } from "react";
import { Tesseract } from "tesseract.ts";
import myImage from "./assets/Annotation.png";
import Landing from "./components/landing";
import "./App.css";
import cheerio from "cheerio";
import rp from "request-promise";
import itemsArray from "./data.js";

// import urijs from "uri-js";


var amazon = require("amazon-product-api");
var client = amazon.createClient({
  awsId: "AKIAJP2NFVTWFZYRFW7A",
  awsSecret: "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",
  awsTag: "daranguyen-20"
});

const mainLink = "https://www.amazon.com/gp/aws/cart/add.html?";
class App extends Component {
  constructor() {
    super();
    this.state = {
      link: mainLink
    };
  }

 getAsin(item) {
   // console.log(itemsArray);
   for(let i = 0; i<itemsArray.length; i++) {
     const temp = itemsArray[i].name.replace("↵↵","");
      if(temp == item)
        return itemsArray[i].ASIN;
    return "NO";
   }

 };

   apendASIM(item) {
    return "&ASIN.1=" + this.getAsin(item) + "&Quantity.1=1";
  }

  componentDidMount() {
    Tesseract.recognize(myImage, {
        lang: "eng",
        tessedit_ambigs_training: 1
     })
     .then(function(result) {
        console.log(result.lines);
     })
      .then(result => {
        let bkLink = this.state.link;
        for (let index = 0; index < result.lines.length; index++) {
          console.log(result.lines[index].text);
          bkLink += this.apendASIM(result.lines[index].text);
        }
        console.log(bkLink);
    });
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          { <Landing /> }
          <p>{this.state.link}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
