import React, { useState } from "react";
import '../CSS/signin.css';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const LogIn=()=>{

    const navigate = useNavigate();

    const[fullName,setFullName] = useState({
        email : "",
        password : "",
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

    const onSubmits=(event)=>{
        event.preventDefault();
        if(!fullName.email || !fullName.password){
            alert("Please enter all values!")
        }
        else{
            console.log(fullName);
            signInWithEmailAndPassword(auth, fullName.email, fullName.password)
                .then(async(res)=>{
                    const user = res.user;
                    console.log(user);
                    alert("Login Successful")
                    navigate("/")
                })
                .catch((err)=> {
                    alert(err.message);
                    console.log("Err - ",err);
                });
        }
    };
    return(
        <>
        <div className="fullPage">
        <div className = "bigBox">
        <div className="headS">
            <form onSubmit={onSubmits}>
            <div className="formBox">   
            <h1 className="heading">Enter Credentials</h1>

            <input 
            type="email" 
            placeholder=" email " 
            name="email"
            onChange={inputEvent} 
            value={fullName.email} 
            className="box"/>
            <input 
            type="password" 
            placeholder=" Password " 
            name="password"
            onChange={inputEvent} 
            value={fullName.password} 
            className="box"/> 
            <div className ="submitBox">
            <button type="submit" className="submitButton">Submit</button>
            </div>
            </div>
            </form>
        </div>
        <img src = "https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=2000" className="img1" alt="image2"/>

        <p className="common-para">
              Don't have an account? <a href="/signup">Signup</a>
            </p>
       
        </div>
        </div>
        </>
    );
}

export default LogIn;