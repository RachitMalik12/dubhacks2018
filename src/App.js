import React, { Component, Fragment } from "react";
import { Tesseract } from "tesseract.ts";
import myImage from "./assets/Annotation.png";
import Landing from "./components/landing";
import "./App.css";
import axios from "axios";
import Crypto from "crypto-js"
import urijs from "uri-js";

const mainLink = "https://www.amazon.com/gp/aws/cart/add.html?";
class App extends Component {
  constructor() {
    super();
    this.state = {
      link: mainLink
    };
  }
  getASIN(item) {
    var timestmp = new Date().toISOString();
    var kDate = Crypto.HmacSHA256(timestmp, "AWS4" + 'WPf8GG0a0PnWQBORv2K0qHD8ok/tL1r6FciXPoKP');
    var kRegion = Crypto.HmacSHA256('us-east-1', kDate);
    var kService = Crypto.HmacSHA256('webservices.amazon.com'  , kRegion);
    var kSigning = Crypto.HmacSHA256("aws4_request", kService);



    axios.get('http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&Operation=ItemSearch&ResponseGroup=Small&SearchIndex=All&Keywords=milk&AWSAccessKeyId=AKIAJP2NFVTWFZYRFW7A&Timestamp='+timestmp+'&Signature='+kSigning)
      .then(res => {
         console.log(res);
      })
    return "";
  }

  apendASIM(item) {
    let tASIN = this.getASIN(item);
    let tstr = "&ASIN.1=" + tASIN + "&Quantity.1=1";
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
          <Landing />
          <p>{this.state.link}</p>
        </div>
      </Fragment>
    );
  }
}

export default App;
