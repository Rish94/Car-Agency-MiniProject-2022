import React,{useState} from 'react'
import '../CSS/serviceform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const startNum = 1000;
var NextNum = startNum;


export default function Serviceform() {
    const navigate= useNavigate();
    const[fullName,setFullName] = useState({
        carmodel : "",
        service : "",
    });
    const inputEvent=(event)=>{
        const{name, value} = event.target;
        setFullName((preValue) =>{
            return{
                ...preValue,
                [name] : value,
            };
        });
        };
    const notify = (event) =>{
        event.preventDefault();
        
        const userData = {
            carmodel : fullName.carmodel,
            service : fullName.service
        };
       if(!userData.carmodel && !userData.service)
       {
         return alert("Invalid Input");
       }
       else
       { axios.post('http://localhost:5000/service',userData).then((res)=>{
            alert(res.data.message);
            navigate("/")
        }).catch((err)=>{
            var data = "";
            NextNum = NextNum + 1;
            data = userData.carmodel+ NextNum + userData.service;
            alert("Your appointment is booked. Your appointment number is " + data);
            console.log(err);
        }
        );}
    };

    return (
        <>
        <hr></hr>
            <div class="Wr">
                            <marquee behavior="" direction=""><h2>Online appointment for Car Service</h2></marquee>
                        </div>
            <div class="MAIN">
                <div id="form">
                    <form onSubmit={notify}>
                        <div class="form-group">
                            <label id="writetext" for="Car Model">Car Model</label>
                            <input type="text" className="form-control" id="Car Model"name='carmodel' placeholder="Enter Car Model" onChange={inputEvent} value={fullName.carmodel} />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="service">Service</label>
                            <select name="service" id="service" className="form-control"  onChange={inputEvent} value={fullName.service} defaultValue={fullName.service}>
                                <option value="">Select Service</option>
                                <option value="oil-change">Oil Change</option>
                                <option value="tire-replacement">Tire Replacement</option>
                                <option value="battery-replacement">Battery Replacement</option>
                                <option value="brake-repair">Brake Repair</option>
                                <option value="engine-repair">Engine Repair</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label id="writetext" for="date">Date</label>
                            <input type="date" name="date" id="date" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="time">Time</label>
                            <input type="time" name="time" id="time" className="form-control" />
                        </div>

                        <div class="form-group">
                            <label id="writetext" for="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" />
                        </div>
                        <div class="form-group-button">
                            <button type="submit"  className="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>




                </div>

            </div>
            <hr></hr>
            

        </>
    );
    
    
}


