import React from "react";
import './head.css';
import call from '../.././DATA/phone.svg'
import mail from '../.././DATA/envelope.svg'
import fb from '../.././DATA/facebook.svg'
import lin from '../.././DATA/linkedin.svg'
import yb from '../.././DATA/youtube.svg'
import search from '../.././DATA/magnifying.svg'
/*import front from '../.././DATA/big.jpg'*/

function Head() { 
    return(
<div className="head">
     <nav> 
        
        <div className="official">
            <div>
            <img src={mail} alt="error"  /> 
            <span>
            info@trial.gmail.com
            </span>
            
            </div>
        <div>
        <img src={call} alt="error" /> 
          <span>
          9952254654,123456789,987654321
            </span>
        </div>

        </div>

        <div className="social">
        <img src={fb} alt="error" />
        <img src={lin} alt="error" />
        <img src={yb} alt="error" />
        <img src={search} alt="error" />
        </div>
        
    
     </nav>

</div>


    )

}

export default Head;