import React ,{useState,useEffect}from 'react'
import {FaUserAlt} from 'react-icons/fa';
import '../CSS/navbar.css';
import { currUser } from './Login';
import { signOut } from "firebase/auth";
import {auth} from '../firebase';
export default function Navbar() {
    const [user, setUser] = useState("");

    if(auth.currentUser){
        // document.getElementById("login").style.visibility = "hidden";
        document.getElementById("logout").style.visibility = "visible";
    }
    // else{
    //     document.getElementById("login").style.visibility = "visible";
    //     document.getElementById("logout").style.visibility = "hidden";
    // }

    useEffect(() =>{
        auth.onAuthStateChanged(res=>{
            if(res){
                setUser(res);
                // currUser = res.user;
                document.getElementById("login").style.visibility = "hidden";
                document.getElementById("logout").style.visibility = "visible";
            }else{
                setUser("");
            }
            console.log(res);
        })
    },[]); 

    const logout = async() =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
            document.getElementById("login").style.visibility = "visible";
            document.getElementById("logout").style.visibility = "hidden";
            setUser("");
            console.log(currUser);
            }).catch((error) => {
            // An error happened.

            console.log("An error happened."+error);
            });
    }

    return (
        <>
          
                <div class="navbar">
                    <div id="logo">
                        <span id="headingnav">MARUTI SUZUKI</span>
                    </div>
                    <div id="menu">
                        <a href="/" id="content">Home</a>
                        <a href="/about" id="content">About</a>
                        <a href="/services" id="content">Services</a>
                        <a href="/contact" id="content">Contact</a>
                        <a href="/contact" id="content">Reviews</a>
                    </div>
                    <div id="content">
                        <a href='/login' id="login"><FaUserAlt/></a>
                        <button onClick={logout} id="logout" >Logout</button>
                    </div>

                </div>

        </>
    );
}