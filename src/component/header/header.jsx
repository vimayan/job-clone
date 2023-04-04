import React from "react";
import './header.css';
import img1 from '../.././DATA/zenith-log2.jpg';

function Header() { 
    return(
<div className="Header">
        <img src={img1} alt="error" />
        <input type="checkbox" name="" id="" />
        
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
      
        <div class="hamburger">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
    
    
    
    </div>


    )

}

export default Header;