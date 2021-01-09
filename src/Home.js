import React from 'react';
import Contact from './Contact';
import OurTeam from './OurTeam';
import anil1 from './images/web2.jpg';
import anil2 from './images/web3.jpg';
import anil3 from './images/web4.jpg';
import Services from './Services';

const Home =()=>{
    return(
        <>
      {/* main header */}
    <div class="container-fluid main_header">
      <div class="row">
       <div class="col-md-10 col-12 mx-auto">

        <div class="row">
          
         {/*right side div */} 
          <div class="col-md-6 col-12 main_header_right">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={anil1} class=" w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={anil2} class=" w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={anil3} class=" w-100" alt="..."/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
          { /*left side div*/}
          <div class="col-md-6 col-12 main_header_left mt-2 ">
         
             <h1 >About us</h1>
             
             <p>interactve Digitalmedia Pvt.Limited is set up bya a team of dedicated
              professionals with competencies in  <span class="txt_clr">IT Services, Digital Transformations and Consulting
              </span> our team has more than 12 years of
              experience in conceptualizing,designing and implementing end-to-end bussiness solutions. </p>
            
          </div>
          {/* our services*/ }
              <Services/>
     {/* OUR TEAM */}
         <OurTeam/>

    {/* contact form */}

    <section className="Contact us">
        <div className="container text-center">
           
            <div className='row'>
            <Contact/>
            </div>     
      </div>
      </section>
    
        </div>   
      </div>
    </div>
</div>



        </>
    )
}

export default Home;