
import React,{useState,useEffect} from 'react'
import './Navbar.css' 
 function Navbaar() {
     const [show,shownav]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                shownav(true);
            }
            else shownav(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    
    return (
         <div className={`nav ${show&&"nav_dark"}`}> 
           <img
           className ="nav_logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
           />
           <img
           className ="nav_avatar"
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
           alt="Netflix Logo"
         ></img>
         </div>
     )
 }
 
 export default Navbaar
 

 