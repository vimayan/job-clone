import React from "react";
import './header.css';
import img1 from '../.././DATA/zenith-log2.jpg';

function Header() { 
    return(
<div className="Header">
        <img src={img1} alt="error" />
        <div className="menu">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>HOME INTERIORS</li>
                <li>HOME RENOVATION</li>
                <li>OFFICE  INTERIOR</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>FAQ</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    
    
    
    </div>


    )

}

export default Header;