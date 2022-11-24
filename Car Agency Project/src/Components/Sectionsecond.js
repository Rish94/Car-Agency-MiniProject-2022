import React from 'react'
import swift from '../Constant/Images/swift.png'
import ciaz from '../Constant/Images/ciaz.png'
import vitara from '../Constant/Images/viatar.png'
import car4 from '../Constant/Images/car4.png';
import car5 from '../Constant/Images/car5.png';
import '../CSS/sectionsecond.css';
import bigline from '../Constant/Images/bigline.png';
export default function Sectionsecond() {
  return (
        <>
        <div id="section2">
          <span id="mostsearch">The Most Searched Cars</span>
          <br></br>
          <hr id="hrline" />
          <div id="carsectionssecond">
              <div id="carwithprice">
                  <a id="link"href ="/hatchback" ><img id="carimg2second" src={swift} alt="" /></a>
               
                  <a id="link" href ="/hatchback" id="knowmore">Hatch Back</a>
              </div>
              <div id="carwithprice">
                 <a  id="link" href='/sedan'> <img id="carimg2second" src={ciaz} alt="" /></a>
                  <a href='/sedan' id="knowmore">Sedan</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/suv"><img id="carimg2second" src={vitara} alt="" /></a>
                  <a href="/suv" id="knowmore">Suv</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/muv"><img id="carimg2second" src={car4} alt="" /></a>
                  <a href="/muv" id="knowmore">Muv</a>
              </div>
              <div id="carwithprice">
                  <a  id="link" href="/luxury"><img id="carimg2second" src={car5} alt="" /></a>
                  <a href="/luxury" id="knowmore">Luxury</a>
              </div>
          </div>
      </div>
      <br></br>
      <hr></hr>
      <img id="bigline" src={bigline}></img>
      <hr></hr>
      <br></br>
      </>
  );
}
