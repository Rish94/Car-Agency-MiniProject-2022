import React from 'react'
import '../CSS/services.css';

import newcar from '../Constant/Images/buynew.png';

import oldcar from '../Constant/Images/oldcar.png';

import oldser from '../Constant/Images/oldser.png';

import newser from '../Constant/Images/newser.png';
import sellold from '../Constant/Images/sellold.png';



export default function services() {
  return (
    <>
      <h2 id="servih3">Our Services</h2>
      <div id="mainservicesec">
      <div id="carsections1">
        <div id="serwith1">
          <div id="serwithsubstart">
            <img id="serimg" src={newcar} alt="" />
            <br></br>
            <a href="/knowmore" id="sermore">BUY NEW</a>
          </div>
        </div>
        <div id="serwith2">
          <div id="serwithsubend">
            <img id="serimg" src={oldcar} alt="" /><br></br>
            <a id="sermore">BUY OLD</a>
          </div>
        </div>
        <div id="serwith3">
          <div id="serwithsubstart">
            <img id="serimg" src={newser} alt="" /><br></br>
            <a href="/serform" id="sermore">NEW CAR SERVICES</a>
          </div>
        </div>
        <div id="serwith4">
          <div id="serwithsubend">
            <img id="serimg" src={oldser} alt="" /><br></br>
            <a href="/serform" id="sermore">OLD CAR SERVICES</a>
          </div>
        </div>
        <div id="serwith5">
          <div id="serwithsubstart">
            <img id="serimg" src={sellold} alt="" /><br></br>
            <a href='http://127.0.0.1:5000' id="sermore">SELL OLD</a>
          </div>
        </div>
      </div>
      </div>
      <br></br>
    </>



  );
}


