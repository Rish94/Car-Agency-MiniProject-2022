import React from 'react'
import XL6 from '../Constant/Images/xl6.png'
import vitara from '../Constant/Images/viatar.png'
import breeza from '../Constant/Images/breeza.png'
import ciaz from '../Constant/Images/ciaz.png'
import '../CSS/luxury.css'

export default function luxury() {
    return (
        <>
        <hr id="hrline" />
    <div id="maincarmarutiluxury">
            <div id="carsectionsmaruti">
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
                        <img id="carimg" src={XL6} alt="" />
                    </div>
                    <div>
                        <span id="carhead">Maruti Suzuki XL6</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 11.29 - 14.55 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 20.27 to 20.97 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                    </div>
                </div>
                <div id="carsecmaruti">
                    <div>
                        <img id="carimg" src={vitara} alt="" />
                    </div>
                    <div>
                        <span id="carhead">Maruti Suzuki Grand Vitara</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 10.45 - 19.65 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol , 19.38 to 27.97 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                    </div>
                </div>
                <div id="carsecmaruti">
                    <div>
                        <img id="carimg" src={breeza} alt="" />
                    </div>
                    <div>
                        <span id="carhead">Maruti Suzuki Breeza</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 7.99 - 13.96 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol , 19.8 to 20.15 kmpl , Manual/Automatic</span><br></br>
                        <br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                    </div>
                </div>
            </div>
        </div>
        <hr id="hrline" />
    
    
    </>
  );
}
