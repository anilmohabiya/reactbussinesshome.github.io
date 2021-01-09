import React from 'react';
import anil from './images/web6.jpg';
import anil2 from './images/anil7.jpg';
import anil3 from './images/web7.jpg';
const OurTeam =()=>{
    return(
        <>
           
{/*Our Team */}
    <section className="ourteam">
        <div className="container text-center ">
            <h1>Our Team </h1>
           
            <div className='row'>
            
            <p>Leads</p>
            
          
            <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto">
                <figure className="figure">
                
                <img src={anil} className="figure-img img-fluid rounded-circle" style={{width:"16rem",height:"16rem" }}
               alt={anil}/>
               <figcaption>
                   <h4>Rahul Singh</h4>
                   <p className="figure-caption">Web Design</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto">
                <figure className="figure">
                
                <img src={anil2} className="figure-img img-fluid rounded-circle" style={{width:"16rem",height:"16rem" }}
               alt={anil}/>
               <figcaption>
                   <h4>Anil Gupta</h4>
                   <p className="figure-caption">Mern Devloper</p>
               </figcaption>
                </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto">
                <figure className="figure">
                
                <img src={anil3} className="figure-img img-fluid rounded-circle" style={{width:"16rem",height:"16rem" }}
               alt={anil}/>
               <figcaption>
                   <h4>David jo</h4>
                   <p className="figure-caption">Data Analistic</p>
               </figcaption>
                </figure>
            </div>
            </div>
        </div>
    </section>

        </>
    );
};
export default OurTeam;
