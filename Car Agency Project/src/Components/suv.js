import React from 'react'
import vitara from '../Constant/Images/viatar.png'
import breeza from '../Constant/Images/breeza.png'
import '../CSS/suv.css'

export default function suv() {
    return (
        <><hr id="hrline" />
            <div id="suvcarmaruti">
                <div id="suvsectionsmaruti">
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
