import React from 'react'

import dzire from '../Constant/Images/dzire.png'

import ciaz from '../Constant/Images/ciaz.png'

import dziretour from '../Constant/Images/swifttour.png'

import '../CSS/sedan.css'

export default function sedan() {
    return (
        <>
        <hr id="hrline" />
            <div id="sedancarmaruti">
                <div id="sedansectionsmaruti">
                    <div id="carsecmaruti">
                        <div>
                            <img id="carimg" src={dzire} alt="" />
                        </div>
                        <div>
                            <span id="carhead">Maruti Suzuki Dzire</span>
                            <br></br>
                            <br></br>
                            <span id="carprize">Rs 6.24 - 9.18 Lakh (Avg Ex-Showroom price)</span><br></br>
                            <span id="spes">Petrol/CNG , 23.26 to 31.12 kmpl , Manual/Automatic</span>
                            <br></br><br></br>
                            <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>

                    <div id="carsecmaruti">
                        <div>
                            <img id="carimg" src={ciaz} alt="" />
                        </div>
                        <div>
                            <span id="carhead">Maruti Suzuki Ciaz</span>
                            <br></br>
                            <br></br>
                            <span id="carprize">Rs 8.99 - 11.98 Lakh (Avg Ex-Showroom price)</span><br></br>
                            <span id="spes">Petrol , 20.04 to 20.65 kmpl , Manual/Automatic</span>
                            <br></br><br></br>
                            <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>

                    <div id="carsecmaruti">
                        <div>
                            <img id="carimg" src={dziretour} alt="" />
                        </div>
                        <div>
                            <span id="carhead">Maruti Suzuki Dzire tour</span>
                            <br></br>
                            <br></br>
                            <span id="carprize">Rs 6.21 - 7.16 Lakh (Avg Ex-Showroom price)</span><br></br>
                            <span id="spes">Petrol/CNG , 19.56 to 26.05 kmpl , Manual/Automatic</span>
                            <br></br><br></br>
                            <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr id="hrline" />
        </>
    );
}
