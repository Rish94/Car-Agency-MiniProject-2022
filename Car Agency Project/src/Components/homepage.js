import React from 'react';
import Sectionsecond from "../Components/Sectionsecond";
import Sectionfirst from "../Components/Sectionefirst";
import Footer from "../Components/footer";
import '../CSS/homepage.css';
import About from '../Components/about.js';
import slideimg1 from '../Constant/Images/slideimg1.png'
import slideimg2 from '../Constant/Images/slideimg2.png'
import slideimg3 from '../Constant/Images/slideimg3.png'
import slideimg4 from '../Constant/Images/slideimg4.png'
import slideimg5 from '../Constant/Images/slideimg5.png'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: slideimg1 },
  { url: slideimg2 },
  { url: slideimg3 },
  { url: slideimg4 },
  { url: slideimg5 },
  { url: slideimg1 },
];

export default function homepage() {
  return (

    <>
      <div class="mainfront">
          <div id="dreamleft">
            <span id="finddream">Find Your Dream Car</span>
            <br></br> <span id="thousand">We Have a more then Thousands Cars for you to choose</span>
            <div>
              <br></br>
              <br></br>
              <div id="aboutcontent">
                Quick Auto Lease is India's leading Auto Portal and receives millions of car buyers and researchers every month. Quick Auto Lease is the most preferred online shopping destination for cars in India, with a presence across all major cities and towns in the country. Quick Auto Lease is also the most preferred online shopping destination for new cars and used cars in India. Quick Auto Lease is the most preferred online shopping destination for cars in India, with a presence across all major cities and towns in the country. Quick Auto Lease is also the most preferred online shopping destination for new cars and used cars in India.
              </div>
              <br></br>
              <div id="buttondiv"><a href="/about" id="buttonread">Read More</a></div><br></br> <br></br>
              <br></br><br></br>
              <marquee id="discount" behavior="" direction="">Get 5% Discount On Pre Booking;</marquee>
            </div>
          </div>
          <div id="dreamright">
          <SimpleImageSlider
        width={800}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
          </div>
      </div>
      <br></br>
      <Sectionfirst />
      <Sectionsecond />
    </>


  );
}
