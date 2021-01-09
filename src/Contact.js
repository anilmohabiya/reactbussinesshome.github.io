import React, { useState } from 'react';

const Contact =()=>{

const [data,setData]=useState({
     fullname:"",
     phone:"",
     email:"",
     msg:"",
});



const InputEvent=(event)=>{
  const {name,value}=event.target;
    
  setData((preValue)=>{
     return{
       ...preValue,
       [name]:value,
     };
  });
    
};
  const formSubmit=(e)=>{
   e.preventDefault();
   alert(
     `my name is ${data.fullname}.
     my mobile number is ${data.phone}.
     my email is ${data.email}.
     my msg is ${data.msg}`
   );
  };


    return(
        <>
     <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
     </div>   
     <div className="container contact_div">
      <div className="row">
      <div className="col-md-6 col-10 mx-auto">
  <form onSubmit={formSubmit}>
  <div class="mb-3">
  <input type="text" class="form-control" 
  id="exampleFormControlInput1" 
  placeholder=" Enter your Name" 
  name="fullname"
  autoComplete='off'
  value={data.fullname}
  onChange={InputEvent}
   />
  </div>
   
  <div class="mb-3">
  <input type="number" class="form-control" 
  id="exampleFormControlInput1" 
  placeholder=" mobile number"
  name="phone"
  autoComplete='off'
  value={data.phone}
  onChange={InputEvent}
    />
  </div>


  <div class="mb-3">
  <input type="email" class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter your Email"
  name="email"
  autoComplete='off'
  value={data.email}
  onChange={InputEvent}
    />
  </div>

   <div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" 
  placeholder="Enter your Message"
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  
   rows="3"></textarea>
   </div>
    
    <div class="col-12 my-3">
      <button class="btn btn-outline-primary" type="submit">submit form
      </button>
    </div>
         </form>
         </div>
       </div>
     </div>
          
        </>

        
    );
};
export default Contact;