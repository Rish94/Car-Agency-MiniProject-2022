import React from 'react'
import ertiga from '../Constant/Images/ertiga.png'
import XL6 from '../Constant/Images/xl6.png'
import Eeco from '../Constant/Images/eeco.png'
import '../CSS/muv.css'

export default function muv() {
    return (
        <>
        <hr id="hrline" />
            <div id="maincarmarutimuv">

                <div id="carsectionsmaruti">
                    <div id="carsecmaruti">
                        <div>
                        <img id="carimg" src={ertiga} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Ertiga</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 8.32 - 12.79 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 20.3 to 26.15 kmpl , Manual/Automatic</span>
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
                        <img id="carimg" src={Eeco} alt="" />
                        </div>
                        <div>
                        <span id="carhead">Maruti Suzuki Eeco</span>
                        <br></br>
                        <br></br>
                        <span id="carprize">Rs 4.63 - 5.94 Lakh (Avg Ex-Showroom price)</span><br></br>
                        <span id="spes">Petrol/CNG , 16.11 to 20.88 kmpl , Manual/Automatic</span>
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
