import React from 'react'
import alto from '../Constant/Images/alto.png'
import swift from '../Constant/Images/swift.png'
import baleno from '../Constant/Images/baleno.png'
import  wagonr from '../Constant/Images/wagonr.png'
import altok10 from '../Constant/Images/alto800.png'
import celerio from '../Constant/Images/celrio.png'
import Ignis from '../Constant/Images/ignis.png'
import spresso from '../Constant/Images/spreeso.png'

import '../CSS/hatchback.css';

export default function hatchback() {
  return (
    <>
    <hr id="hrline" />
    <div id="hatchcarmaruti">
                
                <div id="hatchsectionsmaruti">
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={swift} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Swift </span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 5.92 - 8.85 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol , 23.2 to 30.9 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={baleno} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Baleno</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 6.49 - 9.71 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol , 22.35 to 30.61 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={wagonr} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Wagon R</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 5.47 - 7.20 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 23.56 to 34.05 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={altok10} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Alto K10</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 3.99 - 5.95 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 24.39 to 33.85 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={alto} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Alto 800</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 3.37 - 5.03 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 22.05 to 31.59 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={celerio} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Celerio</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 5.25 - 7.00 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 24.96 to 35.6 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={Ignis} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Ignis</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 5.35 - 7.72 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 20.89 kmpl , Manual/Automatic</span>
                        <br></br><br></br>
                        <a href="/bookappoint" id="goforbooking">Go For Booking</a>
                        </div>
                    </div>
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={spresso} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki S-Presso</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 4.25 - 6.10 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 21.4 to 32.73 kmpl , Manual/Automatic</span>
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
