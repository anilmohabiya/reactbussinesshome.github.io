import React from 'react';

const Services=()=>{
    return(
        <>
         <div className="head text-center mt-4 ourteam">
       <h1>Our Services </h1>
      
       </div>
      
     <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto text-center rawSetting" >
     <div className='imgsetting d-block mx-auto bg-success'><i className="fas fa-cart-plus fa-4x text-white "></i></div>
     <h2>E-Commerce</h2>
     <p>Our company provide highly efficent of E-Commerace Websites with Latest Technologies involves</p>
     </div>

     <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto text-center rawSetting" >
     <div className='imgsetting d-block mx-auto bg-danger '> <i class="fas fa-laptop-code fa-4x text-white"></i></div>
     <h2>Responsive Design</h2>
     
     <p>We use to Create highly Effective Websites which is User Friendly And easily to Understand thier Functionality</p>
     </div>
     <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block mx-auto text-center rawSetting" >
     <div className='imgsetting d-block mx-auto bg-primary'><i className="fas fa-shield-alt fa-4x text-white "></i></div>
     <h2>Web-Security</h2>
     <p>We Provide all side Security for Users. so that no One Unethically Uses the custmers Assets.And saftley Browesing the Sites.</p>
     </div>
        </>

    );
};

export default Services;