import React from "react";
import Navbar from '../Components/navbar';
import '../CSS/home.css';
import { BrowserRouter as Router, Route,Routes ,Link , Switch}
  from "react-router-dom";
import ABOUT from '../Components/about'

import Sectionsecond from "../Components/Sectionsecond";
import Sectionfirst from "../Components/Sectionefirst";
import Footer from "../Components/footer";
import Home from "../Components/homepage";
import CONTACT from "../Components/contact";
import SERVICES from "../Components/services";

import Knowmore from "../Components/knowmore";

import Hatchback from "../Components/hatchback";
import Sedan from "../Components/sedan";
import Suv from "../Components/suv";
import Muv from "../Components/muv";
import Luxury from "../Components/luxury";
import Serviceform from "../Components/serviceform"

import Appointform from "../Components/bookappoint"

import Login from '../Components/Login'
import Signup from '../Components/signup'



export default function home() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route  path='/'element={<Home/>} />
          <Route  path='/about'element={<ABOUT/>} />
          <Route  path='/contact'element={<CONTACT />} />
          <Route  path='/services'element={<SERVICES/>} />
          <Route  path='/hatchback'element={<Hatchback/>} />
          <Route  path='/sedan'element={<Sedan />} />
          <Route  path='/suv'element={<Suv/>} />
          <Route  path='/muv'element={<Muv />} />
          <Route  path='/luxury'element={<Luxury />} />
          <Route  path='/knowmore'element={<Knowmore/>} />
          <Route  path='/serform'element={<Serviceform />} />
          <Route  path='/bookappoint'element={<Appointform />} />

          <Route  path='/login'element={<Login />} />
          <Route  path='/signup'element={<Signup/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}