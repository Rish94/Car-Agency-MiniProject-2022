import React,{useState} from 'react'
import '../CSS/serviceform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const startNum = 1000;
var NextNum = startNum;

 const BookAppoint=()=> {
    const navigate= useNavigate();
    const[fullName,setFullName] = useState({
        username : "",
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
            username : fullName.username,
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
            data = userData.username+ NextNum + userData.service;
            alert("Your appointment is booked. Your appointment number is " + data);
            console.log(err);
        }
        );}
    };

  return (
    
    <>
    <hr></hr>
            <div class="Wr">
                            <marquee behavior="" direction=""><h2>Book Appointment for Showroom visit!!</h2></marquee>
                        </div>
            <div class="MAIN">
                <div id="form">
                    <form onSubmit={notify}>
                        <div class="form-group">
                            <label id="writetext" for="Car Model">Customer Name</label>
                            <input type="text" className="form-control" id="Car Model" placeholder="Enter Name" name='username' onChange={inputEvent} value={fullName.username}/>
                        </div>
                        <div class="form-group">
                            <label id="writetext" for="service">Car Model</label>
                            <select name="service" id="service" className="form-control" onChange={inputEvent} value={fullName.service} defaultValue={fullName.service}>
                                <option value="">Select Model</option>

                                <option value="Maruti Suzuki Alto 800">Maruti Suzuki Alto 800</option>
                                <option value="Maruti Suzuki Breeza">Maruti Suzuki Breeza</option>
                                <option value="Maruti Suzuki Swift">Maruti Suzuki Swift</option>
                                <option value="Maruti Suzuki Baleno">Maruti Suzuki Baleno</option>
                                <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
                                <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire</option>
                                <option value="Maruti Suzuki Wagon R">Maruti Suzuki Wagon R</option>
                                <option value="Maruti Suzuki Alto K10">Maruti Suzuki Alto K10</option>
                                <option value="Maruti Suzuki Celerio">Maruti Suzuki Celerio</option>
                                <option value="Maruti Suzuki XL6">Maruti Suzuki XL6</option>
                                <option value="Maruti Suzuki Ignis">Maruti Suzuki Ignis</option>
                                <option value="Maruti Suzuki Eccho">Maruti Suzuki Eccho</option>
                                <option value="Maruti Suzuki S-presso">Maruti Suzuki S-presso</option>
                                <option value="Maruti Suzuki Ciaz">Maruti Suzuki Ciaz</option>
                        



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
                            <label id="writetext" for="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" className="form-control" />
                        </div>
                        <div class="form-group-button">
                            <button type="submit" className="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>




                </div>

            </div>
            <hr></hr>
    </>
  );
}
export default BookAppoint;