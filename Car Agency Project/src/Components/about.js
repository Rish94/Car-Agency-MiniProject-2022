import React from 'react';
import '../CSS/about.css';
import Logo from '../Constant/Images/minilogo.png';

export default function about() {
    return (
        <>
        <div id="aboutmain">
        <div id="aboutdiv2">
            <hr></hr>
            <h2 id="abouth3">ABOUT US</h2>
            <p id="aboutp">
                <br></br>
            <img  id="imgabout" src={Logo}></img>
                Quick Auto Lease is India's leading car search venture that helps users buy cars that are right for them. <br></br> Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India. <br></br> The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of vehicles.
                Quick Auto Lease has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom. <br></br> These include a Feel The Car tool that gives 360-degree interior/exterior views with sounds of the car and explanations of features with videos; search and comparison by make, model, price, features; and live offers and promotions in all cities. <br></br> The platform also has used car classifieds wherein users can upload their cars for sale, and find used cars for buying from individuals and used car dealers.
                <br></br>
                Besides the above consumer product features, CarDekho.com provides a rich array of tech-enabled tools to OE manufacturers and car dealers. <br></br> These include apps for dealer sales executives to manage leads, cloud services for tracking sales performance, call tracker solution, digital marketing support, virtual online showroom and outsourced lead management operational process for taking consumers from enquiry to sale.
                <br></br>
                Our vision is to construct a complete ecosystem for consumers and car manufacturers, dealers and related businesses such that consumers have easy and complete access to not only buying and selling cars, but also manage their entire ownership experience, be it accessories, tyres, batteries, insurance or roadside assistance.
                The company has expanded to Southeast Asia with the launch of Zigwheels.ph, Zigwheels.my and Oto.com.<br></br> It also has a presence in the UAE with Zigwheels.ae
                To diversify our product offerings we have ventured into car insurance business through InsuranceDekho.Com

            </p>
        </div>
        <br></br>
        <div id="aboutdiv2">
            <h2 id="abouth3">
                Investors and shareholders
            </h2>
            <p id="aboutp">

            Quick Auto Lease, which went live in 2008, was set up by a bunch of young, enthusiastic IIT graduates. Its investors include Google Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital, HDFC Bank, Ratan Tata and Times Internet.
            </p>
        </div>
        </div>
        <hr></hr>
        </>
    );
}
