import React from 'react'
import interior from '../.././DATA/interior.jpg'
import interior1 from '../.././DATA/interior-1.jpg'
import './endpage.css'

function EndPage (){

return(
<div className='endPage' >
<div className="works"> 
            <div className="localWork">
                <img src={interior} alt="error" />
                <img src={interior1} alt="error" />
            </div>
            <div className="workDescription">
                <div>
                <h2>
                INTERIOR DECORATORS IN CHENNAI 
                </h2>
                <p>We can enhance the value of space with fashionable and 
                    beautiful things. We will help you to choose the right 
                    type, color, pattern and texture of different elements 
                    to make an immersive interior. We value your money, so 
                    we find creative but affordable ways to decorate your home. 
                    Our budget-friendly approaches and techniques made us destination 
                    for people searching for interior designers in Chennai for affordable 
                    prices.</p>
                </div>
               <div>
               <h3>We Define Your Home</h3>
                    <p>We choose the right decorative accessories and 
                        furniture to add a touch of personality to your home.
                         We use various accent lighting techniques to enhance and highlight
                          the beauty of various elements in your rooms and create a visual balance.</p>

               </div>
                    
            </div>
 </div>
 

 <div className='ad'>
<div className='adText'>
  
    <h1>
        we can Build You The Home Of Your Dream
    </h1>
   <span> you dream it ,we make it</span>
   

 
</div>
    
 
 <div className='reachUs'> <span>
 REACH US 
    </span> 
 </div>
 </div>
 
</div>


);

}

export default EndPage;