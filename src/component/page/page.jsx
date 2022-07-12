import React from "react";
import './page.css';
import front from '../.././DATA/big.jpg'
import about from '../.././DATA/aboutus.jpg'
import whatsapp from '../.././DATA/whatsapp.svg'
import home from '../.././DATA/home.jpg'
import office from '../.././DATA/office.jpg'
import renovation  from '../.././DATA/renovation.jpg'
import trophy  from '../.././DATA/trophy.svg'
import search  from '../.././DATA/magnifying.svg'
import money  from '../.././DATA/money.svg'
import users  from '../.././DATA/users.svg'
import briefcase  from '../.././DATA/briefcase.svg'
import face  from '../.././DATA/face.svg'
import interior from '../.././DATA/interior.jpg'
import interior1 from '../.././DATA/interior-1.jpg'
import avatar from '../.././DATA/avatar.png'





function Page() { 
    return(
<div className="page">
<img src={whatsapp} alt="error" className="whatsapp" />
     <img src={front} alt="error" style={{maxWidth:'1500px',}} />
     <div className="about">
        <img src={about} alt="error" />
        <div>
            <h3>
                ZENITH INTERIOR
            </h3>
            <p>
            
            Zenith Interiors, we choose your homes with fabulous 
            way to improve personality and play with trends and 
            keep our interiors decorators with fresh and inspiring.
             Here at zenith interiors decorators in Chennai,
             we will provide the best decor items that are as 
             individual as our consumers and just perfect for 
             adding in those finishing touches that make all
              the difference.</p>

              <p>We are one of the Best Interior Designers and 
                Interior Decorators in Chennai,is a pioneer in 
                rendering Total Interior Solutions for all of your 
                Interior needs. We specialise in Home Interiors, 
                Home Renovation and Office Interiors.</p>


                <p>
                With an experience of 25 years in the field of 
                Interior Designing, we have earned invaluable 
                reputation and have grown into one of the Best
                 Interior Designers by creating elegant and 
                 functional signature Interior spaces. 
                 We offer our services in Chennai in particular 
                 &amp; in many of the major cities and towns in
                  Tamilnadu and other South Indian states. 
                  Our ever growing clientele stands testimony to
                   the high quality standards adopted by us starting
                    right from the designing stage and goes on into 
                    the execution stage and handing over.
                </p>
        </div>

        
     </div>
     <div className="weDo">
     <div>
              <h5>WHAT WE DO</h5>
            <h3>
                WE MAKE YOUR DREAMS COME TRUE
            </h3>
                <p>
                We help in transforming the look and feel of
                 your Home and Office by enhancing the value of 
                 each space based on latest trends. We design 
                 interiors by considering the behavior, requirements 
                 and lifestyle of the occupants to build a functional 
                 space for our clients. Our services range from Space 
                 planning to Interior design to Interior decoration.
                </p>
     </div>
     <div className="wedoList">
        
        <div><div className="hower"><span>We at Zenith Interior, 
            understand that each space of your home needs 
            to be tailor made based on your wants and needs.
             We undertake to provide Home Interiors that include
              Wardrobes, Modular Kitchen, False ceiling, Lighting,
               Entertainment centre, Puja and crockery units Read More</span><img src={home} alt="error" /></div>
        <span>
        Home interiors
        </span>
        </div>
        <div> <div className="hower"><span>We at Zenith Interior, 
            understand that each space of your home needs 
            to be tailor made based on your wants and needs.
             We undertake to provide Home Interiors that include
              Wardrobes, Modular Kitchen, False ceiling, Lighting,
               Entertainment centre, Puja and crockery units Read More</span><img src={office} alt="error" /></div>
        <span>
        Office interiors
        </span>
        </div>
        <div>
        <div className="hower"><span>We at Zenith Interior, 
            understand that each space of your home needs 
            to be tailor made based on your wants and needs.
             We undertake to provide Home Interiors that include
              Wardrobes, Modular Kitchen, False ceiling, Lighting,
               Entertainment centre, Puja and crockery units Read More</span><img src={renovation} alt="error" /></div>
        <span>
        Home renovation
        </span>
        </div>

     </div>
            
        </div>
       <div className="whyz">
                    <h4 className="whyHead">
                      <span> WHY ZENITH?</span>  
                    </h4>
<div className="whyClass">
            <div className="whyPart">
                    <img src={trophy} alt="error" />
                    <h4>USER EXPERIENCE</h4>
                    <p>With mature methodologies,
                         cutting-edge technologies 
                         and unbeatable domain expertise, 
                         Zenith Interior rules interior design
                          industry in Chennai for 20+ years.</p>

            </div>
                     

            <div>
                <img src={ search} alt="error" />
                <h4>TRANSPARENCY</h4>
                    <p>Commitment to our
                         commitments and transparent 
                         in our dealings.</p>
             </div>

            <div>
                    <img src={money} alt="error" />
                    <h4>UNDER BUDGET</h4>
                    <p>Premium quality with flexible cost options 
                        tailored to the budget of clients. We create 
                        plans that perfectly blends with our clients’ 
                        needs, budget and quality.</p>
            </div>
              
            <div>
                <img src={users} alt="error" />
                <h4>USER EXPERIENCE</h4>
                    <p>With mature methodologies, cutting-edge 
                        technologies and unbeatable domain expertise, 
                        Zenith Interior rules interior design industry in 
                        Chennai for 20+ years.</p>
            </div>

            <div>
                <img src={briefcase} alt="error" />
                <h4>TRANSPARENCY</h4>
                    <p>Commitment to our commitments and 
                        transparent in our dealings.</p>
            </div>
                

            <div>
                <img src={face} alt="error" />
                <h4>BRANDED MATERIALS </h4>
                    <p>Premium quality with flexible cost 
                        options tailored to the budget of 
                        clients. We create plans that perfectly 
                        blends with our clients’ needs, budget and 
                        quality.</p>
            </div>


</div>
               
              
             

       </div>
        
        <div className="support">
        <p>Balasubramaniam & his team at Zenith Interiors
             did a great job with the refurbishment of our flat in Chennai.
              We were abroad, and did not have anyone supervising things locally,
               but the communication from Zenith’s side was prompt and timely, 
               making it easy for us to co-ordinate. It was delightful to see our
                ideas taking shape, and we are very happy with the way our home has 
                turned out. Thanks, Bala! Thanks, Zenith Interior!!</p>
        
        <div>
            <img src={avatar} alt="error" />
            <span> 
                uma saravanan</span>

        </div>
          
        </div>

       
</div>


    )

}

export default Page;